import { Rating, getScore } from "@/data/mattresses";

const pillars = [
  { key: "freedom", label: "Freedom of Movement", description: "Ease of repositioning" },
  { key: "nonInterference", label: "Non-Interference", description: "Avoids imposing shape" },
  { key: "responsiveness", label: "Responsiveness", description: "Pushes back vs absorbs" },
  { key: "consistency", label: "Consistency", description: "Same support in all positions" },
  { key: "noHabitReinforcement", label: "No Habit Reinforcement", description: "Doesn't lock in patterns" },
] as const;

function ScoreBar({ value, max = 10 }: { value: number; max?: number }) {
  const pct = (value / max) * 100;
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2 bg-sand-dark rounded-full overflow-hidden">
        <div
          className="h-full bg-sage rounded-full transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-sm font-medium text-ink w-6 text-right">
        {value}
      </span>
    </div>
  );
}

export default function ATScoreCard({
  rating,
  compact = false,
}: {
  rating: Rating;
  compact?: boolean;
}) {
  const overall = getScore(rating);

  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-sage text-white flex items-center justify-center text-sm font-bold">
          {overall}
        </div>
        <span className="text-xs text-ink-muted">Score</span>
      </div>
    );
  }

  return (
    <div className="bg-white border border-sand-dark rounded-lg p-6">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-semibold text-ink">Rest Conditions Score</h3>
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-sage text-white flex items-center justify-center text-lg font-bold">
            {overall}
          </div>
          <span className="text-xs text-ink-muted">/10</span>
        </div>
      </div>
      <div className="space-y-3">
        {pillars.map((p) => (
          <div key={p.key}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-ink-light">{p.label}</span>
              <span className="text-ink-muted text-xs">{p.description}</span>
            </div>
            <ScoreBar value={rating[p.key]} />
          </div>
        ))}
      </div>
    </div>
  );
}
