import { media } from './breakpoints'

const lineHeight = 1.4

const fontSize = {
  xxs: '10px',
  xs: '12px',
  s: '14px',
  m: '16px',
  l: '18px',
  xl: '24px',
  xxl: '32px',
  extraMobile: '64px',
  extra: '96px',
}

const primary = {
  0: '#FF005D',
  1: '#D80E5D',
  2: '#B01B5D',
}

const opacity = {
  70: {
    0: 'rgba(247,0,91,0.7)',
    1: 'rgba(216,14,93,0.7)',
    2: 'rgba(176,27,93,0.7)',
  },
  50: {
    0: 'rgba(247,0,91,0.5)',
    1: 'rgba(216,14,93,0.5)',
    2: 'rgba(176,27,93,0.5)',
  },
}

const grayScale = {
  0: '#ffffff',
  1: '#EBEBF0',
  2: '#D0D0DB',
  3: '#A0A0B0',
  4: '#40404A',
  5: '#1E1E29',
}

const support = {
  0: '#0077ED',
  1: '#FFD166',
  2: '#2FC27D',
}

export const theme = {
  media,
  lineHeight,
  fontSize,
  primary,
  opacity,
  grayScale,
  support,
}

export type Theme = typeof theme

export * from './enum'
export * from './union'
export * from './breakpoints'
