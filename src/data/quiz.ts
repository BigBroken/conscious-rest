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
        points: { awarenessLevel: 1 },
      },
      {
        label: "I notice specific areas of tightness or holding in my body",
        value: "aware-tension",
        points: { awarenessLevel: 3 },
      },
      {
        label: "After a few minutes, I feel my body start to release and spread",
        value: "release",
        points: { awarenessLevel: 5 },
      },
      {
        label: "I've never really paid attention",
        value: "unaware",
        points: { awarenessLevel: 0 },
      },
    ],
  },
  {
    id: "current-mattress",
    question: "What is your current mattress like?",
    subtext:
      "This helps us understand where you're starting from so we can suggest a realistic next step.",
    options: [
      {
        label: "Soft memory foam — I sink into it",
        value: "soft-foam",
        points: { awarenessLevel: 0 },
      },
      {
        label: "A standard medium mattress — nothing extreme either way",
        value: "medium",
        points: { awarenessLevel: 1 },
      },
      {
        label: "A firm mattress or futon",
        value: "firm",
        points: { awarenessLevel: 3 },
      },
      {
        label: "I sleep on the floor or a very minimal surface",
        value: "floor",
        points: { awarenessLevel: 5 },
      },
    ],
  },
  {
    id: "body-practice",
    question: "Do you practice any body awareness disciplines?",
    subtext:
      "This helps us calibrate our recommendation to your level of somatic experience.",
    options: [
      {
        label: "Alexander Technique, Feldenkrais, or similar somatic practice",
        value: "somatic",
        points: { awarenessLevel: 5 },
      },
      {
        label: "Yoga, Pilates, tai chi, or martial arts",
        value: "movement",
        points: { awarenessLevel: 3 },
      },
      {
        label: "I exercise regularly but nothing body-awareness focused",
        value: "exercise",
        points: { awarenessLevel: 1 },
      },
      {
        label: "Not currently",
        value: "none",
        points: { awarenessLevel: 0 },
      },
    ],
  },
  {
    id: "comfort-philosophy",
    question: "Which statement resonates most with you?",
    subtext: "There are no wrong answers. This helps us understand your mindset.",
    options: [
      {
        label: "A good mattress should feel amazing from the first night",
        value: "instant",
        points: { awarenessLevel: 0 },
      },
      {
        label: "I'm willing to adjust if I understand why a mattress is better for me long-term",
        value: "open",
        points: { awarenessLevel: 2 },
      },
      {
        label: "I'd rather feel something real than something that just feels good",
        value: "honest",
        points: { awarenessLevel: 4 },
      },
      {
        label: "I trust my body's intelligence more than a mattress's engineering",
        value: "trust-body",
        points: { awarenessLevel: 5 },
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

  // Max possible awarenessLevel = 5+5+5+5 = 20
  let tier: QuizResult["tier"];
  let slugs: string[];
  let message: string;

  if (awarenessLevel >= 14) {
    tier = "practitioner";
    slugs = ["spindle-organic-latex", "diy-mattress", "sleep-on-latex", "brooklyn-bedding-plank"];
    message =
      "You have a high level of body awareness. You're ready for mattresses that provide maximum feedback and non-interference — surfaces that trust your body's intelligence as much as you do. We recommend customizable latex options so you can fine-tune your surface as your practice deepens.";
  } else if (awarenessLevel >= 6) {
    tier = "developing";
    slugs = ["sleep-ez-organic-latex", "avocado-green", "wright-w215", "saatva-classic"];
    message =
      "You're developing solid body awareness. We recommend mattresses that provide honest feedback while still offering enough comfort for the transition — responsive latex and coil-based surfaces that support your growing awareness without overwhelming it.";
  } else {
    tier = "explorer";
    slugs = ["wright-w215", "saatva-classic", "idle-natural-latex", "airweave"];
    message =
      "You're at the beginning of a body awareness journey — and that's a great place to be. We recommend mattresses that are more responsive and honest than what you're used to, but won't shock your system. Start here, and as your awareness develops, you may find yourself gravitating toward firmer, simpler surfaces.";
  }

  return { firmPreference, awarenessLevel, tier, slugs, message };
}
