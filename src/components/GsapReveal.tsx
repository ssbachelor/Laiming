import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export type RevealEffect = 'fade-up' | 'fade-down' | 'fade-in' | 'scale-up' | 'slide-left' | 'slide-right' | 'blur-in';

interface GsapRevealProps {
  children: React.ReactNode;
  effect?: RevealEffect;
  duration?: number;
  delay?: number;
  className?: string;
  triggerOffset?: string; // e.g. "top 88%"
  scrub?: boolean | number;
}

export const GsapReveal: React.FC<GsapRevealProps> = ({
  children,
  effect = 'fade-up',
  duration = 0.8,
  delay = 0,
  className = '',
  triggerOffset = 'top 88%',
  scrub = false,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Use fast transform properties for GPU layer rendering
    let fromVars: gsap.TweenVars = { opacity: 0, force3D: true };
    let toVars: gsap.TweenVars = {
      opacity: 1,
      duration,
      delay,
      ease: 'power2.out',
      force3D: true,
      onComplete: () => {
        gsap.set(el, { clearProps: 'willChange' });
      },
    };

    switch (effect) {
      case 'fade-up':
        fromVars = { opacity: 0, y: 30, force3D: true };
        toVars = { ...toVars, y: 0 };
        break;
      case 'fade-down':
        fromVars = { opacity: 0, y: -30, force3D: true };
        toVars = { ...toVars, y: 0 };
        break;
      case 'scale-up':
        fromVars = { opacity: 0, scale: 0.96, y: 15, force3D: true };
        toVars = { ...toVars, scale: 1, y: 0 };
        break;
      case 'slide-left':
        fromVars = { opacity: 0, x: -30, force3D: true };
        toVars = { ...toVars, x: 0 };
        break;
      case 'slide-right':
        fromVars = { opacity: 0, x: 30, force3D: true };
        toVars = { ...toVars, x: 0 };
        break;
      case 'blur-in':
        // Lightweight transform fallback instead of heavy paint blur for low RAM devices
        fromVars = { opacity: 0, y: 25, scale: 0.97, force3D: true };
        toVars = { ...toVars, y: 0, scale: 1 };
        break;
      case 'fade-in':
      default:
        fromVars = { opacity: 0, force3D: true };
        toVars = { ...toVars };
        break;
    }

    if (scrub) {
      toVars.scrollTrigger = {
        trigger: el,
        start: triggerOffset,
        end: 'bottom 40%',
        scrub,
        fastScrollEnd: true,
      };
    } else {
      toVars.scrollTrigger = {
        trigger: el,
        start: triggerOffset,
        toggleActions: 'play none none none',
        fastScrollEnd: true,
      };
    }

    const tween = gsap.fromTo(el, fromVars, toVars);

    return () => {
      tween.kill();
      if (tween.scrollTrigger) tween.scrollTrigger.kill();
    };
  }, [effect, duration, delay, triggerOffset, scrub]);

  return (
    <div ref={elementRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
};

interface GsapStaggerProps {
  children: React.ReactNode;
  stagger?: number;
  effect?: RevealEffect;
  duration?: number;
  className?: string;
  triggerOffset?: string;
}

export const GsapStagger: React.FC<GsapStaggerProps> = ({
  children,
  stagger = 0.1,
  effect = 'fade-up',
  duration = 0.7,
  className = '',
  triggerOffset = 'top 88%',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const childrenEls = Array.from(container.children);
    if (childrenEls.length === 0) return;

    let fromVars: gsap.TweenVars = { opacity: 0, force3D: true };
    let toVars: gsap.TweenVars = {
      opacity: 1,
      duration,
      stagger,
      ease: 'power2.out',
      force3D: true,
      onComplete: () => {
        childrenEls.forEach((child) => gsap.set(child, { clearProps: 'willChange' }));
      },
    };

    switch (effect) {
      case 'fade-up':
        fromVars = { opacity: 0, y: 25, force3D: true };
        toVars = { ...toVars, y: 0 };
        break;
      case 'scale-up':
        fromVars = { opacity: 0, scale: 0.96, y: 15, force3D: true };
        toVars = { ...toVars, scale: 1, y: 0 };
        break;
      case 'slide-left':
        fromVars = { opacity: 0, x: -25, force3D: true };
        toVars = { ...toVars, x: 0 };
        break;
      case 'blur-in':
        fromVars = { opacity: 0, y: 20, scale: 0.97, force3D: true };
        toVars = { ...toVars, y: 0, scale: 1 };
        break;
      default:
        fromVars = { opacity: 0, y: 20, force3D: true };
        toVars = { ...toVars, y: 0 };
        break;
    }

    toVars.scrollTrigger = {
      trigger: container,
      start: triggerOffset,
      toggleActions: 'play none none none',
      fastScrollEnd: true,
    };

    const tween = gsap.fromTo(childrenEls, fromVars, toVars);

    return () => {
      tween.kill();
      if (tween.scrollTrigger) tween.scrollTrigger.kill();
    };
  }, [stagger, effect, duration, triggerOffset]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};
