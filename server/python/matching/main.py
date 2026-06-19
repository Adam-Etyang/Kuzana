import os
import httpx
import numpy as np
from scoring.main import Scoring

class Matching:
    def __init__(self):
        self.scoring = Scoring()

    async def blockingPass(self, mentee: dict, mentors: list[dict]) -> list[dict]:
        candidates = []
        for mentor in mentors:
            if not mentor['mentorProfile']['isAvailable']:
                continue
            mentorProfile = mentor['mentorProfile']
            if mentorProfile['currentMentees'] >= mentorProfile['maxMentees']:
                continue
            mentee_days = {a["dayOfWeek"] for a in mentee["availability"]}
            mentor_days = {a["dayOfWeek"] for a in mentor["availability"]}
            if not mentee_days.intersection(mentor_days):
                continue
            mentee_skills = {s["skill"]["name"] for s in mentee["skills"]}
            mentor_skills = {s["skill"]["name"] for s in mentor["skills"]}
            if not mentee_skills.intersection(mentor_skills):
                continue
            candidates.append(mentor)
        return candidates

    async def buildPreferenceList(self, mentees: list[dict], mentors: list[dict]) -> dict:
        preferences = {}
        for mentee in mentees:
            candidates = await self.blockingPass(mentee, mentors)
            scored = []
            for mentor in candidates:
                score = await self.computeScore(mentee, mentor)
                scored.append((mentor["id"], score))
            scored.sort(key=lambda x: -x[1])
            preferences[mentee["id"]] = scored
        return preferences

    async def computeScore(self, mentee: dict, mentor: dict) -> float:

        mentee_skills = [s["skill"]["name"] for s in mentee["skills"]]

        mentor_skills = [s["skill"]["name"] for s in mentor["skills"]]

        mentee_interests = [i["interest"]["name"] for i in mentee["interests"]]

        mentor_interests = [i["interest"]["name"] for i in mentor["interests"]]

        mentee_availability = [a["dayOfWeek"] for a in mentee["availability"]]

        mentor_availability = [a["dayOfWeek"] for a in mentor["availability"]]

        skill_score = await self.scoring.Jaccard(mentee_skills, mentor_skills)

        interest_score = await self.scoring.Jaccard(mentee_interests, mentor_interests)

        goal_score = await self.scoring.CosineSimilarity(mentee["goalVector"], mentor["goalVector"])

        availability_score = await self.scoring.OverlapRatio(mentee_availability, mentor_availability)

        year_gap_score = await self.scoring.NormalisedDistance(mentee["yearOfStudy"], mentor["yearOfStudy"])
        total = (
            0.25 * skill_score +
            0.20 * interest_score +
            0.25 * goal_score +
            0.15 * availability_score +
            0.15 * year_gap_score
        )
        return round(total, 4)

