import { ScrollToTop } from 'components/ScrollToTop'

export const Footer = () => (
  <footer>
    <div className="container mx-auto table">
      <p className="mx-6 my-5 mr-20 leading-loose">
        Copyright © 2019-{process.env.BUILD_YEAR} Marp team.&emsp;
        <iframe
          className="inline-block align-text-top"
          src="https://ghbtns.com/github-btn.html?user=marp-team&amp;repo=marp&amp;type=star&amp;count=true"
          frameBorder={0}
          scrolling="0"
          width={150}
          height={20}
          title="GitHub"
          loading="lazy"
        ></iframe>
      </p>
      <ScrollToTop />
    </div>
    <style jsx>{`
      footer {
        @apply bg-gray-800 text-gray-500;

        min-height: 4.5rem;
        background-image: var(--noise-image);
      }
    `}</style>
  </footer>
)
