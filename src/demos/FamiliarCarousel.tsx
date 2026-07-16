import Carousel, { type Slide } from "@/components/essay/Carousel";

/**
 * Familiar's screenshot carousel, standing in for a playable demo until a live
 * slice is ready. It's a no-prop wrapper so it satisfies the DemoComponent
 * contract and drops into a <DemoSlot> like any other demo; the real work is
 * done by the shared essay <Carousel> (captions, dots/arrows, zoom lightbox).
 *
 * To update the reel: drop images in public/familiar/ and edit `slides` below.
 * The caption under each slide is where the story lives — keep it doing or
 * revealing something, not just labeling the picture.
 */
const slides: Slide[] = [
  {
    src: "/familiar/familiar-updated-ux-introtext.png",
    alt: "Familiar's run intro screen, setting up the bond you're about to form.",
    caption: "Every run slots encounters into fragmented windows inside the spine of a 3-Act story. The encounter intro sets the scene for the moments of adventure that build your partnership working together!",
  },
  {
    src: "/familiar/familiar-skillcheck-aid.png",
    alt: "The player has a narrow window to react to the adventurer's intended skill check",
    caption: "The core mechanic - quickly choosing how to use the narrow window of opportunity available before the adventurer performs their skill check. Explore different combinations of characters, influence styles and adventures.",
  },
  {
    src: "/familiar/familiar-betterlucknexttime.png",
    alt: "Encounter - partial success outcome - the screen shows a resolution that is not an outright failure.",
    caption: "Each encounter resolves its own story, with a nod to the roguelite replayability of the core loop.",
  },
];

export default function FamiliarCarousel() {
  return <Carousel slides={slides} />;
}
