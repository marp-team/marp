export type ImageProps = {
  src: string
  alt: string
  [attr: string]: string
}

export const Image = ({ src, alt, ...rest }: ImageProps) => {
  const isVideo = src.endsWith('.mp4')

  if (isVideo) {
    return (
      <video
        className="markdown-video"
        src={src}
        playsInline
        controls
        loop
        {...rest}
      >
        <a href={src} target="_blank" rel="noopener noreferrer">
          {alt}
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

  // eslint-disable-next-line jsx-a11y/alt-text
  return <img src={src} alt={alt} {...rest} />
}
