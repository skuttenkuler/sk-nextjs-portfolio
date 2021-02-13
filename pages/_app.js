import Layout from '../components/Layout'

import '../styles/globals.css'
import '../styles/main.scss'
import '../styles/carousel.scss'
function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp;
