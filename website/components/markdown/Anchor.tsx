import Link from 'next/link'

export const Anchor: React.FC<{ href?: string }> = ({ href, ...rest }) => {
  if (!href) return <a {...rest} />

  if (href && (href.startsWith('http://') || href.startsWith('https://'))) {
    return <a href={href} {...rest} target="_blank" rel="noreferrer noopener" />
  }

  return <Link href={href} {...rest} />
}
