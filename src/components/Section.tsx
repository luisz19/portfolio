import { containerVariants } from '@/lib/animations'
import { motion, HTMLMotionProps } from 'framer-motion'
import { forwardRef } from 'react'

interface SectionProps extends HTMLMotionProps<"section"> {}

export const Section = forwardRef<HTMLElement, SectionProps>(({ children, className = '', ...props }, ref) => {
  return (
    <motion.section
      ref={ref}
      className={ className  + ' my-section flex'}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </motion.section>
  )
})

Section.displayName = 'Section'
