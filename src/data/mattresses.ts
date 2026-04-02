export interface ATRating {
  feedback: number;      // Proprioceptive feedback (1-10, higher = firmer/more info)
  freedom: number;       // Ease of movement/repositioning (1-10)
  nonInterference: number; // Avoids imposing shape (1-10)
  primaryControl: number;  // Supports free head-neck-back relationship (1-10)
  release: number;       // Encourages muscular release over time (1-10)
  honestSensation: number; // Long-term experience vs showroom comfort (1-10)
}

export interface Mattress {
  slug: string;
  name: string;
  brand: string;
  tagline: string;
  price: string;            // Starting price
  type: string;             // e.g. "Hybrid", "Latex", "Foam", "Innerspring"
  firmness: string;         // e.g. "Medium-Firm", "Firm"
  affiliateUrl: string;     // Placeholder until real links are set up
  affiliateNetwork: string; // Which network to sign up for
  imageUrl: string;         // Placeholder
  atRating: ATRating;
  atVerdict: string;        // AT-informed summary
  prosAT: string[];         // Pros from AT perspective
  consAT: string[];         // Cons from AT perspective
  overview: string;
  whyWeRecommend: string;   // AT-specific reasoning
  bestFor: string[];
  constructiveRestScore: string; // How well it works for semi-supine practice
}

export function getATScore(rating: ATRating): number {
  const { feedback, freedom, nonInterference, primaryControl, release, honestSensation } = rating;
  return Math.round(((feedback + freedom + nonInterference + primaryControl + release + honestSensation) / 6) * 10) / 10;
}

