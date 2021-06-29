import { Router } from 'next/router'
import NProgress from 'nprogress'
import { FontFaceProvider, FontFaceRenderer } from 'utils/hooks/useFontFace'
import 'focus-visible'
import 'wicg-inert'
import 'nprogress/nprogress.css'
import 'simplebar/dist/simplebar.min.css'
import 'swiper/swiper-bundle.css'
import 'css/index.css'

const translating = () => {
  NProgress.start()
  document.documentElement.classList.add('translating')
}

const translated = () => {
  NProgress.done()
  setTimeout(
    () => document.documentElement.classList.remove('translating'),
    250
  )
}

Router.events.on('routeChangeStart', translating)
Router.events.on('routeChangeComplete', translated)
Router.events.on('routeChangeError', translated)

NProgress.configure({ showSpinner: false, trickleSpeed: 350 })

const App = ({ Component, pageProps }) => (
  <FontFaceProvider>
    <FontFaceRenderer />
    <Component {...pageProps} />
  </FontFaceProvider>
)

export default App
