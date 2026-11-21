// src/App.jsx
import { useState, useEffect } from 'react';
import BodyMap from './components/BodyMap.jsx';
import DiseaseList from './components/DiseaseList.jsx';
import DiseaseDetail from './components/DiseaseDetail.jsx';
import QuizEngine from './components/QuizEngine.jsx';
import FlashcardsView from './components/FlashcardsView.jsx';
import AnalyticsView from './components/AnalyticsView.jsx';
import { getQuizHistory, saveQuizAttempt } from './utils/storage';
import { DISEASES } from './data/diseases';
import { QUIZ_QUESTIONS } from './data/quizzes';

export default function App() {
  const [activeTab, setActiveTab] = useState('map');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [activeDiseaseModal, setActiveDiseaseModal] = useState(null);
  const [quizHistory, setQuizHistory] = useState([]);

  useEffect(() => {
    setQuizHistory(getQuizHistory());
  }, []);

  const handleQuizCompletion = (answers) => {
    const updatedHistory = saveQuizAttempt(answers);
    setQuizHistory(updatedHistory);
    setActiveTab('analytics');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-lg font-extrabold text-slate-900">
            MedAtlas <span className="text-blue-600">Clinical Explorer</span>
          </h1>
          <nav className="flex flex-wrap gap-2">
            {[
              { id: 'map', label: 'Body Map & Database' },
              { id: 'flashcards', label: 'Leitner Flashcards' },
              { id: 'quiz', label: 'Diagnostic Quiz' },
              { id: 'analytics', label: 'Score Analytics' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        {activeTab === 'map' && (
          <div className="grid md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-5">
              <BodyMap selectedRegion={selectedRegion} onSelectRegion={setSelectedRegion} />
            </div>
            <div className="md:col-span-7">
              <DiseaseList
                diseases={DISEASES}
                selectedRegion={selectedRegion}
                onClearRegion={() => setSelectedRegion('all')}
                onSelectDisease={setActiveDiseaseModal}
              />
            </div>
          </div>
        )}

        {activeTab === 'flashcards' && <FlashcardsView diseases={DISEASES} />}

        {activeTab === 'quiz' && (
          <QuizEngine questions={QUIZ_QUESTIONS} onCompleteQuiz={handleQuizCompletion} />
        )}

        {activeTab === 'analytics' && <AnalyticsView history={quizHistory} />}
      </main>

      <DiseaseDetail
        disease={activeDiseaseModal}
        onClose={() => setActiveDiseaseModal(null)}
      />
    </div>
  );
}