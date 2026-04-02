export interface QuizQuestion {
  id: string;
  question: string;
  subtext: string;
  options: { label: string; value: string; points: Record<string, number> }[];
}

// Points map to: feedback, freedom, firmPreference, awarenessLevel
// Higher firmPreference = recommend firmer mattresses
// Higher awarenessLevel = can handle more honest/firm surfaces

export const quizQuestions: QuizQuestion[] = [
  {
    id: "tension-awareness",
    question: "When you lie on a hard floor, what do you notice?",
    subtext:
      "This tells us about your current body awareness and tension patterns.",
    options: [
      {
        label: "It's uncomfortable — I feel pressure on my hips and shoulders",
        value: "uncomfortable",
        points: { firmPreference: -2, awarenessLevel: 1 },
      },
      {
        label: "I can feel specific areas of tightness or holding",
        value: "aware-tension",
        points: { firmPreference: 1, awarenessLevel: 3 },
      },
      {
        label: "After a few minutes, I feel my body start to release and spread",
        value: "release",
        points: { firmPreference: 2, awarenessLevel: 4 },
      },
      {
        label: "I haven't tried this / I avoid hard surfaces",
        value: "avoid",
        points: { firmPreference: -1, awarenessLevel: 0 },
      },
    ],
  },
  {
    id: "morning-state",
    question: "How do you typically feel in the first 10 minutes after waking?",
    subtext:
      "Your morning state reveals how well your sleep surface supports release.",
    options: [
      {
        label: "Stiff — I need to stretch or move around before I feel loose",
        value: "stiff",
        points: { firmPreference: 0, awarenessLevel: 1 },
      },
      {
        label: "Groggy but physically fine — no particular stiffness",
        value: "fine",
        points: { firmPreference: 0, awarenessLevel: 1 },
      },
      {
        label:
          "I feel like my body has been 'set' in the position I slept in",
        value: "set",
        points: { firmPreference: 1, awarenessLevel: 2 },
      },
      {
        label: "I feel longer and more open than when I went to bed",
        value: "released",
        points: { firmPreference: 2, awarenessLevel: 4 },
      },
    ],
  },
  {
    id: "movement-during-sleep",
    question: "How much do you move during the night?",
    subtext:
      "Movement during sleep is natural and necessary — the question is whether your surface allows it.",
    options: [
      {
        label: "I wake up in almost the same position I fell asleep in",
        value: "static",
        points: { firmPreference: 1, awarenessLevel: 1 },
      },
      {
        label: "I move a moderate amount and sometimes wake briefly when I do",
        value: "moderate",
        points: { firmPreference: 1, awarenessLevel: 2 },
      },
      {
        label: "I move a lot — tossing and turning is a regular thing",
        value: "restless",
        points: { firmPreference: 0, awarenessLevel: 1 },
      },
      {
        label: "I move but it feels effortless — I barely notice it",
        value: "effortless",
        points: { firmPreference: 2, awarenessLevel: 3 },
      },
    ],
  },
  {
    id: "body-practice",
    question:
      "Do you practice any body awareness disciplines?",
    subtext:
      "This helps us calibrate our recommendation to your current level of somatic experience.",
    options: [
      {
        label: "Alexander Technique, Feldenkrais, or similar somatic practice",
        value: "somatic",
        points: { firmPreference: 2, awarenessLevel: 4 },
      },
      {
        label: "Yoga, Pilates, tai chi, or martial arts",
        value: "movement",
        points: { firmPreference: 1, awarenessLevel: 3 },
      },
      {
        label: "I exercise regularly but not body-awareness focused",
        value: "exercise",
        points: { firmPreference: 0, awarenessLevel: 1 },
      },
      {
        label: "Not currently",
        value: "none",
        points: { firmPreference: -1, awarenessLevel: 0 },
      },
    ],
  },
  {
    id: "current-mattress",
    question: "What is your current mattress like?",
    subtext:
      "Understanding where you're coming from helps us suggest a realistic transition.",
    options: [
      {
        label: "Soft memory foam — I sink into it",
        value: "soft-foam",
        points: { firmPreference: -1, awarenessLevel: 0 },
      },
      {
        label: "A standard medium mattress — nothing extreme either way",
        value: "medium",
        points: { firmPreference: 0, awarenessLevel: 1 },
      },
      {
        label: "A firm mattress or futon",
        value: "firm",
        points: { firmPreference: 2, awarenessLevel: 2 },
      },
      {
        label: "I sleep on the floor or a very minimal surface",
        value: "floor",
        points: { firmPreference: 3, awarenessLevel: 3 },
      },
    ],
  },
  {
    id: "comfort-philosophy",
    question:
      "Which statement resonates most with you?",
    subtext: "There are no wrong answers. This helps us understand your mindset.",
    options: [
      {
        label:
          "A good mattress should feel amazing from the first night",
        value: "instant",
        points: { firmPreference: -2, awarenessLevel: 0 },
      },
      {
        label:
          "I'm willing to adjust if I understand why a mattress is better for me long-term",
        value: "open",
        points: { firmPreference: 0, awarenessLevel: 2 },
      },
      {
        label:
          "I'd rather feel something real than something that just feels good",
        value: "honest",
        points: { firmPreference: 2, awarenessLevel: 3 },
      },
      {
        label:
          "I trust my body's intelligence more than a mattress's engineering",
        value: "trust-body",
        points: { firmPreference: 2, awarenessLevel: 4 },
      },
    ],
  },
];

export interface QuizResult {
  firmPreference: number;
  awarenessLevel: number;
  tier: "explorer" | "developing" | "practitioner";
  slugs: string[];
  message: string;
}

export function calculateResult(
  answers: Record<string, string>
): QuizResult {
  let firmPreference = 0;
  let awarenessLevel = 0;

  for (const q of quizQuestions) {
    const answer = answers[q.id];
    if (!answer) continue;
    const option = q.options.find((o) => o.value === answer);
    if (!option) continue;
    firmPreference += option.points.firmPreference ?? 0;
    awarenessLevel += option.points.awarenessLevel ?? 0;
  }

  // Determine tier
  let tier: QuizResult["tier"];
  let slugs: string[];
  let message: string;

  if (awarenessLevel >= 16) {
    tier = "practitioner";
    slugs = ["brooklyn-bedding-plank", "sleep-on-latex", "avocado-green"];
    message =
      "You have a high level of body awareness. You're ready for mattresses that provide maximum feedback and non-interference — surfaces that trust your body's intelligence as much as you do.";
  } else if (awarenessLevel >= 8) {
    tier = "developing";
    slugs = ["avocado-green", "saatva-classic", "birch-natural", "idle-natural-latex"];
    message =
      "You're developing strong body awareness. We recommend mattresses that provide honest feedback while still offering enough comfort for the transition. These surfaces will support your growing awareness without overwhelming it.";
  } else {
    tier = "explorer";
    slugs = ["idle-natural-latex", "winkbed", "saatva-classic", "helix-dawn-luxe"];
    message =
      "You're at the beginning of a body awareness journey — and that's a great place to be. We recommend mattresses that are more responsive and honest than what you're used to, but won't shock your system. Start here, and as your awareness develops, you may find yourself gravitating toward firmer, simpler surfaces.";
  }

  return { firmPreference, awarenessLevel, tier, slugs, message };
}
