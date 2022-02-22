import { css, Global } from '@emotion/react'
import emotionNormalize from 'emotion-normalize'
// local libs
import { theme } from '@/src/theme'

export const globalStyles = (
  <Global
    styles={css`
      ${emotionNormalize}
      * {
        box-sizing: border-box;
      }

      @font-face {
        font-family: 'Inter';
        src: url('/fonts/Inter/Inter-Regular.ttf'),
          url('/fonts/Inter/Inter-SemiBold.ttf'),
          url('/fonts/Inter/Inter-Bold.ttf');
        font-style: normal;
      }
      ul,
      li,
      p {
        padding: 0;
        margin: 0;
        line-height: 1.6;
      }

      h1,
      h2,
      h3,
      h4,
      h5 {
        padding: 0;
        margin: 0;
      }

      html,
      body {
        line-height: ${theme.lineHeight};
        background: white;
        min-height: 100vh;
        font-family: 'Inter', Helvetica, Arial, sans-serif;
        padding: 0;
        margin: 0;
      }

      body {
        overflow-y: scroll; // this is necessary to block without displacement of the main content when the modal is opened
        margin: 0;
        min-height: 100%;
        display: flex;
        flex-direction: column;
      }
    `}
  />
)
