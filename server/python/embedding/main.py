import os
from google import genai
from dotenv import load_dotenv
load_dotenv()


client = genai.Client(api_key = os.getenv("Embedding_API_Key"))
async def getEmbeddings(text: str):
    embedding = client.models.embed_content(
        model='gemini-embedding-2',
        contents=text
    )
    return embedding.embeddings[0].values



