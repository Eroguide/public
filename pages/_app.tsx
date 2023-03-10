import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import { store, StoreonCustomContext } from '@/store/index'
import { globalStyles } from '@/src/global-styles'
import { theme } from '@/src/theme'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '@/graphql/apollo'
import { Loader } from '@/components/widgets/LoaderWidget'
import { AdultPrompt } from '@/components/generic'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps)
  if (!apolloClient) {
    return
  }
  return (
    <ThemeProvider theme={theme}>
      {globalStyles}
      <ApolloProvider client={apolloClient}>
        <StoreonCustomContext.Provider value={store}>
          <Component {...pageProps} />
          <AdultPrompt />
          <Loader />
        </StoreonCustomContext.Provider>
      </ApolloProvider>
    </ThemeProvider>
  )
}

export default MyApp
