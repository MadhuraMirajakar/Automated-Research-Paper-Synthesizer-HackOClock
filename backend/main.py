from fastapi import FastAPI, UploadFile, File, Body
from fastapi.middleware.cors import CORSMiddleware
import os
from PyPDF2 import PdfReader
from dotenv import load_dotenv
import requests

load_dotenv()

app = FastAPI()

# ✅ CORS (important for frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ OpenRouter config
API_KEY = os.getenv("OPENROUTER_API_KEY")
API_URL = "https://openrouter.ai/api/v1/chat/completions"

# ✅ STORE ALL PAPERS
stored_papers = []

# ==========================
# 📄 UPLOAD API
# ==========================
@app.post("/upload")
async def upload_file(files: list[UploadFile] = File(...)):
    global stored_papers
    stored_papers = []  # reset on new upload

    summaries = []

    for file in files:
        reader = PdfReader(file.file)
        text = ""

        for page in reader.pages:
            text += page.extract_text() or ""

        # store content
        stored_papers.append({
            "name": file.filename,
            "content": text[:8000]
        })

        summaries.append({
            "filename": file.filename,
            "summary": text[:500]  # short preview
        })

    return {"summaries": summaries}


# ==========================
# 💬 CHAT API
# ==========================
@app.post("/chat")
async def chat_with_papers(data: dict = Body(...)):
    question = data.get("question")

    if not stored_papers:
        return {"answer": "Please upload papers first."}

    context = "\n\n".join([
        f"{p['name']}:\n{p['content']}" for p in stored_papers
    ])

    prompt = f"""
You are an AI research assistant.

Use ONLY the research papers below to answer.

PAPERS:
{context}

QUESTION:
{question}

Give a clear, simple, and short answer.
"""

    response = requests.post(
        API_URL,
        headers={
            "Authorization": f"Bearer {API_KEY}",
            "Content-Type": "application/json",
        },
        json={
            "model": "openai/gpt-3.5-turbo",
            "messages": [
                {"role": "user", "content": prompt}
            ],
        },
    )

    result = response.json()

    return {
        "answer": result["choices"][0]["message"]["content"]
    }