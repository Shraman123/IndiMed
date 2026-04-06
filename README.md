# 🩺 IndiMed - AI-Powered Telehealth Platform for India

IndiMed is a modern, full-stack telehealth platform explicitly designed for the Indian market. It connects patients with licensed medical practitioners using a "Smart Triage" system powered by Google Gemini AI, radically accelerating the consultation and prescription process.

## 🚀 Features

- **Personalized Healthcare Quizzes:** Dynamic multi-step dynamic forms tailored for Hair Loss, Skincare, Weight Management, and more.
- **AI Smart Triage (Gemini):** Automatically processes a patient's medical history to generate clinical summaries and suggested prescriptions for the doctor, reducing doctor review time by up to 90%.
- **Doctor Portal:** A dedicated Dashboard for practitioners to review AI-generated case summaries and approve treatment plans instantly.
- **Premium UI:** Glassmorphism, smooth animations, and tailored aesthetics built closely with Next.js 14 and pure Vanilla CSS.
- **Indian Market Ready:** Built-in compliance placeholders including Razorpay/UPI checkout flows, and mandatory legal documentation (Terms, Privacy, Refund policies).

## 🛠️ Technology Stack

- **Frontend:** Next.js 14 (App Router), React 19, Vanilla CSS
- **Backend/API:** Next.js Serverless Routes
- **Authentication & DB:** Supabase (PostgreSQL) *(Integration Ready)*
- **Artificial Intelligence:** Google Gemini Pro (`@google/genai`)
- **Payments:** Razorpay / UPI integrations *(Mocks)*

## 🚦 Getting Started

### Prerequisites

Ensure you have Node.js (v18+) and npm installed on your local machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Shraman123/IndiMed.git
   cd IndiMed
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Setup Environment Variables:
   Create a `.env.local` file in the root directory and add your API keys:
   ```env
   GEMINI_API_KEY=your_google_gemini_api_key
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Core User Journeys
- **Patient Flow:** Select Condition -> Take Quiz -> Wait for Doctor Approval -> Pay via UPI -> Receive Medication.
- **Doctor Flow:** Login to `/admin/doctor` -> View Pending Triage -> Read AI Summary -> Approve Plan.

## 📜 Legal & Compliance (India)
This repository includes baseline templates required by Indian Payment Gateways (Razorpay/Cashfree) under `/terms`, `/privacy`, and `/refund-policy`. All telemedicine features must be operated in accordance with the Telemedicine Practice Guidelines (2020) issued by the Ministry of Health and Family Welfare (MoHFW).

---

Built to revolutionize healthcare accessibility across India. 🇮🇳
