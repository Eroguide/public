import { css, Global } from '@emotion/react'
import emotionNormalize from 'emotion-normalize'

export const globalStyles = (
  <Global
    styles={css`
      ${emotionNormalize}
      * {
        box-sizing: border-box;
      }
      body {
        overflow-x: hidden;
      }

      html,
      body {
        line-height: 1.4;
        background: white;
        min-height: 100vh;
        font-family: 'Inter', Helvetica, sans-serif;
        padding: 0;
        margin: 0;
        //  scroll-behavior: smooth;
      }
      button,
      input[type='submit'],
      input[type='reset'] {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
      }
      body {
        margin: 0;
        min-height: 100%;
        display: flex;
        flex-direction: column;
      }

      ul,
      li,
      p {
        padding: 0;
        margin: 0;
        line-height: 1.6;
        font-family: 'Inter', Helvetica, Arial, sans-serif;
      }

      ul {
        list-style: none;
      }
      .swiper-slide {
        -webkit-transform: translateZ(0);
        -webkit-backface-visibility: hidden;
      }
      h1,
      h2,
      h3,
      h4,
      h5 {
        font-family: 'Inter', Helvetica, Arial, sans-serif;
        padding: 0;
        margin: 0;
      }
      h1 {
        letter-spacing: -0.04em;
      }
    `}
  />
)
