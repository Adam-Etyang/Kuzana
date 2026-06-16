import os
from google import genai

client = genai.Client(api_key = os.getenv("Embedding_API_Key"))

async def getEmbeddings(text:str):
    embedding = client.models.embed_content(
            model='gemini-embedding-2',
            contents=text
            )
    return embedding 


