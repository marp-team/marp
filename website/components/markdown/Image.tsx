export type ImageProps = {
  src: string
  alt: string
  [attr: string]: string
}

export const Image = ({ src, alt, ...rest }: ImageProps) => {
  const isVideo = src.endsWith('.mp4')

  if (isVideo) {
    let poster: string | undefined

    const normalizedAlt = (alt || '')
      .replace(/\bposter=([^\s]+)\s*\b/g, (_, matched) => {
        poster = matched
        return ''
      })
      .trim()

    return (
      <video
        className="markdown-video"
        src={src}
        playsInline
        controls
        loop
        preload="metadata"
        poster={poster}
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
