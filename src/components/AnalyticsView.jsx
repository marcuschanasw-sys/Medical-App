// src/components/AnalyticsView.jsx
import React, { useMemo } from 'react';
import { BarChart3, Target, AlertTriangle, Calendar, Award } from 'lucide-react';

export default function AnalyticsView({ history = [] }) {
  const regionStats = useMemo(() => {
    const map = {};
    history.forEach((attempt) => {
      (attempt.answers || []).forEach((ans) => {
        const reg = ans.region || 'general';
        if (!map[reg]) {
          map[reg] = { region: reg, total: 0, correct: 0, guesses: 0 };
        }
        map[reg].total += 1;
        if (ans.isCorrect) map[reg].correct += 1;
        if (ans.isCorrect && ans.confidence === 'guess') map[reg].guesses += 1;
      });
    });

    return Object.values(map)
      .map((item) => ({
        ...item,
        accuracy: Math.round((item.correct / item.total) * 100)
      }))
      .sort((a, b) => a.accuracy - b.accuracy);
  }, [history]);

  if (history.length === 0) {
    return (
      <div className="max-w-xl mx-auto p-10 bg-white rounded-2xl border border-slate-200 text-center space-y-2">
        <BarChart3 className="w-10 h-10 text-slate-400 mx-auto" />
        <h3 className="text-lg font-bold text-slate-800">No Quiz Attempts Recorded Yet</h3>
        <p className="text-xs text-slate-500">
          Complete a Diagnostic Quiz to automatically log your score progression and guessing blind-spots.
        </p>
      </div>
    );
  }

  const totalQuizzes = history.length;
  const averageScore = Math.round(
    history.reduce((acc, curr) => acc + curr.scorePercentage, 0) / totalQuizzes
  );
  const totalBlindspots = history.reduce(
    (acc, curr) => acc + (curr.guessBlindspots || 0),
    0
  );

  return (
    <div className="space-y-6">
      {/* Top KPI Summary Cards */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider">Completed Quizzes</span>
            <Award className="w-4 h-4 text-blue-600" />
          </div>
          <p className="text-3xl font-extrabold text-slate-900">{totalQuizzes}</p>
          <span className="text-xs text-slate-400">Auto-persisted in local storage</span>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider">Average Accuracy</span>
            <Target className="w-4 h-4 text-emerald-600" />
          </div>
          <p className="text-3xl font-extrabold text-emerald-700">{averageScore}%</p>
          <span className="text-xs text-slate-400">Across all logged attempts</span>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider">Guessing Blind-Spots</span>
            <AlertTriangle className="w-4 h-4 text-amber-500" />
          </div>
          <p className="text-3xl font-extrabold text-amber-600">{totalBlindspots}</p>
          <span className="text-xs text-slate-400">Correct answers marked as "Pure Guess"</span>
        </div>
      </div>

      {/* Regional Mastery & Weak-Spot Analysis */}
      {regionStats.length > 0 && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">Anatomical Region Mastery</h3>
            <p className="text-xs text-slate-500">
              Sorted from lowest accuracy to highest to highlight study priorities
            </p>
          </div>

          <div className="space-y-3">
            {regionStats.map((stat) => (
              <div key={stat.region} className="space-y-1">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="capitalize text-slate-800">
                    {stat.region} ({stat.correct}/{stat.total} correct)
                    {stat.guesses > 0 && (
                      <span className="ml-2 text-amber-600 font-medium">
                        • {stat.guesses} lucky {stat.guesses === 1 ? 'guess' : 'guesses'}
                      </span>
                    )}
                  </span>
                  <span className="text-slate-700">{stat.accuracy}%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      stat.accuracy >= 80
                        ? 'bg-emerald-500'
                        : stat.accuracy >= 60
                        ? 'bg-blue-500'
                        : 'bg-rose-500'
                    }`}
                    style={{ width: `${stat.accuracy}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Chronological Score Progression Log */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-blue-600" />
          <h3 className="text-base font-bold text-slate-900">Score Progression History</h3>
        </div>

        <div className="divide-y divide-slate-100">
          {history.map((attempt, idx) => (
            <div key={attempt.id || idx} className="py-3 flex flex-wrap items-center justify-between gap-2 text-sm">
              <div>
                <p className="font-semibold text-slate-800">
                  Attempt #{history.length - idx} — {attempt.correctCount}/{attempt.totalQuestions} Correct
                </p>
                <p className="text-xs text-slate-400">
                  {new Date(attempt.date).toLocaleString()}
                </p>
              </div>
              <div className="flex items-center gap-3">
                {attempt.guessBlindspots > 0 && (
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 font-medium">
                    {attempt.guessBlindspots} Blind-Spot{attempt.guessBlindspots > 1 ? 's' : ''}
                  </span>
                )}
                <span
                  className={`text-sm font-bold px-3 py-1 rounded-lg ${
                    attempt.scorePercentage >= 80
                      ? 'bg-emerald-50 text-emerald-700'
                      : attempt.scorePercentage >= 60
                      ? 'bg-blue-50 text-blue-700'
                      : 'bg-rose-50 text-rose-700'
                  }`}
                >
                  {attempt.scorePercentage}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}