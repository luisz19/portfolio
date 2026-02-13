import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface UseScrollAnimationOptions {
  once?: boolean
  amount?: number
}

/**
 * Hook customizado para animações ao scroll
 * Retorna uma ref e um boolean indicando se o elemento está visível
 * 
 * @example
 * const { ref, isInView } = useScrollAnimation()
 * <div ref={ref} style={{ opacity: isInView ? 1 : 0 }}>
 *   Conteúdo
 * </div>
 */
export const useScrollAnimation = ({ 
  once = true, 
  amount = 0.2 
}: UseScrollAnimationOptions = {}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount })

  return { ref, isInView }
}
