// src/components/BodyMap.jsx
import React, { useState } from 'react';
import { Tag } from 'lucide-react';

export const ORGAN_CATALOG = {
  brain: {
    id: 'brain',
    label: 'Brain',
    region: 'head',
    keywords: ['brain', 'migraine', 'headache', 'stroke', 'meningitis', 'concussion', 'seizure', 'alzheimer', 'parkinson', 'neuro', 'vertigo']
  },
  thyroid: {
    id: 'thyroid',
    label: 'Thyroid',
    region: 'neck',
    keywords: ['thyroid', 'goiter', 'graves', 'hashimoto', 'parathyroid', 'myxedema']
  },
  trachea: {
    id: 'trachea',
    label: 'Trachea',
    region: 'neck',
    keywords: ['trachea', 'croup', 'epiglottitis', 'laryngitis', 'pharyngitis', 'strep', 'airway', 'throat', 'vocal']
  },
  svc: {
    id: 'svc',
    label: 'Superior Vena Cava',
    region: 'chest',
    keywords: ['vena cava', 'heart failure', 'tamponade', 'venous', 'hypertension']
  },
  aorta: {
    id: 'aorta',
    label: 'Aorta',
    region: 'chest',
    keywords: ['aorta', 'aortic', 'aneurysm', 'dissection', 'hypertension', 'stenosis']
  },
  lung: {
    id: 'lung',
    label: 'Lung',
    region: 'chest',
    keywords: ['lung', 'asthma', 'pneumonia', 'copd', 'emphysema', 'bronchitis', 'pneumothorax', 'pulmonary', 'tuberculosis', 'pleural']
  },
  heart: {
    id: 'heart',
    label: 'Heart',
    region: 'chest',
    keywords: ['heart', 'myocardial', 'angina', 'fibrillation', 'pericarditis', 'endocarditis', 'myocarditis', 'hypertension', 'cardiac', 'mitral']
  },
  esophagus: {
    id: 'esophagus',
    label: 'Esophagus',
    region: 'chest',
    keywords: ['esophag', 'gerd', 'reflux', 'barrett', 'varices', 'hiatal', 'heartburn']
  },
  diaphragm: {
    id: 'diaphragm',
    label: 'Diaphragm',
    region: 'chest',
    keywords: ['diaphragm', 'hiatal', 'hernia', 'phrenic', 'respiratory']
  },
  liver: {
    id: 'liver',
    label: 'Liver',
    region: 'abdomen',
    keywords: ['liver', 'hepatitis', 'cirrhosis', 'jaundice', 'bilirubin', 'ascites', 'hemochromatosis', 'wilson', 'fatty liver']
  },
  ivc: {
    id: 'ivc',
    label: 'Inferior Vena Cava',
    region: 'abdomen',
    keywords: ['vena cava', 'venous', 'ascites', 'cirrhosis', 'thrombosis']
  },
  gallbladder: {
    id: 'gallbladder',
    label: 'Gallbladder',
    region: 'abdomen',
    keywords: ['gallbladder', 'gallstone', 'cholecystitis', 'cholelithiasis', 'bile']
  },
  spleen: {
    id: 'spleen',
    label: 'Spleen',
    region: 'abdomen',
    keywords: ['spleen', 'splenic', 'mononucleosis']
  },
  stomach: {
    id: 'stomach',
    label: 'Stomach',
    region: 'abdomen',
    keywords: ['stomach', 'gastric', 'gastritis', 'ulcer', 'pyloric', 'gerd']
  },
  pancreas: {
    id: 'pancreas',
    label: 'Pancreas',
    region: 'abdomen',
    keywords: ['pancreas', 'pancreatitis', 'diabetes', 'insulin']
  },
  small_intestine: {
    id: 'small_intestine',
    label: 'Small Intestine',
    region: 'abdomen',
    keywords: ['small intestine', 'celiac', 'crohn', 'bowel obstruction', 'gastroenteritis', 'lactose', 'intussusception', 'mesenteric']
  },
  large_intestine: {
    id: 'large_intestine',
    label: 'Large Intestine',
    region: 'abdomen',
    keywords: ['large intestine', 'colon', 'ulcerative colitis', 'diverticulitis', 'ibs', 'irritable bowel', 'difficile', 'crohn']
  },
  appendix: {
    id: 'appendix',
    label: 'Appendix',
    region: 'abdomen',
    keywords: ['appendicitis', 'appendix', 'cecum']
  },
  kidney: {
    id: 'kidney',
    label: 'Kidney',
    region: 'pelvis',
    keywords: ['kidney', 'renal', 'pyelonephritis', 'nephrolithiasis', 'stone', 'glomerulonephritis', 'nephrotic', 'polycystic', 'hydronephrosis']
  },
  ureter: {
    id: 'ureter',
    label: 'Ureter',
    region: 'pelvis',
    keywords: ['ureter', 'stone', 'nephrolithiasis', 'hydronephrosis', 'urinary']
  },
  bladder: {
    id: 'bladder',
    label: 'Bladder',
    region: 'pelvis',
    keywords: ['bladder', 'cystitis', 'urinary', 'incontinence', 'retention', 'hematuria']
  },
  urethra: {
    id: 'urethra',
    label: 'Urethra',
    region: 'pelvis',
    keywords: ['urethra', 'urinary', 'uti', 'cystitis', 'prostatic', 'bph', 'incontinence']
  },
  rectum: {
    id: 'rectum',
    label: 'Rectum',
    region: 'pelvis',
    keywords: ['rectum', 'ulcerative colitis', 'prostatitis', 'pelvic']
  },
  upper_limbs: {
    id: 'upper_limbs',
    label: 'Upper Limbs',
    region: 'arms',
    keywords: ['arm', 'shoulder', 'elbow', 'wrist', 'hand', 'finger', 'carpal', 'rotator', 'epicondylitis', 'clavicle', 'ulnar', 'radial', 'median']
  },
  lower_limbs: {
    id: 'lower_limbs',
    label: 'Lower Limbs',
    region: 'legs',
    keywords: ['leg', 'knee', 'ankle', 'foot', 'toe', 'hip', 'thigh', 'calf', 'dvt', 'gout', 'plantar', 'acl', 'meniscus', 'achilles', 'sciatica', 'femur', 'tibia']
  },
  spine: {
    id: 'spine',
    label: 'Spine & Spinal Cord',
    region: 'neck',
    keywords: ['spine', 'cervical', 'spondylosis', 'radiculopathy', 'sciatica', 'whiplash']
  }
};