export const mattresses: Mattress[] = [
  {
    slug: "avocado-green",
    name: "Avocado Green Mattress",
    brand: "Avocado",
    tagline: "Organic latex and coils — the body gets real feedback.",
    price: "$1,399",
    type: "Hybrid (Latex + Coils)",
    firmness: "Firm / Medium-Firm",
    affiliateUrl: "#",
    affiliateNetwork: "ShareASale",
    imageUrl: "/mattresses/avocado-green.jpg",
    atRating: {
      feedback: 9,
      freedom: 8,
      nonInterference: 8,
      primaryControl: 9,
      release: 8,
      honestSensation: 9,
    },
    atVerdict: "One of the best mattresses for AT practitioners. The organic latex over pocketed coils provides genuine skeletal support without conforming to habitual tension patterns. Your body receives clear information from this surface.",
    prosAT: [
      "Latex provides firm, responsive feedback — your body knows where it is",
      "Excellent freedom of movement; no sinking or trapping",
      "Minimal zoning — doesn't impose an idealized spine shape",
      "Organic materials mean no off-gassing interfering with breath awareness",
    ],
    consAT: [
      "The pillow-top version reduces proprioceptive feedback",
      "Higher price point",
    ],
    overview: "The Avocado Green is a GOTS-certified organic mattress combining natural Dunlop latex with a pocketed coil support system. Made in a Los Angeles factory with organic wool, cotton, and latex.",
    whyWeRecommend: "This mattress embodies the AT principle of non-interference. It provides a stable, responsive platform that lets your body self-organize during sleep rather than molding you into a shape. The latex surface gives consistent feedback without the 'quicksand' sensation of memory foam.",
    bestFor: ["AT practitioners", "Those learning constructive rest", "People transitioning from floor sleeping", "Hot sleepers"],
    constructiveRestScore: "Excellent — firm latex surface closely mimics the quality of feedback you get from a carpeted floor",
  },
  {
    slug: "saatva-classic",
    name: "Saatva Classic",
    brand: "Saatva",
    tagline: "Traditional innerspring done right — responsive and honest.",
    price: "$1,395",
    type: "Innerspring Hybrid",
    firmness: "Available in Plush Soft, Luxury Firm, Firm",
    affiliateUrl: "#",
    affiliateNetwork: "Impact",
    imageUrl: "/mattresses/saatva-classic.jpg",
    atRating: {
      feedback: 8,
      freedom: 9,
      nonInterference: 7,
      primaryControl: 8,
      release: 7,
      honestSensation: 8,
    },
    atVerdict: "The Firm option is the AT-recommended choice. Coil-on-coil construction provides excellent responsiveness and freedom of movement. Avoid the Plush Soft — it trades feedback for false comfort.",
    prosAT: [
      "Coil-on-coil system is inherently responsive — springs push back, giving your body information",
      "Best-in-class ease of movement; you can roll and reposition effortlessly",
      "The Firm option provides genuine skeletal support",
      "No memory foam means no body impression trapping",
    ],
    consAT: [
      "The Plush Soft option works against AT principles — too conforming",
      "Euro pillow top adds a comfort layer that slightly reduces feedback",
      "Lumbar zone enhancement is a form of interference",
    ],
    overview: "The Saatva Classic is a luxury innerspring mattress with a coil-on-coil system: individually wrapped comfort coils over a durable steel coil base. Available in three firmness levels and two heights.",
    whyWeRecommend: "We recommend the Firm model specifically. The dual-coil system is one of the most responsive constructions available — when you move, the mattress responds immediately. This is what freedom of movement feels like. Your muscles don't have to fight the surface to change position.",
    bestFor: ["Side and back sleepers who want the Firm option", "People who move frequently during sleep", "Those who dislike the 'sinking' feeling"],
    constructiveRestScore: "Good (Firm option) — provides responsive feedback, though the pillow top slightly softens the proprioceptive signal",
  },
  {
    slug: "brooklyn-bedding-plank",
    name: "Brooklyn Bedding Plank Firm",
    brand: "Brooklyn Bedding",
    tagline: "Unapologetically firm. Your skeleton will thank you.",
    price: "$1,049",
    type: "Foam",
    firmness: "Firm / Extra Firm (flippable)",
    affiliateUrl: "#",
    affiliateNetwork: "ShareASale",
    imageUrl: "/mattresses/plank-firm.jpg",
    atRating: {
      feedback: 10,
      freedom: 8,
      nonInterference: 10,
      primaryControl: 9,
      release: 9,
      honestSensation: 10,
    },
    atVerdict: "The closest thing to sleeping on a properly supportive floor with just enough cushion. If F.M. Alexander designed a mattress, it might look something like this. Maximum proprioceptive feedback, zero interference.",
    prosAT: [
      "Highest feedback score in our reviews — your body gets unambiguous information",
      "Flippable design: Firm side for daily use, Extra Firm for constructive rest practice",
      "Zero zoning, zero contouring — pure non-interference",
      "The surface encourages your muscles to actually release rather than being 'held'",
    ],
    consAT: [
      "May be too firm for side sleepers initially — requires a transition period",
      "Foam construction means slightly less responsiveness than latex or coils",
    ],
    overview: "The Plank Firm is one of the few mattresses designed specifically for people who prefer a firm sleeping surface. It's a flippable mattress with a Firm side and an Extra Firm side, using high-density TitanFlex foam.",
    whyWeRecommend: "Most mattresses try to convince you that softer is better. The Plank takes the opposite stance, and from an AT perspective, it's right. A firm surface allows your skeleton to bear weight properly, which means your muscles can stop working overtime. The flippable design means you can practice constructive rest on the Extra Firm side and sleep on the Firm side.",
    bestFor: ["Dedicated AT practitioners", "Back sleepers", "People with chronic tension patterns", "Those transitioning from floor sleeping"],
    constructiveRestScore: "Outstanding — the Extra Firm side is the closest to floor-quality feedback we've found in a mattress",
  },
  {
    slug: "winkbed",
    name: "WinkBed",
    brand: "WinkBeds",
    tagline: "Responsive coils with just enough comfort — a balanced AT choice.",
    price: "$1,149",
    type: "Hybrid (Coils + Foam)",
    firmness: "Available in Softer, Luxury Firm, Firmer, Plus",
    affiliateUrl: "#",
    affiliateNetwork: "ShareASale",
    imageUrl: "/mattresses/winkbed.jpg",
    atRating: {
      feedback: 7,
      freedom: 8,
      nonInterference: 7,
      primaryControl: 8,
      release: 7,
      honestSensation: 7,
    },
    atVerdict: "Go with the Firmer option. The pocketed coil system provides good responsiveness, and the Tencel cover feels clean without being slippery. A solid middle-ground choice for people not ready for a truly firm surface.",
    prosAT: [
      "Pocketed coils provide responsive support and good movement freedom",
      "Tencel fiber cover supports temperature regulation for undisturbed rest",
      "Multiple firmness options — the Firmer model is the AT pick",
      "Good edge support means your body gets consistent feedback across the full surface",
    ],
    consAT: [
      "The Softer option uses too much conforming foam",
      "Some zoned support in the lumbar area — minor interference",
      "Not as high-feedback as latex or extra-firm options",
    ],
    overview: "The WinkBed is a hybrid mattress with a Euro pillow top, pocketed coils, and a supportive base. Available in four firmness levels with a Tencel fiber cover.",
    whyWeRecommend: "The WinkBed Firmer strikes a balance that works for people exploring AT principles but not yet comfortable on a very firm surface. The coil system is responsive and allows easy repositioning, which is essential for natural sleep movement. Think of it as a stepping stone — honest enough to support body awareness, comfortable enough for a good night's sleep.",
    bestFor: ["AT beginners", "Couples with different firmness preferences", "Those transitioning from soft mattresses"],
    constructiveRestScore: "Moderate — usable for constructive rest on the Firmer model, but a yoga mat on the floor is still preferable for practice",
  },
  {
    slug: "sleep-on-latex",
    name: "Sleep On Latex Pure Green",
    brand: "Sleep On Latex",
    tagline: "Simple, honest, natural latex. Nothing to get in your way.",
    price: "$799",
    type: "Latex",
    firmness: "Soft, Medium, Firm",
    affiliateUrl: "#",
    affiliateNetwork: "Direct / Amazon",
    imageUrl: "/mattresses/sleep-on-latex.jpg",
    atRating: {
      feedback: 9,
      freedom: 9,
      nonInterference: 9,
      primaryControl: 8,
      release: 8,
      honestSensation: 9,
    },
    atVerdict: "The Firm option is exceptional. Pure natural latex with zero gimmicks — no zones, no memory foam layers, no 'proprietary technology.' Just honest latex on a supportive base. This is what non-interference looks like.",
    prosAT: [
      "Pure Dunlop latex — the most responsive foam material available",
      "Zero zoning or contouring technology — true non-interference",
      "Excellent proprioceptive feedback on the Firm model",
      "Simple construction means nothing between you and the support surface",
    ],
    consAT: [
      "The Soft option is too conforming for AT purposes",
      "Less edge support than coil-based mattresses",
    ],
    overview: "The Pure Green is a simple, no-frills natural Dunlop latex mattress available in three firmness levels. Made with GOLS-certified organic latex and a GOTS-certified organic cotton and wool cover.",
    whyWeRecommend: "This mattress proves you don't need complexity to get great support. Natural latex is inherently responsive — it pushes back when you push into it, giving your nervous system clear feedback about where your body is in space. The Firm model in particular lets your skeleton do what it's designed to do: bear weight and distribute force. Your muscles get the message that they can let go.",
    bestFor: ["Value-conscious AT practitioners", "Minimalists", "Those who want the purest feedback possible", "Eco-conscious buyers"],
    constructiveRestScore: "Excellent — the Firm model provides clean, consistent feedback very similar to a padded floor surface",
  },
  {
    slug: "helix-dawn-luxe",
    name: "Helix Dawn LUXE",
    brand: "Helix",
    tagline: "The firm hybrid for back sleepers who want real support.",
    price: "$1,373",
    type: "Hybrid (Coils + Foam)",
    firmness: "Firm",
    affiliateUrl: "#",
    affiliateNetwork: "ShareASale",
    imageUrl: "/mattresses/helix-dawn.jpg",
    atRating: {
      feedback: 8,
      freedom: 8,
      nonInterference: 7,
      primaryControl: 8,
      release: 7,
      honestSensation: 7,
    },
    atVerdict: "A strong firm hybrid option. The coil system provides good responsiveness and the firm foam layers don't trap you. Helix's zoning is mild enough not to be a dealbreaker, but it's there.",
    prosAT: [
      "Designed specifically for back and stomach sleepers who need firmness",
      "Coil system provides responsive, bouncy support — easy to reposition",
      "Firm comfort layer doesn't create a body impression",
      "Good airflow supports undisturbed, temperature-regulated sleep",
    ],
    consAT: [
      "Some zoned lumbar support — mild interference",
      "The LUXE pillow top slightly reduces surface feedback vs. the standard Dawn",
      "Foam comfort layers are less responsive than latex",
    ],
    overview: "The Helix Dawn LUXE is the firm option in Helix's premium LUXE line. It features a zoned pocketed coil system, high-density foam layers, and a Tencel pillow top cover.",
    whyWeRecommend: "If you're a back sleeper and want a hybrid that respects AT principles, the Dawn LUXE is a strong choice. The firm construction keeps your body on the surface rather than in it — an important distinction. You maintain awareness of your body's relationship with the support surface, which is the foundation of good use during sleep.",
    bestFor: ["Back sleepers", "Those who want a premium firm hybrid", "Hot sleepers"],
    constructiveRestScore: "Good — firm enough for basic body awareness, though the pillow top softens feedback slightly",
  },
  {
    slug: "idle-natural-latex",
    name: "Idle Natural Latex Hybrid",
    brand: "Idle Sleep",
    tagline: "Flippable latex hybrid — two firmness levels, one honest mattress.",
    price: "$1,049",
    type: "Hybrid (Latex + Coils)",
    firmness: "Medium / Firm (flippable)",
    affiliateUrl: "#",
    affiliateNetwork: "ShareASale",
    imageUrl: "/mattresses/idle-latex.jpg",
    atRating: {
      feedback: 8,
      freedom: 8,
      nonInterference: 8,
      primaryControl: 8,
      release: 8,
      honestSensation: 8,
    },
    atVerdict: "A smart choice for AT-curious sleepers. The flippable design lets you experiment — start on Medium, move to Firm as your body awareness develops. Talalay latex is slightly softer than Dunlop but still far more responsive than memory foam.",
    prosAT: [
      "Flippable design supports your AT journey — progress from Medium to Firm",
      "Talalay latex provides responsive, breathable support",
      "Coil base adds movement freedom and airflow",
      "No memory foam anywhere in the construction",
    ],
    consAT: [
      "Medium side may be too soft for dedicated AT practitioners",
      "Talalay latex is slightly less feedback-rich than Dunlop",
    ],
    overview: "The Idle Natural Latex Hybrid is a flippable mattress with Talalay latex comfort layers on both sides and a shared pocketed coil support core. One side is Medium, the other is Firm.",
    whyWeRecommend: "We love this for people starting their AT journey. Alexander Technique isn't about forcing yourself onto the hardest surface — it's about developing awareness. The flippable design lets you start where you are and progress as your relationship with support evolves. The latex-over-coils construction is inherently honest: it pushes back, it lets you move, and it doesn't pretend to know what shape your spine should be.",
    bestFor: ["AT beginners", "Those wanting flexibility as body awareness develops", "Couples", "Value-conscious buyers"],
    constructiveRestScore: "Good to Excellent — the Firm side is well-suited for semi-supine practice",
  },
  {
    slug: "birch-natural",
    name: "Birch Natural Mattress",
    brand: "Birch (by Helix)",
    tagline: "Organic latex hybrid with no tricks — just support.",
    price: "$1,498",
    type: "Hybrid (Latex + Coils)",
    firmness: "Medium-Firm",
    affiliateUrl: "#",
    affiliateNetwork: "ShareASale",
    imageUrl: "/mattresses/birch-natural.jpg",
    atRating: {
      feedback: 8,
      freedom: 8,
      nonInterference: 8,
      primaryControl: 8,
      release: 8,
      honestSensation: 8,
    },
    atVerdict: "A well-rounded organic option. The natural Talalay latex over pocketed coils provides the responsive, non-conforming support that AT principles call for. Similar philosophy to the Avocado but with a slightly different feel.",
    prosAT: [
      "Natural Talalay latex surface provides responsive feedback",
      "Pocketed coils ensure freedom of movement",
      "Organic wool and cotton regulate temperature naturally",
      "No synthetic foams — clean, honest construction",
    ],
    consAT: [
      "Medium-Firm may not be firm enough for dedicated AT practitioners",
      "Only one firmness option available",
    ],
    overview: "The Birch Natural is an organic hybrid mattress from Helix's eco-friendly sub-brand. It features natural Talalay latex, individually wrapped coils, organic wool, and organic cotton.",
    whyWeRecommend: "Birch delivers what AT practitioners need: a responsive surface that doesn't try to outsmart your body. The latex-over-coils construction is the gold standard for the AT approach — firm enough to provide feedback, responsive enough to allow free movement, and simple enough to stay out of your way.",
    bestFor: ["Eco-conscious AT practitioners", "All sleep positions", "Those wanting a one-firmness-fits-most option"],
    constructiveRestScore: "Good — suitable for semi-supine practice, especially for those who find the floor too firm initially",
  },
];

export function getMattressBySlug(slug: string): Mattress | undefined {
  return mattresses.find((m) => m.slug === slug);
}

export function getTopMattresses(count: number = 3): Mattress[] {
  return [...mattresses]
    .sort((a, b) => getATScore(b.atRating) - getATScore(a.atRating))
    .slice(0, count);
}
