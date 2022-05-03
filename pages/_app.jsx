import '../styles/globals.css'
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>STIMCITY</title>
      <link rel="icon" href="/logo.ico" />
    </Head>
    <Component {...pageProps} />
    </>
  );
}

export default MyApp
