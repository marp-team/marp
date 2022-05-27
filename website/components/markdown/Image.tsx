export type ImageProps = {
  src: string
  alt: string
  [attr: string]: string
}

export const Image = ({ src, alt, ...rest }: ImageProps) => {
  const isVideo = src.endsWith('.mp4')

  if (isVideo) {
    let autoplay: boolean | undefined
    let controls: boolean | undefined
    let poster: string | undefined

    const normalizedAlt = (alt || '')
      .replace(
        /\b(?:autoplay|controls|poster=([^\s]+))\s*\b/g,
        (matched, value) => {
          if (matched.startsWith('autoplay')) autoplay = true
          if (matched.startsWith('controls')) controls = true
          if (matched.startsWith('poster')) poster = value

          return ''
        }
      )
      .trim()

    return (
      <video
        className="markdown-video"
        src={src}
        playsInline
        controls={controls}
        loop
        preload="metadata"
        poster={poster}
        autoPlay={autoplay}
        muted={autoplay}
        {...rest}
      >
        <a href={src} target="_blank" rel="noopener noreferrer">
          {normalizedAlt}
        </a>
        <style jsx>{`
          .markdown-video {
            @apply mx-auto block w-full max-w-xl shadow-md;
            @apply my-6 !important;
          }
        `}</style>
      </video>
    )
  }

  return <img src={src} alt={alt} {...rest} />
}
