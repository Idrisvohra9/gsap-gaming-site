import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(() => {
    const cards = cardRefs.current;

    gsap.from(cards, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
    });

    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;

        gsap.to(card, {
          rotationY: x * 20,
          rotationX: -y * 20,
          duration: 0.5,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          rotationY: 0,
          rotationX: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      });
    });
  });

  return (
    <div id="showcase" className="min-h-dvh w-screen bg-black pb-52">
      <div ref={containerRef} className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Featured Projects
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Explore our innovative solutions shaping the future of gaming and digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index - 1] = el)}
              className="border-hsla relative h-96 overflow-hidden rounded-lg bg-violet-900/20 p-8"
            >
              <video
                src={`videos/feature-${index}.webm`}
                autoPlay
                loop
                muted
                className="absolute left-0 top-0 -z-10 size-full object-cover opacity-70"
              />
              
              <div className="flex h-full flex-col justify-between text-blue-50">
                <h3 className="special-font text-4xl">
                  <b className="tracking-wide">Project {index}</b>
                </h3>
                <p className="max-w-sm font-circular-web">
                  Experience the future of gaming with our innovative solutions and groundbreaking technology.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Showcase;
