// src/data/diseases.js

export const REGION_THEMES = {
  head: {
    label: 'Head & Brain',
    hex: '#db2777',
    cardBorder: 'border-l-pink-600 hover:border-pink-400',
    badge: 'bg-pink-50 text-pink-700 border-pink-200',
    pill: 'bg-pink-50 text-pink-700',
    headerBg: 'bg-pink-50/70',
    hoverBtn: 'group-hover:bg-pink-600 group-hover:border-pink-600'
  },
  neck: {
    label: 'Neck & Throat',
    hex: '#0891b2',
    cardBorder: 'border-l-cyan-600 hover:border-cyan-400',
    badge: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    pill: 'bg-cyan-50 text-cyan-700',
    headerBg: 'bg-cyan-50/70',
    hoverBtn: 'group-hover:bg-cyan-600 group-hover:border-cyan-600'
  },
  chest: {
    label: 'Thorax & Heart',
    hex: '#dc2626',
    cardBorder: 'border-l-red-600 hover:border-red-400',
    badge: 'bg-red-50 text-red-700 border-red-200',
    pill: 'bg-red-50 text-red-700',
    headerBg: 'bg-red-50/70',
    hoverBtn: 'group-hover:bg-red-600 group-hover:border-red-600'
  },
  abdomen: {
    label: 'Abdomen & GI',
    hex: '#d97706',
    cardBorder: 'border-l-amber-500 hover:border-amber-400',
    badge: 'bg-amber-50 text-amber-800 border-amber-200',
    pill: 'bg-amber-50 text-amber-800',
    headerBg: 'bg-amber-50/70',
    hoverBtn: 'group-hover:bg-amber-600 group-hover:border-amber-600'
  },
  pelvis: {
    label: 'Pelvis & Urinary',
    hex: '#059669',
    cardBorder: 'border-l-emerald-600 hover:border-emerald-400',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    pill: 'bg-emerald-50 text-emerald-700',
    headerBg: 'bg-emerald-50/70',
    hoverBtn: 'group-hover:bg-emerald-600 group-hover:border-emerald-600'
  },
  arms: {
    label: 'Upper Limbs',
    hex: '#2563eb',
    cardBorder: 'border-l-blue-600 hover:border-blue-400',
    badge: 'bg-blue-50 text-blue-700 border-blue-200',
    pill: 'bg-blue-50 text-blue-700',
    headerBg: 'bg-blue-50/70',
    hoverBtn: 'group-hover:bg-blue-600 group-hover:border-blue-600'
  },
  legs: {
    label: 'Lower Limbs',
    hex: '#4f46e5',
    cardBorder: 'border-l-indigo-600 hover:border-indigo-400',
    badge: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    pill: 'bg-indigo-50 text-indigo-700',
    headerBg: 'bg-indigo-50/70',
    hoverBtn: 'group-hover:bg-indigo-600 group-hover:border-indigo-600'
  }
};

