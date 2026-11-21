// src/components/QuizEngine.jsx
import React, { useState, useMemo, useEffect } from 'react';
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Award,
  Target,
  BarChart3,
  BookOpen
} from 'lucide-react';
import { REGION_THEMES } from '../data/diseases.js';
import { QUIZ_QUESTIONS } from '../data/quizzes.js';

const REGION_KEYS = ['head', 'neck', 'chest', 'abdomen', 'pelvis', 'arms', 'legs'];

function shuffleArray(items) {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function QuizEngine({
  questions = QUIZ_QUESTIONS,
  initialRegion = 'all',
  onCompleteQuiz
}) {
  const [targetRegion, setTargetRegion] = useState(initialRegion || 'all');
  const [sessionSeed, setSessionSeed] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [attemptResults, setAttemptResults] = useState([]);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  // Sync if user selects a region on the Body Map and switches to Quiz tab
  useEffect(() => {
    setTargetRegion(initialRegion || 'all');
  }, [initialRegion]);

  // Reset progress whenever the target body region changes
  useEffect(() => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setAttemptResults([]);
    setIsQuizFinished(false);
    setSessionSeed((s) => s + 1);
  }, [targetRegion]);

  // Filter by selected region and randomize answer positions for each session
  const activeQuestions = useMemo(() => {
    const filtered =
      targetRegion === 'all'
        ? questions
        : questions.filter(
            (q) => q.region && q.region.toLowerCase() === targetRegion.toLowerCase()
          );

    return filtered.map((q) => ({
      ...q,
      options: shuffleArray(q.options)
    }));
  }, [questions, targetRegion, sessionSeed]);

  const currentQuestion = activeQuestions[currentIndex];
  const score = attemptResults.filter((r) => r.isCorrect).length;

  const handleSelectOption = (option) => {
    if (isSubmitted) return;
    setSelectedOption(option);
    setIsSubmitted(true);

    const isCorrect = option === currentQuestion.correctAnswer;
    setAttemptResults((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        region: currentQuestion.region,
        system: currentQuestion.system,
        question: currentQuestion.question,
        selectedOption: option,
        correctAnswer: currentQuestion.correctAnswer,
        isCorrect
      }
    ]);
  };

  const handleNext = () => {
    if (currentIndex + 1 < activeQuestions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setIsQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setAttemptResults([]);
    setIsQuizFinished(false);
    setSessionSeed((s) => s + 1);
  };

  const activeTheme = targetRegion !== 'all' ? REGION_THEMES[targetRegion] : null;

  return (
    <div className="max-w-4xl mx-auto space-y-5">
      {/* Target Body Section Selector Card */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-blue-600" />
            <h2 className="text-sm font-bold text-slate-900">Target Anatomical Region</h2>
          </div>
          <span className="text-xs font-medium text-slate-500">
            {activeQuestions.length} {activeQuestions.length === 1 ? 'Question' : 'Questions'} in Set
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setTargetRegion('all')}
            className={`text-xs px-3 py-1.5 rounded-full font-semibold border transition-colors ${
              targetRegion === 'all'
                ? 'bg-slate-900 text-white border-slate-900'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            All Regions ({questions.length})
          </button>

          {REGION_KEYS.map((regKey) => {
            const theme = REGION_THEMES[regKey];
            const count = questions.filter((q) => q.region === regKey).length;
            const isSelected = targetRegion === regKey;

            return (
              <button
                key={regKey}
                type="button"
                onClick={() => setTargetRegion(regKey)}
                className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-semibold border transition-all ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: theme.hex }}
                />
                <span>{theme.label}</span>
                <span className={`text-[10px] ${isSelected ? 'text-slate-300' : 'text-slate-400'}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Empty State Guard */}
      {activeQuestions.length === 0 ? (
        <div className="bg-white rounded-xl border border-slate-200 p-8 text-center space-y-2">
          <p className="font-semibold text-slate-800">No questions available for this region.</p>
          <button
            type="button"
            onClick={() => setTargetRegion('all')}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700"
          >
            Switch to All Regions
          </button>
        </div>
      ) : isQuizFinished ? (
        /* Completion Summary Card */
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 text-center space-y-5">
          <div
            className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center"
            style={{
              backgroundColor: activeTheme ? `${activeTheme.hex}18` : '#eff6ff',
              color: activeTheme ? activeTheme.hex : '#2563eb'
            }}
          >
            <Award className="w-9 h-9" />
          </div>

          <div className="space-y-1">
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-0.5 rounded-full border ${
                activeTheme ? activeTheme.badge : 'bg-blue-50 text-blue-700 border-blue-200'
              }`}
            >
              {activeTheme ? activeTheme.label : 'Comprehensive Multi-System Exam'}
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 pt-1">
              Diagnostic Assessment Complete
            </h3>
            <p className="text-sm text-slate-600">
              You scored <strong className="text-slate-900">{score}</strong> out of{' '}
              <strong className="text-slate-900">{activeQuestions.length}</strong> (
              {Math.round((score / activeQuestions.length) * 100)}%)
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={handleRestart}
              className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm font-semibold hover:bg-slate-50 inline-flex items-center gap-2 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake {activeTheme ? activeTheme.label : 'Quiz'}</span>
            </button>

            {onCompleteQuiz && (
              <button
                type="button"
                onClick={() => onCompleteQuiz(attemptResults)}
                className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 inline-flex items-center gap-2 transition-colors"
              >
                <BarChart3 className="w-4 h-4" />
                <span>Save & View Score Analytics</span>
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Active Question Card */
        (() => {
          const qTheme = REGION_THEMES[currentQuestion.region] || REGION_THEMES.chest;
          const progressPercent = ((currentIndex + 1) / activeQuestions.length) * 100;

          return (
            <div
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
              style={{ borderTop: `5px solid ${qTheme.hex}` }}
            >
              {/* Progress & Region Header */}
              <div className="px-6 py-4 bg-slate-50/70 border-b border-slate-100 space-y-2.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-0.5 rounded-full border ${qTheme.badge}`}
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: qTheme.hex }}
                      />
                      <span>{qTheme.label}</span>
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white text-slate-600 border border-slate-200">
                      {currentQuestion.system}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-slate-600">
                    Question <span className="text-slate-900">{currentIndex + 1}</span> of{' '}
                    <span className="text-slate-900">{activeQuestions.length}</span> • Score:{' '}
                    <span className="text-emerald-700">{score}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full transition-all duration-300 rounded-full"
                    style={{
                      width: `${progressPercent}%`,
                      backgroundColor: qTheme.hex
                    }}
                  />
                </div>
              </div>

              {/* Clinical Vignette / Question Prompt */}
              <div className="p-6 space-y-5">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {currentQuestion.question}
                </h3>

                {/* Randomized Differential Answer Options */}
                <div className="grid grid-cols-1 gap-2.5">
                  {currentQuestion.options.map((option, idx) => {
                    const isCorrectOption = option === currentQuestion.correctAnswer;
                    const isUserChoice = option === selectedOption;

                    let buttonStyle =
                      'border-slate-200 bg-white hover:border-slate-400 hover:bg-slate-50 text-slate-800';

                    if (isSubmitted) {
                      if (isCorrectOption) {
                        buttonStyle =
                          'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold';
                      } else if (isUserChoice) {
                        buttonStyle = 'border-rose-500 bg-rose-50 text-rose-950';
                      } else {
                        buttonStyle = 'border-slate-200 bg-slate-50/60 text-slate-400';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        type="button"
                        disabled={isSubmitted}
                        onClick={() => handleSelectOption(option)}
                        className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between gap-3 ${buttonStyle} ${
                          isSubmitted ? 'cursor-default' : 'cursor-pointer'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold flex items-center justify-center shrink-0">
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span className="text-sm">{option}</span>
                        </div>

                        {isSubmitted && isCorrectOption && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        )}
                        {isSubmitted && isUserChoice && !isCorrectOption && (
                          <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Clinical Rationale Box */}
                {isSubmitted && (
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                      <BookOpen className="w-4 h-4 text-blue-600" />
                      <span>Clinical Rationale</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {currentQuestion.explanation}
                    </p>
                  </div>
                )}

                {/* Next Question Button */}
                {isSubmitted && (
                  <div className="flex justify-end pt-1">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 inline-flex items-center gap-2 transition-colors"
                    >
                      <span>
                        {currentIndex + 1 < activeQuestions.length
                          ? 'Next Question'
                          : 'Finish Diagnostic Quiz'}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })()
      )}
    </div>
  );
}