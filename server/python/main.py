from fastapi import FastAPI, Header, HTTPException
import os

from scoring.main import scoring

app = FastAPI()


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

    scorer = scoring()
    target_profile = await scorer.getProfile(target_user_id)
    viewer_profile = await scorer.getProfile(viewer_user_id)
    return await scorer.scoreProfiles(target_profile, viewer_profile)


@app.get("/")
async def root():
    return {"message": "Hello World"}
