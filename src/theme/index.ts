import { media } from './breakpoints'
import { ButtonStylesEnum, ButtonStylesSizeEnum } from '@/theme/enum'

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

const button = {
  background: {
    [ButtonStylesEnum.primary]: primary[0],
    [ButtonStylesEnum.secondary]: grayScale[0],
    [ButtonStylesEnum.tertiary]: grayScale[0],
    [ButtonStylesEnum.link]: 'none',
  },
  color: {
    [ButtonStylesEnum.primary]: grayScale[0],
    [ButtonStylesEnum.secondary]: primary[0],
    [ButtonStylesEnum.tertiary]: grayScale[5],
    [ButtonStylesEnum.link]: grayScale[3],
  },
  border: {
    [ButtonStylesEnum.primary]: `2px solid ${primary[0]}`,
    [ButtonStylesEnum.secondary]: `2px solid ${primary[0]}`,
    [ButtonStylesEnum.tertiary]: `2px solid ${grayScale[2]}`,
    [ButtonStylesEnum.link]: 'none',
  },
  icon: {
    [ButtonStylesEnum.primary]: primary[0],
    [ButtonStylesEnum.secondary]: primary[0],
    [ButtonStylesEnum.tertiary]: grayScale[2],
    [ButtonStylesEnum.link]: grayScale[3],
  },
  padding: {
    [ButtonStylesSizeEnum.default]: '0 32px',
    [ButtonStylesSizeEnum.medium]: '0 24px',
    [ButtonStylesSizeEnum.small]: '0 16px',
  },
  height: {
    [ButtonStylesSizeEnum.default]: '48px',
    [ButtonStylesSizeEnum.medium]: '40px',
    [ButtonStylesSizeEnum.small]: '32px',
  },

  hover: {
    background: {
      [ButtonStylesEnum.primary]: grayScale[0],
      [ButtonStylesEnum.secondary]: 'rgba(255,0,93,0.05);',
      [ButtonStylesEnum.tertiary]: grayScale[0],
      [ButtonStylesEnum.link]: 'none',
    },
    color: {
      [ButtonStylesEnum.primary]: primary[0],
      [ButtonStylesEnum.secondary]: primary[0],
      [ButtonStylesEnum.tertiary]: grayScale[5],
      [ButtonStylesEnum.link]: grayScale[5],
    },
    border: {
      [ButtonStylesEnum.primary]: `2px solid ${primary[0]}`,
      [ButtonStylesEnum.secondary]: `2px solid ${primary[0]}`,
      [ButtonStylesEnum.tertiary]: `2px solid ${grayScale[5]}`,
      [ButtonStylesEnum.link]: 'none',
    },
    icon: {
      [ButtonStylesEnum.primary]: primary[0],
      [ButtonStylesEnum.secondary]: primary[0],
      [ButtonStylesEnum.tertiary]: grayScale[5],
      [ButtonStylesEnum.link]: grayScale[3],
    },
  },
  active: {
    background: {
      [ButtonStylesEnum.primary]: primary[1],
      [ButtonStylesEnum.secondary]: 'rgba(255,0,93,0.1);',
      [ButtonStylesEnum.tertiary]: 'rgba(208,208,219,0.3);',
      [ButtonStylesEnum.link]: 'none',
    },
    color: {
      [ButtonStylesEnum.primary]: grayScale[0],
      [ButtonStylesEnum.secondary]: primary[0],
      [ButtonStylesEnum.tertiary]: grayScale[5],
      [ButtonStylesEnum.link]: grayScale[5],
    },
    border: {
      [ButtonStylesEnum.primary]: `2px solid ${primary[1]}`,
      [ButtonStylesEnum.secondary]: `2px solid ${primary[0]}`,
      [ButtonStylesEnum.tertiary]: `2px solid ${grayScale[5]}`,
      [ButtonStylesEnum.link]: 'none',
    },
    icon: {
      [ButtonStylesEnum.primary]: grayScale[0],
      [ButtonStylesEnum.secondary]: primary[0],
      [ButtonStylesEnum.tertiary]: grayScale[5],
      [ButtonStylesEnum.link]: grayScale[3],
    },
  },
  disabled: {
    background: {
      [ButtonStylesEnum.primary]: grayScale[2],
      [ButtonStylesEnum.secondary]: grayScale[2],
      [ButtonStylesEnum.tertiary]: grayScale[3],
      [ButtonStylesEnum.link]: 'none',
    },
    color: {
      [ButtonStylesEnum.primary]: grayScale[1],
      [ButtonStylesEnum.secondary]: grayScale[1],
      [ButtonStylesEnum.tertiary]: grayScale[5],
      [ButtonStylesEnum.link]: grayScale[5],
    },
    border: {
      [ButtonStylesEnum.primary]: null,
      [ButtonStylesEnum.secondary]: null,
      [ButtonStylesEnum.tertiary]: null,
      [ButtonStylesEnum.link]: null,
    },
  },
}

export const theme = {
  media,
  lineHeight,
  fontSize,
  primary,
  opacity,
  grayScale,
  support,
  button,
}

export type Theme = typeof theme

export * from './enum'
export * from './union'
export * from './breakpoints'
