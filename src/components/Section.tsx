import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionProps {
  title: string
  subtitle?: string
  children: ReactNode
}

export const Section = ({ title, subtitle, children }: SectionProps) => {
  return (
    <section className="px-md md:px-lg py-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-2xl text-center"
        >
          
        </motion.div>
        
        {children}
      </div>
    </section>
  )
}
