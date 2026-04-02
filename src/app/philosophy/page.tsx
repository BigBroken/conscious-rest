import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Philosophy — Conscious Rest",
  description:
    "Why we review mattresses differently. The Alexander Technique, body awareness, and what the mattress industry gets wrong about posture.",
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
          What if everything you&apos;ve been told about &ldquo;good
          posture&rdquo; is wrong?
        </h1>
        <p className="text-lg text-ink-light leading-relaxed">
          Not wrong as in slightly off. Wrong as in fundamentally upside
          down. The mainstream idea of posture &mdash; sit up straight, pull
          your shoulders back, engage your core &mdash; creates more tension
          in the body, not less. And the mattress industry has built a
          billion-dollar marketing machine on top of that same flawed model.
        </p>
      </header>

      {/* Section: What is AT */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-ink mb-4">
          The Alexander Technique: a 130-year counterpoint
        </h2>
        <p className="text-ink-light leading-relaxed mb-4">
          In the 1890s, an Australian actor named F.M. Alexander lost his
          voice during performances. Doctors couldn&apos;t help, so he spent
          years observing himself in mirrors, studying what he was doing
          with his body that was interfering with his voice. What he
          discovered went far beyond vocal technique.
        </p>
        <p className="text-ink-light leading-relaxed mb-4">
          Alexander found that most of us carry enormous amounts of
          unnecessary muscular tension &mdash; tension we&apos;re so
          accustomed to that we don&apos;t even feel it. We pull our heads
          back and down, compress our spines, tighten our necks, and brace
          our bodies against gravity. And we call this &ldquo;normal.&rdquo;
        </p>
        <p className="text-ink-light leading-relaxed">
          The Alexander Technique is a method for unlearning these patterns.
          Not by forcing yourself into a &ldquo;correct&rdquo; position, but
          by developing the awareness to stop doing what&apos;s
          interfering &mdash; and letting your body&apos;s natural
          coordination emerge on its own.
        </p>
      </section>

      {/* Section: Primary Control */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-ink mb-4">
          Primary Control: the head-neck-back relationship
        </h2>
        <p className="text-ink-light leading-relaxed mb-4">
          The single most important concept in the Alexander Technique is
          what Alexander called <strong>Primary Control</strong>: the
          dynamic relationship between the head, neck, and back. When this
          relationship is free &mdash; when the neck isn&apos;t gripping, the
          head is balanced, and the back can lengthen and widen &mdash; the
          rest of the body organizes itself naturally.
        </p>
        <p className="text-ink-light leading-relaxed">
          This matters enormously for sleep. Your mattress is the surface
          your head-neck-back system interacts with for 7&ndash;8 hours every
          night. If that surface forces your spine into a fixed shape,
          conforms to your tension patterns, or removes the sensory
          feedback your nervous system needs to self-correct, it&apos;s
          actively working against your body&apos;s ability to release and
          restore during sleep.
        </p>
      </section>

      {/* Section: Constructive Rest */}
      <section className="mb-12 bg-sage-light border border-sage/20 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-ink mb-4">
          Constructive rest: AT&apos;s secret weapon
        </h2>
        <p className="text-ink-light leading-relaxed mb-4">
          Every Alexander Technique student learns <strong>constructive
          rest</strong> (also called semi-supine). You lie on a firm, flat
          surface &mdash; usually the floor &mdash; with your knees bent,
          feet flat, and a small stack of books under your head. Eyes open.
        </p>
        <p className="text-ink-light leading-relaxed mb-4">
          This isn&apos;t napping. It&apos;s an active practice of conscious
          release. The firm surface gives your body clear proprioceptive
          feedback. Your skeleton bears your weight. Your muscles receive
          the signal that they can let go &mdash; because the surface is
          doing the structural work, not them.
        </p>
        <p className="text-ink-light leading-relaxed">
          Now consider what happens on a soft memory foam mattress. The
          surface deforms before your muscles do. Your body sinks into an
          impression of its own habitual tension. The muscles never get the
          signal that they can release, because the surface has removed the
          feedback they need. What feels like &ldquo;comfort&rdquo; is
          actually the absence of information.
        </p>
      </section>

      {/* Section: Faulty Sensory Appreciation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-ink mb-4">
          Why &ldquo;what feels comfortable&rdquo; is a trap
        </h2>
        <p className="text-ink-light leading-relaxed mb-4">
          Alexander made a discovery that changed everything: our sense of
          what feels &ldquo;right&rdquo; is calibrated to our habits, not
          to what is actually good for us. He called this{" "}
          <strong>faulty sensory appreciation</strong>.
        </p>
        <p className="text-ink-light leading-relaxed mb-4">
          If you&apos;ve spent years hunching at a desk, standing up
          &ldquo;straight&rdquo; will feel wrong &mdash; like you&apos;re
          leaning backward. If you&apos;ve slept on a soft mattress for a
          decade, a firm surface will feel &ldquo;too hard&rdquo; at first.
          Your feelings are telling you what&apos;s familiar, not what&apos;s
          beneficial.
        </p>
        <p className="text-ink-light leading-relaxed">
          This is why the mattress industry&apos;s &ldquo;lie down for 15
          minutes in the store&rdquo; approach is fundamentally flawed.
          Your immediate comfort impression is the <em>least</em> reliable
          guide to what will actually support healthy sleep over months and
          years.
        </p>
      </section>

      {/* Section: How We Test */}
      <section className="mb-12 bg-warm-light border border-sand-dark rounded-lg p-8">
        <h2 className="text-2xl font-bold text-ink mb-4">
          How we actually test mattresses
        </h2>
        <p className="text-ink-light leading-relaxed mb-4">
          We don&apos;t use pressure maps. We don&apos;t drop bowling balls
          on the surface and film it in slow motion. Our testing is rooted
          in the same tool the Alexander Technique has used for 130 years:
          <strong> the educated human body</strong>.
        </p>
        <p className="text-ink-light leading-relaxed mb-4">
          Every mattress we review goes through a structured evaluation
          process based on the six pillars below. Each test has a specific
          protocol &mdash; something you can replicate yourself during a
          trial period. We&apos;re not hiding behind proprietary lab
          equipment. If you develop the awareness, you can verify
          everything we say with your own body.
        </p>
        <p className="text-ink-light leading-relaxed">
          Our baseline for every test is the floor. Before evaluating any
          mattress, we spend 15 minutes in constructive rest (semi-supine)
          on a carpeted floor. This resets the sensory baseline &mdash; we
          know what full feedback, full support, and zero interference
          feels like. Then we repeat the same process on the mattress and
          note what changes.
        </p>
      </section>

      {/* Section: 6 Pillars */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-ink mb-6">
          Our 6-pillar review framework
        </h2>

        {/* Pillar 1: Feedback */}
        <div className="mb-8 bg-white border border-sand-dark rounded-lg p-6">
          <h3 className="text-lg font-semibold text-sage mb-1">
            1. Feedback
          </h3>
          <p className="text-sm text-ink-muted italic mb-2">
            Proprioceptive clarity
          </p>
          <p className="text-ink font-medium mb-3">
            Does this surface give your nervous system clear information
            about where your body is in space?
          </p>
          <p className="text-sm text-ink-light leading-relaxed mb-4">
            Your nervous system relies on proprioception &mdash; the sense
            of where your body is without looking. A firm surface that
            pushes back gives your brain clear data: &ldquo;my shoulder
            blade is here, my sacrum is here, my heels are here.&rdquo;
            Memory foam absorbs this signal. The body can&apos;t
            self-organize if it doesn&apos;t know where it is.
          </p>
          <div className="bg-sage-light border border-sage/20 rounded-md p-4 mb-3">
            <p className="text-sm font-semibold text-sage-dark mb-2">
              How we test it
            </p>
            <ul className="space-y-1.5 text-sm text-ink-light">
              <li>
                Lie in semi-supine on the mattress with knees bent, feet
                flat, thin support under the head. Close your eyes.
              </li>
              <li>
                <strong>Contact point mapping:</strong> Without moving, can
                you clearly feel where your shoulder blades meet the
                surface? Your sacrum? The backs of your ribs? The more
                contact points you can distinctly identify, the higher the
                feedback score.
              </li>
              <li>
                <strong>Hand press test:</strong> Press your palm firmly
                into the surface and release. How quickly does the surface
                return? Does it push back (high feedback) or slowly
                re-inflate (low feedback)?
              </li>
              <li>
                <strong>Floor comparison:</strong> Rate your contact point
                awareness on the floor as a 10. How much clarity is lost on
                this mattress?
              </li>
            </ul>
          </div>
          <div className="bg-warm-light border border-sand-dark rounded-md p-4">
            <p className="text-sm font-semibold text-accent mb-1">
              Try this yourself
            </p>
            <p className="text-sm text-ink-light">
              Lie on your current mattress with your eyes closed. Try to
              feel your shoulder blades against the surface. Now get on the
              floor (carpeted or with a yoga mat) and do the same thing. If
              you notice dramatically more clarity on the floor, your
              mattress is absorbing proprioceptive information your body
              needs.
            </p>
          </div>
        </div>

        {/* Pillar 2: Freedom */}
        <div className="mb-8 bg-white border border-sand-dark rounded-lg p-6">
          <h3 className="text-lg font-semibold text-sage mb-1">
            2. Freedom
          </h3>
          <p className="text-sm text-ink-muted italic mb-2">
            Ease of movement
          </p>
          <p className="text-ink font-medium mb-3">
            Can you move, roll, and change position without fighting the
            surface?
          </p>
          <p className="text-sm text-ink-light leading-relaxed mb-4">
            Your body is not a statue. During sleep, you shift, roll, and
            reorganize dozens of times &mdash; this is healthy and
            necessary. A surface that creates a body-shaped crater traps
            you. You have to <em>climb out</em> of your own impression to
            change position, which means your muscles have to work to do
            something that should be effortless.
          </p>
          <div className="bg-sage-light border border-sage/20 rounded-md p-4 mb-3">
            <p className="text-sm font-semibold text-sage-dark mb-2">
              How we test it
            </p>
            <ul className="space-y-1.5 text-sm text-ink-light">
              <li>
                <strong>Roll test:</strong> Lie on your back, then roll to
                your side using minimal effort. Does the surface release you
                immediately, or do you feel yourself peeling out of an
                impression? We rate the effort required on a scale of
                effortless (10) to laborious (1).
              </li>
              <li>
                <strong>Arm repositioning:</strong> While lying on your
                back, move one arm from your side to resting on your chest.
                Can you do this without your shoulder sinking deeper into
                the surface or your whole body tilting? On responsive
                surfaces, this is trivial. On memory foam, the asymmetric
                weight shift creates a tilt.
              </li>
              <li>
                <strong>Leg slide:</strong> Extend one leg from the bent
                position. Does the surface allow the heel to glide, or does
                it drag through foam?
              </li>
              <li>
                <strong>Get-up test:</strong> Sit up and get out of bed.
                How much effort does the surface add to this movement? A
                responsive mattress is nearly neutral. A deep foam mattress
                actively resists you.
              </li>
            </ul>
          </div>
          <div className="bg-warm-light border border-sand-dark rounded-md p-4">
            <p className="text-sm font-semibold text-accent mb-1">
              Try this yourself
            </p>
            <p className="text-sm text-ink-light">
              Tonight, pay attention to what happens when you roll over. Do
              you feel like you&apos;re moving <em>on</em> the surface, or
              <em> through</em> it? If you have to push yourself up and
              over a foam ridge to change positions, that&apos;s your
              muscles doing work they shouldn&apos;t need to do.
            </p>
          </div>
        </div>

        {/* Pillar 3: Non-Interference */}
        <div className="mb-8 bg-white border border-sand-dark rounded-lg p-6">
          <h3 className="text-lg font-semibold text-sage mb-1">
            3. Non-Interference
          </h3>
          <p className="text-sm text-ink-muted italic mb-2">
            The surface avoids imposing a shape
          </p>
          <p className="text-ink font-medium mb-3">
            Does this mattress refrain from pushing, zoning, or molding
            your body into an idealized position?
          </p>
          <p className="text-sm text-ink-light leading-relaxed mb-4">
            &ldquo;Zoned support&rdquo; sounds scientific. In practice, it
            means the mattress has decided what shape your spine should be
            and is actively pushing you toward it &mdash; firmer under your
            hips, softer under your shoulders. But whose spine? The
            Alexander Technique teaches that each person&apos;s
            coordination is unique, and more importantly, it changes as you
            release habitual tension. A mattress that imposes today&apos;s
            &ldquo;ideal&rdquo; works against tomorrow&apos;s progress.
          </p>
          <div className="bg-sage-light border border-sage/20 rounded-md p-4 mb-3">
            <p className="text-sm font-semibold text-sage-dark mb-2">
              How we test it
            </p>
            <ul className="space-y-1.5 text-sm text-ink-light">
              <li>
                <strong>Construction audit:</strong> We examine the
                mattress layers. Does it use differentiated firmness zones?
                Contoured foam? Lumbar pads? Each of these is a form of
                interference. Fewer engineered zones = higher score.
              </li>
              <li>
                <strong>Hand slide test:</strong> While lying on your back,
                slide your hand under your lower back, then under your
                shoulder blades, then under your hips. Is the surface
                pushing up more in some areas than others? On a
                non-interfering mattress, the resistance feels consistent.
              </li>
              <li>
                <strong>Position independence:</strong> Lie in three
                positions &mdash; back, side, and angled (halfway between).
                Does the mattress feel like it&apos;s trying to &ldquo;do
                something&rdquo; different in each position, or does it
                simply provide a stable platform regardless of how you
                arrange yourself?
              </li>
            </ul>
          </div>
          <div className="bg-warm-light border border-sand-dark rounded-md p-4">
            <p className="text-sm font-semibold text-accent mb-1">
              Try this yourself
            </p>
            <p className="text-sm text-ink-light">
              Lie on your back on your mattress. Slide your hand palm-down
              between your lower back and the surface. Now do the same at
              your mid-back and shoulders. If the mattress pushes noticeably
              harder into your lumbar area, it&apos;s making a decision
              about your spine that your body should be making for itself.
            </p>
          </div>
        </div>

        {/* Pillar 4: Primary Control */}
        <div className="mb-8 bg-white border border-sand-dark rounded-lg p-6">
          <h3 className="text-lg font-semibold text-sage mb-1">
            4. Primary Control
          </h3>
          <p className="text-sm text-ink-muted italic mb-2">
            Free head-neck-back relationship
          </p>
          <p className="text-ink font-medium mb-3">
            Does this surface support a free, unimpeded relationship
            between the head, neck, and back?
          </p>
          <p className="text-sm text-ink-light leading-relaxed mb-4">
            Alexander called the head-neck-back relationship
            &ldquo;Primary Control&rdquo; because it governs everything
            else. If the neck is gripping, the whole body follows. During
            sleep, the mattress and pillow combination either supports this
            relationship or disrupts it. A surface that lets the torso
            sink while the head stays elevated creates a kink. A surface
            that&apos;s consistent lets the whole system rest on the same
            plane.
          </p>
          <div className="bg-sage-light border border-sage/20 rounded-md p-4 mb-3">
            <p className="text-sm font-semibold text-sage-dark mb-2">
              How we test it
            </p>
            <ul className="space-y-1.5 text-sm text-ink-light">
              <li>
                <strong>Sinking differential:</strong> We measure how far
                the torso sinks relative to the head position. On a firm
                surface, the torso and head remain on nearly the same
                plane. On soft foam, the torso can sink 2&ndash;3 inches
                while the head sits higher &mdash; creating a forced flex
                in the neck. We note the difference.
              </li>
              <li>
                <strong>Head rotation test:</strong> While lying on your
                back, slowly turn your head left and right. Does the neck
                feel free, or does the surface create resistance or
                unevenness? Does the pillow/surface combination allow the
                head to rotate without the neck having to grip?
              </li>
              <li>
                <strong>Pillow calibration:</strong> We test each mattress
                with a thin pillow, a medium pillow, and no pillow. For
                each setup, we evaluate whether the head-neck-back
                relationship can achieve freedom. The best mattresses need
                minimal pillow height because the torso doesn&apos;t sink
                away from the head.
              </li>
              <li>
                <strong>Side-lying check:</strong> On your side, is the gap
                between your ear and the mattress surface consistent with a
                natural neck position, or does the shoulder sink in so
                deeply that your head drops sideways?
              </li>
            </ul>
          </div>
          <div className="bg-warm-light border border-sand-dark rounded-md p-4">
            <p className="text-sm font-semibold text-accent mb-1">
              Try this yourself
            </p>
            <p className="text-sm text-ink-light">
              Lie on your back on your mattress with a thin pillow. Have
              someone look at you from the side. Is your forehead
              significantly higher than your chest? If so, your torso is
              sinking and your neck is being forced into flexion all night.
              Now try it on the floor with a book under your head &mdash;
              notice how the head, neck, and back stay on the same plane.
            </p>
          </div>
        </div>

        {/* Pillar 5: Release */}
        <div className="mb-8 bg-white border border-sand-dark rounded-lg p-6">
          <h3 className="text-lg font-semibold text-sage mb-1">
            5. Release
          </h3>
          <p className="text-sm text-ink-muted italic mb-2">
            Muscular letting-go over time
          </p>
          <p className="text-ink font-medium mb-3">
            Does this surface encourage your muscles to genuinely release,
            not just on first contact but progressively through the night?
          </p>
          <p className="text-sm text-ink-light leading-relaxed mb-4">
            There are two completely different physical experiences that
            people confuse. The first is <strong>sinking</strong>: you lie
            down on soft foam, the surface gives way, and you feel an
            immediate &ldquo;ahhh.&rdquo; The second is{" "}
            <strong>releasing</strong>: your body is supported by a firm
            surface, and over 10&ndash;20 minutes, you feel specific areas
            of tension gradually soften and spread. Sinking is passive and
            instant. Releasing is active and takes time. They feel
            completely different once you know what to look for.
          </p>
          <div className="bg-sage-light border border-sage/20 rounded-md p-4 mb-3">
            <p className="text-sm font-semibold text-sage-dark mb-2">
              How we test it
            </p>
            <ul className="space-y-1.5 text-sm text-ink-light">
              <li>
                <strong>20-minute semi-supine test:</strong> We lie in
                constructive rest on the mattress for a full 20 minutes.
                At the 5, 10, 15, and 20 minute marks, we note which areas
                of the body feel like they&apos;re softening and widening
                against the surface. On a good surface, the lower back
                gradually settles toward the mattress as the paraspinal
                muscles release. On a poor surface, nothing changes because
                the foam already &ldquo;filled in&rdquo; the gap
                immediately.
              </li>
              <li>
                <strong>Back-width awareness:</strong> At the start and end
                of the 20 minutes, we notice how wide the back feels
                against the surface. If the back feels wider at the end,
                the surface is supporting release. If it feels the same,
                the surface prevented the process.
              </li>
              <li>
                <strong>Multi-night evaluation:</strong> We sleep on each
                mattress for a minimum of two weeks. We track whether
                morning stiffness decreases, whether we wake feeling longer
                and more open, or whether stiffness persists or worsens.
                This is the only pillar that cannot be properly evaluated
                in a single session.
              </li>
            </ul>
          </div>
          <div className="bg-warm-light border border-sand-dark rounded-md p-4">
            <p className="text-sm font-semibold text-accent mb-1">
              Try this yourself
            </p>
            <p className="text-sm text-ink-light">
              Set a timer for 20 minutes. Lie on your back with knees bent,
              feet flat, a thin book under your head. Just rest &mdash;
              eyes open, breathing normally. After 20 minutes, notice: does
              your lower back feel closer to the surface than when you
              started? Do your shoulders feel wider? Now try the same thing
              on your mattress. If you feel the same spreading on the
              mattress, it&apos;s supporting release. If that sensation
              only happens on the floor, your mattress is in the way.
            </p>
          </div>
        </div>

        {/* Pillar 6: Honest Sensation */}
        <div className="mb-8 bg-white border border-sand-dark rounded-lg p-6">
          <h3 className="text-lg font-semibold text-sage mb-1">
            6. Honest Sensation
          </h3>
          <p className="text-sm text-ink-muted italic mb-2">
            Long-term truth over showroom comfort
          </p>
          <p className="text-ink font-medium mb-3">
            Does extended use confirm or contradict the first-night
            impression?
          </p>
          <p className="text-sm text-ink-light leading-relaxed mb-4">
            Alexander discovered that our sense of what feels
            &ldquo;right&rdquo; is calibrated to what&apos;s familiar, not
            what&apos;s beneficial. He called this <strong>faulty sensory
            appreciation</strong>. A mattress that feels immediately
            perfect may be perfectly conforming to your existing tension.
            A mattress that feels slightly unfamiliar may be giving your
            body information it hasn&apos;t had before. We can&apos;t
            trust first impressions alone &mdash; so we don&apos;t.
          </p>
          <div className="bg-sage-light border border-sage/20 rounded-md p-4 mb-3">
            <p className="text-sm font-semibold text-sage-dark mb-2">
              How we test it
            </p>
            <ul className="space-y-1.5 text-sm text-ink-light">
              <li>
                <strong>Four-point timeline:</strong> We record impressions
                at night 1, week 1, week 2, and week 4. We track five
                markers: morning stiffness, ease of falling asleep, ease of
                getting out of bed, midday energy, and any areas of pain or
                discomfort. The trajectory matters more than any single data
                point.
              </li>
              <li>
                <strong>Adaptation curve:</strong> A mattress that scores
                high on Honest Sensation typically shows mild unfamiliarity
                in the first few days, followed by progressively better
                sleep quality over weeks. A mattress that scores low shows
                the opposite &mdash; great first impression that gradually
                reveals issues (persistent stiffness, trapped feeling, body
                impressions forming).
              </li>
              <li>
                <strong>Return-to-floor comparison:</strong> After two
                weeks on the mattress, we return to a 20-minute floor
                session. If the floor now feels dramatically better than the
                mattress, the mattress has been masking tension rather than
                resolving it. If the floor and mattress feel comparable
                (with the mattress being slightly softer but still
                informative), the mattress is being honest.
              </li>
            </ul>
          </div>
          <div className="bg-warm-light border border-sand-dark rounded-md p-4">
            <p className="text-sm font-semibold text-accent mb-1">
              Try this yourself
            </p>
            <p className="text-sm text-ink-light">
              If you&apos;re in a trial period with a new mattress, keep a
              simple log. Each morning, rate three things on a 1&ndash;5
              scale: stiffness, energy, and ease of getting up. Don&apos;t
              look at previous entries. After three weeks, review the trend.
              The number on any given day matters less than the direction
              &mdash; are things improving, holding steady, or declining?
            </p>
          </div>
        </div>
      </section>

      {/* Section: What We're NOT Saying */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-ink mb-4">
          What we&apos;re not saying
        </h2>
        <p className="text-ink-light leading-relaxed mb-4">
          We&apos;re not saying everyone should sleep on a wooden board.
          We&apos;re not saying comfort doesn&apos;t matter. And we&apos;re
          not saying that if a mattress feels good, it must be bad for you.
        </p>
        <p className="text-ink-light leading-relaxed mb-4">
          What we are saying is that the <em>criteria</em> matter. When you
          choose a mattress based on how it shapes around your current body,
          you&apos;re choosing one that reinforces where you are. When you
          choose one based on how well it supports your body&apos;s capacity
          to change, release, and self-organize &mdash; you&apos;re choosing
          one that meets you where you are and helps you move forward.
        </p>
        <p className="text-ink-light leading-relaxed">
          That&apos;s the difference. Not hard vs. soft. Not expensive vs.
          cheap. But: does this mattress work <em>with</em> your body&apos;s
          intelligence, or does it try to replace it?
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
          Take the Body Awareness Quiz
        </Link>
      </div>
    </article>
  );
}
