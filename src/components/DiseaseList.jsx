// src/components/DiseaseList.jsx
import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  Filter,
  ArrowUpRight,
  Info,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { REGION_THEMES } from '../data/diseases.js';
import DiseaseDetail from './DiseaseDetail.jsx';

const BOXES_PER_PAGE = 6;

export default function DiseaseList({
  diseases = [],
  selectedRegion = 'all',
  selectedOrgan = null,
  onClearFilter,
  onSelectDisease
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSystem, setSelectedSystem] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [fallbackDisease, setFallbackDisease] = useState(null);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedRegion, selectedOrgan, selectedSystem, searchQuery]);

  const availableSystems = useMemo(() => {
    const systems = new Set(diseases.map((d) => d.system).filter(Boolean));
    return ['all', ...Array.from(systems)];
  }, [diseases]);

  const filteredDiseases = useMemo(() => {
    const baseFiltered = diseases.filter((item) => {
      const matchesRegion =
        selectedOrgan ||
        selectedRegion === 'all' ||
        item.region.toLowerCase() === selectedRegion.toLowerCase();

      const matchesSystem =
        selectedSystem === 'all' || item.system.toLowerCase() === selectedSystem.toLowerCase();

      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        query === '' ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.symptoms.some((sym) => sym.toLowerCase().includes(query));

      return matchesRegion && matchesSystem && matchesQuery;
    });

    if (!selectedOrgan) return baseFiltered;

    const organKeywordMatches = baseFiltered.filter((item) => {
      const searchableText = `${item.name} ${item.description} ${item.system} ${item.symptoms.join(' ')}`.toLowerCase();
      return selectedOrgan.keywords.some((kw) => searchableText.includes(kw.toLowerCase()));
    });

    if (organKeywordMatches.length > 0) {
      return organKeywordMatches;
    }

    return baseFiltered.filter(
      (item) => item.region.toLowerCase() === selectedOrgan.region.toLowerCase()
    );
  }, [diseases, selectedRegion, selectedOrgan, selectedSystem, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredDiseases.length / BOXES_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);

  const visibleBoxes = useMemo(() => {
    const start = (safePage - 1) * BOXES_PER_PAGE;
    return filteredDiseases.slice(start, start + BOXES_PER_PAGE);
  }, [filteredDiseases, safePage]);

  const handleOpenDisease = (disease) => {
    if (onSelectDisease) {
      onSelectDisease(disease);
    } else {
      setFallbackDisease(disease);
    }
  };

  const activeRegionTheme =
    selectedOrgan
      ? REGION_THEMES[selectedOrgan.region]
      : selectedRegion !== 'all'
      ? REGION_THEMES[selectedRegion]
      : null;

  return (
    <div className="flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Header & Filter Bar */}
      <div className="p-4 border-b border-slate-100 bg-slate-50/60 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-bold text-slate-900">Medical Database</h2>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-200/80 text-slate-800">
              {filteredDiseases.length} Conditions
            </span>
          </div>

          {(selectedOrgan || selectedRegion !== 'all') && (
            <div
              className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full border capitalize ${
                activeRegionTheme ? activeRegionTheme.badge : 'bg-blue-50 text-blue-800 border-blue-200'
              }`}
            >
              {activeRegionTheme && (
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: activeRegionTheme.hex }}
                />
              )}
              <span>
                {selectedOrgan ? `Organ: ${selectedOrgan.label}` : `Region: ${selectedRegion}`}
              </span>
              {onClearFilter && (
                <button
                  type="button"
                  onClick={onClearFilter}
                  className="hover:opacity-75 p-0.5 rounded-full"
                  aria-label="Clear filter"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          )}
        </div>

        {/* Search & System Filter Row */}
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search condition or symptom..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-600 shrink-0">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={selectedSystem}
              onChange={(e) => setSelectedSystem(e.target.value)}
              className="bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              {availableSystems.map((sys) => (
                <option key={sys} value={sys}>
                  {sys === 'all' ? 'All Systems' : sys}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Color-Coded Clickable Disease Boxes Grid */}
      <div className="p-3.5">
        {visibleBoxes.length === 0 ? (
          <div className="p-8 text-center text-slate-500 space-y-2">
            <Info className="w-8 h-8 mx-auto text-slate-400" />
            <p className="font-medium text-sm">No conditions matched your filter.</p>
            <p className="text-xs text-slate-400">
              Try adjusting your search terms or clearing the active filter.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {visibleBoxes.map((disease) => {
              const theme = REGION_THEMES[disease.region] || REGION_THEMES.arms;

              return (
                <button
                  key={disease.id}
                  type="button"
                  onClick={() => handleOpenDisease(disease)}
                  className={`group text-left p-3.5 rounded-xl border border-slate-200 border-l-4 ${theme.cardBorder} bg-white hover:shadow-md transition-all flex flex-col justify-between gap-2.5 cursor-pointer`}
                >
                  {/* Top Region & System Badges + Disease Title */}
                  <div className="w-full space-y-1.5">
                    <div className="flex items-center justify-between gap-1.5">
                      <div className="flex items-center gap-1.5 min-w-0 flex-wrap">
                        <span
                          className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border ${theme.badge}`}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: theme.hex }}
                          />
                          <span className="truncate">{theme.label}</span>
                        </span>
                        <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 truncate">
                          {disease.system}
                        </span>
                      </div>

                      <span
                        className={`w-6 h-6 rounded-lg bg-slate-50 border border-slate-200 ${theme.hoverBtn} group-hover:text-white text-slate-400 flex items-center justify-center transition-colors shrink-0`}
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-900 text-sm transition-colors line-clamp-2">
                      {disease.name}
                    </h3>
                  </div>

                  {/* Color-Coded Symptom Preview Pills */}
                  <div className="flex flex-wrap gap-1 pt-1.5 border-t border-slate-100 w-full">
                    {disease.symptoms.slice(0, 2).map((symptom, idx) => (
                      <span
                        key={idx}
                        className={`text-[10px] ${theme.pill} px-2 py-0.5 rounded-full font-medium truncate max-w-[135px]`}
                      >
                        {symptom}
                      </span>
                    ))}
                    {disease.symptoms.length > 2 && (
                      <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-medium">
                        +{disease.symptoms.length - 2} more
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Compact Page Switcher */}
      {filteredDiseases.length > BOXES_PER_PAGE && (
        <div className="px-4 py-2.5 border-t border-slate-100 bg-slate-50/60 flex items-center justify-between text-xs">
          <span className="text-slate-500 font-medium">
            Page <strong className="text-slate-800">{safePage}</strong> of{' '}
            <strong className="text-slate-800">{totalPages}</strong>
          </span>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={safePage === 1}
              className="px-2.5 py-1 rounded-lg border border-slate-200 bg-white text-slate-700 font-semibold disabled:opacity-40 hover:bg-slate-100 inline-flex items-center gap-1 transition-colors"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Prev</span>
            </button>

            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={safePage === totalPages}
              className="px-2.5 py-1 rounded-lg border border-slate-200 bg-white text-slate-700 font-semibold disabled:opacity-40 hover:bg-slate-100 inline-flex items-center gap-1 transition-colors"
            >
              <span>Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {!onSelectDisease && (
        <DiseaseDetail
          disease={fallbackDisease}
          onClose={() => setFallbackDisease(null)}
        />
      )}
    </div>
  );
}