const REGIONS = [
  { id: 'head', label: 'Head & Brain', color: '#db2777' },
  { id: 'neck', label: 'Neck & Throat', color: '#0891b2' },
  { id: 'chest', label: 'Thorax & Heart', color: '#dc2626' },
  { id: 'abdomen', label: 'Abdomen & GI', color: '#b91c1c' },
  { id: 'pelvis', label: 'Pelvis & Urinary', color: '#059669' },
  { id: 'arms', label: 'Upper Limbs', color: '#2563eb' },
  { id: 'legs', label: 'Lower Limbs', color: '#4f46e5' }
];

const LEFT_CALLOUTS = [
  { organId: 'brain', label: 'Brain', lx: 84, ly: 48, tx: 198, ty: 48 },
  { organId: 'thyroid', label: 'Thyroid', lx: 84, ly: 106, tx: 210, ty: 108 },
  { organId: 'trachea', label: 'Trachea', lx: 84, ly: 124, tx: 217, ty: 122 },
  { organId: 'svc', label: 'Sup. Vena Cava', lx: 84, ly: 146, tx: 210, ty: 146 },
  { organId: 'lung', label: 'Lung', lx: 84, ly: 184, tx: 185, ty: 178 },
  { organId: 'liver', label: 'Liver', lx: 84, ly: 236, tx: 192, ty: 236 },
  { organId: 'ivc', label: 'Inf. Vena Cava', lx: 84, ly: 254, tx: 214, ty: 248 },
  { organId: 'gallbladder', label: 'Gallbladder', lx: 84, ly: 272, tx: 195, ty: 265 },
  { organId: 'kidney', label: 'Kidney', lx: 84, ly: 292, tx: 185, ty: 288 },
  { organId: 'ureter', label: 'Ureter', lx: 84, ly: 312, tx: 194, ty: 312 },
  { organId: 'appendix', label: 'Appendix', lx: 84, ly: 332, tx: 176, ty: 330 },
  { organId: 'bladder', label: 'Bladder', lx: 84, ly: 352, tx: 212, ty: 348 },
  { organId: 'urethra', label: 'Urethra', lx: 84, ly: 372, tx: 219, ty: 368 }
];

const RIGHT_CALLOUTS = [
  { organId: 'aorta', label: 'Aorta', lx: 376, ly: 138, tx: 226, ty: 140 },
  { organId: 'heart', label: 'Heart', lx: 376, ly: 172, tx: 238, ty: 174 },
  { organId: 'esophagus', label: 'Esophagus', lx: 376, ly: 198, tx: 223, ty: 206 },
  { organId: 'diaphragm', label: 'Diaphragm', lx: 376, ly: 222, tx: 264, ty: 222 },
  { organId: 'spleen', label: 'Spleen', lx: 376, ly: 248, tx: 266, ty: 250 },
  { organId: 'stomach', label: 'Stomach', lx: 376, ly: 268, tx: 246, ty: 256 },
  { organId: 'pancreas', label: 'Pancreas', lx: 376, ly: 288, tx: 242, ty: 270 },
  { organId: 'small_intestine', label: 'Small Intestine', lx: 376, ly: 312, tx: 235, ty: 306 },
  { organId: 'large_intestine', label: 'Large Intestine', lx: 376, ly: 334, tx: 262, ty: 302 },
  { organId: 'rectum', label: 'Rectum', lx: 376, ly: 364, tx: 227, ty: 362 }
];

