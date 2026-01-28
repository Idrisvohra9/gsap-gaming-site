import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "R<b>a</b>ven Sh<b>a</b>dow",
    role: "Cyber Athlete",
    quote: "Motion's metagame layer transformed my competitive gaming experience into something extraordinary.",
    avatar: (
      <svg className="size-16" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="avatar1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#5542FF" }} />
            <stop offset="100%" style={{ stopColor: "#AF6EFF" }} />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#avatar1)" />
        <path d="M50 25 L75 75 H25 Z" fill="#1a1a1a" />
      </svg>
    )
  },
  {
    name: "N<b>o</b>va Fl<b>u</b>x",
    role: "Digital Architect",
    quote: "The cross-realm integration creates endless possibilities for next-gen gaming experiences.",
    avatar: (
      <svg className="size-16" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="avatar2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#FF4D4D" }} />
            <stop offset="100%" style={{ stopColor: "#F9CB28" }} />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#avatar2)" />
        <rect x="30" y="30" width="40" height="40" fill="#1a1a1a" />
      </svg>
    )
  },
  {
    name: "Ze<b>n</b>ith Pr<b>i</b>me",
    role: "Metaverse Pioneer",
    quote: "Motion's ecosystem bridges the gap between traditional gaming and web3 seamlessly.",
    avatar: (
      <svg className="size-16" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="avatar3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#00FF94" }} />
            <stop offset="100%" style={{ stopColor: "#00B4FF" }} />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#avatar3)" />
        <polygon points="50,25 75,75 25,75" fill="#1a1a1a" />
      </svg>
    )
  }
];

const Testimonials = () => {
  useGSAP(() => {
    gsap.from(".testimonial-card", {
      scrollTrigger: {
        trigger: "#testimonials",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
      y: 100,
      opacity: 0,
      stagger: 0.2,
    });
  });

  return (
    <div id="testimonials" className="min-h-dvh w-screen bg-black pb-32">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Community Voices
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Hear from our growing community of gamers and creators shaping the future of gaming.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card border-hsla group relative overflow-hidden rounded-lg bg-violet-900/20 p-8 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex flex-col gap-6 text-blue-50">
                {testimonial.avatar}
                <p className="font-circular-web text-lg">{testimonial.quote}</p>
                <div>
                  <h4 
                    className="special-font text-xl"
                    dangerouslySetInnerHTML={{ __html: testimonial.name }}
                  />
                  <p className="font-circular-web text-sm opacity-50">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
