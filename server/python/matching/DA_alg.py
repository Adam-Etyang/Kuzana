import os
from matching.main import Matching

class DefferedAcceptance:
    def __init__(self):
        pass

    async def GaleShapley(self, mentees:list[dict], mentors:list[dict]) -> list[tuple[str,str]]:
        matching = Matching()

        mentee_preferences = await matching.buildPreferenceList(mentees, mentors)
        mentor_preferences = await matching.buildPreferenceList(mentors, mentees)

        mentee_next_proposal = {mentee["id"]: 0 for mentee in mentees}
        
        mentor_matches = {
            mentor["id"]: {
            "mentees": [],
            "capacity": mentor.get("maxMentees") or 2
        }
            for mentor in mentors
                }

        unmatched_mentees = list(mentee['id']for mentee in mentees)

        while unmatched_mentees:
            mentee_id = unmatched_mentees.pop(0)
            prefs = mentee_preferences[mentee_id]

            # mentee has exhausted all preferences, goes to waitlist
            if mentee_next_proposal[mentee_id] >= len(prefs):
                continue

            mentor_id, _ = prefs[mentee_next_proposal[mentee_id]]
            mentee_next_proposal[mentee_id] += 1
            mentor = mentor_matches[mentor_id]

            if len(mentor["mentees"]) < mentor["capacity"]:

                # mentor has space, accept immediately
                mentor["mentees"].append(mentee_id)
            else:

                # mentor is full, check if they prefer new mentee over their worst current match
                mentor_prefs = mentor_preferences[mentor_id]

                mentor_rank = lambda mid:next((i for i, (m,_) in enumerate(mentor_prefs) if m == mid),float('inf'))

                worst_current = max(mentor["mentees"], key=mentor_rank)
                if mentor_rank(mentee_id) < mentor_rank(worst_current):

                    # mentor prefers new mentee, drop the worst
                    mentor["mentees"].remove(worst_current)
                    mentor["mentees"].append(mentee_id)
                    unmatched_mentees.append(worst_current)
                else:

                    # mentor prefers current matches, mentee tries next on their list
                    unmatched_mentees.append(mentee_id)

        return [
            (mentee_id, mentor_id)
            for mentor_id, data in mentor_matches.items()
            for mentee_id in data["mentees"]
        ]






