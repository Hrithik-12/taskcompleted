

# 📋 README.md for Feedback Collector App

---

# Feedback Collector

A simple, elegant micro-application built with **React + Tailwind CSS** on the frontend, and **Supabase + Netlify Functions** on the backend.  
It collects user feedback and allows admins to view submissions in a clean, responsive interface.

---

## 📂 Project Structure

```
taskbyfallon/
├── netlify/
│   └── functions/
│       ├── getfeedback.js        // Fetch feedback from Supabase
│       ├── submitfeedback.js     // Submit feedback to Supabase
│       └── supabaseClient.js     // Shared Supabase client
├── public/                       // Static files (favicon, etc.)
├── src/
│   ├── components/
│   │   ├── FeedbackForm.jsx      // Form for user input
│   │   ├── AdminView.jsx         // Displays all feedbacks
│   │   └── ThemeToggle.jsx       // (optional) Dark/light mode
│   ├── App.jsx                   // Main app logic
│   ├── main.jsx                  // Entry point
│   └── index.css                 // Tailwind CSS styles
├── .env                           // Environment variables (not pushed to GitHub)
├── .gitignore                     // Ignore node_modules, .env, etc.
├── netlify.toml                   // Netlify configuration
├── package.json                   // Project metadata and scripts
├── vite.config.js                 // Vite configuration
└── README.md                      // Project documentation (this file)
```

---

## 🛠️ Tech Stack

| Frontend     | Backend             | Hosting/Database  |
|--------------|---------------------|-------------------|
| React + Vite | Netlify Functions    | Netlify (hosting) |
| Tailwind CSS | Supabase (PostgreSQL) | Supabase (storage) |


---

## ✨ Features

- Submit feedback (name, email, message)
- View all submitted feedback (admin view)
- Dark/Light theme toggle
- Loading and success/error notifications
- Form validation
- Fully responsive (mobile-friendly)
- Minimalistic and clean design
- Timestamp (`created_at`) for each submission
- Deployed live with Netlify

---

## 🧑‍💻 Local Development Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-public-key
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-anon-public-key
```

(First two are used by frontend, second two by Netlify functions.)

### 4. Run Locally

```bash
netlify dev
```

Access your app at `http://localhost:8888/`.

Netlify CLI will automatically:
- Run frontend (React Vite app)
- Serve backend serverless functions (`/.netlify/functions/...`)

---

## 🚀 Deployment on Netlify

1. Push your project to a GitHub repository.
2. Go to [Netlify Dashboard](https://app.netlify.com/) → New Site from Git.
3. Connect your GitHub repo.
4. Set Build Settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
   - Functions Directory: `netlify/functions`
5. Set environment variables (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `SUPABASE_URL`, `SUPABASE_KEY`) in Netlify Dashboard.
6. Click **Deploy Site**!

✅ Your app will go live with working feedback collection!

---

## 📜 Submission Details

- **Name**: Hrithik Garg
- **Project**: Feedback Collector
- **GitHub Repo**:https://github.com/Hrithik-12/taskcompleted
- **Live Deployment**: https://taskdonefallon.netlify.app/

Footer watermark added:  
> `© Hrithik Garg – 2025`

---

# 📸 Screenshots (Optional)

<img width="1470" alt="Screenshot 2025-04-26 at 11 30 07 AM" src="https://github.com/user-attachments/assets/7be2646e-0578-42ea-b4ab-d0f2bb6dd6b9" />

<img width="1470" alt="Screenshot 2025-04-26 at 11 30 32 AM" src="https://github.com/user-attachments/assets/185eb93e-d1cc-4e6f-948b-aaaff770280f" />


---

# 🧹 Final Tips

✅ Clean, atomic commits in GitHub  
✅ All errors handled gracefully  
✅ Mobile tested  
✅ Fully documented

---

