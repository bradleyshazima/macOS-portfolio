import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

const SplitText = ({
  text,
  className = "",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  duration = 2,
  stagger = 0.01,
  ease = "elastic.out(1, 0.3)",
  textAlign = "left",
  rootMargin = "-100px",
  threshold = 0.5,
  startDelay = 0.2,
  once = true,
  useScrollTrigger = false,
  onLetterAnimationComplete,
}) => {
  const ref = useRef(null);
  const animationCompletedRef = useRef(false);

    useEffect(() => {
    const el = ref.current;
    if (!el || animationCompletedRef.current) return;

    // Hide whole text block initially
    el.style.opacity = "0";

    const absoluteLines = splitType === "lines";
    if (absoluteLines) el.style.position = "relative";

    const splitter = new GSAPSplitText(el, {
        type: splitType,
        absolute: absoluteLines,
        linesClass: "split-line",
    });

    let targets;
    switch (splitType) {
        case "lines":
        targets = splitter.lines;
        break;
        case "words":
        targets = splitter.words;
        break;
        case "words, chars":
        targets = [...splitter.words, ...splitter.chars];
        break;
        default:
        targets = splitter.chars;
    }

    targets.forEach((t) => {
        t.style.willChange = "transform, opacity";
    });

    const startPct = (1 - threshold) * 100;
    const m = /^(-?\d+)px$/.exec(rootMargin);
    const raw = m ? parseInt(m[1], 10) : 0;
    const sign = raw < 0 ? `-=${Math.abs(raw)}px` : `+=${raw}px`;
    const start = `top ${startPct}%${sign}`;

    const tl = gsap.timeline({
        scrollTrigger: useScrollTrigger
        ? {
            trigger: el,
            start,
            toggleActions: "play none none none",
            once,
            }
        : undefined,
        smoothChildTiming: true,
        delay: startDelay,
        onComplete: () => {
        animationCompletedRef.current = true;
        gsap.set(targets, {
            ...to,
            clearProps: "willChange",
            immediateRender: true,
        });
        onLetterAnimationComplete?.();
        },
    });

    // 💥 Reveal the full text container first
    tl.set(el, { opacity: 1 });

    // Animate the characters
    tl.set(targets, { ...from, immediateRender: false, force3D: true });
    tl.to(targets, {
        ...to,
        duration,
        ease,
        stagger,
        force3D: true,
    });

    return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach((t) => t.kill());
        gsap.killTweensOf(targets);
        splitter.revert();
    };
    }, [
    text,
    className,
    from,
    to,
    duration,
    ease,
    splitType,
    stagger,
    rootMargin,
    threshold,
    startDelay,
    once,
    useScrollTrigger,
    onLetterAnimationComplete,
    ]);

  return (
    <p
      ref={ref}
      className={`split-parent overflow-hidden inline-block whitespace-normal ${className}`}
      style={{
        textAlign,
        wordWrap: "break-word",
      }}
    >
      {text}
    </p>
  );
};

export default SplitText;
