import os
import httpx
import numpy as np
from scoring.main import Scoring

class Matching:
    def __init_(self):
        pass

    async def blockingPass(self, mentee:dict, mentors:list[dict]) -> list[dict]:
        candidates = []

        for mentor in mentors:
            #Mentor must be available
            if not ['mentorProfile']['isAvailable']:
                continue

            #Mentor must have remaining capacity
            mentorProfile = mentor['MentorProfile']
            if mentorProfile['currentMentees'] >= mentorProfile['maxMentees']:
                continue

            #Filter based on availability
            mentee_days = {a["dayOfWeek"] for a in mentee["availability"]}
            mentor_days = {a["dayOfWeek"] for a in mentor["availability"]}

            if not mentee_days.intersection(mentor_days):
                continue

            #Filter based on skills
            mentee_skills = {s["skill"]["name"] for s in mentee["skills"]}
            mentor_skills = {s["skill"]["name"] for s in mentor["skills"]}

            if not mentee_skills.intersection(mentor_skills):
                continue
        
            candidates.append(mentor)
    
        return candidates
    
    async def buildPreferenceList(self, mentee:dict, mentors:list[dict]) -> list[dict]:
        preferences = {}
        for mentee in mentees:
            candidates = blocking_pass(mentee, mentors)
            
            scored = []
            for mentor in candidates:
                score = await compute_score(mentee, mentor)
                scored.append((mentor["id"], score))
            
            # sort descending by score
            scored.sort(key=lambda x: -x[1])
            preferences[mentee["id"]] = scored
        
        return preferences

    async def computeScore(self, mentee:dict, mentor:dict) -> float:
        mentee_skills = [s["skill"]["name"] for s in mentee["skills"]]
        mentor_skills = [s["skill"]["name"] for s in mentor["skills"]]

        mentee_interests = [i["interest"]["name"] for i in mentee["interests"]]
        mentor_interests = [i["interest"]["name"] for i in mentor["interests"]]

        mentee_availability = [a["dayOfWeek"] for a in mentee["availability"]]
        mentor_availability = [a["dayOfWeek"] for a in mentor["availability"]]

        # run scoring functions
        skill_score = await Scoring.Jaccard(mentee_skills, mentor_skills)
        interest_score = await Scoring.Jaccard(mentee_interests, mentor_interests)
        goal_score = await Scoring.CosineSimilarity(mentee["goalVector"], mentor["goalVector"])
        availability_score = await Scoring.OverlapRatio(mentee_availability, mentor_availability)
        year_gap_score = await Scoring.NormalisedDist(mentee["yearOfStudy"], mentor["yearOfStudy"])

        # weighted sum — tune these weights later
        total = (
            0.25 * skill_score +
            0.20 * interest_score +
            0.25 * goal_score +
            0.15 * availability_score +
            0.15 * year_gap_score
        )

        return round(total, 4)
