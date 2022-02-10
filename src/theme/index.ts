import { media } from './breakpoints'

const lineHeight = 1.4

const fontSize = {
  xxxxs: '9px',
  xxxs: '10px',
  xxs: '11px',
  xs: '12px',
  s: '13px',
  m: '14px',
  l: '16px',
  xl: '18px',
  xxl: '20px',
  xxxl: '24px',
  extra: '55px',
}

const primary = {
  0: '#232325',
  1: '#2F2F2F',
  2: '#3B3B3B',
  3: '#F4F4F4',
  4: '#0F97FF',
  5: '#FFE600',
}

const primaryOpposite = {
  0: '#FFFFFF',
  1: '#E3E3E3',
  2: '#EBC200',
  3: '#505051',
  4: '#7C7C7C',
  5: '#C4C4C4',
  6: '#92C738',
  7: '#FF575B',
}

const primaryText = {
  0: '#FFFFFF',
  1: '#F4F4F4',
  2: '#0F97FF',
  3: '#FFE600',
}

const primaryOppositeText = {
  0: '#3B3B3B',
  1: '#7C7C7C',
  2: '#2F2F2F',
  3: '#F74F52',
  4: '#4FF756',
  5: '#E3E3E3',
  6: '#EBC200',
  7: '#505051',
  8: '#95ADCB',
}

const secondary = {
  0: '#FFE600',
  1: '#FFB905',
  2: '#EB0B2D',
  3: '#F20940',
  4: '#0F97FF',
  5: '#0054FF',
  6: '#7A6E1E',
  7: '#F74F52',
  8: '#4FF756',
  9: '#224E7B',
}

const gradient = {
  // light blue
  0: 'linear-gradient(94.36deg, RGBA(0, 84, 255, 0.2) 7.86%, RGBA(15, 151, 255, 0.2) 91.12%);',
  // yellow
  1: 'linear-gradient(93.63deg, #FFB905 0%, #FFE600 100%)',
  2: 'linear-gradient(93.63deg, rgba(255, 185, 5, 0.2) 0%, rgba(255, 230, 0, 0.2) 100%)',
  // red
  3: 'linear-gradient(277.3deg, #F74F52 0%, #F20940 100%)',
  // blue
  4: 'linear-gradient(94.36deg, #0054FF 7.86%, #0F97FF 91.12%)',
  // light yellow
  5: 'linear-gradient(93.63deg, rgba(255, 185, 5, 0.7) 0%, rgba(255, 230, 0, 0.7) 100%)',
  // dark yellow 2
  6: 'linear-gradient(315deg, #595326 0%, #594B27 100%)',
  // dark yellow
  7: 'linear-gradient(93.63deg, #BC8802 0%, #D2BD01 100%)',
  8: 'linear-gradient(93.63deg, rgba(255, 185, 5, 0.5) 0%, rgba(255, 230, 0, 0.5) 100%)',
  // dark red gradient
  9: 'linear-gradient(277.3deg, #D74245 0%, #AA062D 100%)',
  // blue gradient
  10: 'linear-gradient(94.36deg, #01359E 7.86%, #147ECF 91.12%)',
}

export const theme = {
  media,
  lineHeight,
  fontSize,
  primary,
  primaryOpposite,
  primaryText,
  primaryOppositeText,
  secondary,
  gradient,
}

export type Theme = typeof theme

export * from './enum'
export * from './union'
export * from './breakpoints'
