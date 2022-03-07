import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import { store, StoreonCustomContext } from '@/store/index'
import { globalStyles } from '@/src/global-styles'
import { theme } from '@/src/theme'

import { ApolloProvider } from '@apollo/client'
import { useApollo } from '@/graphql/apollo'
import { Loader } from '@/components/widgets/LoaderWidget'

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps)
  if (!apolloClient) {
    return
  }
  return (
    <ThemeProvider theme={theme}>
      {globalStyles}
      <ApolloProvider client={apolloClient}>
        {/*<Provider store={store}>*/}
        <StoreonCustomContext.Provider value={store}>
          <Component {...pageProps} />
          <Loader />
        </StoreonCustomContext.Provider>
        {/*</Provider>*/}
      </ApolloProvider>
    </ThemeProvider>
  )
}

export default MyApp
