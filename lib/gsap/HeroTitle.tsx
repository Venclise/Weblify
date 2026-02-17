"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";


const text = "Weblify.";

export  function HeroTitle() {
  const lettersRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    gsap.to(lettersRef.current, {
      y: -45,
      duration: 0.35,
      ease: "sine.inOut",
      stagger: {
        each: 0.05,
        repeat: 1,
        yoyo: true,
      },
    });
  }, []);

  return (
    <h1 className="text-8xl sm:text-8xl md:text-[13rem] text-white  font- flex items-center   ">
      {text.split("").map((char, i) => (
        <span
          key={i}
          ref={(el) => {
            if (el) lettersRef.current[i] = el;
          }}
          className="inline-block  "
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
}




export  function HighlightPulse({
  children,
}: {
  children?: React.ReactNode
}) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!ref.current) return

    gsap.to(ref.current, {
      opacity: 0.3,
      duration: 0.8,
      repeat: 2,
      yoyo: true,
      ease: "power1.inOut",
    })
  }, [])

  return (
    <span ref={ref} className="text-white font-medium">
      {children}
    </span>
  )
}


gsap.registerPlugin(ScrollTrigger);

type AnimateDirection = "leftToRight" | "rightToLeft" | "topToBottom" | "bottomToTop";

interface AnimatedTextProps {
  children: React.ReactNode;
  animate: AnimateDirection;
  duration?: number;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  animate,
  duration = .5,
  delay = 0,
}) => {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elRef.current) return;

    let fromVars: gsap.TweenVars = { opacity: 0 };

    switch (animate) {
      case "leftToRight":
        fromVars.x = -50;
        break;
      case "rightToLeft":
        fromVars.x = 50;
        break;
      case "topToBottom":
        fromVars.y = -100;
        break;
      case "bottomToTop":
        fromVars.y = 50;
        break;
    }

    gsap.fromTo(
      elRef.current,
      { ...fromVars },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        delay,
        scrollTrigger: {
          trigger: elRef.current,
          start: "top 100%",
            toggleActions: "play reverse play", 
        },
      }
    );
  }, [animate, duration, delay]);

  return <div ref={elRef}>{children}</div>;
};

export default AnimatedText;



export function MorphExample() {
  useEffect(() => {
    gsap.registerPlugin(MorphSVGPlugin);

    // Make sure everything is paths
    MorphSVGPlugin.convertToPath("polygon, rect, circle");

    gsap.to("#shape", {
      duration: 1.2,
      morphSVG: {
        shape: "#checkIcon",
        shapeIndex: "auto",
      },
      ease: "power3.inOut",
    });
  }, []);

  return (
    <svg viewBox="0 0 24 24" width="120">
      {/* START SHAPE */}
      <path
        id="shape"
        d="M4 4 H20 V20 H4 Z"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />

      {/* TARGET ICON */}
      <g id="checkIcon">
        <path
          d="M3 17L9 11L13 15L21 7"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 7H21V13"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}


