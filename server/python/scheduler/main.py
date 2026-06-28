import os
import httpx
import json
import asyncio
from datetime import datetime
from contextlib import asynccontextmanager
from dotenv import load_dotenv
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from apscheduler.triggers.cron import CronTrigger
from apscheduler.triggers.date import DateTrigger


load_dotenv()
INTERNAL_API_KEY = os.getenv("INTERNAL_API_KEY")
NEST_URL = os.getenv("NEST_URL")


class Scheduler:
    def __init__(self):
        self._scheduler = AsyncIOScheduler()

    def start(self):
        self._scheduler.add_job(
                self._trigger_matching,
                CronTrigger(hour=0, minute=0),  # Run daily at midnight
                id='daily_matching_job',
                replace_existing=True
                )
        #run on startup
        self._scheduler.add_job(
            self._trigger_matching,
            DateTrigger(run_date=datetime.now()),
            id='startup_matching_job',
            replace_existing=True
        )

        self._scheduler.start()
        print("Scheduler started and job scheduled.")

    def shutdown(self):
        self._scheduler.shutdown()
        print("Scheduler shut down.")
    
    async def _trigger_matching(self):
        print(f"NEST_URL: {NEST_URL}")
        print(f"INTERNAL_API_KEY loaded: {bool(INTERNAL_API_KEY)}")  # Should be True
        print(f"Key starts with: {INTERNAL_API_KEY[:4] if INTERNAL_API_KEY else 'EMPTY'}")
        print("Triggering matching process...")
        try:
            async with httpx.AsyncClient(timeout=120) as client:
                response = await client.post(
                    f"{NEST_URL}/matching/run",
                    headers= {
                        "content-type":"application/json",
                        "x-internal-secret": INTERNAL_API_KEY,
                        },
                        )
                response.raise_for_status()
                data = response.json()
                matches = data.get("matches", [])
                print(f"Received matches: {matches}")
        except httpx.HTTPStatusError as e:
            print(f"Scheduler: HTTP error {e.response.status_code} — {e.response.text}")
        except Exception as e:
            print(f"Scheduler: failed — {e}")

