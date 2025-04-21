"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AnimationWrapper({ 
  children, 
  animateFrom = 'bottom', 
  delay = 0,
  threshold = 0.1,
  className = "",
  replay = true 
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: !replay, 
    amount: threshold 
  });
  
  const getVariants = () => {
    const baseVariants = {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: {
          duration: 0.7,
          delay: delay / 1000,
        }
      }
    };
    
    switch (animateFrom) {
      case 'left':
        return {
          hidden: { ...baseVariants.hidden, x: -50 },
          visible: { ...baseVariants.visible, x: 0 }
        };
      case 'right':
        return {
          hidden: { ...baseVariants.hidden, x: 50 },
          visible: { ...baseVariants.visible, x: 0 }
        };
      case 'bottom':
      default:
        return {
          hidden: { ...baseVariants.hidden, y: 50 },
          visible: { ...baseVariants.visible, y: 0 }
        };
    }
  };

  const variants = getVariants();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
