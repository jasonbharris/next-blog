import Head from 'next/head'
import NavBar from '../components/NavBar'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <link rel='icon' href='/favicon_io/favicon.ico' />
    </Head>
    <header>
      <NavBar />
    </header>
    <Component {...pageProps} />
    </>
  )
}
