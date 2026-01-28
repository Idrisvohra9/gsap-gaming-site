import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

// Add these SVG components at the top of your file
const CrossPlatformIcon = () => (
  <svg viewBox="0 0 24 24" className="size-full text-white">
    <path
      fill="currentColor"
      d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9M12 4.15L6.04 7.5L12 10.85l5.96-3.35L12 4.15M5 15.91l6 3.38v-6.71L5 9.21v6.7m14 0v-6.7l-6 3.37v6.71l6-3.38Z"
    />
  </svg>
)

const PlayEconomyIcon = () => (
  <svg viewBox="0 0 24 24" className="size-full text-white">
    <path
      fill="currentColor"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m.31-8.86c-1.77-.45-2.34-.94-2.34-1.67c0-.84.79-1.43 2.1-1.43c1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81c0 1.79 1.49 2.69 3.66 3.21c1.95.46 2.34 1.15 2.34 1.87c0 .53-.39 1.39-2.1 1.39c-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77c-.01-2.2-1.9-2.96-3.66-3.42"
    />
  </svg>
)

const GlobalAdventuresIcon = () => (
  <svg viewBox="0 0 24 24" className="size-full text-white">
    <path
      fill="currentColor"
      d="M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41a7.984 7.984 0 0 1 2.9 12.8M11 19.93c-3.95-.49-7-3.85-7-7.93c0-.62.08-1.21.21-1.79L9 15v1a2 2 0 0 0 2 2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
    />
  </svg>
)

const Features = () => {
  useGSAP(() => {
    const cardAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#features",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    cardAnimation.from(".feature-card", {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
    });

    const parallaxAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: ".features-hero",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    parallaxAnimation.to(".parallax-bg", {
      y: -100,
      scale: 1.1,
    });
  });

  return (
    <div id="features" className="min-h-screen w-screen bg-black">
      <div className="features-hero relative h-[50vh] overflow-hidden">
        <div className="parallax-bg absolute inset-0">
          <img
            src="img/gallery-2.webp"
            alt="Features Background"
            className="size-full object-cover"
          />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
          <h2 className="font-general text-2xl uppercase text-white md:text-xl">
            Game Features
          </h2>
          <AnimatedTitle
            title="Level Up Your <b>G</b>aming <br /> Exp<b>e</b>rience"
            containerClass="mt-5 text-white text-center text-5xl md:text-4xl"
          />
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-12 px-8 py-32 md:grid-cols-3">
        <div className="feature-card group relative">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
          <div className="relative h-[500px] rounded-2xl bg-black p-8">
            <div className="mb-12 flex h-64 w-full items-center justify-center">
              <div className="size-32">
                <CrossPlatformIcon />
              </div>
            </div>
            <h3 className="mb-6 text-3xl font-bold text-white">Cross-Game</h3>
            <p className="text-lg text-gray-400">
              Unite your achievements across all gaming platforms in one seamless experience
            </p>
          </div>
        </div>

        <div className="feature-card group relative">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
          <div className="relative h-[500px] rounded-2xl bg-black p-8">
            <div className="mb-12 flex h-64 w-full items-center justify-center">
              <div className="size-32">
                <PlayEconomyIcon />
              </div>
            </div>
            <h3 className="mb-6 text-3xl font-bold text-white">Play Economy</h3>
            <p className="text-lg text-gray-400">
              Earn rewards in the unified gaming ecosystem that transcends platforms
            </p>
          </div>
        </div>

        <div className="feature-card group relative">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
          <div className="relative h-[500px] rounded-2xl bg-black p-8">
            <div className="mb-12 flex h-64 w-full items-center justify-center">
              <div className="size-32">
                <GlobalAdventuresIcon />
              </div>
            </div>
            <h3 className="mb-6 text-3xl font-bold text-white">Global Adventures</h3>
            <p className="text-lg text-gray-400">
              Join the world&rsquo;s largest shared gaming experience with millions of players
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
