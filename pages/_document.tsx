import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
// types
import { DocumentInitialProps } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="preconnect"
            href="/fonts/Inter/Inter-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preconnect"
            href="/fonts/Inter/Inter-Bold.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preconnect"
            href="/fonts/Inter/Inter-SemiBold.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
