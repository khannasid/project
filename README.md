# AI Video Recommender

An AI-powered video recommendation platform built with the MERN stack + Python, designed to suggest trending short-form videos (like YouTube Shorts) based on user-defined topics. The platform will analyze and categorize videos by their style (e.g., hook strength, transitions) using computer vision and audio processing.

---

## 🚀 Current Status (Phase 1 - MVP)

✅ Next.js frontend with:
- Topic search input  
- Displaying 12 video results from YouTube API based on entered topic  
- Basic styling using Tailwind CSS & shadcn/ui  

⚙️ Backend Setup:
- Node.js/Express backend to integrate APIs (to be expanded in later phases)  

📦 Project is structured and running via `npm run dev`

---

## 🧠 Upcoming Features (Phase 2+)

- Python AI engine to:
  - Fetch trending YouTube Shorts under a category (e.g., "Gaming")
  - Extract visual & audio "hooks" (e.g., transitions, motion, sounds)
  - Store hook summaries in a database
- Frontend to query and display categorized videos with detected styles
- User personalization (Phase 3)
- Security, scaling, and production deployment work

---

## 💻 Tech Stack

- **Frontend**: Next.js, Tailwind CSS, shadcn/ui
- **Backend**: Node.js (Express), MongoDB (Planned)
- **AI/Analysis Engine**: Python (OpenCV, YouTube API, optional audio libs)
- **Deployment (later)**: Vercel (frontend), Render/Heroku for backend, Python tasks via serverless/cron

---

## 📂 Folder Structure (so far)

ai-video-recommender/ 
  ├── app/ (Next.js frontend) 
  ├── components/ (UI components) 
  ├── public/ 
  ├── styles/ 
  ├── node_modules/ 
  ├── package.json 

---

## 🛠️ Running Locally

`git clone https://github.com/yourusername/ai-video-recommender.git`
`cd ai-video-recommender`
`npm install`
`npm run dev`

Visit http://localhost:3000 to view the app.

---

## 👨‍💻 Maintained by
Siddhant Khanna

Solo Developer building this step-by-step towards production.

