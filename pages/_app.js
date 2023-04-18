import BackToTopButton from '@/components/BackToTopButton'
import Footer from '@/components/Footer'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
      <BackToTopButton />
    </>
  )
}
