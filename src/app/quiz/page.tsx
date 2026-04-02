"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { quizQuestions } from "@/data/quiz";

export default function QuizPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const question = quizQuestions[currentIndex];
  const total = quizQuestions.length;
  const isLast = currentIndex === total - 1;

  function selectAnswer(value: string) {
    const updated = { ...answers, [question.id]: value };
    setAnswers(updated);

    if (isLast) {
      // Encode answers as URL params and navigate to results
      const params = new URLSearchParams(updated);
      router.push(`/quiz/results?${params.toString()}`);
    } else {
      setCurrentIndex((i) => i + 1);
    }
  }

  function goBack() {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <header className="mb-10">
        <p className="text-sm tracking-widest uppercase text-sage mb-2">
          Body Awareness Quiz
        </p>
        <h1 className="text-2xl font-bold text-ink">
          Find the right mattress for your body
        </h1>
        <p className="text-sm text-ink-muted mt-1">
          This isn&apos;t a firmness quiz. We&apos;re asking about how you
          relate to your body &mdash; because that determines what kind of
          support actually serves you.
        </p>
      </header>

      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between text-xs text-ink-muted mb-1.5">
          <span>
            Question {currentIndex + 1} of {total}
          </span>
          <span>{Math.round(((currentIndex + 1) / total) * 100)}%</span>
        </div>
        <div className="h-1.5 bg-sand-dark rounded-full overflow-hidden">
          <div
            className="h-full bg-sage rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-ink mb-2">
          {question.question}
        </h2>
        <p className="text-sm text-ink-muted">{question.subtext}</p>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((opt) => {
          const isSelected = answers[question.id] === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => selectAnswer(opt.value)}
              className={`w-full text-left px-5 py-4 rounded-lg border transition-all ${
                isSelected
                  ? "border-sage bg-sage-light"
                  : "border-sand-dark bg-white hover:border-sage/40"
              }`}
            >
              <span className="text-ink">{opt.label}</span>
            </button>
          );
        })}
      </div>

      {/* Back button */}
      {currentIndex > 0 && (
        <button
          onClick={goBack}
          className="mt-6 text-sm text-ink-muted hover:text-sage"
        >
          &larr; Previous question
        </button>
      )}
    </div>
  );
}
