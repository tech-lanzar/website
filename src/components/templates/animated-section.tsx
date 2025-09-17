'use client';

import { motion, type Variants, type Transition } from 'framer-motion';
import { ReactNode, forwardRef } from 'react';
import {
  useScrollAnimation,
  useReducedMotion,
} from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?:
    | 'fadeIn'
    | 'slideUp'
    | 'slideLeft'
    | 'slideRight'
    | 'scale'
    | 'none';
  delay?: number;
  duration?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

const animationVariants: Record<
  NonNullable<AnimatedSectionProps['animation']>,
  Variants
> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  none: {
    hidden: {},
    visible: {},
  },
};

export const AnimatedSection = forwardRef<HTMLDivElement, AnimatedSectionProps>(
  (
    {
      children,
      className,
      animation = 'slideUp',
      delay = 0,
      duration = 0.6,
      threshold = 0.1,
      triggerOnce = true,
    },
    forwardedRef
  ) => {
    const { ref, isInView } = useScrollAnimation({ threshold, triggerOnce });
    const prefersReducedMotion = useReducedMotion();

    // Use forwarded ref if provided, otherwise use our scroll animation ref
    const elementRef = forwardedRef || ref;

    const variants = prefersReducedMotion
      ? animationVariants.none
      : animationVariants[animation];

    return (
      <motion.div
        ref={elementRef}
        className={cn(className)}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{
          duration: prefersReducedMotion ? 0 : duration,
          delay: prefersReducedMotion ? 0 : delay,
          ease: 'easeOut',
        }}
      >
        {children}
      </motion.div>
    );
  }
);

AnimatedSection.displayName = 'AnimatedSection';

// Staggered children animation wrapper
interface StaggeredContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  threshold?: number;
}

export function StaggeredContainer({
  children,
  className,
  staggerDelay = 0.1,
  threshold = 0.1,
}: StaggeredContainerProps) {
  const { ref, isInView } = useScrollAnimation({ threshold });
  const prefersReducedMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.5,
        ease: [0.16, 1, 0.3, 1] as Transition['ease'],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div key={index} variants={itemVariants}>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={itemVariants}>{children}</motion.div>
      )}
    </motion.div>
  );
}
