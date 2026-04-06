"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";

// Mock question banks depending on the category
const questionsDB: Record<string, any[]> = {
  "hair-loss": [
    { id: 1, text: "Which best describes your hair loss?", options: ["Receding hairline", "Thinning at crown", "Overall thinning", "Patchy spots"] },
    { id: 2, text: "How long have you been experiencing hair loss?", options: ["Less than 6 months", "1-2 years", "More than 2 years"] },
    { id: 3, text: "Are you currently pregnant or breastfeeding?", options: ["Yes", "No", "N/A"] },
  ],
  "skincare": [
    { id: 1, text: "What is your primary skin concern?", options: ["Acne & Breakouts", "Dark spots & Pigmentation", "Wrinkles & Aging", "Dullness"] },
    { id: 2, text: "How would you describe your skin type?", options: ["Oily", "Dry", "Combination", "Sensitive"] },
  ],
  "weight-loss": [
    { id: 1, text: "What is your primary weight goal?", options: ["Lose a little (1-5kg)", "Lose a fair amount (5-15kg)", "Major transformation (>15kg)"] },
    { id: 2, text: "Have you tried diets before without success?", options: ["Yes, many times", "A few times", "Never tried"] },
  ]
};

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const category = Array.isArray(params.category) ? params.category[0] : params.category;
  
  const questions = questionsDB[category as string] || [{ id: 1, text: "General Assessment", options: ["Proceed"] }];
  
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  
  const progress = ((currentStep) / questions.length) * 100;

  const handleSelect = (answer: string) => {
    setAnswers({ ...answers, [currentStep]: answer });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Finished quiz -> go to dashboard / checkout mock
      router.push("/dashboard");
    }
  };

  const currentQ = questions[currentStep];

  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.quizWrapper}>
          <div className={styles.progressBar} style={{ width: `${progress}%` }}></div>
          
          <div className={styles.header}>
            <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem", fontWeight: 600 }}>
              STEP {currentStep + 1} OF {questions.length}
            </span>
          </div>

          <h2 className={styles.question}>{currentQ.text}</h2>

          <div className={styles.optionsGrid}>
            {currentQ.options.map((opt: string) => (
              <button
                key={opt}
                className={`${styles.option} ${answers[currentStep] === opt ? styles.selected : ""}`}
                onClick={() => handleSelect(opt)}
              >
                {opt}
              </button>
            ))}
          </div>

          <div className={styles.controls}>
            <button 
              className={`${styles.btn} ${styles.btnSecondary}`}
              onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
              disabled={currentStep === 0}
            >
              Back
            </button>
            <button 
              className={`${styles.btn} ${styles.btnPrimary}`}
              onClick={handleNext}
              disabled={!answers[currentStep]}
            >
              {currentStep === questions.length - 1 ? "Submit Consultation" : "Next"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
