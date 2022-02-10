import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import { store, StoreonCustomContext } from '@/store/index'
import { globalStyles } from '@/src/global-styles'
import { theme } from '@/src/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      {globalStyles}
      <StoreonCustomContext.Provider value={store}>
        <Component {...pageProps} />
      </StoreonCustomContext.Provider>
    </ThemeProvider>
  )
}

export default MyApp
