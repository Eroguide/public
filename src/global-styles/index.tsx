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

      //@font-face {
      //  font-family: 'Inter';
      //  //src: url('/fonts/Inter/Inter-Regular.ttf'),
      //  //  url('/fonts/Inter/Inter-SemiBold.ttf'),
      //  //  url('/fonts/Inter/Inter-Black.ttf'),
      //  //  url('/fonts/Inter/Inter-ExtraBool.ttf'),
      //  //  url('/fonts/Inter/Inter-Medium.ttf'),
      //  //  url('/fonts/Inter/Inter-Bold.ttf');
      //  font-style: normal;
      //}

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

      body {
        overflow-y: scroll; // this is necessary to block without displacement of the main content when the modal is opened
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

      h1,
      h2,
      h3,
      h4,
      h5 {
        font-family: 'Inter', Helvetica, Arial, sans-serif;
        padding: 0;
        margin: 0;
      }
    `}
  />
)
