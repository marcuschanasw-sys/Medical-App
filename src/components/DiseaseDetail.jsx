// src/components/DiseaseDetail.jsx
import React from 'react';
import { X, ShieldCheck, ExternalLink, AlertTriangle, Activity, BookOpen } from 'lucide-react';

export default function DiseaseDetail({ disease, onClose }) {
  if (!disease) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700">
                {disease.system}
              </span>
              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700 capitalize">
                Region: {disease.region}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">{disease.name}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/70 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Clinical Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700">
          {/* Overview */}
          <section>
            <h3 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Clinical Overview</span>
            </h3>
            <p className="leading-relaxed text-slate-600">{disease.description}</p>
          </section>

          {/* Symptoms */}
          <section>
            <h3 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
              <Activity className="w-4 h-4 text-rose-600" />
              <span>Common Signs & Symptoms</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {disease.symptoms.map((sym, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-rose-50 text-rose-800 border border-rose-100 text-xs font-medium"
                >
                  {sym}
                </span>
              ))}
            </div>
          </section>

          {/* Etiology & Transmission */}
          <section className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <h4 className="font-bold text-slate-900 mb-1 text-xs uppercase tracking-wide">
                Transmission & Etiology
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">{disease.transmission}</p>
            </div>

            {disease.prevention && (
              <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200/70">
                <h4 className="font-bold text-emerald-900 mb-1 text-xs uppercase tracking-wide">
                  Prevention & Management
                </h4>
                <p className="text-xs text-emerald-800 leading-relaxed">{disease.prevention}</p>
              </div>
            )}
          </section>

          {/* Risk Factors */}
          {disease.riskFactors && disease.riskFactors.length > 0 && (
            <section>
              <h3 className="font-bold text-slate-900 mb-2">Key Risk Factors</h3>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                {disease.riskFactors.map((rf, i) => (
                  <li key={i}>{rf}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Verified Citations */}
          {disease.sources && disease.sources.length > 0 && (
            <section className="pt-4 border-t border-slate-200">
              <div className="flex items-center gap-1.5 font-bold text-emerald-800 mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Peer-Reviewed & Public Health Citations</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {disease.sources.map((src, idx) => (
                  <a
                    key={idx}
                    href={src.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-medium transition-colors"
                  >
                    <span>{src.name}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* Educational Disclaimer */}
          <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 flex items-start gap-2.5 text-xs text-amber-900">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p>
              <strong>Educational Purpose Only:</strong> This summary is compiled from public medical databases for academic study and pre-visit preparation. It does not constitute medical advice or diagnosis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}