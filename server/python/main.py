from fastapi import FastAPI, Header, HTTPException
from dotenv import load_dotenv
load_dotenv()
import os
from scoring.main import Scoring
from matching.main import Matching
from matching.DA_alg import DefferedAcceptance


app = FastAPI()
scoring = Scoring()
matching = Matching()
da = DefferedAcceptance()

@app.post("/scoring/compatibility")
async def score_compatibility(
    payload: dict,
    x_internal_secret: str | None = Header(default=None),
):
    if x_internal_secret != os.getenv("INTERNAL_API_KEY"):
        raise HTTPException(status_code=401, detail="Unauthorized")
    
    target_user_id = payload.get("targetUserId")
    viewer_user_id = payload.get("viewerUserId")
    if not target_user_id or not viewer_user_id:
        raise HTTPException(status_code=400, detail="Missing user ids")
    
    target_profile = await scoring.getProfile(target_user_id)
    viewer_profile = await scoring.getProfile(viewer_user_id)
    return await scoring.scoreProfiles(target_profile, viewer_profile)

@app.post("/matching/run")
async def run_matching(
    payload: dict,
    x_internal_secret: str | None = Header(default=None),
):
    if x_internal_secret != os.getenv("INTERNAL_API_KEY"):
        raise HTTPException(status_code=401, detail="Unauthorized")
    
    mentees = payload.get("mentees")
    mentors = payload.get("mentors")
    if not mentees or not mentors:
        raise HTTPException(status_code=400, detail="Missing mentees or mentors")
    
    matches = await da.GaleShapley(mentees, mentors)
    return {"matches": matches}

@app.get("/")
async def root():
    return {"message": "Hello World"}
