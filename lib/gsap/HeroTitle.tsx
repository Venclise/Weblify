"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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
    <h1 className="text-7xl sm:text-8xl md:text-[12rem] lg:[16rem] font-bold flex tracking-wide">
      {text.split("").map((char, i) => (
        <span
          key={i}
          ref={(el) => {
            if (el) lettersRef.current[i] = el;
          }}
          className="inline-block"
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
  duration = 1,
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
        fromVars.y = -50;
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
          start: "top 80%",
            toggleActions: "play reverse play reverse", 
        },
      }
    );
  }, [animate, duration, delay]);

  return <div ref={elRef}>{children}</div>;
};

export default AnimatedText;
