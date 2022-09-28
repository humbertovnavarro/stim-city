import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet">
        </link>
        <body className="bg-transparent">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
