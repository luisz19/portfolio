/**
 * Constantes do Design System
 * Centralize valores de design para fácil manutenção
 */

export const COLORS = {
  // Fundo
  bgBase: '#110B31',
  
  // Gradientes
  gradient1: 'rgba(48, 157, 200, 0.92)',
  gradient2: 'rgba(8, 48, 94, 0.86)',
  gradient3: 'rgba(13, 31, 194, 0.89)',
  
  // Texto
  textPrimary: '#EEF4ED',
  textSecondary: 'rgba(238, 244, 237, 0.86)',

  buttonDefault: '#EEF4ED',
  
  // Cards
  cardLight: 'rgba(238, 244, 237, 0.08)',
  cardDark: 'rgba(15, 25, 40, 0.40)',
  
  // Bordas
  strokeDefault: 'rgba(238, 244, 237, 0.30)',
} as const

export const SPACING = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '128px',
  section: '128px',
} as const

export const BORDER_RADIUS = {
  card: '12px',
  cardLg: '16px',
} as const

export const FONT_WEIGHTS = {
  regular: 400,
  medium: 500,
  semibold: 600,
} as const