export const DISEASES = [
  // =========================================================================
  // 1. HEAD & BRAIN (6 Conditions — Nervous System)
  // =========================================================================
  {
    id: 'migraine',
    name: 'Migraine with Aura',
    region: 'head',
    system: 'Nervous System',
    description:
      'A recurrent neurological headache disorder characterized by unilateral throbbing pain, sensory sensitivity, and transient visual or sensory disturbances.',
    symptoms: ['Throbbing Unilateral Pain', 'Visual Aura (Flashing Lights)', 'Photophobia', 'Nausea'],
    transmission: 'Non-communicable (Neurovascular hyperexcitability with genetic predisposition)',
    riskFactors: ['Family history of migraine', 'Hormonal fluctuations', 'Irregular sleep', 'Bright glare or dietary triggers'],
    prevention: 'Maintain consistent sleep and hydration schedules, identify personal triggers, and use prescribed preventive therapy.',
    sources: [
      { name: 'NINDS Migraine Information', url: 'https://www.ninds.nih.gov/health-information/disorders/migraine' },
      { name: 'Mayo Clinic: Migraine', url: 'https://www.mayoclinic.org/diseases-conditions/migraine-headache/symptoms-causes/syc-20360201' }
    ]
  },
  {
    id: 'ischemic-stroke',
    name: 'Ischemic Stroke',
    region: 'head',
    system: 'Nervous System',
    description:
      'An acute medical emergency occurring when blood flow to part of the brain is blocked by a thrombus or embolus, depriving neurons of oxygen.',
    symptoms: ['Sudden Facial Drooping', 'Unilateral Arm Weakness', 'Slurred Speech', 'Sudden Vision Loss'],
    transmission: 'Non-communicable (Thromboembolic occlusion of cerebral arteries)',
    riskFactors: ['Uncontrolled hypertension', 'Atrial fibrillation', 'Smoking', 'High LDL cholesterol & diabetes'],
    prevention: 'Control blood pressure, manage atrial fibrillation, avoid tobacco, and follow a heart-healthy diet.',
    sources: [
      { name: 'CDC Stroke Facts', url: 'https://www.cdc.gov/stroke/about/index.html' },
      { name: 'NINDS Stroke Overview', url: 'https://www.ninds.nih.gov/health-information/disorders/stroke' }
    ]
  },
  {
    id: 'bacterial-meningitis',
    name: 'Bacterial Meningitis',
    region: 'head',
    system: 'Nervous System',
    description:
      'Rapidly progressing bacterial inflammation of the protective meninges surrounding the brain and spinal cord.',
    symptoms: ['High Fever', 'Stiff Neck (Nuchal Rigidity)', 'Severe Headache', 'Altered Mental Status'],
    transmission: 'Respiratory droplets or close throat secretions (Neisseria meningitidis, Streptococcus pneumoniae)',
    riskFactors: ['Crowded living quarters (dorms)', 'Missed meningococcal/pneumococcal vaccines', 'Immunocompromised status'],
    prevention: 'Routine meningococcal, pneumococcal, and Hib vaccinations; avoid sharing utensils or drinks.',
    sources: [
      { name: 'CDC Bacterial Meningitis', url: 'https://www.cdc.gov/meningitis/about/bacterial-meningitis.html' },
      { name: 'WHO Meningitis Fact Sheet', url: 'https://www.who.int/news-room/fact-sheets/detail/meningitis' }
    ]
  },
  {
    id: 'concussion',
    name: 'Concussion (Mild TBI)',
    region: 'head',
    system: 'Nervous System',
    description:
      'A mild traumatic brain injury induced by biomechanical forces that temporarily disrupt normal cellular brain function.',
    symptoms: ['Post-Traumatic Headache', 'Dizziness & Balance Loss', 'Transient Confusion', 'Sensitivity to Noise'],
    transmission: 'Non-communicable (Blunt head impact or rapid acceleration-deceleration trauma)',
    riskFactors: ['Contact sports participation', 'Falls', 'Motor vehicle collisions', 'Prior concussion history'],
    prevention: 'Wear properly fitted helmets during cycling and contact sports; follow gradual return-to-play protocols.',
    sources: [
      { name: 'CDC HEADS UP Concussion', url: 'https://www.cdc.gov/heads-up/about/index.html' },
      { name: 'Mayo Clinic: Concussion', url: 'https://www.mayoclinic.org/diseases-conditions/concussion/symptoms-causes/syc-20355594' }
    ]
  },
  {
    id: 'alzheimers-disease',
    name: "Alzheimer's Disease",
    region: 'head',
    system: 'Nervous System',
    description:
      'A progressive neurodegenerative disorder marked by cortical atrophy, amyloid-beta plaques, and tau neurofibrillary tangles leading to dementia.',
    symptoms: ['Progressive Memory Loss', 'Disorientation', 'Language Difficulty', 'Impaired Judgment'],
    transmission: 'Non-communicable (Multifactorial neurodegeneration with age and APOE-e4 genetic influence)',
    riskFactors: ['Advancing age (65+)', 'Family history', 'Cardiovascular disease', 'Head trauma history'],
    prevention: 'Regular aerobic exercise, cognitive engagement, blood pressure management, and social activity.',
    sources: [
      { name: "NIA Alzheimer's Fact Sheet", url: 'https://www.nia.nih.gov/health/alzheimers-and-dementia/alzheimers-disease-fact-sheet' },
      { name: "CDC Alzheimer's Overview", url: 'https://www.cdc.gov/alzheimers-dementia/about/alzheimers.html' }
    ]
  },
  {
    id: 'epilepsy',
    name: 'Epilepsy (Seizure Disorder)',
    region: 'head',
    system: 'Nervous System',
    description:
      'A chronic neurological condition characterized by recurrent, unprovoked seizures caused by abnormal synchronous electrical discharges in the brain.',
    symptoms: ['Tonic-Clonic Convulsions', 'Brief Staring Spells', 'Temporary Confusion', 'Postictal Fatigue'],
    transmission: 'Non-communicable (Genetic predisposition, prior stroke, cortical scarring, or head trauma)',
    riskFactors: ['History of traumatic brain injury', 'Prior CNS infection', 'Stroke', 'Family history of epilepsy'],
    prevention: 'Adhere strictly to prescribed anti-seizure medications, avoid sleep deprivation, and limit flashing-light triggers.',
    sources: [
      { name: 'CDC Epilepsy Basics', url: 'https://www.cdc.gov/epilepsy/about/index.html' },
      { name: 'NINDS Epilepsy Information', url: 'https://www.ninds.nih.gov/health-information/disorders/epilepsy' }
    ]
  },

  // =========================================================================
  // 2. NECK & THROAT (5 Conditions — Respiratory & Endocrine Systems)
  // =========================================================================
  {
    id: 'strep-pharyngitis',
    name: 'Streptococcal Pharyngitis (Strep Throat)',
    region: 'neck',
    system: 'Respiratory System',
    description:
      'An acute bacterial infection of the posterior pharynx and tonsils that requires timely treatment to prevent acute rheumatic fever.',
    symptoms: ['Sudden Severe Sore Throat', 'Tonsillar Exudates', 'Swollen Anterior Neck Nodes', 'Fever Without Cough'],
    transmission: 'Direct person-to-person respiratory droplets (Group A Streptococcus pyogenes)',
    riskFactors: ['School-aged children and teens', 'Close contact in classrooms or households', 'Winter/early spring seasons'],
    prevention: 'Frequent handwashing, avoiding sharing cups/utensils, and completing prescribed antibiotic courses.',
    sources: [
      { name: 'CDC Strep Throat', url: 'https://www.cdc.gov/group-a-strep/about/strep-throat.html' },
      { name: 'Mayo Clinic: Strep Throat', url: 'https://www.mayoclinic.org/diseases-conditions/strep-throat/symptoms-causes/syc-20350338' }
    ]
  },
  {
    id: 'croup',
    name: 'Croup (Laryngotracheobronchitis)',
    region: 'neck',
    system: 'Respiratory System',
    description:
      'A viral upper airway infection causing subglottic swelling beneath the vocal cords, primarily affecting young children.',
    symptoms: ['Seal-Like Barking Cough', 'Inspiratory Stridor', 'Hoarse Voice', 'Symptoms Worse at Night'],
    transmission: 'Airborne respiratory droplets and contaminated surfaces (Human parainfluenza virus)',
    riskFactors: ['Age 6 months to 3 years', 'Fall and winter seasons', 'Daycare exposure'],
    prevention: 'Hand hygiene, disinfecting shared toys, and keeping children away from active respiratory infections.',
    sources: [
      { name: 'MedlinePlus: Croup', url: 'https://medlineplus.gov/ency/article/000959.htm' },
      { name: 'Mayo Clinic: Croup', url: 'https://www.mayoclinic.org/diseases-conditions/croup/symptoms-causes/syc-20350348' }
    ]
  },
  {
    id: 'infectious-mononucleosis',
    name: 'Infectious Mononucleosis (EBV)',
    region: 'neck',
    system: 'Respiratory System',
    description:
      'A viral syndrome causing severe exudative pharyngitis, profound fatigue, and prominent posterior cervical lymph node enlargement.',
    symptoms: ['Severe Pharyngitis', 'Posterior Neck Lymphadenopathy', 'Profound Fatigue', 'Splenomegaly'],
    transmission: 'Saliva and oral secretions ("kissing disease" — Epstein-Barr virus)',
    riskFactors: ['Adolescents and young adults', 'Sharing drinks or utensils', 'Close group living'],
    prevention: 'Avoid sharing beverages or personal items; avoid contact sports during recovery to prevent splenic rupture.',
    sources: [
      { name: 'CDC About Mononucleosis', url: 'https://www.cdc.gov/epstein-barr/about/mononucleosis.html' },
      { name: 'Mayo Clinic: Mononucleosis', url: 'https://www.mayoclinic.org/diseases-conditions/mononucleosis/symptoms-causes/syc-20350328' }
    ]
  },
  {
    id: 'hypothyroidism',
    name: "Hypothyroidism (Hashimoto's)",
    region: 'neck',
    system: 'Endocrine System',
    description:
      'An endocrine disorder in which the thyroid gland fails to produce adequate thyroid hormones, slowing systemic basal metabolism.',
    symptoms: ['Cold Intolerance', 'Unexplained Weight Gain', 'Chronic Fatigue', 'Dry Skin & Constipation'],
    transmission: 'Non-communicable (Autoimmune thyroiditis, iodine deficiency, or post-thyroid surgery)',
    riskFactors: ['Female sex', 'Family history of autoimmune disease', 'Prior neck radiation or thyroid surgery'],
    prevention: 'Regular thyroid function screening in high-risk individuals and daily levothyroxine hormone replacement.',
    sources: [
      { name: 'NIDDK Hypothyroidism', url: 'https://www.niddk.nih.gov/health-information/endocrine-diseases/hypothyroidism' },
      { name: 'Mayo Clinic: Hypothyroidism', url: 'https://www.mayoclinic.org/diseases-conditions/hypothyroidism/symptoms-causes/syc-20350284' }
    ]
  },
  {
    id: 'hyperthyroidism',
    name: "Hyperthyroidism (Graves' Disease)",
    region: 'neck',
    system: 'Endocrine System',
    description:
      'Excessive synthesis and secretion of thyroid hormones (T3 and T4) that accelerates cellular metabolism and sympathetic nervous activity.',
    symptoms: ['Heat Intolerance', 'Weight Loss with High Appetite', 'Palpitations & Tremor', 'Anterior Neck Goiter'],
    transmission: 'Non-communicable (Autoimmune TSH-receptor antibodies in Graves disease or toxic thyroid nodules)',
    riskFactors: ['Family history of Graves disease', 'Female sex', 'Smoking (increases Graves ophthalmopathy risk)'],
    prevention: 'Avoid smoking and excess iodine supplements; monitor thyroid panels when symptomatic.',
    sources: [
      { name: 'NIDDK Hyperthyroidism', url: 'https://www.niddk.nih.gov/health-information/endocrine-diseases/hyperthyroidism' },
      { name: 'Mayo Clinic: Hyperthyroidism', url: 'https://www.mayoclinic.org/diseases-conditions/hyperthyroidism/symptoms-causes/syc-20373659' }
    ]
  },

  // =========================================================================
  // 3. THORAX & HEART (8 Conditions — Respiratory & Cardiovascular Systems)
  // =========================================================================
  {
    id: 'covid-19',
    name: 'COVID-19 (SARS-CoV-2)',
    region: 'chest',
    system: 'Respiratory System',
    description:
      'A contagious viral respiratory illness caused by the SARS-CoV-2 coronavirus that ranges from mild upper respiratory symptoms to severe viral pneumonia.',
    symptoms: ['Fever & Chills', 'Dry Cough & Shortness of Breath', 'Loss of Taste or Smell', 'Fatigue & Myalgias'],
    transmission: 'Airborne respiratory droplets and aerosols exhaled by infected individuals (SARS-CoV-2)',
    riskFactors: ['Older age (65+)', 'Chronic lung, heart, or kidney disease', 'Immunocompromised status', 'Unvaccinated status'],
    prevention: 'Stay up to date with COVID-19 vaccinations, improve indoor ventilation, and practice hand hygiene.',
    sources: [
      { name: 'CDC About COVID-19', url: 'https://www.cdc.gov/covid/about/index.html' },
      { name: 'WHO Coronavirus (COVID-19)', url: 'https://www.who.int/health-topics/coronavirus' }
    ]
  },
  {
    id: 'hantavirus-hps',
    name: 'Hantavirus Pulmonary Syndrome (HPS)',
    region: 'chest',
    system: 'Respiratory System',
    description:
      'A severe, potentially fatal cardiopulmonary disease caused by rodent-borne hantaviruses that trigger rapid pulmonary capillary leakage.',
    symptoms: ['Fever & Severe Muscle Aches', 'Rapid Onset Dyspnea', 'Cough & Chest Tightness', 'Pulmonary Edema'],
    transmission: 'Inhalation of aerosolized viral particles from dried rodent urine, droppings, or saliva (e.g., deer mice)',
    riskFactors: ['Cleaning dusty sheds, cabins, or barns', 'Rural agricultural or forestry work', 'Rodent infestation in homes'],
    prevention: 'Seal rodent entry points, ventilate closed spaces before cleaning, and wet-mop droppings with disinfectant instead of sweeping.',
    sources: [
      { name: 'CDC Hantavirus Overview', url: 'https://www.cdc.gov/hantavirus/about/index.html' },
      { name: 'Mayo Clinic: Hantavirus', url: 'https://www.mayoclinic.org/diseases-conditions/hantavirus-pulmonary-syndrome/symptoms-causes/syc-20351838' }
    ]
  },
  {
    id: 'bronchial-asthma',
    name: 'Bronchial Asthma',
    region: 'chest',
    system: 'Respiratory System',
    description:
      'A chronic inflammatory airway disease characterized by variable airflow obstruction, bronchial hyperresponsiveness, and recurrent wheezing.',
    symptoms: ['Expiratory Wheezing', 'Shortness of Breath', 'Chest Tightness', 'Nocturnal Cough'],
    transmission: 'Non-communicable (Genetic atopy combined with environmental allergen or exercise triggers)',
    riskFactors: ['Allergic rhinitis or eczema', 'Family history of asthma', 'Air pollution or tobacco smoke exposure'],
    prevention: 'Avoid known triggers, use daily inhaled corticosteroids as prescribed, and keep a rescue bronchodilator accessible.',
    sources: [
      { name: 'CDC Asthma Basics', url: 'https://www.cdc.gov/asthma/about/index.html' },
      { name: 'NHLBI Asthma Guide', url: 'https://www.nhlbi.nih.gov/health/asthma' }
    ]
  },
  {
    id: 'bacterial-pneumonia',
    name: 'Bacterial Pneumonia',
    region: 'chest',
    system: 'Respiratory System',
    description:
      'An acute infection of the lung parenchyma causing alveoli to fill with inflammatory exudate and pus, impairing oxygen exchange.',
    symptoms: ['Productive Rust-Colored Sputum', 'High Fever & Rigors', 'Pleuritic Chest Pain', 'Localized Lung Crackles'],
    transmission: 'Aspiration of upper airway flora or respiratory droplets (Streptococcus pneumoniae)',
    riskFactors: ['Age over 65 or under 2', 'Smoking', 'Chronic COPD or heart failure', 'Recent viral influenza'],
    prevention: 'Pneumococcal and annual influenza vaccinations, smoking cessation, and hand hygiene.',
    sources: [
      { name: 'CDC Pneumonia Information', url: 'https://www.cdc.gov/pneumonia/about/index.html' },
      { name: 'NHLBI Pneumonia', url: 'https://www.nhlbi.nih.gov/health/pneumonia' }
    ]
  },
  {
    id: 'copd',
    name: 'Chronic Obstructive Pulmonary Disease (COPD)',
    region: 'chest',
    system: 'Respiratory System',
    description:
      'Progressive, irreversible airflow limitation encompassing emphysema and chronic bronchitis due to chronic airway and alveolar damage.',
    symptoms: ['Progressive Exertional Dyspnea', 'Chronic Productive Cough', 'Barrel Chest', 'Wheezing'],
    transmission: 'Non-communicable (Long-term inhalation of noxious particles, primarily cigarette smoke)',
    riskFactors: ['Long-term tobacco smoking', 'Occupational dust/chemical exposure', 'Alpha-1 antitrypsin deficiency'],
    prevention: 'Smoking cessation is the single most effective intervention to slow lung function decline.',
    sources: [
      { name: 'CDC About COPD', url: 'https://www.cdc.gov/copd/about/index.html' },
      { name: 'NHLBI COPD Overview', url: 'https://www.nhlbi.nih.gov/health/copd' }
    ]
  },
  {
    id: 'essential-hypertension',
    name: 'Essential Hypertension',
    region: 'chest',
    system: 'Cardiovascular System',
    description:
      'Persistently elevated systemic arterial blood pressure (≥130/80 mmHg) that increases cardiac workload and accelerates atherosclerosis.',
    symptoms: ['Often Asymptomatic ("Silent Killer")', 'Morning Occipital Headaches', 'Exertional Dyspnea', 'Blurred Vision (Severe)'],
    transmission: 'Non-communicable (Multifactorial vascular resistance, renal sodium retention, and genetics)',
    riskFactors: ['High dietary sodium', 'Sedentary lifestyle & obesity', 'Family history', 'Chronic stress & alcohol use'],
    prevention: 'Follow the DASH diet, limit sodium (<2,300 mg/day), exercise regularly, and monitor home blood pressure.',
    sources: [
      { name: 'CDC High Blood Pressure', url: 'https://www.cdc.gov/high-blood-pressure/about/index.html' },
      { name: 'AHA Understanding Blood Pressure', url: 'https://www.heart.org/en/health-topics/high-blood-pressure' }
    ]
  },
  {
    id: 'myocardial-infarction',
    name: 'Acute Myocardial Infarction (Heart Attack)',
    region: 'chest',
    system: 'Cardiovascular System',
    description:
      'Ischemic necrosis of heart muscle caused by acute plaque rupture and thrombotic occlusion of a coronary artery.',
    symptoms: ['Crushing Substernal Chest Pain', 'Radiation to Left Arm or Jaw', 'Diaphoresis (Cold Sweat)', 'Acute Shortness of Breath'],
    transmission: 'Non-communicable (Coronary artery atherosclerosis and acute thrombosis)',
    riskFactors: ['Hypertension', 'Hyperlipidemia', 'Smoking', 'Diabetes mellitus & family history'],
    prevention: 'Control cholesterol and blood pressure, avoid tobacco, exercise regularly, and seek immediate emergency care for chest pain.',
    sources: [
      { name: 'CDC Heart Attack Symptoms', url: 'https://www.cdc.gov/heart-disease/about/heart-attack.html' },
      { name: 'NHLBI Heart Attack', url: 'https://www.nhlbi.nih.gov/health/heart-attack' }
    ]
  },
  {
    id: 'pulmonary-embolism',
    name: 'Pulmonary Embolism (PE)',
    region: 'chest',
    system: 'Cardiovascular System',
    description:
      'Sudden blockage of one or more pulmonary arteries, most commonly by a blood clot dislodged from a deep leg vein.',
    symptoms: ['Sudden Unexplained Dyspnea', 'Sharp Pleuritic Chest Pain', 'Tachycardia', 'Hemoptysis'],
    transmission: 'Non-communicable (Venous thromboembolism originating from lower-extremity DVT)',
    riskFactors: ['Recent surgery or prolonged immobility', 'Active malignancy', 'Estrogen therapy', 'Inherited thrombophilia'],
    prevention: 'Early ambulation after surgery, leg movement on long flights, and prophylactic anticoagulation when indicated.',
    sources: [
      { name: 'CDC Venous Thromboembolism', url: 'https://www.cdc.gov/blood-clots/about/index.html' },
      { name: 'NHLBI Pulmonary Embolism', url: 'https://www.nhlbi.nih.gov/health/venous-thromboembolism' }
    ]
  },

  // =========================================================================
  // 4. ABDOMEN & GI (8 Conditions — Digestive & Endocrine Systems)
  // =========================================================================
  {
    id: 'gerd',
    name: 'Gastroesophageal Reflux Disease (GERD)',
    region: 'abdomen',
    system: 'Digestive System',
    description:
      'Chronic retrograde flow of acidic gastric contents into the esophagus due to transient relaxation of the lower esophageal sphincter.',
    symptoms: ['Burning Heartburn', 'Acid Regurgitation', 'Worse After Meals or Lying Flat', 'Chronic Dry Cough'],
    transmission: 'Non-communicable (Lower esophageal sphincter incompetence or hiatal hernia)',
    riskFactors: ['Obesity', 'Large late-night meals', 'Smoking & alcohol', 'Pregnancy'],
    prevention: 'Eat smaller meals, avoid lying down within 3 hours of eating, elevate the head of the bed, and limit trigger foods.',
    sources: [
      { name: 'NIDDK Acid Reflux & GERD', url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-adults' },
      { name: 'Mayo Clinic: GERD', url: 'https://www.mayoclinic.org/diseases-conditions/gerd/symptoms-causes/syc-20361940' }
    ]
  },
  {
    id: 'acute-appendicitis',
    name: 'Acute Appendicitis',
    region: 'abdomen',
    system: 'Digestive System',
    description:
      'Acute inflammation of the vermiform appendix caused by luminal obstruction, carrying high risk of perforation if untreated.',
    symptoms: ['Periumbilical Pain Shifting to RLQ', 'Loss of Appetite (Anorexia)', 'Low-Grade Fever', 'Rebound Tenderness'],
    transmission: 'Non-communicable (Obstruction by fecalith or lymphoid hyperplasia followed by bacterial overgrowth)',
    riskFactors: ['Ages 10 to 30', 'Low-fiber diet', 'Recent gastrointestinal infection'],
    prevention: 'No guaranteed prevention; prompt surgical evaluation for migrating right lower quadrant pain prevents rupture.',
    sources: [
      { name: 'NIDDK Appendicitis', url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/appendicitis' },
      { name: 'Mayo Clinic: Appendicitis', url: 'https://www.mayoclinic.org/diseases-conditions/appendicitis/symptoms-causes/syc-20369543' }
    ]
  },
  {
    id: 'peptic-ulcer-disease',
    name: 'Peptic Ulcer Disease',
    region: 'abdomen',
    system: 'Digestive System',
    description:
      'Open mucosal erosions in the stomach lining or proximal duodenum caused by breakdown of protective mucus against gastric acid.',
    symptoms: ['Burning Epigastric Pain', 'Bloating & Early Satiety', 'Nausea', 'Dark Tarry Stools (If Bleeding)'],
    transmission: 'Helicobacter pylori bacterial transmission (oral-oral/fecal-oral) or chronic NSAID medication use',
    riskFactors: ['H. pylori infection', 'Frequent NSAID use (ibuprofen, naproxen)', 'Smoking & heavy alcohol intake'],
    prevention: 'Eradicate H. pylori when detected, minimize unnecessary NSAIDs, and avoid smoking.',
    sources: [
      { name: 'NIDDK Peptic Ulcers', url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/peptic-ulcers-stomach-ulcers' },
      { name: 'Mayo Clinic: Peptic Ulcer', url: 'https://www.mayoclinic.org/diseases-conditions/peptic-ulcer/symptoms-causes/syc-20354223' }
    ]
  },
  {
    id: 'cholecystitis-gallstones',
    name: 'Cholecystitis & Gallstones',
    region: 'abdomen',
    system: 'Digestive System',
    description:
      'Inflammation of the gallbladder typically triggered when a cholesterol or pigment gallstone obstructs the cystic duct.',
    symptoms: ['Right Upper Quadrant Pain', 'Pain After Fatty Meals', 'Radiation to Right Shoulder', 'Positive Murphy Sign'],
    transmission: 'Non-communicable (Supersaturation of bile with cholesterol causing stone formation)',
    riskFactors: ['Female sex', 'Age over 40', 'Obesity or rapid weight loss', 'Pregnancy'],
    prevention: 'Maintain a healthy weight gradually, eat high-fiber meals, and limit saturated fats.',
    sources: [
      { name: 'NIDDK Gallstones', url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/gallstones' },
      { name: 'Mayo Clinic: Cholecystitis', url: 'https://www.mayoclinic.org/diseases-conditions/cholecystitis/symptoms-causes/syc-20364867' }
    ]
  },
  {
    id: 'celiac-disease',
    name: 'Celiac Disease',
    region: 'abdomen',
    system: 'Digestive System',
    description:
      'An autoimmune enteropathy in which dietary gluten triggers T-cell-mediated destruction of small intestinal absorptive villi.',
    symptoms: ['Chronic Diarrhea', 'Abdominal Bloating', 'Unintended Weight Loss', 'Iron-Deficiency Anemia'],
    transmission: 'Non-communicable (Autoimmune reaction to wheat, barley, and rye gluten in HLA-DQ2/DQ8 individuals)',
    riskFactors: ['First-degree relative with celiac disease', 'Type 1 diabetes', 'Autoimmune thyroid disease'],
    prevention: 'Strict, lifelong adherence to a gluten-free diet allows intestinal villi to heal completely.',
    sources: [
      { name: 'NIDDK Celiac Disease', url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/celiac-disease' },
      { name: 'Mayo Clinic: Celiac Disease', url: 'https://www.mayoclinic.org/diseases-conditions/celiac-disease/symptoms-causes/syc-20352220' }
    ]
  },
  {
    id: 'hepatitis-cirrhosis',
    name: 'Viral Hepatitis B & Cirrhosis',
    region: 'abdomen',
    system: 'Digestive System',
    description:
      'Chronic hepatocellular inflammation leading to progressive hepatic fibrosis, portal hypertension, and impaired liver detoxification.',
    symptoms: ['Jaundice (Yellow Skin/Sclera)', 'Abdominal Ascites', 'Right Upper Quadrant Discomfort', 'Fatigue & Easy Bruising'],
    transmission: 'Bloodborne and bodily fluid exposure (Hepatitis B/C) or chronic metabolic/alcohol injury',
    riskFactors: ['Unvaccinated status for Hepatitis B', 'Unsterile needles', 'Chronic heavy alcohol use', 'Fatty liver disease'],
    prevention: 'Hepatitis B vaccination, safe needle practices, and limiting alcohol intake.',
    sources: [
      { name: 'CDC Hepatitis B Basics', url: 'https://www.cdc.gov/hepatitis-b/about/index.html' },
      { name: 'NIDDK Cirrhosis', url: 'https://www.niddk.nih.gov/health-information/liver-disease/cirrhosis' }
    ]
  },
  {
    id: 'type-1-diabetes',
    name: 'Type 1 Diabetes Mellitus',
    region: 'abdomen',
    system: 'Endocrine System',
    description:
      'An autoimmune disorder in which cytotoxic T-cells destroy insulin-producing pancreatic beta cells, leading to absolute insulin deficiency.',
    symptoms: ['Excessive Thirst (Polydipsia)', 'Frequent Urination (Polyuria)', 'Rapid Weight Loss', 'Fatigue & Ketosis'],
    transmission: 'Non-communicable (Autoimmune pancreatic beta-cell destruction)',
    riskFactors: ['Family history of Type 1 diabetes', 'Presence of islet autoantibodies', 'Childhood or young adult onset'],
    prevention: 'Cannot currently be prevented; lifelong exogenous insulin therapy and glucose monitoring prevent complications.',
    sources: [
      { name: 'CDC Type 1 Diabetes', url: 'https://www.cdc.gov/diabetes/about/about-type-1-diabetes.html' },
      { name: 'NIDDK Type 1 Diabetes', url: 'https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes/type-1-diabetes' }
    ]
  },
  {
    id: 'type-2-diabetes',
    name: 'Type 2 Diabetes Mellitus',
    region: 'abdomen',
    system: 'Endocrine System',
    description:
      'A metabolic disorder characterized by peripheral insulin resistance and progressive pancreatic beta-cell dysfunction causing chronic hyperglycemia.',
    symptoms: ['Increased Thirst & Urination', 'Slow-Healing Wounds', 'Blurred Vision', 'Tingling in Hands or Feet'],
    transmission: 'Non-communicable (Insulin resistance driven by genetics and metabolic factors)',
    riskFactors: ['Overweight or central obesity', 'Physical inactivity', 'Family history of diabetes', 'History of gestational diabetes'],
    prevention: 'Regular physical activity (150 min/week), balanced whole-food nutrition, and modest weight management.',
    sources: [
      { name: 'CDC Type 2 Diabetes', url: 'https://www.cdc.gov/diabetes/about/about-type-2-diabetes.html' },
      { name: 'NIDDK Type 2 Diabetes', url: 'https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes/type-2-diabetes' }
    ]
  },

  // =========================================================================
  // 5. PELVIS & URINARY (5 Conditions — Urinary & Renal System)
  // =========================================================================
  {
    id: 'urinary-tract-infection',
    name: 'Urinary Tract Infection (Cystitis)',
    region: 'pelvis',
    system: 'Urinary & Renal System',
    description:
      'A localized bacterial infection of the urinary bladder mucosa causing acute irritative voiding symptoms.',
    symptoms: ['Painful Urination (Dysuria)', 'Urinary Frequency & Urgency', 'Suprapubic Pressure', 'Cloudy or Strong-Smelling Urine'],
    transmission: 'Non-communicable ascending urethral colonization (most commonly Escherichia coli)',
    riskFactors: ['Female anatomy (shorter urethra)', 'Dehydration', 'Sexual activity', 'Incomplete bladder emptying'],
    prevention: 'Stay well hydrated, avoid delaying urination, and practice proper perineal hygiene.',
    sources: [
      { name: 'CDC Urinary Tract Infection', url: 'https://www.cdc.gov/uti/about/index.html' },
      { name: 'NIDDK Bladder Infection', url: 'https://www.niddk.nih.gov/health-information/urologic-diseases/bladder-infection-uti-in-adults' }
    ]
  },
  {
    id: 'kidney-stones',
    name: 'Nephrolithiasis (Kidney Stones)',
    region: 'pelvis',
    system: 'Urinary & Renal System',
    description:
      'Crystalline mineral deposits (most often calcium oxalate) formed in the renal pelvis that trigger intense colicky pain when passing through the ureter.',
    symptoms: ['Severe Colicky Flank Pain', 'Pain Radiating to Groin', 'Visible or Microscopic Hematuria', 'Nausea & Restlessness'],
    transmission: 'Non-communicable (Urinary supersaturation of stone-forming salts due to low urine volume)',
    riskFactors: ['Chronic dehydration', 'High-sodium or high-oxalate diet', 'Personal or family history of stones'],
    prevention: 'Drink enough water to produce at least 2 liters of pale urine daily and moderate sodium intake.',
    sources: [
      { name: 'NIDDK Kidney Stones', url: 'https://www.niddk.nih.gov/health-information/urologic-diseases/kidney-stones' },
      { name: 'Mayo Clinic: Kidney Stones', url: 'https://www.mayoclinic.org/diseases-conditions/kidney-stones/symptoms-causes/syc-20355755' }
    ]
  },
  {
    id: 'acute-pyelonephritis',
    name: 'Acute Pyelonephritis (Kidney Infection)',
    region: 'pelvis',
    system: 'Urinary & Renal System',
    description:
      'An ascending bacterial infection reaching the renal pelvis and kidney parenchyma, causing systemic illness.',
    symptoms: ['High Fever & Chills', 'Flank / Costovertebral Angle Tenderness', 'Dysuria & Frequency', 'Nausea & Vomiting'],
    transmission: 'Ascending lower urinary tract bacterial infection or bloodstream seeding',
    riskFactors: ['Untreated cystitis', 'Urinary tract obstruction (stones or BPH)', 'Pregnancy', 'Diabetes'],
    prevention: 'Treat lower urinary tract infections promptly and maintain adequate daily fluid intake.',
    sources: [
      { name: 'NIDDK Kidney Infection', url: 'https://www.niddk.nih.gov/health-information/urologic-diseases/kidney-infection-pyelonephritis' },
      { name: 'Mayo Clinic: Kidney Infection', url: 'https://www.mayoclinic.org/diseases-conditions/kidney-infection/symptoms-causes/syc-20353387' }
    ]
  },
  {
    id: 'chronic-kidney-disease',
    name: 'Chronic Kidney Disease (CKD)',
    region: 'pelvis',
    system: 'Urinary & Renal System',
    description:
      'Gradual, irreversible loss of nephron filtration capacity over months or years, leading to fluid, electrolyte, and waste retention.',
    symptoms: ['Peripheral Ankle Edema', 'Persistent Fatigue (Anemia)', 'Foamy Urine (Proteinuria)', 'Decreased Urine Output (Late)'],
    transmission: 'Non-communicable (Progressive glomerular damage from diabetes or hypertension)',
    riskFactors: ['Diabetes mellitus', 'Uncontrolled hypertension', 'Polycystic kidney disease', 'Chronic NSAID overuse'],
    prevention: 'Maintain optimal blood glucose and blood pressure control and avoid nephrotoxic medications.',
    sources: [
      { name: 'CDC Chronic Kidney Disease', url: 'https://www.cdc.gov/kidney-disease/about/index.html' },
      { name: 'NIDDK Chronic Kidney Disease', url: 'https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd' }
    ]
  },
  {
    id: 'benign-prostatic-hyperplasia',
    name: 'Benign Prostatic Hyperplasia (BPH)',
    region: 'pelvis',
    system: 'Urinary & Renal System',
    description:
      'Non-cancerous age-related enlargement of the prostate gland that narrows the prostatic urethra and impedes bladder emptying.',
    symptoms: ['Weak Urinary Stream', 'Hesitancy Starting Urination', 'Nocturia (Nighttime Voiding)', 'Incomplete Emptying'],
    transmission: 'Non-communicable (Dihydrotestosterone-mediated stromal and epithelial proliferation)',
    riskFactors: ['Male sex', 'Age over 50', 'Family history of BPH'],
    prevention: 'Limit evening fluid and caffeine intake, avoid decongestants that tighten bladder neck muscles, and get routine checkups.',
    sources: [
      { name: 'NIDDK Prostate Enlargement (BPH)', url: 'https://www.niddk.nih.gov/health-information/urologic-diseases/prostate-problems/prostate-enlargement-benign-prostatic-hyperplasia' },
      { name: 'Mayo Clinic: BPH', url: 'https://www.mayoclinic.org/diseases-conditions/benign-prostatic-hyperplasia/symptoms-causes/syc-20370087' }
    ]
  },

  // =========================================================================
  // 6. UPPER LIMBS / ARMS (4 Conditions — Musculoskeletal System)
  // =========================================================================
  {
    id: 'carpal-tunnel-syndrome',
    name: 'Carpal Tunnel Syndrome',
    region: 'arms',
    system: 'Musculoskeletal System',
    description:
      'Compression of the median nerve as it passes beneath the transverse carpal ligament at the palmar wrist.',
    symptoms: ['Numbness in Thumb, Index & Middle Fingers', 'Nocturnal Wrist Pain', 'Weak Grip Strength', 'Positive Phalen Sign'],
    transmission: 'Non-communicable (Repetitive wrist flexion, tendon sheath swelling, or fluid retention)',
    riskFactors: ['Repetitive keyboard/tool use', 'Pregnancy', 'Hypothyroidism', 'Rheumatoid arthritis'],
    prevention: 'Maintain neutral wrist ergonomics, take frequent stretch breaks, and use nocturnal wrist splints.',
    sources: [
      { name: 'NINDS Carpal Tunnel Syndrome', url: 'https://www.ninds.nih.gov/health-information/disorders/carpal-tunnel-syndrome' },
      { name: 'Mayo Clinic: Carpal Tunnel', url: 'https://www.mayoclinic.org/diseases-conditions/carpal-tunnel-syndrome/symptoms-causes/syc-20355603' }
    ]
  },
  {
    id: 'rotator-cuff-injury',
    name: 'Rotator Cuff Tendinitis & Tear',
    region: 'arms',
    system: 'Musculoskeletal System',
    description:
      'Inflammation or partial/full-thickness tearing of the shoulder stabilizing tendons (most commonly the supraspinatus).',
    symptoms: ['Painful Arc During Arm Abduction', 'Pain Lying on Affected Shoulder', 'Weakness Lifting Overhead', 'Dull Deep Shoulder Ache'],
    transmission: 'Non-communicable (Repetitive overhead impingement or acute fall onto an outstretched arm)',
    riskFactors: ['Overhead sports (swimming, tennis, baseball)', 'Carpentry or painting', 'Age over 40'],
    prevention: 'Strengthen scapular and rotator cuff muscles evenly and avoid sudden spikes in overhead lifting.',
    sources: [
      { name: 'AAOS Rotator Cuff Tears', url: 'https://orthoinfo.aaos.org/en/diseases--conditions/rotator-cuff-tears/' },
      { name: 'Mayo Clinic: Rotator Cuff Injury', url: 'https://www.mayoclinic.org/diseases-conditions/rotator-cuff-injury/symptoms-causes/syc-20350225' }
    ]
  },
  {
    id: 'lateral-epicondylitis',
    name: 'Lateral Epicondylitis (Tennis Elbow)',
    region: 'arms',
    system: 'Musculoskeletal System',
    description:
      'Overuse tendinopathy of the forearm wrist extensor muscles at their origin on the lateral epicondyle of the humerus.',
    symptoms: ['Outer Elbow Point Tenderness', 'Pain Gripping or Shaking Hands', 'Pain Extending Wrist Against Resistance'],
    transmission: 'Non-communicable (Repetitive microtrauma to the extensor carpi radialis brevis tendon)',
    riskFactors: ['Racquet sports', 'Repetitive screwdriver or mouse use', 'Ages 30 to 50'],
    prevention: 'Use proper lifting mechanics, ergonomic tool grips, and eccentric forearm strengthening exercises.',
    sources: [
      { name: 'AAOS Tennis Elbow', url: 'https://orthoinfo.aaos.org/en/diseases--conditions/tennis-elbow-lateral-epicondylitis/' },
      { name: 'Mayo Clinic: Tennis Elbow', url: 'https://www.mayoclinic.org/diseases-conditions/tennis-elbow/symptoms-causes/syc-20351987' }
    ]
  },
  {
    id: 'colles-fracture',
    name: 'Colles Fracture (Distal Radius)',
    region: 'arms',
    system: 'Musculoskeletal System',
    description:
      'A fracture of the distal radius in the forearm with dorsal angulation, classically producing a "dinner-fork" wrist deformity.',
    symptoms: ['Immediate Wrist Pain & Swelling', 'Dorsal Dinner-Fork Deformity', 'Inability to Bear Weight on Hand', 'Focal Radius Tenderness'],
    transmission: 'Non-communicable (Fall onto an outstretched hand — FOOSH trauma)',
    riskFactors: ['Osteoporosis', 'Postmenopausal women', 'High-impact falls on ice or sports'],
    prevention: 'Screen and treat osteoporosis, maintain home fall-prevention measures, and wear wrist guards during skating/snowboarding.',
    sources: [
      { name: 'AAOS Distal Radius Fractures', url: 'https://orthoinfo.aaos.org/en/diseases--conditions/distal-radius-fractures-broken-wrist/' },
      { name: 'MedlinePlus: Wrist Fractures', url: 'https://medlineplus.gov/wristinjuriesanddisorders.html' }
    ]
  },

  // =========================================================================
  // 7. LOWER LIMBS / LEGS (6 Conditions — Cardiovascular & Musculoskeletal)
  // =========================================================================
  {
    id: 'deep-vein-thrombosis',
    name: 'Deep Vein Thrombosis (DVT)',
    region: 'legs',
    system: 'Cardiovascular System',
    description:
      'Formation of a blood clot within a deep vein of the lower extremity, carrying a serious risk of embolizing to the lungs.',
    symptoms: ['Unilateral Calf Swelling', 'Deep Calf Aching or Cramping', 'Localized Skin Warmth', 'Erythema Over Affected Vein'],
    transmission: 'Non-communicable (Virchow triad: venous stasis, endothelial injury, hypercoagulability)',
    riskFactors: ['Long-haul flights or bed rest', 'Recent orthopedic surgery', 'Smoking & oral contraceptives', 'Active cancer'],
    prevention: 'Walk and flex calf muscles every 1–2 hours during travel, stay hydrated, and wear graduated compression stockings if advised.',
    sources: [
      { name: 'CDC Deep Vein Thrombosis', url: 'https://www.cdc.gov/blood-clots/about/index.html' },
      { name: 'Mayo Clinic: DVT', url: 'https://www.mayoclinic.org/diseases-conditions/deep-vein-thrombosis/symptoms-causes/syc-20352557' }
    ]
  },
  {
    id: 'peripheral-artery-disease',
    name: 'Peripheral Artery Disease (PAD)',
    region: 'legs',
    system: 'Cardiovascular System',
    description:
      'Atherosclerotic narrowing of peripheral arteries supplying the legs, restricting oxygenated blood flow to lower-extremity muscles.',
    symptoms: ['Intermittent Claudication (Calf Pain Walking)', 'Pain Relieved by Rest', 'Cool Shiny Skin on Feet', 'Diminished Pedal Pulses'],
    transmission: 'Non-communicable (Systemic atherosclerosis of the iliac, femoral, and popliteal arteries)',
    riskFactors: ['Cigarette smoking', 'Diabetes mellitus', 'Hypertension', 'High cholesterol'],
    prevention: 'Complete smoking cessation, supervised walking therapy, and lipid/blood pressure management.',
    sources: [
      { name: 'CDC Peripheral Arterial Disease', url: 'https://www.cdc.gov/heart-disease/about/peripheral-arterial-disease.html' },
      { name: 'NHLBI Peripheral Artery Disease', url: 'https://www.nhlbi.nih.gov/health/peripheral-artery-disease' }
    ]
  },
  {
    id: 'knee-osteoarthritis',
    name: 'Knee Osteoarthritis',
    region: 'legs',
    system: 'Musculoskeletal System',
    description:
      'Degenerative breakdown of articular cartilage and subchondral bone remodeling in the knee joint.',
    symptoms: ['Activity-Related Knee Pain', 'Brief Morning Stiffness (<30 min)', 'Joint Crepitus (Grinding)', 'Bony Joint Enlargement'],
    transmission: 'Non-communicable (Mechanical wear-and-tear and age-related cartilage degeneration)',
    riskFactors: ['Advancing age', 'Excess body weight', 'Prior meniscus or ACL knee injury', 'Repetitive kneeling/squatting'],
    prevention: 'Maintain a healthy weight to reduce joint load and strengthen quadriceps and hamstring muscles.',
    sources: [
      { name: 'CDC Osteoarthritis Basics', url: 'https://www.cdc.gov/arthritis/osteoarthritis/index.html' },
      { name: 'NIAMS Osteoarthritis', url: 'https://www.niams.nih.gov/health-topics/osteoarthritis' }
    ]
  },
  {
    id: 'acute-gout',
    name: 'Acute Gout (Podagra)',
    region: 'legs',
    system: 'Musculoskeletal System',
    description:
      'An inflammatory crystal arthropathy caused by deposition of needle-shaped monosodium urate crystals in joints—classically the big toe.',
    symptoms: ['Sudden Excruciating Big Toe Pain', 'Bright Red Swollen Joint', 'Extreme Tenderness to Light Touch', 'Hyperuricemia'],
    transmission: 'Non-communicable (Elevated serum uric acid from reduced renal excretion or purine overproduction)',
    riskFactors: ['High-purine diet (red meat, shellfish)', 'Alcohol (especially beer) & sugary drinks', 'Diuretic medications', 'Chronic kidney disease'],
    prevention: 'Stay well hydrated, limit alcohol and high-purine foods, and take prescribed urate-lowering medication.',
    sources: [
      { name: 'CDC Gout Overview', url: 'https://www.cdc.gov/arthritis/gout/index.html' },
      { name: 'NIAMS Gout Information', url: 'https://www.niams.nih.gov/health-topics/gout' }
    ]
  },
  {
    id: 'acl-tear',
    name: 'Anterior Cruciate Ligament (ACL) Tear',
    region: 'legs',
    system: 'Musculoskeletal System',
    description:
      'Rupture of the primary stabilizing ligament preventing anterior translation of the tibia on the femur during pivoting movements.',
    symptoms: ['Audible "Pop" at Injury', 'Rapid Knee Swelling (Hemarthrosis)', 'Knee Instability / Giving Way', 'Positive Lachman Test'],
    transmission: 'Non-communicable (Non-contact pivoting, sudden deceleration, or hyperextension trauma)',
    riskFactors: ['Basketball, soccer, football, and skiing', 'Sudden cutting maneuvers', 'Neuromuscular landing imbalances'],
    prevention: 'Perform neuromuscular agility, hamstring strengthening, and jump-landing training programs.',
    sources: [
      { name: 'AAOS ACL Injuries', url: 'https://orthoinfo.aaos.org/en/diseases--conditions/anterior-cruciate-ligament-acl-injuries/' },
      { name: 'Mayo Clinic: ACL Injury', url: 'https://www.mayoclinic.org/diseases-conditions/acl-injury/symptoms-causes/syc-20350738' }
    ]
  },
  {
    id: 'plantar-fasciitis',
    name: 'Plantar Fasciitis',
    region: 'legs',
    system: 'Musculoskeletal System',
    description:
      'Degenerative irritation and microtearing of the thick plantar aponeurosis band supporting the arch of the foot at its heel attachment.',
    symptoms: ['Sharp Heel Pain on First Morning Steps', 'Pain After Prolonged Standing', 'Medial Heel Tenderness', 'Improves Slightly with Light Walking'],
    transmission: 'Non-communicable (Repetitive tensile overload of the plantar fascia)',
    riskFactors: ['Distance running', 'Flat feet or high arches', 'Tight Achilles tendon/calf muscles', 'Unsupportive footwear'],
    prevention: 'Stretch calves and plantar fascia before standing, wear supportive arch footwear, and increase running mileage gradually.',
    sources: [
      { name: 'AAOS Plantar Fasciitis', url: 'https://orthoinfo.aaos.org/en/diseases--conditions/plantar-fasciitis-and-bone-spurs/' },
      { name: 'Mayo Clinic: Plantar Fasciitis', url: 'https://www.mayoclinic.org/diseases-conditions/plantar-fasciitis/symptoms-causes/syc-20354846' }
    ]
  }
];