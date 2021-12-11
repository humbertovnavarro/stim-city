import '../styles/globals.css'
import Head from 'next/head';
import Header from '../components/Header';
function MyApp({ Component, pageProps }) {
  return (
    <>
    <div id="retrowaveBG">
      <video autoPlay muted loop id="retrowave">
        <source src="/retrowave.mp4" type="video/mp4"/>
      </video>
    </div>
    <Head>
      <title>STIMCITY</title>
      <link rel="icon" href="/logo.ico" />
    </Head>
    <Header/>
    <Component {...pageProps} />
    </>
  );
}

export default MyApp
