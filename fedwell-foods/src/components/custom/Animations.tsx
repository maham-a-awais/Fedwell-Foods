"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export enum TransitionType {
  SPRING = "spring",
  LINEAR = "linear",
}

interface AnimateProps {
  delay?: number;
  children: React.ReactNode;
  viewThres?: number;
  once?: boolean;
  duration?: number;
  onAnimationComplete?: () => void;
  transition?: TransitionType;
  fullWidth?: boolean;
  animateOnMobile?: boolean;
  animateOnView?: boolean;
}

interface AnimateTextProps {
  text: string;
  delay?: number;
  styles?: string;
}

interface AnimateGlitchEffect {
  text: string;
  delay?: number;
  color?: string;
  hidden: {
    x?: number;
    y?: number;
    opacity?: number;
  };
  visible?: {
    x?: number | number[];
    y?: number | number[];
    opacity?: number | number[];
  };
}

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
  },
  hidden_top: {
    opacity: 0,
    y: -100,
  },
  hidden_bottom: {
    opacity: 0,
    y: 100,
  },
  hidden_right: {
    opacity: 0,
    x: 100,
  },
  hidden_left: {
    opacity: 0,
    x: -50,
  },
  hidden_slider: {
    opacity: 0,
    x: "100vw",
  },
  visible_slider: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0 },
  },
};

export const slideUp = {
  initial: {
    y: "0",
  },
  exit: {
    y: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0 },
  },
};

export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 0.2, delay: 0 },
  },
};

export const AnimateLeft: React.FC<AnimateProps> = ({
  children,
  delay = 1,
  viewThres = 0.5,
  once = true,
  duration = 0.5,
  transition = TransitionType.SPRING,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: viewThres, once });
  const isMobile = window.innerWidth < 786;

  if (isMobile) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      variants={defaultAnimations}
      initial="hidden_left"
      animate={isInView ? "visible" : "hidden_left"}
      transition={
        transition === TransitionType.SPRING
          ? { type: "spring", stiffness: 260, damping: 20, delay, duration }
          : { ease: "linear", delay, duration }
      }
    >
      {children}
    </motion.div>
  );
};

export const AnimateRight: React.FC<AnimateProps> = ({
  children,
  delay = 1,
  viewThres = 0.5,
  once = true,
  duration = 0.5,
  transition = TransitionType.SPRING,
  animateOnMobile = true,
  animateOnView = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: viewThres, once });
  const isMobile = window.innerWidth < 786;

  if (isMobile && !animateOnMobile) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      variants={defaultAnimations}
      initial="hidden_right"
      animate={animateOnView ? (isInView ? "visible" : "hidden_right") : "visible"}
      transition={
        transition === TransitionType.SPRING
          ? { type: "spring", stiffness: 260, damping: 20, delay, duration }
          : { ease: "linear", delay, duration }
      }
    >
      {children}
    </motion.div>
  );
};

export const AnimateTop: React.FC<AnimateProps> = ({
  children,
  delay = 1,
  viewThres = 0.5,
  once = true,
  duration = 1,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: viewThres, once });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 786);
    }
  }, []);

  if (isMobile) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      variants={defaultAnimations}
      initial="hidden_top"
      animate={isInView ? "visible" : "hidden_top"}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay, duration }}
    >
      {children}
    </motion.div>
  );
};

export const AnimateBottom: React.FC<AnimateProps> = ({
  children,
  delay = 1,
  viewThres = 0.5,
  once = true,
  duration = 1,
  transition = TransitionType.SPRING,
  fullWidth = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: viewThres, once });
  const isMobile = window.innerWidth < 786;

  if (isMobile) {
    return <div>{children}</div>;
  }
  return (
    <motion.div
      ref={ref}
      variants={defaultAnimations}
      initial="hidden_bottom"
      animate={isInView ? "visible" : "hidden_bottom"}
      transition={
        transition === TransitionType.SPRING
          ? { type: "spring", stiffness: 260, damping: 20, delay, duration }
          : { ease: "linear", delay, duration }
      }
      className={`${fullWidth ? "h-full" : ""}`}
    >
      {children}
    </motion.div>
  );
};

export const AnimateText: React.FC<AnimateTextProps> = ({ text, delay = 1, styles = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  return (
    <div ref={ref} className={`text-center ${styles}`}>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.1, delayChildren: delay, ease: "easeIn" }}
      >
        {text.split(" ").map((char, i) => (
          <motion.span className={`inline-block${styles}`} variants={defaultAnimations} key={i}>
            {char}
            <span className="inline-block ">&nbsp;</span>
          </motion.span>
        ))}
      </motion.span>
    </div>
  );
};

export const AnimateFadeOut: React.FC<AnimateProps> = ({
  children,
  delay = 1,
  viewThres = 0.5,
  once = true,
  // duration = 1,
  // onAnimationComplete,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: viewThres, once });
  const isMobile = window.innerWidth < 786;

  if (isMobile) {
    return <div>{children}</div>;
  }
  return (
    <motion.div
      ref={ref}
      animate={
        isInView
          ? {
              opacity: [1, 1, 1, 0],
              scale: [1, 1, 1, 0.8],
              x: 0,
              display: ["block", "block", "block", "none"],
            }
          : {
              opacity: 1,
              scale: 0,
              x: 0,
            }
      }
      transition={{
        duration: 5,
        ease: "easeInOut",
        times: [0, 0.1, 0.9, 1],
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export const AnimateFadeIn: React.FC<AnimateProps> = ({
  children,
  delay = 0,
  viewThres = 0.5,
  once = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: viewThres, once });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 786);
    }
  }, []);

  if (isMobile) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      animate={
        isInView
          ? {
              opacity: [0, 0.2, 0.7, 1],
              scale: [0.8, 0.9, 1],
              x: 0,
            }
          : {
              opacity: 0,
              scale: 0.8,
              x: 0,
            }
      }
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.3, 0.7, 1],
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export const AnimateGlitchEffect: React.FC<AnimateGlitchEffect> = ({
  text,
  delay,
  color,
  visible,
  hidden,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  return (
    <div className="absolute top-0 w-full px-5 overflow-hidden flex-center">
      <motion.div
        ref={ref}
        variants={defaultAnimations}
        initial={hidden}
        animate={isInView ? visible : hidden}
        transition={{
          duration: 1.5,
          times: [0, 0.1, 0.9, 1],
          delay,
          ease: "linear",
        }}
        className={`font-bold text-center ${color}  text-6xl md:text-8xl`}
      >
        {text}
      </motion.div>
    </div>
  );
};

export const AnimateSlider: React.FC<AnimateProps> = ({
  children,
  viewThres = 0.5,
  once = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: viewThres, once });
  const isMobile = window.innerWidth < 786;

  if (isMobile) {
    return <div>{children}</div>;
  }
  return (
    <motion.div ref={ref}>
      <motion.div
        variants={defaultAnimations}
        initial="hidden_slider"
        animate={isInView ? "visible_slider" : "hidden_slider"}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
