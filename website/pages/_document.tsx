import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render = () => (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon-180x180.png"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&amp;family=Quicksand:wght@500;700&amp;display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
