import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
// types
import { DocumentInitialProps } from 'next/document'
import { Loader } from '@/components/widgets/LoaderWidget'

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
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          {/*<link rel="preconnect" href="https://fonts.gstatic.com" />*/}
          {/*<link rel="preconnect" href="https://fonts.googleapis.com">*/}
          {/*  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin>*/}
          {/*    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"*/}
          {/*          rel="stylesheet">*/}
          <link rel="preconnect" href="https://fonts.gstatic.com" as="font" />
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
            as="font"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            as="font"
            crossOrigin=""
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
            as="font"
          />
          {/*<link*/}
          {/*  rel="preconnect"*/}
          {/*  href="/fonts/Inter/Inter-Regular.ttf"*/}
          {/*  as="font"*/}
          {/*  crossOrigin=""*/}
          {/*/>*/}
          {/*<link*/}
          {/*  rel="preconnect"*/}
          {/*  href="/fonts/Inter/Inter-Bold.ttf"*/}
          {/*  as="font"*/}
          {/*  crossOrigin=""*/}
          {/*/>*/}
          {/*<link*/}
          {/*  rel="preconnect"*/}
          {/*  href="/fonts/Inter/Inter-SemiBold.ttf"*/}
          {/*  as="font"*/}
          {/*  crossOrigin=""*/}
          {/*/>*/}
        </Head>

        <body>
          <Loader />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
