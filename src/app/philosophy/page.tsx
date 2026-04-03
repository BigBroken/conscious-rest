import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Philosophy — Conscious Rest",
  description:
    "Why we review mattresses differently. What the posture industry gets wrong, what humans have always known about sleep, and why your mattress matters less than you think.",
};

export default function PhilosophyPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      {/* Intro */}
      <header className="mb-12">
        <p className="text-sm tracking-widest uppercase text-sage mb-3">
          Our Philosophy
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-ink mb-4">
          Humans have been sleeping on firm surfaces on their sides for
          all of history. Then the mattress industry told you that was
          wrong.
        </h1>
        <p className="text-lg text-ink-light leading-relaxed">
          Every mattress review site starts with the mattress. We start
          with the person. Because the honest truth is that your mattress
          matters less than the industry wants you to believe &mdash; and
          what you do with your body during the 16 hours you&apos;re awake
          matters far more than the 8 hours you spend asleep.
        </p>
      </header>

      {/* Section: The Posture Model Is Made Up */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-ink mb-4">
          The &ldquo;ideal posture&rdquo; your mattress claims to support
          was never proven
        </h2>
        <p className="text-ink-light leading-relaxed mb-4">
          When a mattress company says it provides &ldquo;spinal
          alignment,&rdquo; alignment to <em>what</em>? The standard
          model of ideal posture &mdash; the plumb line through the ear,
          shoulder, hip, knee, and ankle &mdash; comes from Kendall&apos;s
          manual, the physical therapy textbook used worldwide.
        </p>
        <p className="text-ink-light leading-relaxed mb-4">
          A scoping review by researcher Martin Bara Lopez traced the
          origins of this model. What he found: it was derived from
          cadaver research in the 17th&ndash;19th centuries. Scientists
          put steel rods through pieces of dead bodies to find the center
          of gravity of isolated body segments. They then imagined a
          posture that would stack these segments without using the
          muscles of the legs. The original researchers never even claimed
          this was &ldquo;ideal.&rdquo; Kendall&apos;s manual simply
          declared it so &mdash; <strong>with no bibliographic references
          or supporting evidence</strong>.
        </p>
        <p className="text-ink-light leading-relaxed mb-4">
          The first edition of Kendall&apos;s own book admitted:
          &ldquo;The authors have not seen an individual who matches the
          standard in all respects.&rdquo; That admission was quietly
          removed from later editions.
        </p>
        <p className="text-ink-light leading-relaxed">
          Every mattress that claims to &ldquo;align your spine&rdquo; is
          aligning it to a model that was never validated on living human
          beings. Every &ldquo;ergonomic zone&rdquo; is based on
          assumptions about the human body that modern science considers
          erroneous. This isn&apos;t a fringe opinion &mdash; it&apos;s
          published research. The foundation is rotten.
        </p>
      </section>

      {/* Section: What Humans Actually Do */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-ink mb-4">
          How humans have actually slept for thousands of years
        </h2>
        <p className="text-ink-light leading-relaxed mb-4">
          Physiotherapist Michael Tetley studied sleeping postures among
          people living traditional, pre-industrial lifestyles. What he
          found contradicts almost everything the mattress industry tells
          you.
        </p>
        <p className="text-ink-light leading-relaxed mb-4">
          These people sleep on the ground or thin mats. They sleep on
          their sides. They use their arm to support their neck &mdash;
          no pillow. They move freely between positions throughout the
          night. And they don&apos;t have the back pain, sleep disorders,
          or postural problems that plague modern populations.
        </p>
        <p className="text-ink-light leading-relaxed mb-4">
          None of the observed natural sleeping postures involve lying on
          the back. All are variations of side-lying. The surface is firm.
          No memory foam. No zones. No contouring. No &ldquo;pressure
          relief.&rdquo;
        </p>
        <p className="text-ink-light leading-relaxed">
          So when the mattress industry tells you that side sleepers need
          a softer mattress to &ldquo;relieve pressure at the shoulder
          and hip&rdquo; &mdash; ask yourself: how did humans manage to
          sleep on the ground on their sides for all of history without
          this &ldquo;pressure relief&rdquo;?
        </p>
      </section>

      {/* Section: The Real Variable */}
      <section className="mb-12 bg-sage-light border border-sage/20 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-ink mb-4">
          The real variable isn&apos;t the mattress. It&apos;s you.
        </h2>
        <p className="text-ink-light leading-relaxed mb-4">
          The Alexander Technique &mdash; a 130-year-old discipline of
          body awareness developed by F.M. Alexander &mdash; teaches that
          most of the tension we carry is habitual. We&apos;ve been doing
          it so long that the gripping feels normal. It just feels like
          &ldquo;us.&rdquo;
        </p>
        <p className="text-ink-light leading-relaxed mb-4">
          Here&apos;s what that means for sleep: <strong>when you go to
          bed, you bring your tension with you.</strong> You can&apos;t
          consciously guide your body while you&apos;re asleep. You
          revert to your baseline &mdash; whatever habitual patterns
          you&apos;ve been practicing all day. If you&apos;re shortening
          and narrowing while you stand and sit, you&apos;ll shorten and
          narrow while you lie down.
        </p>
        <p className="text-ink-light leading-relaxed mb-4">
          No mattress fixes this. Not a firm one. Not a soft one. Not one
          with seven zones and NASA-grade foam. The best thing you can do
          for your sleep is improve how you use yourself during the day.
        </p>
        <p className="text-ink-light leading-relaxed">
          We say this even though we&apos;re a mattress review site.
          Because being honest about this is more important than selling
          you a mattress. And it&apos;s what separates us from every
          other site that wants you to believe the right purchase will
          solve the problem.
        </p>
      </section>

      {/* Section: So Why Does the Mattress Matter At All */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-ink mb-4">
          So why does the mattress matter at all?
        </h2>
        <p className="text-ink-light leading-relaxed mb-4">
          Because while the mattress can&apos;t fix you, it can make
          things worse.
        </p>
        <p className="text-ink-light leading-relaxed mb-4">
          Alexander talked about <strong>conditions</strong> &mdash; the
          idea that while you can&apos;t always directly control an
          outcome, you can create conditions that are more or less
          favorable. You spend 8 hours every night on a surface. That
          surface is a <em>condition</em> you create for rest.
        </p>
        <p className="text-ink-light leading-relaxed mb-4">
          A mattress that traps you in a body-shaped crater forces your
          muscles to work every time you need to change position. That&apos;s
          muscular effort during rest. A mattress that molds to your
          habitual tension patterns reinforces them for 8 hours straight.
          A mattress that pushes your spine into an engineered
          &ldquo;ideal&rdquo; position interferes with your body&apos;s
          ability to self-organize.
        </p>
        <p className="text-ink-light leading-relaxed">
          The mattress doesn&apos;t need to do anything <em>for</em> you.
          It just needs to stop doing things <em>to</em> you. The best
          mattress is the one that interferes the least with your
          body&apos;s natural capacity for rest and movement.
        </p>
      </section>

      {/* Section: How We Evaluate */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-ink mb-6">
          How we evaluate mattresses
        </h2>
        <p className="text-ink-light leading-relaxed mb-6">
          We don&apos;t use firmness scales. We don&apos;t use pressure
          maps. We ask five questions about the conditions a mattress
          creates for sleep.
        </p>

        {/* Pillar 1 */}
        <div className="mb-6 bg-white border border-sand-dark rounded-lg p-6">
          <h3 className="text-lg font-semibold text-sage mb-1">
            1. Freedom of Movement
          </h3>
          <p className="text-ink font-medium mb-2">
            Can you move, roll, and change position without effort?
          </p>
          <p className="text-sm text-ink-light leading-relaxed">
            Healthy sleep involves 20&ndash;40 position changes per
            night. This is natural and necessary. A surface that creates
            a body impression traps you &mdash; your muscles have to work
            to climb out of the crater every time you shift. Responsive
            materials (latex, coils) let you move <em>on</em> the
            surface. Conforming materials (memory foam) force you to move
            <em> through</em> it. We prioritize surfaces that allow
            effortless repositioning.
          </p>
        </div>

        {/* Pillar 2 */}
        <div className="mb-6 bg-white border border-sand-dark rounded-lg p-6">
          <h3 className="text-lg font-semibold text-sage mb-1">
            2. Non-Interference
          </h3>
          <p className="text-ink font-medium mb-2">
            Does the surface avoid imposing a shape on your body?
          </p>
          <p className="text-sm text-ink-light leading-relaxed">
            &ldquo;Zoned support&rdquo; means the mattress has decided
            what shape your spine should be. But the model it&apos;s
            using was never validated on living people. And you&apos;re
            moving between positions all night &mdash; the zones are
            designed for one position. We favor simple, consistent
            surfaces that provide a stable platform regardless of how you
            arrange yourself.
          </p>
        </div>

        {/* Pillar 3 */}
        <div className="mb-6 bg-white border border-sand-dark rounded-lg p-6">
          <h3 className="text-lg font-semibold text-sage mb-1">
            3. Responsiveness
          </h3>
          <p className="text-ink font-medium mb-2">
            Does the surface push back, or does it absorb?
          </p>
          <p className="text-sm text-ink-light leading-relaxed">
            Natural latex pushes back when you push into it. Coils
            spring back instantly. Memory foam slowly absorbs and
            re-inflates. A responsive surface supports natural movement
            and doesn&apos;t create a lasting impression of your body. It
            works with you as you shift positions throughout the night
            rather than recording each position in foam.
          </p>
        </div>

        {/* Pillar 4 */}
        <div className="mb-6 bg-white border border-sand-dark rounded-lg p-6">
          <h3 className="text-lg font-semibold text-sage mb-1">
            4. Consistency
          </h3>
          <p className="text-ink font-medium mb-2">
            Does the surface behave the same regardless of position?
          </p>
          <p className="text-sm text-ink-light leading-relaxed">
            You don&apos;t sleep in one position. You cycle through side,
            back, angled, and transitional positions all night. A mattress
            with differentiated zones changes its behavior depending on
            where your body lands &mdash; firmer here, softer there. A
            consistent surface gives you the same support whether
            you&apos;re on your side, back, or somewhere in between. This
            matters because the surface shouldn&apos;t change the rules
            every time you move.
          </p>
        </div>

        {/* Pillar 5 */}
        <div className="mb-6 bg-white border border-sand-dark rounded-lg p-6">
          <h3 className="text-lg font-semibold text-sage mb-1">
            5. Doesn&apos;t Reinforce Habits
          </h3>
          <p className="text-ink font-medium mb-2">
            Does the surface avoid locking in your existing tension
            patterns?
          </p>
          <p className="text-sm text-ink-light leading-relaxed">
            A body impression in memory foam is literally your tension
            pattern cast in material. Your habitual posture &mdash;
            the way you hold your shoulders, the curve of your back, the
            angle of your hips &mdash; molded into the surface you sleep
            on for 8 hours. If you&apos;re working on how you use
            yourself during the day, a mattress that reinforces your old
            patterns at night is undoing that work. We favor surfaces
            that don&apos;t take a permanent impression.
          </p>
        </div>
      </section>

      {/* Section: Constructive Rest */}
      <section className="mb-12 bg-warm-light border border-sand-dark rounded-lg p-8">
        <h2 className="text-2xl font-bold text-ink mb-4">
          What actually helps: constructive rest
        </h2>
        <p className="text-ink-light leading-relaxed mb-4">
          If there&apos;s one thing we&apos;d recommend before any
          mattress, it&apos;s this: spend 15 minutes on the floor before
          bed in <strong>constructive rest</strong>.
        </p>
        <p className="text-ink-light leading-relaxed mb-4">
          Lie on your back on a firm surface. Knees bent, feet flat.
          A small stack of books under your head. Eyes open. Don&apos;t
          try to do anything &mdash; just notice. This is a practice from
          the Alexander Technique, and it&apos;s the one thing AT
          unambiguously contributes to better rest.
        </p>
        <p className="text-ink-light leading-relaxed mb-4">
          On a firm surface, your skeleton bears your weight. Your
          muscles receive information that they can let go. Over 10&ndash;15
          minutes, you&apos;ll feel areas of tension gradually soften and
          spread against the floor. Your back widens. Your breathing
          deepens. This is conscious release &mdash; something that
          can&apos;t happen during sleep, but that prepares your body
          for better sleep.
        </p>
        <p className="text-ink-light leading-relaxed">
          Do this consistently and you&apos;ll notice something: your
          relationship with firmness changes. The floor stops feeling
          &ldquo;hard&rdquo; and starts feeling informative. And
          you&apos;ll start to understand intuitively what we mean when
          we say a mattress should get out of your way.
        </p>
      </section>

      {/* Section: What We're NOT Saying */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-ink mb-4">
          What we&apos;re not saying
        </h2>
        <p className="text-ink-light leading-relaxed mb-4">
          We&apos;re not saying you should sleep on the floor. We&apos;re
          not saying comfort doesn&apos;t matter. We&apos;re not saying
          the Alexander Technique &ldquo;works&rdquo; during sleep
          &mdash; it doesn&apos;t, because AT is a conscious practice and
          sleep is unconscious.
        </p>
        <p className="text-ink-light leading-relaxed mb-4">
          We&apos;re not claiming any mattress &ldquo;applies AT
          principles.&rdquo; That would be a misrepresentation. What we
          are saying is that ideas from the Alexander Technique and other
          somatic education traditions inform how we think about the
          <em> conditions</em> you create for rest.
        </p>
        <p className="text-ink-light leading-relaxed">
          And we&apos;re saying that the mattress industry&apos;s model
          &mdash; built on an unverified posture standard, marketed
          through fear of &ldquo;bad alignment,&rdquo; and solved by
          engineering softness &mdash; doesn&apos;t hold up to scrutiny.
          Humans slept on the ground for millennia. Your body can handle
          a firm surface. What it can&apos;t handle is being trapped in
          a foam impression of its own tension for 8 hours a night.
        </p>
      </section>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
        <Link
          href="/reviews"
          className="bg-sage text-white px-6 py-3 rounded-md hover:bg-sage-dark transition-colors font-medium"
        >
          See Our Reviews
        </Link>
        <Link
          href="/quiz"
          className="border border-ink-muted text-ink-light px-6 py-3 rounded-md hover:border-sage hover:text-sage transition-colors font-medium"
        >
          Take the Quiz
        </Link>
      </div>
    </article>
  );
}
