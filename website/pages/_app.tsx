import { Router } from 'next/router'
import NProgress from 'nprogress'
import 'focus-visible'
import 'wicg-inert'
import 'nprogress/nprogress.css'
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

const App = ({ Component, pageProps }) => <Component {...pageProps} />

export default App
