/* ============================================================
   ENGLISH CONTENT - same structure as vi.ts. Edit both together.
   Figures follow Business Plan V3. Characters and diary are illustrative.
   Text inside <b>…</b> is shown in bold.
   ============================================================ */
import type { Content } from "./vi";

export const en: Content = {
  lang: "en",
  locale: "en-US",

  ui: {
    skip: "Skip to main content",
    nav: { home: "About us", hoc: "Learn", congDong: "Community", dichVu: "Services", tacDong: "Impact", benhVien: "Hospitals", lienHe: "Contact" },
    menu: "Open menu",
    close: "Close menu",
    switchLang: "Tiếng Việt",
    switchLangAria: "Xem trang này bằng tiếng Việt",
    headerCta: "Get advice",
    zalo: "Message on Zalo",
    call: "Call hotline",
    footer: {
      tagline: "You go to work by day, STROKE360 takes care. In the evening, you're with your parents.",
      explore: "Explore",
      links: { hoc: "Learn with Stroke360", congDong: "Family community", dichVu: "Services and pricing", nhatKy: "Care diary", tuyenDung: "Caregiver jobs", benhVien: "For hospitals" },
      contact: "Contact",
      city: "Ho Chi Minh City",
      demo: "Demo website for a Business Planning course. Characters and diary entries are illustrative; impact figures are plan targets, not achieved results."
    },
    minutes: "{n} min",
    approved: "Reviewed by our medical advisors",
    soon: "Coming soon",
    done: "Completed",
    simulated: "Simulated data",
    illustrative: "Illustrative characters",
    back: "Back",
    restart: "Start over",
    stagePrefix: "Stage",
    tabs: { home: "Home", hoc: "Learn", dichVu: "Services", congDong: "Community", more: "More" }
  },

  meta: {
    home: { title: "STROKE360 – Supporting families of stroke patients", description: "You go to work by day, STROKE360 takes care. In the evening, you're with your parents. Shift-based stroke care from hospital to home, transparent pricing, a diary every evening." },
    hoc: { title: "Learn with Stroke360 – A school for families", description: "Free 3-5 minute lessons for families of stroke patients: understanding stroke, safe feeding, repositioning, BE-FAST, mental health and counseling." },
    lesson: { title: "Lesson – Learn with Stroke360", description: "Short lessons for families of stroke patients, with a checklist and a quick quiz." },
    congDong: { title: "Family community – Stroke360", description: "Meet families who have been there, ask a nurse every Thursday evening, join caregiver support groups and community events." },
    dichVu: { title: "Services and pricing – Stroke360", description: "Shift-based stroke care in hospital and at home. Public pricing; find the right package in 4 questions." },
    tacDong: { title: "Values and impact – Stroke360", description: "Impact indicators, who benefits, and a sample quarterly quality report from STROKE360." },
    benhVien: { title: "For hospitals – Stroke360", description: "A care partner with records, supervision and reporting. A 3-month pilot for neurology departments." },
    lienHe: { title: "Contact – Stroke360", description: "Get free advice. A coordinator calls you back within 2 hours." },
    nhatKy: { title: "Care diary – Stroke360", description: "A simulation of the per-shift care diary families receive on their phone." },
    tuyenDung: { title: "Caregiver jobs – Stroke360", description: "Stable income, legal shift lengths, training and a clear career path." },
    redirect: { title: "Opening lesson – Stroke360", description: "Opening the lesson." }
  },

  home: {
    eyebrow: "About us · Stroke patient care · Ho Chi Minh City",
    h1: ["You go to work by day,", "STROKE360", "takes care.", "In the evening, you're with your parents."],
    lead: "We exist for one reason: <b>so no family has to choose between keeping their job and caring for a parent after a stroke.</b>",
    cta1: "Why we do this",
    cta2: "My family needs someone now",
    diary: {
      head: "Today's diary",
      time: "18:30",
      lines: ["<b>Mom ate 2/3 of her meal, no choking.</b>", "Repositioned 6 times, skin normal.", "Doctor's advice: sitting practice twice a day. Today Mom sat for 7 minutes."],
      foot: "This is the message every family receives at the end of a shift.",
      more: "See the whole day"
    },
    story: {
      eyebrow: "Why STROKE360 exists",
      title: "An ordinary week on a neurology ward",
      steps: [
        ["Monday, 6:40 am", "Lan's mother had a stroke while cooking breakfast. By noon she was on the neurology ward: paralysed on one side, unable to swallow, needing to be turned every 2 hours."],
        ["Tuesday", "Lan took leave. Her brother lives in Binh Duong, her sister has a small child. Nobody knew how to feed Mom without her choking, and nobody dared to ask the doctor on rounds."],
        ["Thursday", "Leave ran out. Lan hired a sitter through a domestic-help agency. The sitter was kind, but had never cared for a stroke patient, had been on duty for 3 days and nights at the next bed, and nobody supervised her. At work, Lan checked her phone every ten minutes."]
      ],
      quote: "Families don't lack love. They lack someone trained and supervised, and a way to know how their parent is doing today.",
      after: "STROKE360 was built for exactly that first week, and for the months after the patient comes home.",
      note: "Illustrative story, drawn from common situations faced by families of stroke patients."
    },
    facts: {
      title: "The problem is not small, and it is growing",
      items: [
        { v: 220000, p: "", s: "+", text: "new strokes each year in Vietnam, among the highest in Southeast Asia" },
        { v: 31000, p: "~", s: "", text: "estimated cases each year in Ho Chi Minh City" },
        { word: "Day one", text: "is when patients need the most careful care: paralysis, swallowing problems, risk of pressure sores and choking" },
        { v: 600, p: "~", s: " hrs", text: "per month is how long a freelance sitter is on duty, uninsured and rarely trained" }
      ],
      source: "Sources: Ministry of Health; Bach Mai Hospital (2025); estimates in the STROKE360 Business Plan V3."
    },
    compare: {
      title: "We chose to do it differently",
      sub: "We don't compete to be the cheapest. We work to be trusted.",
      left: "Typical hospital sitter",
      right: "STROKE360",
      rows: [
        ["Freelancers through placement agencies", "Caregivers are full employees with contracts and insurance"],
        ["Rarely trained in stroke care", "5-day course advised by rehab doctors and written by nurses"],
        ["One person on duty 24/7 for days", "12-hour shifts per the Labour Code; night shifts by certified collaborators"],
        ["Family doesn't know what was done today", "A checklist each shift, and a diary sent to the family every evening at 18:30"],
        ["No one supervises", "A supervising nurse checks at the bedside at least twice a week"],
        ["Discharge means the service ends", "We stay with the family from hospital to home, through long-term care"]
      ]
    },
    pillars: {
      title: "What we offer",
      sub: "Learning and community are free. We give first, then we sell services.",
      items: [
        { page: "hoc", icon: "book", title: "Learn with Stroke360", text: "3-5 minute lessons for families: safe feeding, repositioning, recognising BE-FAST. Read them at the bedside.", cta: "Start learning" },
        { page: "congDong", icon: "community", title: "Family community", text: "Meet families who have been there, ask a nurse every Thursday evening, and be reminded that you need rest too.", cta: "Join" },
        { page: "dichVu", icon: "care", title: "Shift-based care", text: "S1 in hospital from 1,100,000 ₫/day · S2 at home · S3 long-term referrals. Public pricing.", cta: "See services" }
      ]
    },
    values: {
      title: "Four values, and how we keep our word",
      items: [
        { icon: "shield", title: "Safety first", text: "Target: zero serious incidents. We measure and report pressure sore, choking and fall rates to hospitals every quarter." },
        { icon: "eye", title: "Transparent with families", text: "Prices are public on the website. Referral commissions are disclosed. An evening diary for up to 5 relatives." },
        { icon: "handHeart", title: "Respect for caregivers", text: "Around 11 million ₫/month for about 228 hours, full insurance, and a path to supervisor." },
        { icon: "scope", title: "Within our scope", text: "No medication, no treatment procedures. Everything in hospital follows the orders of the ward's doctors and nurses." }
      ]
    },
    team: {
      title: "The people behind STROKE360",
      people: [
        { initial: "Â", name: "Nguyễn Hoàng Ân", role: "Co-founder · Operations and finance" },
        { initial: "", name: "To be announced", role: "Co-founder · Operations and quality" },
        { initial: "", name: "To be announced", role: "Co-founder · Sales and hospital relations" }
      ],
      advisor: { name: "Medical advisory board", role: "Rehabilitation and neurology doctors who review our training programme, checklists and family lessons." },
      note: "Behind them is a coordination team that staffs a case within 6 hours, supervising nurses, and caregivers in teal uniforms at the bedside every day."
    },
    road: {
      title: "The road ahead",
      sub: "Milestones from our business plan, not results already achieved.",
      items: [
        ["Year 1", "Stand firm", "2 partner hospitals, 260 families, 28 full-time caregivers. First quality report."],
        ["Year 2", "Earn trust", "3 hospitals, nearly 800 families. Continuous care records from hospital to home."],
        ["Year 3", "Spread", "5 hospitals, 1,320 families a year, 79 caregivers with stable careers."],
        ["Beyond", "Care360", "Post-surgery care, elderly home care, a caregiver training academy; expanding to Hanoi, Da Nang and Can Tho."]
      ]
    },
    paths: {
      title: "Where are you on this journey?",
      items: [
        { page: "dichVu", hash: "#chon-goi", icon: "bed", title: "My parent is in hospital", text: "Find the right package in 4 questions" },
        { page: "hoc", hash: "", icon: "book", title: "I want to care better myself", text: "Free lessons, 3-5 minutes each" },
        { page: "benhVien", hash: "", icon: "hospital", title: "I work at a hospital", text: "A 3-month pilot programme" },
        { page: "tuyenDung", hash: "", icon: "nurse", title: "I want to be a caregiver", text: "Stable income, legal shifts" }
      ]
    },
    befast: { tag: "29 Oct · World Stroke Day", title: "Spot a stroke in 1 minute: BE-FAST", cta: "Learn it in 3 minutes" }
  },

  hoc: {
    eyebrow: "A school for families · Free",
    title: "Learn with Stroke360",
    lead: "3-5 minute lessons, written for people who are tired and worried. Read them on your phone, at the bedside.",
    search: "e.g. my mother chokes when eating",
    searchAria: "Search lessons",
    progress: "You have completed {done}/{total} lessons",
    reset: "Reset",
    jump: "Jump to",
    chips: [["K", "Understanding stroke"], ["A", "Care pathway"], ["T", "Mental health"], ["tam-ly", "Counseling"]],
    empty: "No matching lesson yet. Ask a nurse in the",
    emptyLink: "Community",
    counsel: {
      eyebrow: "Mental health",
      title: "Counseling for patients and caregivers",
      lead: "After a stroke, both the patient and the family can feel sad, anxious or exhausted. You don't have to carry it alone: STROKE360 connects you with partner clinical psychologists and runs free support groups.",
      sessions: "Sessions",
      free: "Free",
      join: "Sign up",
      book: "Book a session",
      crisisTitle: "When you need help now",
      call115: "Call 115"
    },
    mood: {
      title: "How are you feeling today?",
      help: "Drag the slider to rate your own stress (0 = relaxed, 10 = overwhelmed). Saved only on this device, never sent anywhere.",
      aria: "Stress level",
      low: { title: "You're holding up well.", text: "Keep taking 15 minutes a day for yourself.", link: "Read lesson C4", id: "C4" },
      mid: { title: "A bit tense. Take a short break.", text: "Try lesson T3 - 5 minutes to calm down, and join the Sunday evening support group.", link: "Open lesson T3", id: "T3" },
      high: { title: "You're carrying too much.", text: "If this lasts 3 days, ask someone to cover a shift and book a 1-on-1 session.", link: "Read lesson T2", id: "T2", book: "Book counseling" }
    },
    cert: {
      title: "“Family Ready” certificate",
      lead: "Complete the published lessons in stages A and B to receive a certificate with your name.",
      remaining: "Finish {list} to receive your certificate.",
      nameLabel: "Your name",
      namePlaceholder: "Nguyen Thi Lan",
      defaultName: "Family member",
      issuer: "STROKE360 certifies",
      badge: "Family Ready",
      detail: "Completed the First week in hospital and Preparing for discharge pathways",
      download: "Download certificate (PNG)"
    },
    classCard: {
      title: "In-hospital class for families",
      text: "Free, every Tuesday 14:00-15:00 at partner hospitals. Practise repositioning, safe feeding and recognising BE-FAST.",
      cta: "Register for the class"
    }
  },

  lesson: {
    backToPath: "Learning path",
    keyPoints: "Key points",
    checklist: "Checklist",
    print: "Download / print checklist",
    quiz: "Quick quiz",
    quizHelp: "Choose the right answer for all 3 questions to complete the lesson.",
    correct: "Correct",
    wrong: "Not quite, try again",
    finished: "You completed lesson {id}",
    next: "Next lesson",
    progress: "View progress",
    redirecting: "Opening lesson…",
    notFound: "Lesson coming soon",
    backLink: "Back to the learning path"
  },

  dichVu: {
    eyebrow: "Public pricing · Shift-based care",
    title: "Services and pricing",
    lead: "Daytime is when skill matters most, so our services are split into shifts. Families choose exactly what they need.",
    pickerTitle: "Find the right package in 4 questions",
    priceTitle: "Pricing",
    promisesTitle: "Our promises to families",
    scope: "<b>Scope of practice:</b> caregivers do not perform treatment procedures, do not give or change medication, and do not interfere with treatment plans. In hospital, all activities follow the orders of doctors, ward nurses and hospital rules.",
    picker: {
      step: "Question {i}/{n}",
      questions: {
        where: { q: "Where is the patient now?", o: [["hosp", "In hospital"], ["home", "At home, or about to be discharged"]] },
        night: { q: "Can someone in the family stay overnight?", o: [["yes", "Yes, the family can cover nights"], ["no", "No, we need someone day and night"]] },
        self: { q: "How much personal care can the patient do alone?", o: [["low", "Almost fully dependent"], ["mid", "Some of it"], ["high", "Most of it"]] },
        days: { q: "How much longer is the hospital stay expected to be?", o: [["5", "About 5 days"], ["10", "About 10 days"], ["14", "About 2 weeks"]] },
        family: { q: "Is someone at home who can learn to provide care?", o: [["yes", "Yes, we want to care ourselves with guidance"], ["no", "No, we need a professional to do the exercises"]] }
      },
      tag: "Suggested for your family",
      whyDay: "Your family can cover nights, so you only need someone during the day, when skill matters most.",
      whyFull: "Your family can't cover nights, so you need a full-time day shift plus a night shift by a certified collaborator.",
      whyRehab: "The patient needs goal-based rehabilitation with a licensed therapist.",
      whyGuide: "Your family wants to care themselves, with a nurse teaching at home and regular follow-up.",
      estimate: "Estimate for {days} days:",
      after: "When discharge approaches, a nurse will advise on a home package, for example",
      leavePhone: "Leave your phone number"
    }
  },

  congDong: {
    eyebrow: "You don't have to do this alone",
    title: "The Stroke360 family community",
    lead: "A place to meet families who have been there, ask a nurse, and be reminded that you also deserve care.",
    join: "Join the Zalo community group",
    qrTitle: "Scan to join",
    qrAlt: "QR code for the Zalo community group",
    qrNote: "The project's real Zalo group",
    storiesTitle: "Recovery stories",
    groupsTitle: "Groups by stage",
    groupJoin: "Join",
    askTitle: "Ask a nurse",
    askLead: "Every Thursday evening, a supervising nurse answers questions. Good answers are saved as articles.",
    ask: {
      label: "Your question",
      placeholder: "e.g. My father sleeps all day and stays awake at night. Is that a concern?",
      help: "Don't include full names or medical records. Questions about diagnosis or medication will be referred to the treating doctor.",
      submit: "Send question",
      doneTitle: "We received your question",
      doneText: "A nurse will answer on Thursday evening in the Zalo group. (This demo does not store data.)"
    },
    eventsTitle: "Events",
    eventCta: "Learn BE-FAST",
    careTitle: "For caregivers",
    fatigue: {
      title: "Check your fatigue level",
      lead: "In the past 2 weeks, have you often…",
      items: ["Felt tired even right after waking up", "Slept under 5 hours a night", "Been more irritable or tearful than usual", "Skipped meals or personal tasks", "Felt that nobody understands you"],
      low: "You're holding up fairly well. Keep taking 15 minutes a day for yourself.",
      mid: "<b>You're tired.</b> Share the shifts and accept help.",
      midLink: "Read lesson C4",
      high: "<b>You show signs of burnout.</b> Talk to your family, consider a support shift so you can rest, and see a professional if it continues.",
      highLink: "Day shifts so families can rest",
      count: "{n}/5 signs"
    },
    volunteer: { title: "Walk alongside Stroke360", text: "Families who have been there become “companions” for new families. Medical and social work students volunteer too.", cta: "Become a companion" },
    rules: {
      title: "Community rules",
      items: ["Don't share medical records or photos of patients without consent.", "No advertising of medicines, supplements or “stroke cures”.", "Medical questions are passed to a nurse or referred to the treating doctor."]
    }
  },

  tacDong: {
    eyebrow: "Mission",
    title: "So no family has to choose between keeping their job and caring for a parent after a stroke.",
    statsTitle: "Impact indicators",
    statsSub: "Year-3 targets from the business plan, not results already achieved.",
    whoTitle: "Who benefits, and how",
    who: [
      { icon: "bed", title: "Patients", text: "Receive technically correct care with fewer pressure sores, choking and falls; a continuous recovery path from hospital to home." },
      { icon: "family", title: "Families", text: "Keep their jobs, feel reassured by the evening diary, learn to care themselves, and are not alone." },
      { icon: "nurse", title: "Caregivers", text: "Around 11 million ₫/month, full insurance, legal shifts and a career path." },
      { icon: "hospital", title: "Hospitals", text: "Less load on nurses, control over who enters the ward, and quarterly quality reports." },
      { icon: "globe", title: "Society", text: "Higher standards for the caregiving profession and wider awareness of stroke signs (BE-FAST)." }
    ],
    hoursTitle: "Caregiving with dignity",
    hoursSub: "Same income, very different working hours.",
    hoursUs: ["STROKE360 caregiver", "about 228 hours/month, fully insured"],
    hoursThem: ["Freelance sitter", "nearly 600 hours/month, uninsured"],
    hoursNote: "Both earn around 11 million ₫/month.",
    hoursLink: "Caregiver jobs",
    reportTitle: "Sample quarterly quality report",
    reportNote: "Illustrative sample - indicators will be shared with partner hospitals every quarter",
    reportHead: ["Indicator", "Target"],
    report: [
      ["Serious incidents caused by care errors", "0"],
      ["Family satisfaction score", "≥ 4.6/5"],
      ["Diary sent to family at 18:30", "Tracked every shift"],
      ["Supervising nurse bedside checks", "≥ 2 per week per client"],
      ["Replacement when family is unhappy", "Within 12 hours"],
      ["Continue home care after discharge", "≥ 45%"]
    ]
  },

  benhVien: {
    eyebrow: "Social Work Department · Neurology",
    title: "For hospitals",
    lead: "A care partner with records, supervision and reporting, so bedside sitters on the ward are no longer a grey area.",
    getTitle: "What the hospital gets",
    get: ["Less load on ward nurses for basic care tasks.", "Access control: caregivers wear name badges and uniforms, with per-shift rosters.", "Quarterly quality reports: incidents, satisfaction, checklist compliance.", "A free weekly class for families on the ward."],
    promiseTitle: "STROKE360 commits to",
    promise: ["Following the orders of doctors, ward nurses and hospital rules.", "No treatment procedures, no medication, no interference with treatment plans.", "No marketing on the ward, no commissions to hospitals or medical staff.", "Professional liability insurance for every caregiver."],
    pilotTitle: "3-month pilot",
    pilot: [
      ["Month 1", "Review", "The hospital reviews our records, processes and checklists; we agree on what is and isn't allowed."],
      ["Month 2", "Pilot", "Run in one department; a supervising nurse checks at the bedside ≥ 2 times per week."],
      ["Month 3", "Evaluate", "Quality report, survey of families and ward nurses; decide whether to expand."]
    ],
    cta: "Request our capability profile"
  },

  lienHe: {
    eyebrow: "We respond within 2 hours",
    title: "Contact STROKE360",
    vision: "<b>Vision:</b> to become the most trusted bedside and home care company in Vietnam's major cities.",
    mission: "<b>Mission:</b> so no family has to choose between keeping their job and caring for a parent after a stroke.",
    values: ["Safety first", "Transparent with families", "Respect for caregivers", "Within our scope of practice"],
    form: {
      title: "Get free advice",
      name: "Contact name",
      phone: "Phone number",
      phoneError: "Phone number must be 9-13 digits",
      topic: "You're interested in",
      topicDefault: "Not sure yet, need advice",
      counselingPrefix: "Counseling",
      extraTopics: [["lop-hoc", "Free class for families"], ["dong-hanh", "Walk alongside Stroke360"], ["benh-vien", "Hospital partnership"], ["tuyen-dung", "Apply as a caregiver"]],
      note: "Notes (no need to include medical details)",
      submit: "Send request",
      demo: "Demo: this form is not yet connected to Google Sheets and stores no data.",
      thanks: "Thank you!",
      thanksText: "A coordinator will call you back within 2 hours. If it's urgent, call",
      whileWaiting: "While you wait: read lesson A1"
    }
  },

  nhatKy: {
    eyebrow: "Simulated family app",
    title: "A care diary every day",
    lead: "Transparency is not a promise. It's what families see on their phone, every shift, every evening.",
    points: ["Logged against the day-shift checklist: meals, repositioning, hygiene, mobility.", "Advice from ward rounds is written down, so the family never misses it.", "A summary at 18:30, sent to up to 5 relatives."],
    play: "Replay the day shift",
    pause: "Pause",
    pick: "Find the right package",
    note: "Simulated data. The real version asks for consent from the patient or their representative, with access control and encryption under Vietnam's Personal Data Protection Law.",
    phoneTop: "Diary · Today",
    patient: "Mrs. Nguyen Thi Hoa · Bed 12",
    carer: "Caregiver: Tran Thu · Day shift 07:00-19:00"
  },

  tuyenDung: {
    eyebrow: "Caregiving with dignity",
    title: "Caregiver jobs",
    lead: "Stable income, legal shift lengths, proper training and a clear career path.",
    stats: [["~11M ₫", "monthly income"], ["12 hrs", "per shift, max 19 shifts/month"], ["100%", "social, health and unemployment insurance"], ["5 days", "of training before your first shift"]],
    getTitle: "What you get",
    get: ["Base salary, legal overtime, shift allowances, bonuses based on family feedback.", "About 228 hours/month, instead of nearly 600 like freelance sitters.", "Uniforms, accident insurance, regular refresher training.", "Career path: Caregiver → Senior caregiver → Shift supervisor."],
    trainingTitle: "5-day training course",
    training: ["Hygiene, repositioning, pressure sore prevention", "Safe feeding, including tube feeding", "Mobility support under medical staff guidance", "Recognising warning signs, BE-FAST", "Keeping the diary, communicating with families and medical staff"],
    apply: "Apply"
  },

  /* ------------------------------------------------------------
     DATA (pricing, lessons, stories, diary…)
     ------------------------------------------------------------ */
  services: [
    { code: "S1-N", stage: "S1 · In hospital", name: "Day shift in hospital", time: "07:00-19:00", price: 1100000, unit: "/day",
      desc: "A full-time caregiver: hygiene, safe feeding (including tube feeding), repositioning to prevent sores, early mobility under medical guidance, joining ward rounds and noting advice, and a diary for the family. The family covers nights." },
    { code: "S1-T", stage: "S1 · In hospital", name: "Full day in hospital", time: "24 hours", price: 1600000, unit: "/day",
      desc: "The S1-N day shift plus a night shift by a certified collaborator: staying at the bedside, scheduled repositioning, hygiene support, alerting ward nurses to anything unusual; checklist handovers at 07:00 and 19:00." },
    { code: "S2A", stage: "S2 · At home", name: "8-week home care and rehabilitation", time: "8 weeks", price: 9500000, unit: "/package",
      desc: "16 home rehabilitation sessions with a licensed therapist; 4 nurse check-ups; a goal-based recovery plan; loan of exercise equipment." },
    { code: "S2B", stage: "S2 · At home", name: "Family coaching and follow-up", time: "Monthly", price: 1500000, unit: " + 1,800,000 ₫/month",
      desc: "2 home sessions where a nurse teaches the family; written materials; then follow-up: 2 home visits a month, a weekly video call, medication and check-up reminders." },
    { code: "S3", stage: "S3 · Long term", name: "Long-term care referral", time: "When needed", price: 0, unit: "",
      priceText: "Free for families",
      desc: "Referral to vetted partner care homes; a 2,500,000 ₫ per-client commission is paid by the care home and disclosed to the family." }
  ],
  priceNote: "Prices include VAT (if applicable). Public holidays and Tết +50%. 3-day deposit on signing, payment weekly.",

  promises: [
    ["Replacement within 12 hours", "if the family is not satisfied."],
    ["A diary every evening", "sent to up to 5 relatives."],
    ["Clearly identified caregivers", "name badge, uniform, training certificate, professional liability insurance."],
    ["Every fee disclosed", "including commissions on referrals."]
  ],

  impact: [
    { value: 1320, label: "families supported each year" },
    { value: 79, label: "caregivers in stable, insured jobs" },
    { value: 5, label: "partner hospitals" },
    { value: 0, label: "serious incidents caused by care errors", prefix: "" },
    { value: 4.6, label: "family satisfaction score (out of 5)", prefix: "≥ ", decimals: 1 },
    { value: 45, label: "of clients continue home care after discharge", prefix: "≥ ", suffix: "%" }
  ],

  stages: {
    K: "Understanding stroke",
    A: "First week in hospital",
    B: "Preparing for discharge",
    C: "12 weeks at home",
    T: "Mental health"
  },
  stageNotes: {
    K: "The basics: what a stroke is, how it progresses, what it leaves behind and how it is treated. Best read before the care pathway.",
    T: "For both patients and caregivers. Emotions after a stroke are part of the illness and need care just like the body."
  },
  lessons: [
    { id: "K1", stage: "K", ready: true, mins: 5, title: "What is a stroke? The two main types and risk factors",
      keywords: "what is stroke brain attack ischemic hemorrhagic TIA mini stroke cause blood pressure risk",
      points: [
        "A stroke happens when blood flow to part of the brain is interrupted. Brain cells starve of oxygen and begin to die within minutes, so a stroke is always an emergency.",
        "Ischemic stroke: a blood vessel in the brain is blocked, usually by a clot. This is the most common type, about 8 in 10 cases.",
        "Hemorrhagic stroke: a blood vessel in the brain bursts and blood leaks into brain tissue. Less common, but usually more severe.",
        "Transient ischemic attack (TIA): stroke symptoms that go away by themselves within minutes to hours. It is a warning that a real stroke may follow, so still go to the emergency room immediately.",
        "Risk factors you can change: high blood pressure (the most important), diabetes, high cholesterol, atrial fibrillation, smoking, alcohol, inactivity, excess weight. You can't change: older age, family history, a previous stroke."
      ],
      checklist: ["Which type of stroke did your relative have? (ask the doctor)", "Which part of the brain was affected", "Risk factors your relative has", "Which ones the family can change together"],
      quiz: [
        { q: "Which type of stroke is most common?", a: ["Hemorrhagic stroke", "Ischemic stroke caused by a blocked vessel", "Both are equally common"], c: 1 },
        { q: "Grandpa's speech was slurred for 10 minutes, then it went away. The family should:", a: ["Relax, since it's gone", "Go to the emergency room now, as it may be a TIA", "Wait and see a doctor tomorrow morning"], c: 1 },
        { q: "The most important risk factor that can be controlled is:", a: ["Age", "High blood pressure", "Sex"], c: 1 }
      ] },
    { id: "K2", stage: "K", ready: true, mins: 5, title: "How it progresses: from the first hour to months of recovery",
      keywords: "progression stages acute subacute chronic golden hour recovery how long prognosis",
      points: [
        "The first few hours (hyperacute): “time is brain”. Every minute of delay costs millions more brain cells. Treatments to reopen vessels only work if the patient arrives early.",
        "The first 1-2 weeks (acute): the patient is closely monitored on a neurology ward or stroke unit. Their condition can worsen in the first days from brain swelling, further bleeding, aspiration pneumonia, blood clots or pressure sores.",
        "A few weeks to about 3 months (subacute): the brain reorganises fastest. This is when rehabilitation brings the greatest benefit.",
        "After 6 months (chronic): recovery slows but continues with regular practice. The focus shifts to maintaining gains, preventing another stroke and adapting to a new life.",
        "Everyone recovers differently, depending on the location and size of the injury, age, other illnesses and how much they practise. Ask the doctor about your relative's own outlook."
      ],
      checklist: ["Date and time symptoms started", "Which stage your relative is in", "This week's recovery goal", "Questions about prognosis to ask the doctor"],
      quiz: [
        { q: "Why get to hospital very early when stroke signs appear?", a: ["To get a better room", "Because treatments to reopen vessels only work in the first few hours", "Because hospitals are busy in the afternoon"], c: 1 },
        { q: "Rehabilitation usually brings the biggest gains during:", a: ["The first few weeks to about 3 months", "After 2 years", "Only the first day"], c: 0 },
        { q: "After 6 months, a patient:", a: ["Cannot improve any more", "Can still improve slowly with regular practice", "Should stop exercising"], c: 1 }
      ] },
    { id: "K3", stage: "K", ready: true, mins: 5, title: "Common effects after a stroke",
      keywords: "effects after stroke hemiplegia paralysis speech swallowing memory depression fatigue incontinence",
      points: [
        "Movement: weakness or paralysis on one side (opposite the injured side of the brain), loss of balance, muscle stiffness, shoulder pain on the weak side. The risk of falls is high.",
        "Swallowing: food can easily go into the lungs, causing choking, pneumonia and weight loss. That's why feeding always waits for a swallowing assessment.",
        "Communication: difficulty speaking, slurred speech, or speaking without understanding others (aphasia). The patient still has the same feelings and thoughts as before.",
        "Thinking: poorer memory, difficulty concentrating, slower processing; some people “neglect” one side of their body or space (usually the left).",
        "Emotions: depression, anxiety, uncontrolled crying or laughing, irritability, lasting fatigue. These come from the brain injury, not from the patient being “difficult”.",
        "Other: incontinence, pain, sleep problems; less commonly, seizures."
      ],
      checklist: ["Movement: which side is weak?", "Swallowing: has it been assessed?", "Communication: can speak / can understand?", "Any change in memory or concentration?", "Mood over the past 2 weeks"],
      quiz: [
        { q: "A patient with an injury on the left side of the brain usually has weakness on:", a: ["The left side", "The right side", "Both sides"], c: 1 },
        { q: "Mom suddenly cries a lot since her stroke. This may be:", a: ["Mom wanting attention", "An effect of the brain injury; tell the doctor", "A poor diet"], c: 1 },
        { q: "When a patient has trouble speaking:", a: ["They no longer understand anything", "They still think and feel; communicate patiently", "You should speak very loudly"], c: 1 }
      ] },
    { id: "K4", stage: "K", ready: true, mins: 5, title: "Treatment and preventing another stroke",
      keywords: "treatment thrombolysis thrombectomy clot busting surgery medication prevention rehabilitation",
      points: [
        "Ischemic stroke: within the “window” of the first few hours, doctors may give a clot-dissolving drug (thrombolysis) and/or remove the clot through a blood vessel (thrombectomy) for large blockages. The doctor decides based on when symptoms started and CT/MRI results.",
        "Hemorrhagic stroke: controlling blood pressure, correcting clotting problems and close monitoring; some cases need surgery.",
        "Supportive care: monitoring blood pressure, blood sugar and temperature; swallowing assessment; preventing pneumonia, pressure sores and blood clots. This is where families and caregivers contribute most.",
        "Long-term prevention: take prescribed medicines regularly (antiplatelets or anticoagulants, blood pressure, cholesterol and blood sugar medicines) and never stop on your own; quit smoking, limit alcohol, eat less salt, stay suitably active.",
        "Rehabilitation starts early once the patient is stable and continues for months: physiotherapy, occupational therapy, speech therapy and psychological support.",
        "STROKE360 does not give medication advice. Ask the treating doctor about any medicine or treatment plan."
      ],
      checklist: ["Treatment your relative received", "Prevention medicines and their times", "Follow-up appointments", "Blood pressure target set by the doctor", "Rehabilitation schedule"],
      quiz: [
        { q: "Who decides on thrombolysis or thrombectomy?", a: ["The family", "The doctor, based on when symptoms started and brain scans", "The caregiver"], c: 1 },
        { q: "Dad's blood pressure looks fine and he wants to stop his medicine. You should:", a: ["Agree, since he's fine", "Not stop on his own; ask the treating doctor", "Cut it to half a dose"], c: 1 },
        { q: "When should rehabilitation start?", a: ["Early, as soon as the patient is stable and it's prescribed", "After 1 year", "Only after going home"], c: 0 }
      ] },
    { id: "A1", stage: "A", ready: true, mins: 4, title: "The first 72 hours: what the family should do",
      keywords: "new stroke emergency getting started first day",
      points: [
        "Stay with the patient and stay calm. Treatment decisions belong to the doctor; the family's job is to give accurate information.",
        "Write down when symptoms started, current medicines and other illnesses. The doctor will ask several times.",
        "Give nothing to eat or drink by mouth until medical staff have checked swallowing.",
        "Choose one family member as the “point of contact” for the doctor, who then updates everyone, to avoid repeated questions.",
        "Set up the family's rota from day one, including rest time for whoever is on duty."
      ],
      checklist: ["Time symptoms started", "List of current medicines", "Other illnesses, allergies", "Point of contact and phone number", "Family rota for the next 3 days"],
      quiz: [
        { q: "A newly admitted patient says they're thirsty. The family should:", a: ["Give a few sips of warm water", "Ask staff whether swallowing has been checked; if not, give nothing", "Give ice chips"], c: 1 },
        { q: "What information does the doctor usually need most at first?", a: ["When the symptoms started", "The patient's favourite food", "The room number"], c: 0 },
        { q: "Why choose one point of contact?", a: ["To reduce the number of visitors", "So the doctor's information is passed on accurately, without overlap", "So that person can be on duty day and night"], c: 1 }
      ] },
    { id: "A2", stage: "A", ready: true, mins: 5, title: "Repositioning and preventing pressure sores",
      keywords: "pressure sores bed sores lying long turning red skin back buttocks heels",
      points: [
        "People lying for long periods easily get sores on the tailbone, heels, hips and shoulder blades. A sore can appear after just a few hours of constant pressure.",
        "Change position at least every 2 hours, or as instructed by the ward nurse.",
        "Check the skin at every turn: a red area that doesn't fade once pressure is relieved is a sign to tell the nurse.",
        "Keep skin clean and dry; keep sheets smooth, without wrinkles or crumbs.",
        "Use pillows to keep knees and ankles from touching. Never drag the patient across the sheet."
      ],
      checklist: ["Repositioning time (every 2 hours)", "Position: back / left side / right side", "Any red area that doesn't fade?", "Sheets dry and smooth", "Nurse informed (if anything unusual)"],
      quiz: [
        { q: "How often should position be changed?", a: ["Every 6 hours", "At least every 2 hours or as the nurse instructs", "Only when the patient complains of pain"], c: 1 },
        { q: "A red area that doesn't fade after pressure is relieved means:", a: ["It's normal, ignore it", "An early sign of a sore; tell the nurse", "An allergy to the sheets"], c: 1 },
        { q: "To move the patient up the bed, you should:", a: ["Drag them across the sheet to be quick", "Lift them, using a draw sheet with two people", "Let them slide by themselves"], c: 1 }
      ] },
    { id: "A3", stage: "A", ready: true, mins: 5, title: "Safe feeding with swallowing problems and tube feeding",
      keywords: "choking eating drinking swallowing difficulty feeding tube cough when eating my mother chokes",
      points: [
        "Only feed by mouth once medical staff allow it, and only the prescribed texture (thin, thick, soft).",
        "Sit upright with the head of the bed raised at least 45°, and keep that position for 30 minutes after eating.",
        "One small spoonful at a time; wait until it's fully swallowed before the next. No talking while eating.",
        "Signs of choking: coughing, a wet “gurgly” voice, watery eyes, difficulty breathing. Stop immediately and tell the nurse.",
        "With a feeding tube: follow the ward nurse's instructions exactly for amount, speed and position."
      ],
      checklist: ["Allowed to eat by mouth? Which texture?", "Head of bed ≥ 45°", "Amount eaten (all / 2/3 / 1/2 / little)", "Any coughing or wet voice?", "Kept sitting 30 minutes after eating"],
      quiz: [
        { q: "The safe position for feeding is:", a: ["Lying flat on the back", "Sitting upright, head of bed at least 45°", "Lying on the side"], c: 1 },
        { q: "The patient coughs and sounds “gurgly” while eating. You:", a: ["Give water to wash it down", "Stop feeding and tell the nurse", "Pat their back and continue"], c: 1 },
        { q: "After eating, you should:", a: ["Lay them down to sleep straight away", "Keep them sitting for about 30 minutes", "Turn them onto their side"], c: 1 }
      ] },
    { id: "A4", stage: "A", ready: false, mins: 4, title: "Working with doctors and nurses: what to ask on rounds", keywords: "ward rounds doctor questions" },
    { id: "B1", stage: "B", ready: false, mins: 5, title: "Preparing the home: bed, bathroom, fall prevention", keywords: "home falls bed" },
    { id: "B2", stage: "B", ready: false, mins: 4, title: "Medication and follow-up visits", keywords: "medication follow up" },
    { id: "B3", stage: "B", ready: true, mins: 3, title: "Recognising a repeat stroke (BE-FAST) and when to call 115",
      keywords: "be fast befast recurrence signs 115 drooping face arm weakness",
      points: [
        "B - Balance: sudden dizziness, loss of balance, unsteady walking.",
        "E - Eyes: sudden blurred vision or loss of sight in one or both eyes.",
        "F - Face: a drooping mouth or one side of the face sagging when smiling.",
        "A - Arm: weakness or numbness in one arm or leg; when both arms are raised, one drifts down.",
        "S - Speech: difficulty speaking, slurred speech, not understanding others.",
        "T - Time: call 115 immediately and note the time it started. Don't wait to see if it passes, and don't give any medicine yourself."
      ],
      checklist: ["BE-FAST card on the fridge", "115 and the nearest hospital's number", "Note the time symptoms started", "No food or drink, no medicine given by family"],
      quiz: [
        { q: "What does the T in BE-FAST remind you of?", a: ["Take medicine on time", "Time: call 115 now and note when it started", "Training exercises"], c: 1 },
        { q: "Dad suddenly slurs his words and his right arm is weak. You should:", a: ["Let him rest and keep watching", "Call 115 now", "Rub his skin with a coin and give blood pressure pills"], c: 1 },
        { q: "Which sign is part of BE-FAST?", a: ["One side of the mouth drooping", "A dry cough", "Eating less"], c: 0 }
      ] },
    { id: "C1", stage: "C", ready: true, mins: 5, title: "Daily exercise under professional guidance",
      keywords: "exercise mobility rehabilitation physiotherapy workouts",
      points: [
        "Only do exercises that the rehabilitation therapist has taught and checked for this patient.",
        "Practise every day; several short sessions are better than one long one. Record them in the recovery diary.",
        "Always have someone stand on the weak side when the patient sits up, stands or walks.",
        "Stop and contact medical staff if there is chest pain, breathlessness, dizziness, or the weakness gets worse.",
        "Praise every small improvement. Motivation is part of recovery."
      ],
      checklist: ["Exercises assigned by the therapist", "Sessions per day", "Helper standing on the weak side", "Signs to stop", "Progress this week"],
      quiz: [
        { q: "Home exercises should come from:", a: ["Any video online", "The rehab therapist's instructions for this patient", "Your own ideas"], c: 1 },
        { q: "When the patient practises walking, the helper stands on:", a: ["The weak side", "The strong side", "In front, at a distance"], c: 0 },
        { q: "Which sign means stop immediately?", a: ["Slightly tired muscles", "Chest pain or breathlessness", "Light sweating"], c: 1 }
      ] },
    { id: "C2", stage: "C", ready: false, mins: 4, title: "Communicating when the patient has trouble speaking", keywords: "speech difficulty communication" },
    { id: "C4", stage: "C", ready: true, mins: 4, title: "Caring for yourself: caregivers need rest too",
      keywords: "tired burnout rest caregiver stress",
      points: [
        "Caregiver burnout is common, not a weakness. Rest helps you care for your relative better and for longer.",
        "Share the rota within the family; accept help when it's offered.",
        "Take at least 15 minutes a day for yourself: a walk, some breathing, a call with a friend.",
        "Enough sleep is a priority. If you've been on night duty for days, find someone to swap with.",
        "If sadness, sleeplessness or irritability lasts, talk to family or seek professional support."
      ],
      checklist: ["A rota with someone to cover", "15 minutes for myself each day", "Hours slept last night", "One person to talk to"],
      quiz: [
        { q: "A caregiver resting is:", a: ["Selfish", "Necessary to keep caring for the long term", "Only for when the patient has recovered"], c: 1 },
        { q: "An effective way to lighten the load is:", a: ["Covering every shift alone", "Sharing the rota and accepting help", "Skipping sleep to do more"], c: 1 },
        { q: "Sadness and poor sleep for weeks means you should:", a: ["Just endure it", "Talk to family or see a professional", "Take sleeping pills you bought yourself"], c: 1 }
      ] },
    { id: "T1", stage: "T", ready: true, mins: 4, title: "The patient's emotional health after a stroke",
      keywords: "patient emotions sadness depression anxiety not wanting to exercise crying burden hopeless",
      points: [
        "Sadness, worry, fear of another stroke and loss of confidence are very common. About 1 in 3 patients develops depression after a stroke, and it is treatable.",
        "Signs to watch when they last more than 2 weeks: much sadness or crying, loss of interest, not wanting to exercise, changes in eating or sleep, often saying “I'm a burden”.",
        "Sudden, uncontrolled crying or laughing can be caused by the brain injury. The patient doesn't mean it, so don't blame them.",
        "Families can help a lot: listen without judging; let the patient do small things themselves; set small goals and praise each step; keep up contact with friends and neighbours.",
        "Tell the doctor if the signs persist. If the patient talks about wanting to die or harming themselves: don't leave them alone, call 115 or go to a medical facility immediately."
      ],
      checklist: ["Patient's mood over the past 2 weeks", "What still interests them?", "Any change in eating or sleep?", "One small thing they did themselves today", "Doctor informed (if signs persist)"],
      quiz: [
        { q: "Depression after a stroke is:", a: ["Rare, nothing to worry about", "Quite common and treatable", "Something that passes; no need to tell the doctor"], c: 1 },
        { q: "For 3 weeks Dad hasn't wanted to exercise and keeps saying “I'm a burden”. You should:", a: ["Say “keep going” and leave it", "Listen, and tell the doctor so he can be assessed", "Let him get over it alone"], c: 1 },
        { q: "What helps a patient regain confidence?", a: ["Doing everything for them", "Letting them do small things and praising progress", "Avoiding talk of exercise"], c: 1 }
      ] },
    { id: "T2", stage: "T", ready: true, mins: 4, title: "Caregivers: spotting burnout early",
      keywords: "burnout caregiver stress tension tired irritable guilt insomnia overwhelmed",
      points: [
        "Signs of burnout: tired even after sleep, irritable, impatient, often guilty, avoiding friends, headaches, back pain, getting sick often.",
        "Love, anger, sadness and guilt can all come at once. Mixed feelings like these are normal and don't make you a bad son or daughter.",
        "Each evening, rate yourself on a 0-10 “stress thermometer”. If it's 7 or higher for 3 days in a row, it's time to change something: ask someone to cover, take an afternoon off, or talk to a psychologist.",
        "Ask for specific help: instead of “whoever's free, please help”, ask “can you cover Saturday afternoon for 4 hours?”",
        "Seek professional help when: sleeplessness lasts, sadness persists for weeks, you rely on alcohol or sleeping pills to cope, or you have thoughts of harming yourself."
      ],
      checklist: ["Today's stress thermometer (0-10)", "Any day ≥ 7 in the last 3 days?", "One specific thing I'll ask someone to do", "Last time I had a full afternoon off"],
      quiz: [
        { q: "You love the patient and also feel angry with them. This:", a: ["Proves you're a bad person", "Is a normal feeling for caregivers", "Should be hidden"], c: 1 },
        { q: "Your stress thermometer has been at 8 for 3 days. You should:", a: ["Push on for a few more weeks", "Ask someone to cover or talk to a psychologist", "Drink more coffee"], c: 1 },
        { q: "A more effective way to ask for help is:", a: ["“Whoever's free, please help”", "“Can you cover Saturday afternoon for 4 hours?”", "Don't ask anyone"], c: 1 }
      ] },
    { id: "T3", stage: "T", ready: true, mins: 3, title: "5 minutes to calm down at the bedside",
      keywords: "relax breathing calm anxiety panic palpitations stress breathe 5-4-3-2-1",
      points: [
        "4-6 breathing: breathe in through the nose counting 4, breathe out slowly through the mouth counting 6. Repeat 5-10 times. A longer out-breath helps the body settle.",
        "The 5-4-3-2-1 technique: name 5 things you see, 4 you can touch, 3 sounds, 2 smells, 1 taste. It brings your mind back to the present when panicking.",
        "Muscle release: lift and tense your shoulders for 5 seconds, then let go; repeat with your hands and calves.",
        "Write 3 lines: what worries me most; which part I can control; one small thing I can do right now.",
        "An alert patient can also do this with you when anxious. If palpitations come with chest pain or lasting breathlessness, tell medical staff."
      ],
      checklist: ["4-6 breathing × 5", "5-4-3-2-1", "Release shoulders, hands, legs", "3 lines: worry / control / act now"],
      quiz: [
        { q: "In 4-6 breathing, which part is longer?", a: ["Breathing in", "Breathing out", "Holding your breath"], c: 1 },
        { q: "The 5-4-3-2-1 technique helps to:", a: ["Bring your mind back to the present when panicking", "Count repositioning turns", "Calculate medicine doses"], c: 0 },
        { q: "Palpitations with chest pain and lasting breathlessness means:", a: ["Keep practising breathing", "Tell medical staff", "Go to sleep"], c: 1 }
      ] },
    { id: "T4", stage: "T", ready: true, mins: 4, title: "Talking when your relative is sad or angry",
      keywords: "communication emotions anger sadness talking comfort arguing encouragement",
      points: [
        "Sit at eye level, speak slowly, in short sentences, one idea at a time. Give the patient time to answer.",
        "Name the feeling for them: “You're frustrated because you can't do up your buttons yet, right?” Being understood helps the patient calm down.",
        "Avoid “there's nothing to be sad about” or “come on, try harder”. Say instead “I'm here with you” or “Today you managed to…”.",
        "When the patient is angry: don't argue, step away for a few minutes, come back when you're both calm.",
        "Let the patient choose (porridge or soup, exercise or bath first) to keep a sense of control."
      ],
      checklist: ["One sentence naming a feeling, used today", "One choice the patient made", "One small step praised", "Phrase to avoid: “there's nothing to be sad about”"],
      quiz: [
        { q: "Which sentence helps the patient feel understood?", a: ["“There's nothing to be sad about”", "“You're tired from the long practice, right, Mom?”", "“Come on, try harder, Mom”"], c: 1 },
        { q: "Dad is angry and saying hurtful things. You should:", a: ["Argue back to settle who's right", "Step away for a few minutes and return when you're both calm", "Leave for the whole day"], c: 1 },
        { q: "Why let the patient choose small things?", a: ["To keep a sense of control", "To save the family work", "No particular reason"], c: 0 }
      ] }
  ],
  lessonDisclaimer: "This content is care guidance and does not replace your doctor's instructions.",
  lessonSources: "References: Vietnam Ministry of Health patient-care guidance; World Stroke Organization; American Stroke Association (BE-FAST). Demo version - our medical advisors will review before publication.",

  counseling: [
    { id: "tl-nguoi-nha", for: "Caregivers", name: "1-on-1 counseling for family members", format: "Online (video or phone) · 45 min",
      desc: "Say what's hard to say at home: exhaustion, guilt, worries about money and work. Find ways to keep going for the long run with a psychologist.",
      price: "At the partner psychologist's listed rate, paid directly by the family. STROKE360 charges no referral fee." },
    { id: "tl-nguoi-benh", for: "Patients", patient: true, name: "1-on-1 counseling for patients", format: "At home or online · 45 min",
      desc: "Mood assessment and support for sadness, anxiety and low motivation to exercise. The psychologist works with the rehab therapist and refers to a doctor when needed.",
      price: "At the partner psychologist's listed rate, paid directly by the family. STROKE360 charges no referral fee." },
    { id: "tl-gia-dinh", for: "Whole family", name: "Family session", format: "Online or at home · 60 min",
      desc: "The whole family sits down with a psychologist: share tasks fairly, talk about feelings, agree on a long-term care plan.",
      price: "At the partner psychologist's listed rate, paid directly by the family. STROKE360 charges no referral fee." },
    { id: "tl-nhom", for: "Caregivers", name: "Family support group", format: "Sunday evenings, 20:00-21:30 · Online · 6-10 people",
      desc: "Facilitated by a psychologist, with a “companion” from a family who has been there. Listen and be heard, without judgement.",
      price: "Free", free: true }
  ],
  counselingNote: "Counselors do not prescribe medication. When needed, they will advise you to see a specialist doctor.",
  crisisNote: "If you or your relative has thoughts of self-harm: don't stay alone, call 115 or go to the nearest medical facility now.",

  stories: [
    { who: "Lan, 38", role: "Daughter, office worker", stage: "In hospital",
      quote: "I go to work without that constant worry now. At 18:30 the diary arrives: how much Mom ate, what the doctor said.",
      body: "Lan's mother had a stroke on a Monday. Lan chose the Day shift and stays with her mother in the evenings. After 12 days, her mother could sit up and went home with the S2B package." },
    { who: "Tuấn, 45", role: "Came up from Long An to HCMC", stage: "In hospital",
      quote: "I didn't know anyone at the city hospital. Only once someone was there all day did I dare go home to sort things out.",
      body: "Tuấn's father needed someone at the bedside 24 hours. The Full day package helped the family manage the hardest first 2 weeks." },
    { who: "Hạnh, 62", role: "Patient in recovery", stage: "Just home",
      quote: "In week 6, I held the spoon and fed myself. A small thing, but the whole family clapped.",
      body: "Hạnh did 16 sessions with a therapist at home. Her daughter studied lesson C1 to practise with her every evening." },
    { who: "Minh, 41", role: "Son, caring for his father for 2 years", stage: "Long-term care",
      quote: "There were times I was exhausted and didn't dare say so. The family group is where I heard: you need rest too.",
      body: "Minh is now a “companion” for new families in the Zalo group." },
    { who: "Mrs. Sáu, 70", role: "Patient's wife", stage: "Just home",
      quote: "The BE-FAST card is on our fridge. Even my 10-year-old grandson knows it by heart.",
      body: "After the family coaching session, Mrs. Sáu's whole family knows how to spot a repeat stroke and when to call 115." }
  ],
  groups: [
    { name: "In hospital", desc: "Questions about procedures, feeding and repositioning in the first week." },
    { name: "Just home", desc: "Preparing the home, exercise, medication and follow-ups." },
    { name: "Long-term care", desc: "Keeping caregivers well, sharing long-term experience." }
  ],
  faqs: [
    ["My mother often coughs when drinking water. Is that a problem?", "Coughing when drinking may be a sign of choking. Stop giving drinks and tell the ward nurse or doctor so swallowing can be assessed. See lesson A3."],
    ["How often should I turn my father?", "Usually at least every 2 hours, or as the ward nurse instructs. See lesson A2."],
    ["My father has red skin on his buttocks. Should I massage it?", "Don't massage red skin. Relieve pressure on that area and ask the nurse for guidance."],
    ["When should I call 115 after discharge?", "Whenever any BE-FAST sign appears suddenly. Note the time it started and call straight away. See lesson B3."],
    ["Should I buy brain supplements for my mother?", "STROKE360 does not give medication advice. Ask the treating doctor about any medicine."],
    ["I've been on night duty for days and I'm exhausted. What can I do?", "You need rest. Share the rota, consider a support shift, and see lesson C4."],
    ["Our home is small. Can we do rehabilitation at home?", "Yes. A therapist will assess the space and choose suitable exercises."],
    ["My father is sad and doesn't want to exercise since coming home. Is it depression?", "Sadness lasting over 2 weeks, loss of interest and not wanting to exercise may be post-stroke depression, a treatable complication. Tell the treating doctor; see lesson T1 and book counseling on the Learn page."],
    ["Who answers the questions here?", "STROKE360's supervising nurses, every Thursday evening. Questions about diagnosis or medication will be referred to the treating doctor."]
  ],
  events: [
    { date: "29 Oct", title: "World Stroke Day: “Spot a stroke in 1 minute (BE-FAST)”", where: "Online + Zalo group", hot: true },
    { date: "Every Tuesday", title: "Free class for families", where: "At partner hospitals" },
    { date: "Thursday evenings", title: "Ask a nurse", where: "Zalo community group" },
    { date: "Sunday evenings", title: "Family support group with a psychologist", where: "Online" },
    { date: "December", title: "Recovery festival: meet families who have been there", where: "Ho Chi Minh City" }
  ],

  diary: [
    { t: "07:00", title: "Shift handover", note: "Handover received from the family; night diary read. Slept about 5 hours overnight.", tag: "Signed" },
    { t: "07:30", title: "Oral and body hygiene", note: "Pressure areas checked: no red patches.", tag: "Skin normal" },
    { t: "08:00", title: "Breakfast (sitting at 50°)", note: "Blended porridge as prescribed. Ate 2/3, no choking.", tag: "Ate 2/3" },
    { t: "09:15", title: "Joined ward rounds", note: "Doctor's advice: continue current medicines, start sitting practice twice a day.", tag: "Advice", hl: true },
    { t: "10:00", title: "Sitting practice", note: "Sat on the edge of the bed for 5 minutes with support, as the therapist showed. No dizziness.", tag: "5 min" },
    { t: "12:00", title: "Lunch", note: "Finished the meal, 150 ml thickened water. No choking.", tag: "Ate all" },
    { t: "15:00", title: "Sitting practice, round 2", note: "Sat for 7 minutes, balanced better than in the morning.", tag: "7 min" },
    { t: "17:30", title: "Dinner", note: "Ate 1/2, slightly tired. Ward nurse informed; vital signs stable.", tag: "Ate 1/2" },
    { t: "18:30", title: "Summary sent to family", note: "Mom ate well, no choking. Repositioned 6 times, skin normal. Doctor advised sitting practice twice a day: today Mom sat for 7 minutes. Tonight, remind Mom to drink enough water.", tag: "Summary", summary: true }
  ]
};
