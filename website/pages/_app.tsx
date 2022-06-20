import { Router } from 'next/router'
import NProgress from 'nprogress'
import { FontFaceProvider, FontFaceRenderer } from 'utils/hooks/useFontFace'
import 'focus-visible'
import 'wicg-inert'
import 'nprogress/nprogress.css'
import 'swiper/css/bundle'
import 'css/index.css'

// NProgress
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

// Make resilience from manipulating DOM by Google translator
// https://github.com/facebook/react/issues/11538
if (typeof Node === 'function' && Node.prototype) {
  const { removeChild, insertBefore } = Node.prototype

  Node.prototype.removeChild = function <T extends Node>(child: T): T {
    if (child.parentNode !== this) {
      if (console) {
        console.error(
          'Cannot remove a child from a different parent',
          child,
          this
        )
      }
      return child
    }
    return removeChild.call(this, child) as T
  }
  Node.prototype.insertBefore = function <T extends Node>(
    newNode: T,
    referenceNode: Node | null
  ): T {
    if (referenceNode && referenceNode.parentNode !== this) {
      if (console) {
        console.error(
          'Cannot insert before a reference node from a different parent',
          referenceNode,
          this
        )
      }
      return newNode
    }
    return insertBefore.call(this, newNode, referenceNode) as T
  }
}

const App = ({ Component, pageProps }) => (
  <FontFaceProvider>
    <FontFaceRenderer />
    <Component {...pageProps} />
  </FontFaceProvider>
)

export default App
