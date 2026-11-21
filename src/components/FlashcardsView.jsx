// src/components/FlashcardsView.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { RotateCw, CheckCircle, HelpCircle, Layers, RefreshCw } from 'lucide-react';

const LEITNER_STORAGE_KEY = 'med_app_leitner_boxes_v1';

export default function FlashcardsView({ diseases = [] }) {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [leitnerBoxes, setLeitnerBoxes] = useState({});

  // Load saved Leitner box progress
  useEffect(() => {
    const saved = localStorage.getItem(LEITNER_STORAGE_KEY);
    if (saved) {
      setLeitnerBoxes(JSON.parse(saved));
    }
  }, []);

  const updateLeitnerBox = (diseaseId, targetBox) => {
    const updated = { ...leitnerBoxes, [diseaseId]: targetBox };
    setLeitnerBoxes(updated);
    localStorage.setItem(LEITNER_STORAGE_KEY, JSON.stringify(updated));
  };

  // Filter cards and prioritize lower Leitner boxes (Box 1 -> Box 2 -> Box 3)
  const studyDeck = useMemo(() => {
    const filtered = diseases.filter(
      (d) => selectedRegion === 'all' || d.region.toLowerCase() === selectedRegion.toLowerCase()
    );
    return [...filtered].sort((a, b) => (leitnerBoxes[a.id] || 1) - (leitnerBoxes[b.id] || 1));
  }, [diseases, selectedRegion, leitnerBoxes]);

  const activeCard = studyDeck[currentIndex] || null;
  const currentBox = activeCard ? leitnerBoxes[activeCard.id] || 1 : 1;

  const handleRating = (knewIt) => {
    if (!activeCard) return;
    const nextBox = knewIt ? Math.min(currentBox + 1, 3) : 1;
    updateLeitnerBox(activeCard.id, nextBox);
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1 < studyDeck.length ? prev + 1 : 0));
  };

  const resetProgress = () => {
    setLeitnerBoxes({});
    localStorage.removeItem(LEITNER_STORAGE_KEY);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const boxCounts = useMemo(() => {
    const counts = { 1: 0, 2: 0, 3: 0 };
    diseases.forEach((d) => {
      const box = leitnerBoxes[d.id] || 1;
      counts[box] += 1;
    });
    return counts;
  }, [diseases, leitnerBoxes]);

  if (!activeCard) {
    return (
      <div className="p-8 text-center bg-white rounded-xl border border-slate-200">
        <p className="text-slate-600">No flashcards available for this region.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Leitner Box Status Bar */}
      <div className="grid grid-cols-3 gap-3">
        <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-center">
          <span className="text-xs font-bold text-rose-700 uppercase">Box 1: Needs Review</span>
          <p className="text-xl font-extrabold text-rose-900">{boxCounts[1]}</p>
        </div>
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-center">
          <span className="text-xs font-bold text-amber-700 uppercase">Box 2: Familiar</span>
          <p className="text-xl font-extrabold text-amber-900">{boxCounts[2]}</p>
        </div>
        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
          <span className="text-xs font-bold text-emerald-700 uppercase">Box 3: Mastered</span>
          <p className="text-xl font-extrabold text-emerald-900">{boxCounts[3]}</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-xl border border-slate-200">
        <div className="flex items-center gap-2 text-xs">
          <Layers className="w-4 h-4 text-blue-600" />
          <span className="font-semibold text-slate-700">Region Filter:</span>
          <select
            value={selectedRegion}
            onChange={(e) => {
              setSelectedRegion(e.target.value);
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className="border border-slate-200 rounded px-2 py-1 bg-slate-50 font-medium capitalize"
          >
            <option value="all">All Body Regions</option>
            <option value="head">Head</option>
            <option value="neck">Neck</option>
            <option value="chest">Chest</option>
            <option value="abdomen">Abdomen</option>
            <option value="pelvis">Pelvis</option>
            <option value="arms">Arms</option>
            <option value="legs">Legs</option>
          </select>
        </div>

        <button
          onClick={resetProgress}
          className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Leitner Boxes</span>
        </button>
      </div>

      {/* Interactive Flashcard */}
      <div
        onClick={() => setIsFlipped((prev) => !prev)}
        className="min-h-[280px] bg-white rounded-2xl border-2 border-slate-200 hover:border-blue-400 shadow-sm p-8 flex flex-col justify-between cursor-pointer transition-all"
      >
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="font-semibold uppercase tracking-wider text-blue-600">
            Card {currentIndex + 1} of {studyDeck.length} • Box {currentBox}
          </span>
          <span className="inline-flex items-center gap-1">
            <RotateCw className="w-3.5 h-3.5" />
            Click card to flip
          </span>
        </div>

        {!isFlipped ? (
          <div className="my-auto text-center space-y-3 py-6">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 uppercase">
              Clinical Presentation
            </span>
            <h3 className="text-lg font-bold text-slate-800">
              Identify the condition associated with these symptoms:
            </h3>
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              {activeCard.symptoms.map((sym, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold"
                >
                  {sym}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className="my-auto text-center space-y-3 py-4">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700">
              {activeCard.system}
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900">{activeCard.name}</h3>
            <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
              {activeCard.description}
            </p>
            <p className="text-xs text-slate-500 pt-1">
              <strong>Cause:</strong> {activeCard.transmission}
            </p>
          </div>
        )}

        <div className="text-center text-[11px] text-slate-400">
          {isFlipped ? 'Rate your recall below to schedule next review' : 'Tap anywhere on card to reveal diagnosis'}
        </div>
      </div>

      {/* Spaced Repetition Self-Rating Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => handleRating(false)}
          className="py-3 px-4 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
        >
          <HelpCircle className="w-4 h-4" />
          <span>Missed It (Move to Box 1)</span>
        </button>
        <button
          onClick={() => handleRating(true)}
          className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
        >
          <CheckCircle className="w-4 h-4" />
          <span>Recalled It (Promote Box)</span>
        </button>
      </div>
    </div>
  );
}