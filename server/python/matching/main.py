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
            if not mentor.get('isAvailable'):
                continue
            if mentor.get('currentMentees', 0) >= mentor.get('maxMentees', 0):
                continue
            
            mentee_avail = mentee.get('availability', [])
            mentor_avail = mentor.get('availability', [])
            mentee_days = {a.get("dayOfWeek") for a in mentee_avail if a.get("dayOfWeek")}
            mentor_days = {a.get("dayOfWeek") for a in mentor_avail if a.get("dayOfWeek")}
            if not mentee_days or not mentor_days or not mentee_days.intersection(mentor_days):
                continue
            
            mentee_skills = {s.get("skill", {}).get("name") for s in mentee.get("skills", []) if s.get("skill")}
            mentor_skills = {s.get("skill", {}).get("name") for s in mentor.get("skills", []) if s.get("skill")}
            if not mentee_skills or not mentor_skills or not mentee_skills.intersection(mentor_skills):
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
        mentee_skills = [s.get("skill", {}).get("name") for s in mentee.get("skills", []) if s.get("skill")]
        mentor_skills = [s.get("skill", {}).get("name") for s in mentor.get("skills", []) if s.get("skill")]
        
        mentee_interests = [i.get("interest", {}).get("name") for i in mentee.get("interests", []) if i.get("interest")]
        mentor_interests = [i.get("interest", {}).get("name") for i in mentor.get("interests", []) if i.get("interest")]
        
        mentee_availability = [a.get("dayOfWeek") for a in mentee.get("availability", []) if a.get("dayOfWeek")]
        mentor_availability = [a.get("dayOfWeek") for a in mentor.get("availability", []) if a.get("dayOfWeek")]
        
        # Handle missing goalVector
        mentee_goal = mentee.get("goalVector") or []
        mentor_goal = mentor.get("goalVector") or []
        
        skill_score = await self.scoring.Jaccard(mentee_skills, mentor_skills)
        interest_score = await self.scoring.Jaccard(mentee_interests, mentor_interests)
        goal_score = await self.scoring.CosineSimilarity(mentee_goal, mentor_goal)
        availability_score = await self.scoring.OverlapRatio(mentee_availability, mentor_availability)
        
        # Handle missing yearOfStudy
        mentee_year = mentee.get("yearOfStudy") or 0
        mentor_year = mentor.get("yearOfStudy") or 0
        year_gap_score = await self.scoring.NormalisedDistance(mentee_year, mentor_year)
        
        total = (
            0.25 * skill_score +
            0.20 * interest_score +
            0.25 * goal_score +
            0.15 * availability_score +
            0.15 * year_gap_score
        )
        return round(total, 4)

