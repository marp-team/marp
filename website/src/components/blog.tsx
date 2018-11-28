import { Link } from 'gatsby'
import React from 'react'
import Contents from './contents'
import style from './style/blog.module.scss'

interface BlogBaseProps {
  fields: {
    path: string
  }
  frontmatter: {
    author: string
    date: Date
    github?: string
    title: string
  }
  key?: any
}

export interface BlogProps extends BlogBaseProps {
  html: string
}

export interface BlogExcerptedProps extends BlogBaseProps {
  excerpt: string
}

const GithubAuthor: React.FC<{ author: string; github?: string }> = ({
  author,
  github,
}) =>
  github ? (
    <a
      className={style.github}
      href={`https://github.com/${github}`}
      target="_blank"
    >
      <img
        alt={author}
        className={style.githubAuthor}
        src={`https://github.com/${github}.png`}
      />
      {author}
    </a>
  ) : (
    <span className={style.github}>{author}</span>
  )

const BlogBase: React.FC<BlogBaseProps> = ({
  fields: { path },
  frontmatter: { author, date, github, title },
  children,
}) => (
  <Contents>
    <Link className={style.titleLink} to={path}>
      <h1 className={style.title}>{title}</h1>
    </Link>
    <h2>{date}</h2>
    <h3>
      <GithubAuthor author={author} github={github} />
    </h3>
    {children}
  </Contents>
)

const Blog: React.FC<BlogProps> = ({ html, ...props }) => (
  <BlogBase {...props}>
    <hr />
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </BlogBase>
)

export default Blog

export const BlogExcerpted: React.FC<BlogExcerptedProps> = ({
  excerpt,
  ...props
}) => <BlogBase {...props}>{excerpt}</BlogBase>
