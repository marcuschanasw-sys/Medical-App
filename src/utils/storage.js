// src/utils/storage.js
const STORAGE_KEY = 'med_app_quiz_history_v1';

export function getQuizHistory() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveQuizAttempt(answers) {
  const existing = getQuizHistory();
  const totalQuestions = answers.length;
  const correctCount = answers.filter(a => a.isCorrect).length;
  const guessBlindspots = answers.filter(a => a.isCorrect && a.confidence === 'guess').length;

  const newAttempt = {
    id: Date.now(),
    date: new Date().toISOString(),
    totalQuestions,
    correctCount,
    scorePercentage: Math.round((correctCount / totalQuestions) * 100),
    guessBlindspots,
    answers
  };

  const updated = [newAttempt, ...existing];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}