export interface Rating {
  freedom: number;          // Ease of movement/repositioning (1-10)
  nonInterference: number;  // Avoids imposing shape (1-10)
  responsiveness: number;   // Pushes back vs absorbs (1-10)
  consistency: number;      // Same support in all positions (1-10)
  noHabitReinforcement: number; // Doesn't lock in tension patterns (1-10)
}

export interface Mattress {
  slug: string;
  name: string;
  brand: string;
  tagline: string;
  price: string;
  type: string;
  firmness: string;
  affiliateUrl: string;
  affiliateNetwork: string;
  imageUrl: string;
  hasImage: boolean;
  rating: Rating;
  verdict: string;
  pros: string[];
  cons: string[];
  overview: string;
  whyWeRecommend: string;
  bestFor: string[];
}

export function getScore(rating: Rating): number {
  const { freedom, nonInterference, responsiveness, consistency, noHabitReinforcement } = rating;
  return Math.round(((freedom + nonInterference + responsiveness + consistency + noHabitReinforcement) / 5) * 10) / 10;
}

// Keep old name as alias during transition
export type ATRating = Rating;
export const getATScore = getScore;

export const mattresses: Mattress[] = [
  {
    slug: "avocado-green",
    name: "Avocado Green Mattress",
    brand: "Avocado",
    tagline: "Organic latex and coils — the body gets real feedback.",
    price: "$1,399",
    type: "Hybrid (Latex + Coils)",
    firmness: "Firm / Medium-Firm",
    affiliateUrl: "https://www.avocadogreenmattress.com/",
    affiliateNetwork: "ShareASale",
    imageUrl: "/mattresses/avocado-green.jpg",
    hasImage: false,
    rating: {
      freedom: 8,
      nonInterference: 8,
      responsiveness: 9,
      consistency: 9,
      noHabitReinforcement: 9,
    },
    verdict: "One of the best mattresses for AT practitioners. The organic latex over pocketed coils provides genuine skeletal support without conforming to habitual tension patterns. Your body receives clear information from this surface.",
    pros: [
      "Latex provides firm, responsive feedback — your body knows where it is",
      "Excellent freedom of movement; no sinking or trapping",
      "Minimal zoning — doesn't impose an idealized spine shape",
      "Organic materials mean no off-gassing interfering with breath awareness",
    ],
    cons: [
      "The pillow-top version reduces proprioceptive feedback",
      "Higher price point",
    ],
    overview: "The Avocado Green is a GOTS-certified organic mattress combining natural Dunlop latex with a pocketed coil support system. Made in a Los Angeles factory with organic wool, cotton, and latex.",
    whyWeRecommend: "This mattress embodies the AT principle of non-interference. It provides a stable, responsive platform that lets your body self-organize during sleep rather than molding you into a shape. The latex surface gives consistent feedback without the 'quicksand' sensation of memory foam.",
    bestFor: ["AT practitioners", "Those learning constructive rest", "People transitioning from floor sleeping", "Hot sleepers"],
  },
  {
    slug: "saatva-classic",
    name: "Saatva Classic",
    brand: "Saatva",
    tagline: "Traditional innerspring done right — responsive and honest.",
    price: "$1,395",
    type: "Innerspring Hybrid",
    firmness: "Available in Plush Soft, Luxury Firm, Firm",
    affiliateUrl: "https://www.saatva.com/mattresses/saatva-classic",
    affiliateNetwork: "Impact",
    imageUrl: "/mattresses/saatva-classic.jpg",
    hasImage: false,
    rating: {
      freedom: 9,
      nonInterference: 7,
      responsiveness: 8,
      consistency: 8,
      noHabitReinforcement: 8,
    },
    verdict: "The Firm option is the AT-recommended choice. Coil-on-coil construction provides excellent responsiveness and freedom of movement. Avoid the Plush Soft — it trades feedback for false comfort.",
    pros: [
      "Coil-on-coil system is inherently responsive — springs push back, giving your body information",
      "Best-in-class ease of movement; you can roll and reposition effortlessly",
      "The Firm option provides genuine skeletal support",
      "No memory foam means no body impression trapping",
    ],
    cons: [
      "The Plush Soft option works against AT principles — too conforming",
      "Euro pillow top adds a comfort layer that slightly reduces feedback",
      "Lumbar zone enhancement is a form of interference",
    ],
    overview: "The Saatva Classic is a luxury innerspring mattress with a coil-on-coil system: individually wrapped comfort coils over a durable steel coil base. Available in three firmness levels and two heights.",
    whyWeRecommend: "We recommend the Firm model specifically. The dual-coil system is one of the most responsive constructions available — when you move, the mattress responds immediately. This is what freedom of movement feels like. Your muscles don't have to fight the surface to change position.",
    bestFor: ["Side and back sleepers who want the Firm option", "People who move frequently during sleep", "Those who dislike the 'sinking' feeling"],
  },
  {
    slug: "brooklyn-bedding-plank",
    name: "Brooklyn Bedding Plank Firm",
    brand: "Brooklyn Bedding",
    tagline: "Unapologetically firm. Your skeleton will thank you.",
    price: "$1,049",
    type: "Foam",
    firmness: "Firm / Extra Firm (flippable)",
    affiliateUrl: "https://www.brooklynbedding.com/products/the-plank-firm-mattress",
    affiliateNetwork: "ShareASale",
    imageUrl: "/mattresses/plank-firm.jpg",
    hasImage: false,
    rating: {
      freedom: 8,
      nonInterference: 10,
      responsiveness: 10,
      consistency: 9,
      noHabitReinforcement: 10,
    },
    verdict: "The closest thing to sleeping on a properly supportive floor with just enough cushion. If F.M. Alexander designed a mattress, it might look something like this. Maximum proprioceptive feedback, zero interference.",
    pros: [
      "Highest feedback score in our reviews — your body gets unambiguous information",
      "Flippable design: Firm side for daily use, Extra Firm for constructive rest practice",
      "Zero zoning, zero contouring — pure non-interference",
      "The surface encourages your muscles to actually release rather than being 'held'",
    ],
    cons: [
      "May be too firm for side sleepers initially — requires a transition period",
      "Foam construction means slightly less responsiveness than latex or coils",
    ],
    overview: "The Plank Firm is one of the few mattresses designed specifically for people who prefer a firm sleeping surface. It's a flippable mattress with a Firm side and an Extra Firm side, using high-density TitanFlex foam.",
    whyWeRecommend: "Most mattresses try to convince you that softer is better. The Plank takes the opposite stance, and from an AT perspective, it's right. A firm surface allows your skeleton to bear weight properly, which means your muscles can stop working overtime. The flippable design means you can practice constructive rest on the Extra Firm side and sleep on the Firm side.",
    bestFor: ["Dedicated AT practitioners", "Back sleepers", "People with chronic tension patterns", "Those transitioning from floor sleeping"],
  },
  {
    slug: "winkbed",
    name: "WinkBed",
    brand: "WinkBeds",
    tagline: "Responsive coils with just enough comfort — a balanced AT choice.",
    price: "$1,149",
    type: "Hybrid (Coils + Foam)",
    firmness: "Available in Softer, Luxury Firm, Firmer, Plus",
    affiliateUrl: "https://www.winkbeds.com/pages/winkbed",
    affiliateNetwork: "ShareASale",
    imageUrl: "/mattresses/winkbed.jpg",
    hasImage: false,
    rating: {
      freedom: 8,
      nonInterference: 7,
      responsiveness: 7,
      consistency: 8,
      noHabitReinforcement: 7,
    },
    verdict: "Go with the Firmer option. The pocketed coil system provides good responsiveness, and the Tencel cover feels clean without being slippery. A solid middle-ground choice for people not ready for a truly firm surface.",
    pros: [
      "Pocketed coils provide responsive support and good movement freedom",
      "Tencel fiber cover supports temperature regulation for undisturbed rest",
      "Multiple firmness options — the Firmer model is the AT pick",
      "Good edge support means your body gets consistent feedback across the full surface",
    ],
    cons: [
      "The Softer option uses too much conforming foam",
      "Some zoned support in the lumbar area — minor interference",
      "Not as high-feedback as latex or extra-firm options",
    ],
    overview: "The WinkBed is a hybrid mattress with a Euro pillow top, pocketed coils, and a supportive base. Available in four firmness levels with a Tencel fiber cover.",
    whyWeRecommend: "The WinkBed Firmer strikes a balance that works for people exploring AT principles but not yet comfortable on a very firm surface. The coil system is responsive and allows easy repositioning, which is essential for natural sleep movement. Think of it as a stepping stone — honest enough to support body awareness, comfortable enough for a good night's sleep.",
    bestFor: ["AT beginners", "Couples with different firmness preferences", "Those transitioning from soft mattresses"],
  },
  {
    slug: "sleep-on-latex",
    name: "Sleep On Latex Pure Green",
    brand: "Sleep On Latex",
    tagline: "Simple, honest, natural latex. Nothing to get in your way.",
    price: "$799",
    type: "Latex",
    firmness: "Soft, Medium, Firm",
    affiliateUrl: "https://sleeponlatex.com/products/natural-latex-mattress",
    affiliateNetwork: "Amazon",
    imageUrl: "/mattresses/sleep-on-latex.jpg",
    hasImage: false,
    rating: {
      freedom: 9,
      nonInterference: 9,
      responsiveness: 9,
      consistency: 8,
      noHabitReinforcement: 9,
    },
    verdict: "The Firm option is exceptional. Pure natural latex with zero gimmicks — no zones, no memory foam layers, no 'proprietary technology.' Just honest latex on a supportive base. This is what non-interference looks like.",
    pros: [
      "Pure Dunlop latex — the most responsive foam material available",
      "Zero zoning or contouring technology — true non-interference",
      "Excellent proprioceptive feedback on the Firm model",
      "Simple construction means nothing between you and the support surface",
    ],
    cons: [
      "The Soft option is too conforming for AT purposes",
      "Less edge support than coil-based mattresses",
    ],
    overview: "The Pure Green is a simple, no-frills natural Dunlop latex mattress available in three firmness levels. Made with GOLS-certified organic latex and a GOTS-certified organic cotton and wool cover.",
    whyWeRecommend: "This mattress proves you don't need complexity to get great support. Natural latex is inherently responsive — it pushes back when you push into it, giving your nervous system clear feedback about where your body is in space. The Firm model in particular lets your skeleton do what it's designed to do: bear weight and distribute force. Your muscles get the message that they can let go.",
    bestFor: ["Value-conscious AT practitioners", "Minimalists", "Those who want the purest feedback possible", "Eco-conscious buyers"],
  },
  {
    slug: "helix-dawn-luxe",
    name: "Helix Dawn LUXE",
    brand: "Helix",
    tagline: "The firm hybrid for back sleepers who want real support.",
    price: "$1,373",
    type: "Hybrid (Coils + Foam)",
    firmness: "Firm",
    affiliateUrl: "https://helixsleep.com/products/dawn-luxe",
    affiliateNetwork: "ShareASale",
    imageUrl: "/mattresses/helix-dawn.jpg",
    hasImage: false,
    rating: {
      freedom: 8,
      nonInterference: 7,
      responsiveness: 8,
      consistency: 8,
      noHabitReinforcement: 7,
    },
    verdict: "A strong firm hybrid option. The coil system provides good responsiveness and the firm foam layers don't trap you. Helix's zoning is mild enough not to be a dealbreaker, but it's there.",
    pros: [
      "Designed specifically for back and stomach sleepers who need firmness",
      "Coil system provides responsive, bouncy support — easy to reposition",
      "Firm comfort layer doesn't create a body impression",
      "Good airflow supports undisturbed, temperature-regulated sleep",
    ],
    cons: [
      "Some zoned lumbar support — mild interference",
      "The LUXE pillow top slightly reduces surface feedback vs. the standard Dawn",
      "Foam comfort layers are less responsive than latex",
    ],
    overview: "The Helix Dawn LUXE is the firm option in Helix's premium LUXE line. It features a zoned pocketed coil system, high-density foam layers, and a Tencel pillow top cover.",
    whyWeRecommend: "If you're a back sleeper and want a hybrid that respects AT principles, the Dawn LUXE is a strong choice. The firm construction keeps your body on the surface rather than in it — an important distinction. You maintain awareness of your body's relationship with the support surface, which is the foundation of good use during sleep.",
    bestFor: ["Back sleepers", "Those who want a premium firm hybrid", "Hot sleepers"],
  },
  {
    slug: "idle-natural-latex",
    name: "Idle Natural Latex Hybrid",
    brand: "Idle Sleep",
    tagline: "Flippable latex hybrid — two firmness levels, one honest mattress.",
    price: "$1,049",
    type: "Hybrid (Latex + Coils)",
    firmness: "Medium / Firm (flippable)",
    affiliateUrl: "https://www.idlesleep.com/natural-latex-hybrid-mattress",
    affiliateNetwork: "ShareASale",
    imageUrl: "/mattresses/idle-latex.jpg",
    hasImage: false,
    rating: {
      freedom: 8,
      nonInterference: 8,
      responsiveness: 8,
      consistency: 8,
      noHabitReinforcement: 8,
    },
    verdict: "A smart choice for AT-curious sleepers. The flippable design lets you experiment — start on Medium, move to Firm as your body awareness develops. Talalay latex is slightly softer than Dunlop but still far more responsive than memory foam.",
    pros: [
      "Flippable design supports your AT journey — progress from Medium to Firm",
      "Talalay latex provides responsive, breathable support",
      "Coil base adds movement freedom and airflow",
      "No memory foam anywhere in the construction",
    ],
    cons: [
      "Medium side may be too soft for dedicated AT practitioners",
      "Talalay latex is slightly less feedback-rich than Dunlop",
    ],
    overview: "The Idle Natural Latex Hybrid is a flippable mattress with Talalay latex comfort layers on both sides and a shared pocketed coil support core. One side is Medium, the other is Firm.",
    whyWeRecommend: "We love this for people starting their AT journey. Alexander Technique isn't about forcing yourself onto the hardest surface — it's about developing awareness. The flippable design lets you start where you are and progress as your relationship with support evolves. The latex-over-coils construction is inherently honest: it pushes back, it lets you move, and it doesn't pretend to know what shape your spine should be.",
    bestFor: ["AT beginners", "Those wanting flexibility as body awareness develops", "Couples", "Value-conscious buyers"],
  },
  {
    slug: "birch-natural",
    name: "Birch Natural Mattress",
    brand: "Birch (by Helix)",
    tagline: "Organic latex hybrid with no tricks — just support.",
    price: "$1,498",
    type: "Hybrid (Latex + Coils)",
    firmness: "Medium-Firm",
    affiliateUrl: "https://birchliving.com/mattresses/birch-natural",
    affiliateNetwork: "ShareASale",
    imageUrl: "/mattresses/birch-natural.jpg",
    hasImage: false,
    rating: {
      freedom: 8,
      nonInterference: 8,
      responsiveness: 8,
      consistency: 8,
      noHabitReinforcement: 8,
    },
    verdict: "A well-rounded organic option. The natural Talalay latex over pocketed coils provides the responsive, non-conforming support that AT principles call for. Similar philosophy to the Avocado but with a slightly different feel.",
    pros: [
      "Natural Talalay latex surface provides responsive feedback",
      "Pocketed coils ensure freedom of movement",
      "Organic wool and cotton regulate temperature naturally",
      "No synthetic foams — clean, honest construction",
    ],
    cons: [
      "Medium-Firm may not be firm enough for dedicated AT practitioners",
      "Only one firmness option available",
    ],
    overview: "The Birch Natural is an organic hybrid mattress from Helix's eco-friendly sub-brand. It features natural Talalay latex, individually wrapped coils, organic wool, and organic cotton.",
    whyWeRecommend: "Birch delivers what AT practitioners need: a responsive surface that doesn't try to outsmart your body. The latex-over-coils construction is the gold standard for the AT approach — firm enough to provide feedback, responsive enough to allow free movement, and simple enough to stay out of your way.",
    bestFor: ["Eco-conscious AT practitioners", "All sleep positions", "Those wanting a one-firmness-fits-most option"],
  },
  {
    slug: "wright-w215",
    name: "Wright W2.15 Hybrid",
    brand: "Wright",
    tagline: "American-made hybrid with coil responsiveness where it counts.",
    price: "$1,515",
    type: "Hybrid (Foam + Coils)",
    firmness: "Medium-Firm",
    affiliateUrl: "https://www.wrightbedding.com",
    affiliateNetwork: "Awin",
    imageUrl: "/mattresses/wright-w215.jpg",
    hasImage: true,
    rating: {
      freedom: 8,
      nonInterference: 7,
      responsiveness: 8,
      consistency: 8,
      noHabitReinforcement: 8,
    },
    verdict: "The W2.15 Hybrid is the Wright model we recommend — the coil base provides the responsiveness and freedom of movement that AT principles call for. The medium-firm profile and quality construction keep your body on the surface where it belongs. Skip the W1.27 all-foam model; memory foam works against body awareness.",
    pros: [
      "Coil base provides responsive support — you move on it, not through it",
      "Medium-firm profile keeps the body on the surface rather than sinking in",
      "120-night trial gives enough time to evaluate honest sensation over weeks",
      "American-made with a 15-year warranty — built to last",
    ],
    cons: [
      "Top foam layers are memory foam — reduces proprioceptive feedback compared to latex",
      "Some conforming in the comfort layers works against non-interference",
      "Wright also sells an all-foam model (W1.27) that we do NOT recommend from an AT perspective",
    ],
    overview: "The Wright W2.15 is an American-made hybrid mattress pairing Wright's Weightless foam system with a responsive coil base. It features multiple foam layers of varying densities over pocketed coils, designed for both comfort and support.",
    whyWeRecommend: "We're selective about Wright — we recommend the W2.15 Hybrid but not the W1.27 all-foam. The coil base makes all the difference. It gives the mattress responsiveness that pure foam cannot match, allowing easier repositioning and providing some ground reaction through the comfort layers. It's not our highest AT scorer, but the build quality, generous trial period, and high-value price point make it a strong option for people who aren't ready for a full latex mattress.",
    bestFor: ["Those who value American craftsmanship", "People transitioning from memory foam", "Couples (good motion isolation with coil responsiveness)", "Back sleepers"],
  },
  {
    slug: "spindle-organic-latex",
    name: "Spindle Organic Latex Mattress",
    brand: "Spindle",
    tagline: "Adjustable organic latex — rearrange the layers to find your honest firmness.",
    price: "$1,199",
    type: "Latex",
    firmness: "Adjustable (rearrange layers)",
    affiliateUrl: "https://www.spindlemattress.com",
    affiliateNetwork: "Awin",
    imageUrl: "/mattresses/spindle-latex.jpg",
    hasImage: false,
    rating: {
      freedom: 9,
      nonInterference: 10,
      responsiveness: 9,
      consistency: 8,
      noHabitReinforcement: 9,
    },
    verdict: "One of the best AT mattresses available. The adjustable layer system means you can dial in your own firmness rather than accepting a manufacturer's guess about what your body needs. Organic Dunlop latex provides excellent feedback and responsiveness. The ability to rearrange layers as your body awareness develops is uniquely AT-aligned.",
    pros: [
      "Adjustable firmness by rearranging latex layers — evolves with your AT practice",
      "Organic Dunlop latex provides firm, responsive proprioceptive feedback",
      "Zero zoning, zero contouring — pure non-interference at its best",
      "No synthetic foams, no memory foam — nothing between you and honest support",
    ],
    cons: [
      "Requires some experimentation to find the right layer arrangement",
      "Heavier than foam mattresses — harder to rotate",
    ],
    overview: "Spindle makes organic latex mattresses with a unique adjustable design. The mattress contains three layers of certified organic Dunlop latex inside an organic cotton and wool cover. You can rearrange the layers to customize firmness — a feature almost no other mattress offers.",
    whyWeRecommend: "Spindle embodies the AT principle that your body's needs are individual and changing. Instead of buying a fixed firmness and hoping it works, you can adjust the layers. Start softer if you're coming from memory foam, then progressively firm up as your body learns to release on a more honest surface. The all-latex, all-organic construction means maximum feedback and zero interference. At $1,000 less than comparable organic latex mattresses, it's also exceptional value.",
    bestFor: ["AT practitioners at any level", "Those who want to adjust firmness over time", "Eco-conscious buyers", "Value-conscious buyers who want organic latex"],
  },
  {
    slug: "airweave",
    name: "airweave Takumi 2.0",
    brand: "airweave",
    tagline: "Japanese engineered Airfiber — firm, breathable, and radically different.",
    price: "$6,060",
    type: "Airfiber (proprietary)",
    firmness: "Firm (customizable zones)",
    affiliateUrl: "https://www.airweave.com",
    affiliateNetwork: "Awin",
    imageUrl: "/mattresses/airweave-takumi.jpg",
    hasImage: false,
    rating: {
      freedom: 9,
      nonInterference: 7,
      responsiveness: 9,
      consistency: 9,
      noHabitReinforcement: 8,
    },
    verdict: "A fascinating option from an AT perspective. Airfiber is neither foam nor latex nor springs — it's a woven polymer structure that provides firm, breathable support with exceptional responsiveness. The firmness and feedback are excellent. The customizable zones are a form of interference, but the base material itself is outstanding for body awareness.",
    pros: [
      "Airfiber provides firm, responsive support — closest to a firm tatami feel in a modern mattress",
      "Exceptional breathability supports undisturbed temperature-regulated sleep",
      "No memory foam, no sinking — the body stays on the surface",
      "Fully recyclable construction aligns with mindful, conscious living",
    ],
    cons: [
      "Customizable firmness zones are a form of interference — you're choosing where to be firmer",
      "Premium price point puts it out of reach for many",
      "Only 60-night trial (shorter than most competitors)",
    ],
    overview: "airweave is a Japanese mattress company that uses a proprietary material called Airfiber — a woven polyethylene polymer that creates a firm, breathable, fully recyclable sleep surface. The Takumi 2.0 is their most popular model, offering customizable firmness with interchangeable Airfiber modules.",
    whyWeRecommend: "airweave approaches mattress design from a fundamentally different direction than Western brands. Instead of layering foams to create softness, they engineered a material that provides firm, responsive support with extraordinary breathability. From an AT perspective, lying on Airfiber feels closer to a traditional Japanese futon on tatami than any Western mattress. The surface provides clear feedback, allows easy movement, and doesn't conform to your body — your body organizes itself on the surface, not in it.",
    bestFor: ["AT practitioners who want a premium firm surface", "Hot sleepers", "Those interested in Japanese sleep philosophy", "Minimalists who value simple, honest construction"],
  },
  {
    slug: "sleep-ez-organic-latex",
    name: "Sleep EZ Organic Latex Mattress",
    brand: "Sleep EZ",
    tagline: "Customizable organic latex — choose every layer yourself.",
    price: "$1,049",
    type: "Latex",
    firmness: "Fully customizable (choose each layer)",
    affiliateUrl: "https://www.sleepez.com",
    affiliateNetwork: "Awin",
    imageUrl: "/mattresses/sleep-ez.jpg",
    hasImage: false,
    rating: {
      freedom: 9,
      nonInterference: 9,
      responsiveness: 9,
      consistency: 8,
      noHabitReinforcement: 9,
    },
    verdict: "Sleep EZ lets you choose the firmness of each individual latex layer — Soft, Medium, Firm, or Extra Firm. For AT purposes, we recommend all-Firm or a Firm/Extra Firm combination. The ability to swap layers after purchase means your mattress can evolve as your body awareness develops.",
    pros: [
      "Full customization — choose the firmness of every layer for maximum control",
      "Organic Dunlop and Talalay latex options provide responsive, honest feedback",
      "Layer swap program lets you change firmness after purchase — your mattress evolves with you",
      "No memory foam, no synthetic foams — pure latex construction",
    ],
    cons: [
      "The temptation to choose softer layers works against AT principles — we recommend Firm",
      "Split-firmness option for couples may compromise the surface for one partner",
    ],
    overview: "Sleep EZ makes fully customizable organic latex mattresses. You choose the type (Dunlop or Talalay) and firmness (Soft, Medium, Firm, Extra Firm) for each individual layer. They offer a comfort exchange program where you can swap layers within 90 days if your initial choice doesn't work.",
    whyWeRecommend: "Sleep EZ is the most AT-customizable mattress we've found. You're not accepting a manufacturer's idea of what your body needs — you're building a surface based on your own body awareness. Start with Firm across all layers. If that's too much, soften one layer at a time. The layer swap program means you're not locked in — as your AT practice deepens and your body learns to release on firmer surfaces, you can firm up your mattress to match. This is body awareness in action.",
    bestFor: ["AT practitioners who want full control", "Those on a body awareness journey", "Couples with different needs (split firmness)", "Budget-conscious buyers wanting organic latex"],
  },
  {
    slug: "diy-mattress",
    name: "DIY Mattress Natural Latex",
    brand: "DIY Mattress",
    tagline: "Build your own mattress from organic latex layers. Total control, total honesty.",
    price: "$699",
    type: "Latex (build your own)",
    firmness: "You decide — choose every component",
    affiliateUrl: "https://www.diymattress.net",
    affiliateNetwork: "Awin",
    imageUrl: "/mattresses/diy-mattress.jpg",
    hasImage: false,
    rating: {
      freedom: 9,
      nonInterference: 10,
      responsiveness: 9,
      consistency: 8,
      noHabitReinforcement: 10,
    },
    verdict: "The ultimate AT mattress concept. You buy the components — latex layers, cover, foundation — and assemble them yourself. There is zero interference because there is no manufacturer deciding what your body needs. You decide everything. This is the Alexander Technique principle of self-awareness applied directly to mattress selection.",
    pros: [
      "Complete non-interference — no one decides your firmness but you",
      "Organic Dunlop latex components provide honest, responsive feedback",
      "Add or remove layers as your body awareness evolves — total adaptability",
      "Most affordable path to a high-quality organic latex mattress",
    ],
    cons: [
      "Requires research and willingness to experiment — not plug-and-play",
      "No pre-built option for people who want a simple purchase",
    ],
    overview: "DIY Mattress sells organic latex mattress components — individual Dunlop latex layers in various firmnesses, organic cotton covers, and foundations — so you can build your own custom mattress. Choose your layers, stack them in a cover, and adjust anytime.",
    whyWeRecommend: "This is the most radically honest approach to mattress selection we've found. No marketing team decided this mattress should be 'medium-firm.' No engineer designed zones for your lumbar region. You choose every layer, every firmness level, and you can change it whenever you want. From an AT perspective, this is ideal — it puts the decision-making back in your body's hands. Start firm, notice how your body responds, adjust accordingly. The process itself develops body awareness.",
    bestFor: ["Dedicated AT practitioners", "DIY-minded buyers", "Those who want the most affordable organic latex", "People who want total control over their sleep surface"],
  },
  {
    slug: "white-lotus-home",
    name: "White Lotus Home Dreamton Latex Core Mattress",
    brand: "White Lotus Home",
    tagline: "Handmade cotton, wool, and latex since 1981. As close to the ground as a mattress gets.",
    price: "$1,324",
    type: "Organic Cotton & Latex",
    firmness: "Firm",
    affiliateUrl: "https://www.awin1.com/cread.php?awinmid=84223&awinaffid=2839458&ued=https%3A%2F%2Fwww.whitelotushome.com%2Fmattresses%2Flatex-core-mattresses%2F",
    affiliateNetwork: "Awin",
    imageUrl: "/mattresses/white-lotus-home-layers.jpg",
    hasImage: true,
    rating: {
      freedom: 9,
      nonInterference: 10,
      responsiveness: 8,
      consistency: 10,
      noHabitReinforcement: 10,
    },
    verdict: "White Lotus Home makes mattresses the way people made them before the mattress industry existed. Layers of organic cotton and natural latex, hand-tufted, no zones, no foam, no engineering. The result is a firm, consistent surface that doesn't try to do anything to you. This is what non-interference looks like when it's been refined for over 40 years.",
    pros: [
      "Zero engineered features — no zones, no contouring, no memory foam. Pure non-interference",
      "Organic cotton and natural latex provide a firm, breathable surface you move on, not through",
      "Handmade in the USA since 1981 — these people were doing this before the DTC mattress boom",
      "GOTS certified organic — no synthetic flame retardants, no off-gassing",
      "Also makes futons — even closer to ground-level sleeping if you want to go further",
    ],
    cons: [
      "Firmer than most modern mattresses — if you're coming from memory foam, expect a transition period",
      "Organic cotton layers compress over time and need refluffing — this is natural, not a defect",
    ],
    overview: "White Lotus Home has been handcrafting natural mattresses in New Jersey since 1981. Their Dreamton mattress features a 3-inch natural latex core wrapped in wool and layered with cotton — described as having 'a spring-like feel without metals.' Available in two versions: the Green Cotton Dreamton ($1,324) uses untreated green cotton, while the Pure Cotton Dreamton ($2,415) uses GOTS-certified organic cotton. Same construction, same latex core, same wool — the difference is the cotton certification. No springs, no foam, no zones.",
    whyWeRecommend: "White Lotus Home represents what a mattress looks like when you strip away everything the industry added in the last 40 years. No memory foam. No 'ergonomic zones.' No proprietary technology. Just organic materials, firm support, and a flat surface that lets your body organize itself. Their futon-style construction is the closest thing to how humans have slept for most of history — on a firm, natural surface at or near ground level. If our philosophy resonates with you, this is the mattress that embodies it most directly.",
    bestFor: ["Those who want the most natural sleep surface available", "People interested in futon-style sleeping", "Eco-conscious buyers who prioritize organic certification", "Anyone transitioning toward firmer, simpler surfaces"],
  },
];

export function getMattressBySlug(slug: string): Mattress | undefined {
  return mattresses.find((m) => m.slug === slug);
}

export function getTopMattresses(count: number = 3): Mattress[] {
  return [...mattresses]
    .sort((a, b) => getScore(b.rating) - getScore(a.rating))
    .slice(0, count);
}