export default function BodyMap({
  selectedRegion = 'all',
  selectedOrgan = null,
  onSelectRegion,
  onSelectOrgan
}) {
  const [view, setView] = useState('anterior');
  const [hoveredOrgan, setHoveredOrgan] = useState(null);
  const [showLabels, setShowLabels] = useState(true);

  const handleOrganClick = (organId) => {
    const organObj = ORGAN_CATALOG[organId];
    if (!organObj) return;

    if (onSelectOrgan) {
      onSelectOrgan(selectedOrgan?.id === organId ? null : organObj);
    } else if (onSelectRegion) {
      onSelectRegion(selectedRegion === organObj.region ? 'all' : organObj.region);
    }
  };

  const handleRegionButtonClick = (regionId) => {
    if (onSelectOrgan) onSelectOrgan(null);
    if (onSelectRegion) {
      onSelectRegion(selectedRegion === regionId ? 'all' : regionId);
    }
  };

  const isOrganHighlighted = (organId) => {
    const organObj = ORGAN_CATALOG[organId];
    if (!organObj) return true;

    // Hovering an individual organ takes immediate visual focus
    if (hoveredOrgan) {
      return hoveredOrgan === organId;
    }

    // If an individual organ is selected, highlight ONLY that organ
    if (selectedOrgan) {
      return selectedOrgan.id === organId;
    }

    // Otherwise, use the bottom region button filter
    if (selectedRegion !== 'all') {
      return organObj.region === selectedRegion;
    }

    return true;
  };

  const getOrganProps = (organId) => {
    const active = isOrganHighlighted(organId);
    const isFocused = hoveredOrgan === organId || selectedOrgan?.id === organId;

    return {
      style: {
        opacity: active ? 1 : 0.25,
        cursor: 'pointer',
        transition: 'opacity 0.15s ease'
      },
      'data-focused': isFocused ? 'true' : 'false',
      onClick: (e) => {
        e.stopPropagation();
        handleOrganClick(organId);
      },
      onMouseEnter: () => setHoveredOrgan(organId),
      onMouseLeave: () => setHoveredOrgan((prev) => (prev === organId ? null : prev))
    };
  };

  const activeStatusText = hoveredOrgan
    ? `Inspecting: ${ORGAN_CATALOG[hoveredOrgan]?.label}`
    : selectedOrgan
    ? `Selected Organ: ${selectedOrgan.label}`
    : selectedRegion !== 'all'
    ? `Filtered Region: ${REGIONS.find((r) => r.id === selectedRegion)?.label}`
    : 'Click any organ or label to inspect individually';

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 flex flex-col items-center">
      {/* Fixed-Height Header (Prevents Any Vertical Layout Shift on Hover) */}
      <div className="w-full flex items-center justify-between gap-2 mb-2 min-h-[40px]">
        <div className="min-w-0 flex-1">
          <h2 className="text-base font-bold text-slate-900 leading-tight">Anatomical Body Map</h2>
          <p
            className={`text-xs h-4 leading-4 truncate mt-0.5 ${
              hoveredOrgan || selectedOrgan ? 'text-blue-600 font-semibold' : 'text-slate-500'
            }`}
          >
            {activeStatusText}
          </p>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          {view === 'anterior' && (
            <button
              type="button"
              onClick={() => setShowLabels((prev) => !prev)}
              className={`px-2.5 py-1 rounded-lg border text-xs font-semibold inline-flex items-center gap-1 transition-colors ${
                showLabels
                  ? 'bg-blue-50 text-blue-700 border-blue-200'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
              title="Toggle anatomical callout labels"
            >
              <Tag className="w-3 h-3" />
              <span>Labels</span>
            </button>
          )}

          <div className="flex bg-slate-100 p-0.5 rounded-lg text-xs font-semibold">
            <button
              type="button"
              onClick={() => setView('anterior')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                view === 'anterior' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600'
              }`}
            >
              Anterior
            </button>
            <button
              type="button"
              onClick={() => setView('posterior')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                view === 'posterior' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600'
              }`}
            >
              Posterior
            </button>
          </div>
        </div>
      </div>

      {/* Detailed Medical Vector Diagram */}
      <svg
        viewBox="0 0 460 645"
        className="w-full max-w-[430px] my-1 select-none"
        role="img"
        aria-label="Interactive Human Anatomical Diagram"
      >
        {/* Full Body Outer Anatomical Contour */}
        <path
          d="M220,14 C242,14 256,30 256,54 C256,70 248,82 238,89 L238,104 C254,112 276,118 294,126 C306,131 312,142 315,158 L334,258 L345,332 C347,342 340,352 334,352 C329,352 326,342 325,333 L321,348 C319,353 313,352 313,346 L316,324 L300,256 L284,174 L276,174 L274,232 L271,284 C276,304 282,326 280,352 L273,478 L266,596 L272,624 C274,632 256,634 251,625 L247,596 L236,482 L226,376 L214,376 L204,482 L193,596 L189,625 C184,634 166,632 168,624 L174,596 L167,478 L160,352 C158,326 164,304 169,284 L166,232 L164,174 L156,174 L140,256 L124,324 L127,346 C127,352 121,353 119,348 L115,333 C114,342 111,352 106,352 C100,352 93,342 95,332 L106,258 L125,158 C128,142 134,131 146,126 C164,118 186,112 202,104 L202,89 C192,82 184,70 184,54 C184,30 198,14 220,14 Z"
          fill="#f8fafc"
          stroke="#334155"
          strokeWidth="1.6"
        />

        {/* Subtle Rib Cage & Thoracic Wall Contour */}
        <path
          d="M174,134 C166,158 166,196 173,224 M266,134 C274,158 274,196 267,224"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="1.2"
          strokeDasharray="3 3"
          pointerEvents="none"
        />

        {view === 'anterior' ? (
          <>
            {/* 1. BRAIN */}
            <g {...getOrganProps('brain')}>
              <path
                d="M220,21 C238,21 249,34 249,50 C249,62 241,70 230,71 L225,84 L215,84 L210,71 C199,70 191,62 191,50 C191,34 202,21 220,21 Z"
                fill="#f5c2d1"
                stroke={hoveredOrgan === 'brain' || selectedOrgan?.id === 'brain' ? '#2563eb' : '#1e293b'}
                strokeWidth={hoveredOrgan === 'brain' || selectedOrgan?.id === 'brain' ? '2.2' : '1.3'}
              />
              <path
                d="M220,22 L220,69 M198,38 Q208,33 215,40 M195,51 Q206,47 216,54 M201,62 Q210,59 217,64 M242,38 Q232,33 225,40 M245,51 Q234,47 224,54 M239,62 Q230,59 223,64"
                fill="none"
                stroke="#9d174d"
                strokeWidth="1.1"
                strokeLinecap="round"
              />
            </g>

            {/* Neck Jugular & Carotid Background Vessels (Non-blocking) */}
            <g pointerEvents="none" opacity={hoveredOrgan || selectedOrgan ? 0.35 : 0.85}>
              <path d="M206,86 L209,134 L213,134 L210,86 Z M234,86 L231,134 L227,134 L230,86 Z" fill="#64748b" stroke="#1e293b" strokeWidth="0.9" />
              <path d="M211,86 L213,136 L216,136 L214,86 Z M229,86 L227,136 L224,136 L226,86 Z" fill="#e11d48" stroke="#1e293b" strokeWidth="0.9" />
            </g>

            {/* 2. TRACHEA */}
            <g {...getOrganProps('trachea')}>
              <rect
                x="215"
                y="94"
                width="10"
                height="43"
                fill="#e2e8f0"
                stroke={hoveredOrgan === 'trachea' || selectedOrgan?.id === 'trachea' ? '#2563eb' : '#1e293b'}
                strokeWidth={hoveredOrgan === 'trachea' || selectedOrgan?.id === 'trachea' ? '2' : '1.1'}
              />
              <path
                d="M215,100 H225 M215,106 H225 M215,112 H225 M215,118 H225 M215,124 H225 M215,130 H225"
                stroke="#475569"
                strokeWidth="1"
              />
            </g>

            {/* 3. THYROID */}
            <g {...getOrganProps('thyroid')}>
              <path
                d="M216,103 C211,98 207,104 209,114 C210,119 215,118 217,114 L223,114 C225,118 230,119 231,114 C233,104 229,98 224,103 C222,106 218,106 216,103 Z"
                fill="#f472b6"
                stroke={hoveredOrgan === 'thyroid' || selectedOrgan?.id === 'thyroid' ? '#2563eb' : '#1e293b'}
                strokeWidth={hoveredOrgan === 'thyroid' || selectedOrgan?.id === 'thyroid' ? '2.2' : '1.1'}
              />
            </g>

            {/* 4. UPPER LIMBS */}
            <g {...getOrganProps('upper_limbs')}>
              <path
                d="M153,156 L138,236 M136,248 L119,316 M287,156 L302,236 M304,248 L321,316"
                stroke="#cbd5e1"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M236,136 C262,134 282,142 293,162 L308,242 L326,322 M308,242 L318,325"
                fill="none"
                stroke="#e11d48"
                strokeWidth={hoveredOrgan === 'upper_limbs' || selectedOrgan?.id === 'upper_limbs' ? '4.5' : '3'}
                strokeLinecap="round"
              />
              <path
                d="M206,136 C178,134 158,142 147,162 L132,242 L114,322"
                fill="none"
                stroke="#64748b"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <path
                d="M204,139 C179,138 160,145 150,164 L135,244 L122,325"
                fill="none"
                stroke="#e11d48"
                strokeWidth={hoveredOrgan === 'upper_limbs' || selectedOrgan?.id === 'upper_limbs' ? '3.8' : '2.4'}
                strokeLinecap="round"
              />
            </g>

            {/* 5. LUNGS */}
            <g {...getOrganProps('lung')}>
              <path
                d="M210,132 C192,130 176,146 172,176 C169,196 171,214 176,222 C188,217 202,216 211,218 Z"
                fill="#cbd5e1"
                stroke={hoveredOrgan === 'lung' || selectedOrgan?.id === 'lung' ? '#2563eb' : '#1e293b'}
                strokeWidth={hoveredOrgan === 'lung' || selectedOrgan?.id === 'lung' ? '2.2' : '1.3'}
              />
              <path
                d="M230,132 C248,130 264,146 268,176 C271,196 269,214 264,222 C252,217 238,216 229,218 Z"
                fill="#cbd5e1"
                stroke={hoveredOrgan === 'lung' || selectedOrgan?.id === 'lung' ? '#2563eb' : '#1e293b'}
                strokeWidth={hoveredOrgan === 'lung' || selectedOrgan?.id === 'lung' ? '2.2' : '1.3'}
              />
              <path
                d="M208,158 L192,150 M199,154 L194,142 M195,152 L183,156 M206,166 L186,174 M195,170 L188,184 M205,176 L184,198 M232,158 L248,150 M241,154 L246,142 M245,152 L257,156 M234,166 L254,174 M245,170 L252,184 M235,176 L256,198"
                fill="none"
                stroke="#64748b"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </g>

            {/* 6. SUPERIOR VENA CAVA */}
            <g {...getOrganProps('svc')}>
              <path
                d="M206,132 L214,132 L214,162 L206,162 Z"
                fill="#64748b"
                stroke={hoveredOrgan === 'svc' || selectedOrgan?.id === 'svc' ? '#2563eb' : '#1e293b'}
                strokeWidth={hoveredOrgan === 'svc' || selectedOrgan?.id === 'svc' ? '2.2' : '1.2'}
              />
            </g>

            {/* 7. AORTA */}
            <g {...getOrganProps('aorta')}>
              <path
                d="M216,158 L216,141 C216,132 232,132 232,143 L232,162 L224,162 L224,145 C224,141 222,141 222,145 L222,158 Z"
                fill="#e11d48"
                stroke={hoveredOrgan === 'aorta' || selectedOrgan?.id === 'aorta' ? '#2563eb' : '#1e293b'}
                strokeWidth={hoveredOrgan === 'aorta' || selectedOrgan?.id === 'aorta' ? '2.2' : '1.2'}
              />
              <path
                d="M219,134 L218,125 M224,133 L224,124 M228,135 L231,126"
                stroke="#e11d48"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </g>

            {/* 8. ESOPHAGUS */}
            <g {...getOrganProps('esophagus')}>
              <rect
                x="219"
                y="188"
                width="8"
                height="36"
                fill="#f5c2d1"
                stroke={hoveredOrgan === 'esophagus' || selectedOrgan?.id === 'esophagus' ? '#2563eb' : '#1e293b'}
                strokeWidth={hoveredOrgan === 'esophagus' || selectedOrgan?.id === 'esophagus' ? '2' : '1.1'}
              />
            </g>

            {/* 9. HEART */}
            <g {...getOrganProps('heart')}>
              <path
                d="M214,158 C206,162 204,176 209,188 C214,199 228,206 238,206 C246,205 248,192 244,178 C240,165 231,156 222,157 Z"
                fill="#d94868"
                stroke={hoveredOrgan === 'heart' || selectedOrgan?.id === 'heart' ? '#2563eb' : '#1e293b'}
                strokeWidth={hoveredOrgan === 'heart' || selectedOrgan?.id === 'heart' ? '2.4' : '1.4'}
              />
              <path
                d="M208,166 C213,163 218,167 216,173 M232,162 C238,162 241,168 237,173 M222,166 C224,178 228,191 235,203 M225,180 L215,188 M227,187 L239,191"
                fill="none"
                stroke="#1e293b"
                strokeWidth="1.1"
                strokeLinecap="round"
              />
            </g>

            {/* 10. DIAPHRAGM */}
            <g {...getOrganProps('diaphragm')}>
              <path
                d="M174,223 C194,212 246,212 266,223 L265,229 C246,219 194,219 175,229 Z"
                fill="#f1f5f9"
                stroke={hoveredOrgan === 'diaphragm' || selectedOrgan?.id === 'diaphragm' ? '#2563eb' : '#1e293b'}
                strokeWidth={hoveredOrgan === 'diaphragm' || selectedOrgan?.id === 'diaphragm' ? '2' : '1.2'}
              />
            </g>

            {/* 11. INFERIOR VENA CAVA (with Iliac Venous Forks) */}
            <g {...getOrganProps('ivc')}>
              <path
                d="M211,224 L218,224 L218,318 L201,370 L195,368 L211,316 Z M218,322 L237,370 L243,368 L223,316 L218,316 Z"
                fill="#64748b"
                stroke={hoveredOrgan === 'ivc' || selectedOrgan?.id === 'ivc' ? '#2563eb' : '#1e293b'}
                strokeWidth={hoveredOrgan === 'ivc' || selectedOrgan?.id === 'ivc' ? '2' : '1'}
              />
            </g>

            {/* Abdominal Aorta Segment (Linked to Aorta) */}
            <g {...getOrganProps('aorta')}>
              <path
                d="M219,224 L226,224 L226,316 L239,369 L234,371 L221,322 L204,371 L199,369 L219,316 Z"
                fill="#e11d48"
                stroke={hoveredOrgan === 'aorta' || selectedOrgan?.id === 'aorta' ? '#2563eb' : '#1e293b'}
                strokeWidth={hoveredOrgan === 'aorta' || selectedOrgan?.id === 'aorta' ? '2' : '1'}
              />
            </g>

            {/* 12. SPLEEN */}
            <g {...getOrganProps('spleen')}>
              <path
                d="M261,236 C270,236 274,248 270,259 C266,266 259,264 258,255 Z"
                fill="#a83856"
                stroke={hoveredOrgan === 'spleen' || selectedOrgan?.id === 'spleen' ? '#2563eb' : '#1e293b'}
                strokeWidth={hoveredOrgan === 'spleen' || selectedOrgan?.id === 'spleen' ? '2.2' : '1.2'}
              />
            </g>

            {/* 13. STOMACH */}
            <g {...getOrganProps('stomach')}>
              <path
                d="M221,226 C236,224 258,230 262,246 C265,260 252,272 234,272 C220,272 212,265 210,257 L218,252 C221,257 228,259 235,257 C242,255 243,245 236,240 C230,236 222,236 218,236 Z"
                fill="#f8c8d6"
                stroke={hoveredOrgan === 'stomach' || selectedOrgan?.id === 'stomach' ? '#2563eb' : '#1e293b'}
                strokeWidth={hoveredOrgan === 'stomach' || selectedOrgan?.id === 'stomach' ? '2.2' : '1.2'}
              />
            </g>

            {/* 14. PANCREAS */}
            <g {...getOrganProps('pancreas')}>
              <path
                d="M206,264 C218,261 242,261 256,265 C259,267 258,274 253,275 C239,274 218,275 205,274 C201,273 201,266 206,264 Z"
                fill="#f9a8b8"
                stroke={hoveredOrgan === 'pancreas' || selectedOrgan?.id === 'pancreas' ? '#2563eb' : '#1e293b'}
                strokeWidth={hoveredOrgan === 'pancreas' || selectedOrgan?.id === 'pancreas' ? '2.2' : '1.1'}
              />
              <path d="M210,269 L251,270" stroke="#be185d" strokeWidth="0.9" strokeDasharray="2 2" />
            </g>

            {/* 15. LIVER */}
            <g {...getOrganProps('liver')}>
              <path
                d="M174,228 C192,218 226,220 246,228 C248,233 236,241 218,246 C202,251 186,264 176,268 C171,264 170,244 174,228 Z"
                fill="#9f2b48"
                stroke={hoveredOrgan === 'liver' || selectedOrgan?.id === 'liver' ? '#2563eb' : '#1e293b'}
                strokeWidth={hoveredOrgan === 'liver' || selectedOrgan?.id === 'liver' ? '2.2' : '1.3'}
              />
              <path d="M212,222 L208,248" stroke="#1e293b" strokeWidth="1.1" />
            </g>

            {/* 16. GALLBLADDER */}
            <g {...getOrganProps('gallbladder')}>
              <path
                d="M194,255 C199,255 202,264 198,271 C195,275 189,271 190,263 Z"
                fill="#0d9488"
                stroke={hoveredOrgan === 'gallbladder' || selectedOrgan?.id === 'gallbladder' ? '#2563eb' : '#1e293b'}
                strokeWidth={hoveredOrgan === 'gallbladder' || selectedOrgan?.id === 'gallbladder' ? '2.2' : '1.1'}
              />
            </g>

            {/* 17. KIDNEYS */}
            <g {...getOrganProps('kidney')}>
              <path
                d="M189,276 C181,276 178,286 180,295 C182,302 189,303 193,297 C195,293 195,285 193,280 C192,277 190,276 189,276 Z"
                fill="#9f2b48"
                stroke={hoveredOrgan === 'kidney' || selectedOrgan?.id === 'kidney' ? '#2563eb' : '#1e293b'}
                strokeWidth={hoveredOrgan === 'kidney' || selectedOrgan?.id === 'kidney' ? '2.2' : '1.2'}
              />
              <path
                d="M251,278 C259,278 262,288 260,297 C258,304 251,305 247,299 C245,295 245,287 247,282 C248,279 250,278 251,278 Z"
                fill="#9f2b48"
                stroke={hoveredOrgan === 'kidney' || selectedOrgan?.id === 'kidney' ? '#2563eb' : '#1e293b'}
                strokeWidth={hoveredOrgan === 'kidney' || selectedOrgan?.id === 'kidney' ? '2.2' : '1.2'}
              />
            </g>

            {/* 18. LARGE INTESTINE */}
            <g {...getOrganProps('large_intestine')}>
              <path
                d="M174,316 C172,302 173,284 175,274 C177,269 188,272 204,274 C222,276 244,274 262,272 C267,272 268,286 267,304 C266,318 264,330 252,334 C240,337 226,334 224,344 L216,344 C216,330 232,326 246,325 C254,324 255,312 255,298 C255,288 254,283 246,284 C228,286 206,287 188,284 C184,284 185,302 186,316 C186,322 175,322 174,316 Z"
                fill="#e2e8f0"
                stroke={hoveredOrgan === 'large_intestine' || selectedOrgan?.id === 'large_intestine' ? '#2563eb' : '#1e293b'}
                strokeWidth={hoveredOrgan === 'large_intestine' || selectedOrgan?.id === 'large_intestine' ? '2.2' : '1.3'}
              />
              <path
                d="M174,306 H185 M174,295 H185 M175,284 H185 M196,274 V285 M210,275 V286 M224,275 V286 M238,274 V285 M252,273 V284 M256,294 H267 M256,306 H266 M253,318 H263"
                stroke="#64748b"
                strokeWidth="1"
              />
            </g>

            {/* 19. SMALL INTESTINE */}
            <g {...getOrganProps('small_intestine')}>
              <path
                d="M193,284 C205,280 218,286 228,283 C239,280 250,286 248,296 C246,304 252,312 246,320 C238,327 224,323 215,326 C204,329 191,324 191,314 C191,304 188,292 193,284 Z"
                fill="#e5b8c2"
                stroke={hoveredOrgan === 'small_intestine' || selectedOrgan?.id === 'small_intestine' ? '#2563eb' : '#1e293b'}
                strokeWidth={hoveredOrgan === 'small_intestine' || selectedOrgan?.id === 'small_intestine' ? '2.2' : '1.2'}
              />
              <path
                d="M196,294 Q212,290 222,297 T243,295 M194,305 Q210,301 224,308 T244,307 M197,316 Q214,312 228,318 T241,317 M214,285 Q210,304 216,324 M231,284 Q227,304 232,323"
                fill="none"
                stroke="#475569"
                strokeWidth="1.1"
                strokeLinecap="round"
              />
            </g>

            {/* 20. APPENDIX */}
            <g {...getOrganProps('appendix')}>
              <path
                d="M178,318 C174,324 171,332 173,337 C175,339 179,338 179,334 C178,329 180,324 183,320 Z"
                fill="#e11d48"
                stroke={hoveredOrgan === 'appendix' || selectedOrgan?.id === 'appendix' ? '#2563eb' : '#1e293b'}
                strokeWidth={hoveredOrgan === 'appendix' || selectedOrgan?.id === 'appendix' ? '2.2' : '1.1'}
              />
            </g>

            {/* 21. URETERS */}
            <g {...getOrganProps('ureter')}>
              <path
                d="M192,296 C193,315 198,332 210,342 M248,298 C247,317 242,332 230,342"
                fill="none"
                stroke={hoveredOrgan === 'ureter' || selectedOrgan?.id === 'ureter' ? '#2563eb' : '#475569'}
                strokeWidth={hoveredOrgan === 'ureter' || selectedOrgan?.id === 'ureter' ? '3.5' : '2.2'}
                strokeLinecap="round"
              />
            </g>

            {/* 22. RECTUM */}
            <g {...getOrganProps('rectum')}>
              <path
                d="M222,348 L229,348 L228,372 L222,372 Z"
                fill="#cbd5e1"
                stroke={hoveredOrgan === 'rectum' || selectedOrgan?.id === 'rectum' ? '#2563eb' : '#1e293b'}
                strokeWidth={hoveredOrgan === 'rectum' || selectedOrgan?.id === 'rectum' ? '2' : '1.1'}
              />
            </g>

            {/* 23. BLADDER */}
            <g {...getOrganProps('bladder')}>
              <path
                d="M206,342 C206,334 234,334 234,342 C234,352 226,358 220,358 C214,358 206,352 206,342 Z"
                fill="#f8c8d6"
                stroke={hoveredOrgan === 'bladder' || selectedOrgan?.id === 'bladder' ? '#2563eb' : '#1e293b'}
                strokeWidth={hoveredOrgan === 'bladder' || selectedOrgan?.id === 'bladder' ? '2.2' : '1.3'}
              />
            </g>

            {/* 24. URETHRA */}
            <g {...getOrganProps('urethra')}>
              <path
                d="M217,358 L222,358 L221,375 L218,375 Z"
                fill="#f472b6"
                stroke={hoveredOrgan === 'urethra' || selectedOrgan?.id === 'urethra' ? '#2563eb' : '#1e293b'}
                strokeWidth={hoveredOrgan === 'urethra' || selectedOrgan?.id === 'urethra' ? '2' : '1'}
              />
            </g>

            {/* 25. LOWER LIMBS */}
            <g {...getOrganProps('lower_limbs')}>
              <path
                d="M188,374 L190,478 M190,494 L186,594 M252,374 L250,478 M250,494 L254,594"
                stroke="#cbd5e1"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <ellipse cx="190" cy="485" rx="6" ry="7" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
              <ellipse cx="250" cy="485" rx="6" ry="7" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
              <path
                d="M198,370 L193,485 L188,596 M240,370 L245,485 L250,596"
                fill="none"
                stroke="#64748b"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
              <path
                d="M202,371 L197,485 L193,596 M236,371 L241,485 L245,596"
                fill="none"
                stroke="#e11d48"
                strokeWidth={hoveredOrgan === 'lower_limbs' || selectedOrgan?.id === 'lower_limbs' ? '4.2' : '2.8'}
                strokeLinecap="round"
              />
            </g>

            {/* INDIVIDUAL CALLOUT LEADER LINES & LABELS */}
            {showLabels && (
              <g className="text-[9.5px] font-semibold">
                {LEFT_CALLOUTS.map((item) => {
                  const active =
                    hoveredOrgan === item.organId || selectedOrgan?.id === item.organId;
                  return (
                    <g
                      key={item.organId}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOrganClick(item.organId);
                      }}
                      onMouseEnter={() => setHoveredOrgan(item.organId)}
                      onMouseLeave={() =>
                        setHoveredOrgan((prev) => (prev === item.organId ? null : prev))
                      }
                      style={{ cursor: 'pointer' }}
                    >
                      <line
                        x1={item.lx + 3}
                        y1={item.ly}
                        x2={item.tx}
                        y2={item.ty}
                        stroke={active ? '#2563eb' : '#475569'}
                        strokeWidth={active ? '1.6' : '0.9'}
                        pointerEvents="none"
                      />
                      <circle
                        cx={item.tx}
                        cy={item.ty}
                        r={active ? '3' : '2'}
                        fill={active ? '#2563eb' : '#1e293b'}
                        pointerEvents="none"
                      />
                      <text
                        x={item.lx}
                        y={item.ly + 3}
                        textAnchor="end"
                        fill={active ? '#1d4ed8' : '#1e293b'}
                        fontWeight={active ? '700' : '600'}
                      >
                        {item.label}
                      </text>
                    </g>
                  );
                })}

                {RIGHT_CALLOUTS.map((item) => {
                  const active =
                    hoveredOrgan === item.organId || selectedOrgan?.id === item.organId;
                  return (
                    <g
                      key={item.organId}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOrganClick(item.organId);
                      }}
                      onMouseEnter={() => setHoveredOrgan(item.organId)}
                      onMouseLeave={() =>
                        setHoveredOrgan((prev) => (prev === item.organId ? null : prev))
                      }
                      style={{ cursor: 'pointer' }}
                    >
                      <line
                        x1={item.lx - 3}
                        y1={item.ly}
                        x2={item.tx}
                        y2={item.ty}
                        stroke={active ? '#2563eb' : '#475569'}
                        strokeWidth={active ? '1.6' : '0.9'}
                        pointerEvents="none"
                      />
                      <circle
                        cx={item.tx}
                        cy={item.ty}
                        r={active ? '3' : '2'}
                        fill={active ? '#2563eb' : '#1e293b'}
                        pointerEvents="none"
                      />
                      <text
                        x={item.lx}
                        y={item.ly + 3}
                        textAnchor="start"
                        fill={active ? '#1d4ed8' : '#1e293b'}
                        fontWeight={active ? '700' : '600'}
                      >
                        {item.label}
                      </text>
                    </g>
                  );
                })}
              </g>
            )}
          </>
        ) : (
          /* ============================================================
             POSTERIOR VIEW (Individually Interactable Dorsal Structures)
             ============================================================ */
          <>
            <g {...getOrganProps('brain')}>
              <path
                d="M220,21 C238,21 249,33 249,48 C249,58 242,65 234,67 L206,67 C198,65 191,58 191,48 C191,33 202,21 220,21 Z"
                fill="#f5c2d1"
                stroke="#1e293b"
                strokeWidth="1.3"
              />
              <ellipse cx="220" cy="70" rx="16" ry="8" fill="#e87996" stroke="#1e293b" strokeWidth="1.2" />
            </g>

            <g {...getOrganProps('spine')}>
              <rect x="215" y="78" width="10" height="240" rx="3" fill="#e2e8f0" stroke="#1e293b" strokeWidth="1.2" />
              <path d="M215,92 H225 M215,112 H225 M215,132 H225 M215,152 H225 M215,172 H225 M215,192 H225 M215,212 H225 M215,232 H225 M215,252 H225 M215,272 H225 M215,292 H225" stroke="#475569" strokeWidth="1" />
            </g>

            <g {...getOrganProps('lung')}>
              <path d="M212,130 C192,130 175,148 172,180 C170,202 173,218 178,224 L212,220 Z" fill="#cbd5e1" stroke="#1e293b" strokeWidth="1.3" />
              <path d="M228,130 C248,130 265,148 268,180 C270,202 267,218 262,224 L228,220 Z" fill="#cbd5e1" stroke="#1e293b" strokeWidth="1.3" />
            </g>

            <g {...getOrganProps('large_intestine')}>
              <rect x="174" y="250" width="13" height="68" rx="5" fill="#e2e8f0" stroke="#1e293b" strokeWidth="1.2" />
              <rect x="253" y="250" width="13" height="68" rx="5" fill="#e2e8f0" stroke="#1e293b" strokeWidth="1.2" />
            </g>

            <g {...getOrganProps('kidney')}>
              <ellipse cx="195" cy="256" rx="10" ry="16" fill="#9f2b48" stroke="#1e293b" strokeWidth="1.3" />
              <ellipse cx="245" cy="256" rx="10" ry="16" fill="#9f2b48" stroke="#1e293b" strokeWidth="1.3" />
            </g>

            <g {...getOrganProps('rectum')}>
              <path d="M212,318 L228,318 L224,368 L216,368 Z" fill="#cbd5e1" stroke="#1e293b" strokeWidth="1.3" />
            </g>

            <g {...getOrganProps('upper_limbs')}>
              <path d="M153,156 L136,242 L118,322 M287,156 L304,242 L322,322" fill="none" stroke="#2563eb" strokeWidth="3.5" strokeLinecap="round" />
            </g>

            <g {...getOrganProps('lower_limbs')}>
              <path d="M198,356 L192,485 L188,596 M242,356 L248,485 L252,596" fill="none" stroke="#eab308" strokeWidth="3.5" strokeLinecap="round" />
            </g>
          </>
        )}
      </svg>

      {/* Bottom Buttons: Broad Anatomical Region Filters */}
      <div className="w-full pt-2.5 border-t border-slate-100 flex flex-wrap gap-1.5 justify-center">
        <button
          type="button"
          onClick={() => handleRegionButtonClick('all')}
          className={`text-xs px-2.5 py-1 rounded-full font-medium border transition-colors ${
            selectedRegion === 'all' && !selectedOrgan
              ? 'bg-slate-900 text-white border-slate-900'
              : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
          }`}
        >
          All Regions
        </button>
        {REGIONS.map((reg) => {
          const isRegionActive = !selectedOrgan && selectedRegion === reg.id;
          return (
            <button
              key={reg.id}
              type="button"
              onClick={() => handleRegionButtonClick(reg.id)}
              className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium border transition-colors ${
                isRegionActive
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: reg.color }} />
              <span>{reg.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}