import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";

gsap.registerPlugin(ScrollTrigger);

const Newsletter = () => {
    useGSAP(() => {
        gsap.from("#newsletter-content", {
            scrollTrigger: {
                trigger: "#newsletter",
                start: "top center",
                end: "bottom center",
                scrub: 1,
            },
            y: 50,
            opacity: 0,
        });
    });

    return (
        <div id="newsletter" className="w-screen bg-black pb-32">
            <div className="container mx-auto px-3 md:px-10">
                <div
                    id="newsletter-content"
                    className="border-hsla relative overflow-hidden rounded-lg bg-violet-900/20 p-16"
                >
                    <video
                        src="videos/feature-5.webm"
                        autoPlay
                        loop
                        muted
                        className="absolute left-0 top-0 -z-10 size-full object-cover opacity-60"
                    />

                    <div className="flex flex-col items-center gap-8 text-center text-blue-50">
                        <h3 className="special-font text-4xl tracking-wider">
                            <b>Stay in the Loop</b>
                        </h3>
                        <p className="max-w-md font-circular-web">
                            Subscribe to our newsletter for exclusive updates, early access, and the latest from the Motion universe.
                        </p>

                        <div className="flex w-full max-w-md flex-col gap-4 sm:flex-row">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 rounded-lg border border-white/10 bg-black/50 px-6 py-3 font-circular-web text-blue-50 placeholder:text-blue-50/50"
                            />
                            <button className="flex items-center justify-center gap-2 rounded-lg bg-violet-600 px-8 py-3 font-circular-web text-blue-50 transition-colors hover:bg-violet-700">
                                <TiLocationArrow />
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
