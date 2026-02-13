/**
 * Constantes de animação para manter consistência
 * em todo o projeto
 */

export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.6,
} as const

export const ANIMATION_EASE = {
  easeOut: [0.33, 1, 0.68, 1],
  easeInOut: [0.65, 0, 0.35, 1],
} as const

/**
 * Variantes de animação padrão para fade + movimento vertical
 */
export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: ANIMATION_EASE.easeOut,
    }
  }
}

/**
 * Variantes para animação com delay
 */
export const fadeInUpWithDelay = (delay: number = 0) => ({
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: ANIMATION_EASE.easeOut,
      delay,
    }
  }
})

/**
 * Configuração padrão de viewport para animações ao scroll
 */
export const VIEWPORT_CONFIG = {
  once: true,
  amount: 0.2,
} as const
