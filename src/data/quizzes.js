// src/data/quizzes.js

export const QUIZ_QUESTIONS = [
  // =========================================================================
  // 1. HEAD & BRAIN (4 Questions)
  // =========================================================================
  {
    id: 'head-q1',
    region: 'head',
    system: 'Nervous System',
    question:
      'A 20-year-old college student living in a dormitory presents with sudden high fever, severe headache, photophobia, and nuchal rigidity (stiff neck). Which condition is the most urgent diagnosis?',
    options: [
      'Bacterial Meningitis',
      'Migraine with Aura',
      'Concussion (Mild TBI)',
      'Epilepsy (Seizure Disorder)'
    ],
    correctAnswer: 'Bacterial Meningitis',
    explanation:
      'The classic triad of fever, neck stiffness (nuchal rigidity), and acute headache in a communal living setting points strongly to bacterial meningitis, requiring immediate empiric antibiotics.'
  },
  {
    id: 'head-q2',
    region: 'head',
    system: 'Nervous System',
    question:
      'A 68-year-old patient with untreated hypertension and atrial fibrillation develops sudden-onset right-sided facial droop, right arm weakness, and slurred speech. Which acute condition is occurring?',
    options: [
      'Ischemic Stroke',
      "Alzheimer's Disease",
      'Migraine with Aura',
      'Concussion (Mild TBI)'
    ],
    correctAnswer: 'Ischemic Stroke',
    explanation:
      'Abrupt focal neurological deficits (FAST: Face drooping, Arm weakness, Speech difficulty) in a patient with atrial fibrillation indicate acute thromboembolic occlusion of a cerebral artery.'
  },
  {
    id: 'head-q3',
    region: 'head',
    system: 'Nervous System',
    question:
      'Which neuropathological hallmark characterizes the progressive cortical degeneration seen in Alzheimer’s disease?',
    options: [
      'Extracellular amyloid-beta plaques and intracellular tau neurofibrillary tangles',
      'Acute thromboembolic occlusion of the middle cerebral artery',
      'Synchronous, unprovoked hyperexcitable electrical discharges in cortical neurons',
      'Purulent bacterial exudate accumulating within the subarachnoid space'
    ],
    correctAnswer: 'Extracellular amyloid-beta plaques and intracellular tau neurofibrillary tangles',
    explanation:
      'Alzheimer’s disease is defined microscopically by amyloid-beta plaques and hyperphosphorylated tau tangles, whereas the other choices describe ischemic stroke, epilepsy, and bacterial meningitis.'
  },
  {
    id: 'head-q4',
    region: 'head',
    system: 'Nervous System',
    question:
      'A 26-year-old experiences transient shimmering zigzag lights in her visual field lasting 20 minutes, followed by a unilateral throbbing headache with nausea and sensitivity to light. Which condition explains this presentation?',
    options: [
      'Migraine with Aura',
      'Ischemic Stroke',
      'Bacterial Meningitis',
      "Alzheimer's Disease"
    ],
    correctAnswer: 'Migraine with Aura',
    explanation:
      'A reversible visual aura followed by unilateral pulsatile pain, photophobia, and nausea is the hallmark presentation of migraine with aura.'
  },

  // =========================================================================
  // 2. NECK & THROAT (4 Questions)
  // =========================================================================
  {
    id: 'neck-q1',
    region: 'neck',
    system: 'Respiratory System',
    question:
      'A 2-year-old child wakes up at night with a loud, seal-like barking cough, hoarseness, and inspiratory stridor following two days of mild nasal congestion. Which condition is most likely?',
    options: [
      'Croup (Laryngotracheobronchitis)',
      'Streptococcal Pharyngitis (Strep Throat)',
      'Infectious Mononucleosis (EBV)',
      "Hashimoto's Hypothyroidism"
    ],
    correctAnswer: 'Croup (Laryngotracheobronchitis)',
    explanation:
      'Subglottic airway inflammation from parainfluenza virus produces the characteristic seal-like barking cough and inspiratory stridor in toddlers, typically worsening at night.'
  },
  {
    id: 'neck-q2',
    region: 'neck',
    system: 'Endocrine System',
    question:
      'A 34-year-old woman presents with unintentional weight loss despite an increased appetite, heat intolerance, fine hand tremors, palpitations, and a diffusely enlarged anterior neck mass. Which disorder is most consistent with these findings?',
    options: [
      "Hyperthyroidism (Graves' Disease)",
      "Hypothyroidism (Hashimoto's)",
      'Streptococcal Pharyngitis (Strep Throat)',
      'Croup (Laryngotracheobronchitis)'
    ],
    correctAnswer: "Hyperthyroidism (Graves' Disease)",
    explanation:
      'Excess thyroid hormone synthesis accelerates basal metabolism and sympathetic tone, causing weight loss, heat intolerance, tremor, tachycardia, and a diffuse goiter.'
  },
  {
    id: 'neck-q3',
    region: 'neck',
    system: 'Respiratory System',
    question:
      'Which serious secondary complication is prevented by promptly treating Group A Streptococcal pharyngitis with antibiotics?',
    options: [
      'Acute rheumatic fever affecting cardiac valves',
      'Splenic rupture following minor abdominal trauma',
      'Myxedema coma from severe thyroid hormone deficiency',
      'Subglottic tracheal stenosis'
    ],
    correctAnswer: 'Acute rheumatic fever affecting cardiac valves',
    explanation:
      'Antibiotic therapy for Streptococcus pyogenes pharyngitis prevents cross-reactive autoimmune antibodies from damaging heart valves (acute rheumatic fever).'
  },
  {
    id: 'neck-q4',
    region: 'neck',
    system: 'Respiratory System',
    question:
      'A 19-year-old presents with severe exudative pharyngitis, profound fatigue, posterior cervical lymphadenopathy, and palpable splenomegaly. Which infectious agent is the primary cause?',
    options: [
      'Epstein-Barr virus (EBV)',
      'Group A Streptococcus pyogenes',
      'Human parainfluenza virus',
      'SARS-CoV-2 coronavirus'
    ],
    correctAnswer: 'Epstein-Barr virus (EBV)',
    explanation:
      'Infectious mononucleosis is caused by Epstein-Barr virus (EBV) and classically combines exudative pharyngitis with posterior neck lymph node swelling and splenomegaly.'
  },

  // =========================================================================
  // 3. THORAX & HEART (4 Questions)
  // =========================================================================
  {
    id: 'chest-q1',
    region: 'chest',
    system: 'Respiratory System',
    question:
      'Three days after sweeping out a dusty, rodent-infested rural cabin, a 32-year-old develops fever, severe myalgias, and rapidly progressing shortness of breath with non-cardiogenic pulmonary edema. Which condition should be suspected?',
    options: [
      'Hantavirus Pulmonary Syndrome (HPS)',
      'Bronchial Asthma',
      'Chronic Obstructive Pulmonary Disease (COPD)',
      'Essential Hypertension'
    ],
    correctAnswer: 'Hantavirus Pulmonary Syndrome (HPS)',
    explanation:
      'Inhalation of aerosolized deer-mouse droppings or urine can trigger Hantavirus Pulmonary Syndrome, characterized by a febrile myalgic prodrome followed by abrupt pulmonary capillary leak.'
  },
  {
    id: 'chest-q2',
    region: 'chest',
    system: 'Cardiovascular System',
    question:
      'A 59-year-old smoker with hyperlipidemia develops crushing substernal chest pressure radiating to his left jaw and arm, accompanied by diaphoresis and nausea. Which acute event is occurring?',
    options: [
      'Acute Myocardial Infarction (Heart Attack)',
      'Bronchial Asthma',
      'Bacterial Pneumonia',
      'COVID-19 (SARS-CoV-2)'
    ],
    correctAnswer: 'Acute Myocardial Infarction (Heart Attack)',
    explanation:
      'Substernal chest pressure radiating to the left arm or jaw with diaphoresis strongly indicates acute coronary plaque rupture and myocardial ischemia.'
  },
  {
    id: 'chest-q3',
    region: 'chest',
    system: 'Respiratory System',
    question:
      'A 41-year-old presents with fever, dry cough, profound fatigue, and sudden loss of taste and smell (anosmia) two days after attending an indoor conference. Which respiratory illness best fits this presentation?',
    options: [
      'COVID-19 (SARS-CoV-2)',
      'Chronic Obstructive Pulmonary Disease (COPD)',
      'Pulmonary Embolism (PE)',
      'Essential Hypertension'
    ],
    correctAnswer: 'COVID-19 (SARS-CoV-2)',
    explanation:
      'Acute febrile respiratory symptoms accompanied by sudden anosmia/ageusia following indoor aerosol exposure are characteristic of SARS-CoV-2 infection.'
  },
  {
    id: 'chest-q4',
    region: 'chest',
    system: 'Cardiovascular System',
    question:
      'Which great thoracic vessel returns deoxygenated blood from the head, neck, and upper extremities directly into the right atrium of the heart?',
    options: [
      'Superior vena cava',
      'Aortic arch',
      'Esophagus',
      'Diaphragm'
    ],
    correctAnswer: 'Superior vena cava',
    explanation:
      'The superior vena cava drains systemic venous blood from the upper half of the body into the right atrium, whereas the aortic arch distributes oxygenated blood systemically.'
  },

  // =========================================================================
  // 4. ABDOMEN & GI (4 Questions)
  // =========================================================================
  {
    id: 'abdomen-q1',
    region: 'abdomen',
    system: 'Digestive System',
    question:
      'A 21-year-old develops vague periumbilical pain and loss of appetite that migrates over 12 hours to sharp, localized tenderness in the right lower quadrant (McBurney’s point). Which condition is most likely?',
    options: [
      'Acute Appendicitis',
      'Cholecystitis & Gallstones',
      'Peptic Ulcer Disease',
      'Gastroesophageal Reflux Disease (GERD)'
    ],
    correctAnswer: 'Acute Appendicitis',
    explanation:
      'Visceral periumbilical pain migrating to somatic right lower quadrant tenderness with anorexia is the classic clinical progression of acute appendicitis.'
  },
  {
    id: 'abdomen-q2',
    region: 'abdomen',
    system: 'Digestive System',
    question:
      'A 44-year-old woman presents with sharp right upper quadrant pain radiating to her right shoulder blade 45 minutes after eating a fried meal, accompanied by inspiratory arrest on palpation (Murphy’s sign). What is the most likely diagnosis?',
    options: [
      'Cholecystitis & Gallstones',
      'Acute Appendicitis',
      'Celiac Disease',
      'Type 1 Diabetes Mellitus'
    ],
    correctAnswer: 'Cholecystitis & Gallstones',
    explanation:
      'Postprandial right upper quadrant pain triggered by fatty meals (cholecystokinin-induced gallbladder contraction against an obstructed cystic duct) and a positive Murphy’s sign indicate cholecystitis.'
  },
  {
    id: 'abdomen-q3',
    region: 'abdomen',
    system: 'Digestive System',
    question:
      'A 29-year-old with chronic diarrhea, abdominal bloating, and unexplained iron-deficiency anemia shows villous atrophy of the small intestine that resolves completely upon eliminating wheat, barley, and rye. Which condition is this?',
    options: [
      'Celiac Disease',
      'Peptic Ulcer Disease',
      'Gastroesophageal Reflux Disease (GERD)',
      'Viral Hepatitis B & Cirrhosis'
    ],
    correctAnswer: 'Celiac Disease',
    explanation:
      'Celiac disease is an autoimmune enteropathy triggered by gluten proteins in wheat, barley, and rye, leading to duodenal villous blunting and malabsorption.'
  },
  {
    id: 'abdomen-q4',
    region: 'abdomen',
    system: 'Endocrine System',
    question:
      'Which retroperitoneal abdominal organ contains both exocrine acinar cells that secrete digestive enzymes and endocrine Islets of Langerhans that regulate blood glucose?',
    options: [
      'Pancreas',
      'Gallbladder',
      'Spleen',
      'Vermiform appendix'
    ],
    correctAnswer: 'Pancreas',
    explanation:
      'The pancreas performs dual exocrine (amylase, lipase, proteases into the duodenum) and endocrine (insulin and glucagon secretion) functions.'
  },

  // =========================================================================
  // 5. PELVIS & URINARY (4 Questions)
  // =========================================================================
  {
    id: 'pelvis-q1',
    region: 'pelvis',
    system: 'Urinary & Renal System',
    question:
      'A 38-year-old man presents with sudden, agonizing waves of colicky left flank pain radiating toward his groin, restlessness, and microscopic hematuria. Which diagnosis is most likely?',
    options: [
      'Nephrolithiasis (Kidney Stones)',
      'Benign Prostatic Hyperplasia (BPH)',
      'Chronic Kidney Disease (CKD)',
      'Urinary Tract Infection (Cystitis)'
    ],
    correctAnswer: 'Nephrolithiasis (Kidney Stones)',
    explanation:
      'Severe intermittent ("colicky") flank-to-groin pain with hematuria is classic for a renal calculus (kidney stone) migrating down the ureter.'
  },
  {
    id: 'pelvis-q2',
    region: 'pelvis',
    system: 'Urinary & Renal System',
    question:
      'Three days after untreated burning urination and frequency, a 27-year-old woman develops high fever (39.4°C), shaking chills, nausea, and marked right costovertebral angle tenderness. What has developed?',
    options: [
      'Acute Pyelonephritis (Kidney Infection)',
      'Benign Prostatic Hyperplasia (BPH)',
      'Chronic Kidney Disease (CKD)',
      'Nephrolithiasis (Kidney Stones)'
    ],
    correctAnswer: 'Acute Pyelonephritis (Kidney Infection)',
    explanation:
      'Lower urinary tract symptoms progressing to high fever, rigors, and costovertebral angle (flank) tenderness indicate an ascending bacterial infection of the kidney parenchyma.'
  },
  {
    id: 'pelvis-q3',
    region: 'pelvis',
    system: 'Urinary & Renal System',
    question:
      'A 67-year-old man reports progressive urinary hesitancy, a weak stream, sensation of incomplete bladder emptying, and waking three times nightly to urinate without fever or dysuria. Which condition is most consistent?',
    options: [
      'Benign Prostatic Hyperplasia (BPH)',
      'Acute Pyelonephritis (Kidney Infection)',
      'Nephrolithiasis (Kidney Stones)',
      'Urinary Tract Infection (Cystitis)'
    ],
    correctAnswer: 'Benign Prostatic Hyperplasia (BPH)',
    explanation:
      'Age-related non-malignant enlargement of the prostate compresses the prostatic urethra, causing obstructive voiding symptoms (hesitancy, weak stream) and nocturia.'
  },
  {
    id: 'pelvis-q4',
    region: 'pelvis',
    system: 'Urinary & Renal System',
    question:
      'Which paired muscular ducts propel urine via peristalsis from the renal pelvis of each kidney down into the urinary bladder?',
    options: [
      'Ureters',
      'Urethra',
      'Rectum',
      'Seminal vesicles'
    ],
    correctAnswer: 'Ureters',
    explanation:
      'The right and left ureters transport urine from the kidneys to the urinary bladder, whereas the single urethra carries urine from the bladder to the exterior.'
  },

  // =========================================================================
  // 6. UPPER LIMBS (4 Questions)
  // =========================================================================
  {
    id: 'arms-q1',
    region: 'arms',
    system: 'Musculoskeletal System',
    question:
      'A 36-year-old software engineer develops nocturnal numbness and tingling in her thumb, index, and middle fingers that improves when she shakes her hand out. Which condition is most likely?',
    options: [
      'Carpal Tunnel Syndrome',
      'Lateral Epicondylitis (Tennis Elbow)',
      'Rotator Cuff Tendinitis & Tear',
      'Colles Fracture (Distal Radius)'
    ],
    correctAnswer: 'Carpal Tunnel Syndrome',
    explanation:
      'Compression of the median nerve beneath the transverse carpal ligament causes paresthesias in the lateral 3.5 digits, classically worse at night.'
  },
  {
    id: 'arms-q2',
    region: 'arms',
    system: 'Musculoskeletal System',
    question:
      'A 64-year-old woman with osteoporosis slips on wet pavement and breaks her fall with an outstretched hand, immediately developing wrist pain and a dorsal "dinner-fork" deformity. Which injury occurred?',
    options: [
      'Colles Fracture (Distal Radius)',
      'Carpal Tunnel Syndrome',
      'Lateral Epicondylitis (Tennis Elbow)',
      'Rotator Cuff Tendinitis & Tear'
    ],
    correctAnswer: 'Colles Fracture (Distal Radius)',
    explanation:
      'A fall onto an outstretched hand (FOOSH) in an osteoporotic patient frequently causes a dorsally angulated fracture of the distal radius (Colles fracture).'
  },
  {
    id: 'arms-q3',
    region: 'arms',
    system: 'Musculoskeletal System',
    question:
      'A 45-year-old painter reports deep lateral shoulder pain when lifting his arm overhead between 60° and 120° and difficulty sleeping on that side. Which condition best fits this presentation?',
    options: [
      'Rotator Cuff Tendinitis & Tear',
      'Carpal Tunnel Syndrome',
      'Lateral Epicondylitis (Tennis Elbow)',
      'Colles Fracture (Distal Radius)'
    ],
    correctAnswer: 'Rotator Cuff Tendinitis & Tear',
    explanation:
      'Subacromial impingement of the supraspinatus tendon produces a painful abduction arc (60°–120°) and nocturnal pain when lying on the affected shoulder.'
  },
  {
    id: 'arms-q4',
    region: 'arms',
    system: 'Musculoskeletal System',
    question:
      'Which anatomical structure becomes compressed inside the palmar wrist canal in Carpal Tunnel Syndrome?',
    options: [
      'Median nerve',
      'Supraspinatus tendon',
      'Extensor carpi radialis brevis tendon',
      'Distal radius'
    ],
    correctAnswer: 'Median nerve',
    explanation:
      'The median nerve runs alongside nine flexor tendons inside the narrow carpal tunnel; elevated tunnel pressure produces median neuropathy.'
  },

  // =========================================================================
  // 7. LOWER LIMBS (4 Questions)
  // =========================================================================
  {
    id: 'legs-q1',
    region: 'legs',
    system: 'Cardiovascular System',
    question:
      'Three days after a 14-hour international flight, a 47-year-old develops painful unilateral swelling, warmth, and redness in her right calf. Which condition must be ruled out immediately?',
    options: [
      'Deep Vein Thrombosis (DVT)',
      'Plantar Fasciitis',
      'Knee Osteoarthritis',
      'Acute Gout (Podagra)'
    ],
    correctAnswer: 'Deep Vein Thrombosis (DVT)',
    explanation:
      'Prolonged venous stasis during long-haul travel predisposes to lower-extremity deep vein thrombosis, which carries an acute risk of pulmonary embolism.'
  },
  {
    id: 'legs-q2',
    region: 'legs',
    system: 'Musculoskeletal System',
    question:
      'A 54-year-old man wakes up at 3:00 AM with excruciating pain, bright red swelling, and extreme tenderness to even a bedsheet touching his right first metatarsophalangeal (big toe) joint. What is the most likely diagnosis?',
    options: [
      'Acute Gout (Podagra)',
      'Peripheral Artery Disease (PAD)',
      'Plantar Fasciitis',
      'Anterior Cruciate Ligament (ACL) Tear'
    ],
    correctAnswer: 'Acute Gout (Podagra)',
    explanation:
      'Abrupt nocturnal monoarticular inflammation of the first metatarsophalangeal joint (podagra) is caused by monosodium urate crystal deposition in acute gout.'
  },
  {
    id: 'legs-q3',
    region: 'legs',
    system: 'Cardiovascular System',
    question:
      'A 66-year-old long-term smoker reports reproducible cramping pain in his left calf after walking two blocks that resolves completely within 5 minutes of standing still. Which condition causes this?',
    options: [
      'Peripheral Artery Disease (PAD)',
      'Deep Vein Thrombosis (DVT)',
      'Anterior Cruciate Ligament (ACL) Tear',
      'Acute Gout (Podagra)'
    ],
    correctAnswer: 'Peripheral Artery Disease (PAD)',
    explanation:
      'Exertional calf ischemia relieved promptly by rest (intermittent claudication) is the hallmark symptom of atherosclerotic peripheral artery disease.'
  },
  {
    id: 'legs-q4',
    region: 'legs',
    system: 'Musculoskeletal System',
    question:
      'A 39-year-old runner complains of sharp, stabbing pain on the bottom of her heel during her very first steps out of bed each morning that eases slightly after walking around. Which condition is most likely?',
    options: [
      'Plantar Fasciitis',
      'Deep Vein Thrombosis (DVT)',
      'Anterior Cruciate Ligament (ACL) Tear',
      'Peripheral Artery Disease (PAD)'
    ],
    correctAnswer: 'Plantar Fasciitis',
    explanation:
      'First-step morning heel pain caused by microtearing and degeneration of the plantar aponeurosis at the calcaneal tuberosity is classic for plantar fasciitis.'
  }
];