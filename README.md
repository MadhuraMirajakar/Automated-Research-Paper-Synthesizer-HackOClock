Automated Research Paper Synthesizer
An AI-powered web application that analyzes multiple research papers and provides **summaries, comparisons, insights, and intelligent Q&A** — all in one place.

Problem Statement

Reading and comparing multiple research papers is time-consuming and complex. Extracting key insights manually requires significant effort.

 Solution

Our system allows users to upload multiple research papers (PDFs) and automatically generates:

* 📄 Concise summaries
* 📊 Smart comparisons
* 📈 Research insights
* 💬 AI-powered Q&A

 How It Works

1. 📤 Upload multiple research papers
2. ⚙️ Backend processes PDFs (text extraction)
3. 🤖 AI analyzes content
4. 📊 Results displayed in interactive UI

 Features

* ✅ Multi-PDF Upload
* ✅ Automatic Summarization
* ✅ Research Paper Comparison
* ✅ AI Chat (Ask Questions)
* ✅ Insights (Trends, Gaps, Future Scope)
* ✅ Modern UI with animations
* ✅ Graph Visualization

-Tech Stack
 Frontend
* React.js
* CSS (Glassmorphism UI, animations)

Backend
FastAPI (Python)

PDF Processing
* PyPDF2

 AI Integration
* OpenRouter API (GPT-based models)

Data Handling
* Local Storage / In-memory storage

Project Structure
project-root/
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── context/
│   │   └── App.jsx
│
├── backend/
│   ├── main.py
│   └── .env
│
└── README.md
```

 Installation & Setup
 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/Automated-Research-Paper-Synthesizer.git
cd Automated-Research-Paper-Synthesizer
```

Backend Setup

```bash
cd backend
pip install -r requirements.txt
```

Create `.env` file:

```
OPENROUTER_API_KEY=your_api_key_here
```

Run backend:

```bash
uvicorn main:app --reload
```

3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

🌐 API Endpoints
 Upload Papers

```
POST /upload
```

Chat with Papers

```
POST /chat
```

 Usage

1. Upload research papers
2. View summaries
3. Compare papers
4. Explore insights
5. Ask questions via AI chat

Future Enhancements

* Vector database integration (FAISS / Pinecone)
* Advanced semantic search
* User authentication
* Cloud storage support
* Real-time collaboration

 Hackathon Highlights

* ⏱ Saves hours of manual research
* 🤖 AI-driven automation
* 📊 Smart insights generation
* 🎨 Clean and modern UI

 Author
**Madhura Mirajakar**

Acknowledgements
* OpenRouter API
* FastAPI
* React.js
 Final Note

> This project aims to simplify research by turning complex papers into clear, actionable insights.

