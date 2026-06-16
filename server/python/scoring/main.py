import httpx
import os
import re
from embedding.main import getEmbeddings
import numpy as np

class Scoring :
    def __init__(self):
        pass
    async def Jaccard(self, set1, set2):
        intersection = len(set(set1).intersection(set(set2)))
        union = len(set(set1).union(set(set2)))
        if union == 0:
            return 0.0
        return intersection / union


# Note that the Cosine simiarity is calculated as Inner product/(Magnitude of vec1 * Magnitude of vec2)
    async def CosineSimilarity(self, vec1, vec2):
        dot_product = np.dot(vec1, vec2)
        magnitude1 = np.linalg.norm(vec1)
        magnitude2 = np.linalg.norm(vec2)

        if magnitude1 == 0 or magnitude2 == 0:
            return 0.0

        return dot_product / (magnitude1 * magnitude2)

    async def OverlapRatio(self, set1, set2):
        intersection = len(set(set1).intersection(set(set2)))
        smaller_set_size = min(len(set(set1)), len(set(set2)))
        if smaller_set_size == 0:
            return 0.0
        return intersection / smaller_set_size

    async def NormalisedDistance(self, year1:int, year2:int):
        gap = abs(year1- year2 )
        return 1/(1+gap)

    async def getProfile(self, userId:str):
        headers = {"x-internal-secret": os.getenv("INTERNAL_API_KEY")}
        base_url = os.getenv("INTERNAL_PROFILE_URL", "http://localhost:3001/profile/internal")
        async with httpx.AsyncClient() as client:
            response = await client.get(
                    f"{base_url}/{userId}",
                    headers=headers,
                    )
            response.raise_for_status()
            return response.json()

    async def scoreProfiles(self, profile: dict, viewer_profile: dict):
        target_skills = [item["skillId"] for item in profile.get("skills", [])]
        viewer_skills = [item["skillId"] for item in viewer_profile.get("skills", [])]
        target_interests = [item["interestId"] for item in profile.get("interests", [])]
        viewer_interests = [item["interestId"] for item in viewer_profile.get("interests", [])]

        target_days = [item["dayOfWeek"] for item in profile.get("availability", [])]
        viewer_days = [item["dayOfWeek"] for item in viewer_profile.get("availability", [])]

        target_goal = profile.get("goalStatement")
        target_goal_vec = await getEmbeddings(target_goal)
        viewer_goal = viewer_profile.get("goalStatement")
        viewer_goal_vec = await getEmbeddings(viewer_goal)

        skill_score = await self.Jaccard(target_skills, viewer_skills)
        interest_score = await self.Jaccard(target_interests, viewer_interests)
        goal_score = await self.CosineSimilarity(target_goal_vec, viewer_goal_vec)

        #This would need fixing if we have more than just faculty and department in the future, but for now it should work
        field_score = 1.0 if profile.get("faculty") == viewer_profile.get("faculty") and profile.get("department") == viewer_profile.get("department") else 0.5 if profile.get("faculty") == viewer_profile.get("faculty") else 0.0

        availability_score = await self.OverlapRatio(target_days, viewer_days)
        year_score = await self.NormalisedDistance(profile.get("yearOfStudy") or 0, viewer_profile.get("yearOfStudy") or 0)

        #Fine tune the weights
        total_score = (
            (skill_score * 0.30)
            + (interest_score * 0.20)
            + (goal_score * 0.20)
            + (field_score * 0.10)
            + (availability_score * 0.10)
            + (year_score * 0.10)
        )

        return {
            "skillScore": skill_score,
            "interestScore": interest_score,
            "goalScore": goal_score,
            "fieldScore": field_score,
            "availabilityScore": availability_score,
            "yearGapScore": year_score,
            "totalScore": total_score,
        }
