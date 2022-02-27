import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import { store, StoreonCustomContext } from '@/store/index'
import { globalStyles } from '@/src/global-styles'
import { theme } from '@/src/theme'

import { ApolloProvider } from '@apollo/client'
import { useApollo } from '@/graphql/apollo'

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps)
  console.log('apolloClient', apolloClient)
  return (
    <ThemeProvider theme={theme}>
      {globalStyles}
      <ApolloProvider client={apolloClient}>
        <StoreonCustomContext.Provider value={store}>
          <Component {...pageProps} />
        </StoreonCustomContext.Provider>
      </ApolloProvider>
    </ThemeProvider>
  )
}

export default MyApp
