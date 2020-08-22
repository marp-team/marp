/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'

export const Anchor: React.FC<{ href: string }> = ({ href, ...rest }) => {
  if (href && (href.startsWith('http://') || href.startsWith('https://'))) {
    return <a href={href} {...rest} target="_blank" rel="noreferrer noopener" />
  }

  return (
    <Link href={href}>
      <a {...rest} />
    </Link>
  )
}
