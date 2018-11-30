import { Link, graphql } from 'gatsby'
import React from 'react'
import Button from './button'
import Contents from './contents'
import style from './style/blog.module.scss'

interface BlogBaseProps {
  fields: {
    path: string
  }
  frontmatter: {
    author: string
    date: string
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

const Meta: React.FC<{ author: string; date: string; github?: string }> = ({
  author,
  date,
  github,
}) => (
  <span className={style.meta}>
    <time className={style.metaTime} dateTime={date}>
      Posted {date}
    </time>
    &nbsp;by&nbsp;
    <span className={style.metaAuthor}>
      {github ? (
        <a
          className={style.metaGithub}
          href={`https://github.com/${github}`}
          rel="noopener"
          target="_blank"
        >
          <img
            alt={author}
            className={style.metaGithubIcon}
            src={`https://github.com/${github}.png`}
          />
          &nbsp;
          <span className={style.metaGithubAuthor}>{author}</span>
        </a>
      ) : (
        author
      )}
    </span>
  </span>
)

const BlogBase: React.FC<BlogBaseProps> = ({
  fields: { path },
  frontmatter: { author, date, github, title },
  children,
}) => (
  <>
    <Contents>
      <Link className={style.titleLink} to={path}>
        <h1 className={style.title}>{title}</h1>
      </Link>
      <p>
        <Meta author={author} github={github} date={date} />
      </p>
      {children}
    </Contents>
  </>
)

const Blog: React.FC<BlogProps> = ({ html, ...props }) => (
  <BlogBase {...props}>
    <section
      className={style.blog}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </BlogBase>
)

export default Blog

export const BlogExcerpted: React.FC<BlogExcerptedProps> = ({
  excerpt,
  ...props
}) => (
  <BlogBase {...props}>
    <section className={`${style.blog} ${style.excerpt}`}>{excerpt}</section>
    <p>
      <Button color="primary" outline to={props.fields.path}>
        Read more
      </Button>
    </p>
  </BlogBase>
)

export const query = graphql`
  fragment BlogBase on MarkdownRemark {
    fields {
      path
    }
    frontmatter {
      author
      date(formatString: "MMMM DD, YYYY")
      github
      title
    }
  }

  fragment Blog on MarkdownRemark {
    ...BlogBase
    html
  }

  fragment BlogExcerpted on MarkdownRemark {
    ...BlogBase
    excerpt(pruneLength: 210)
  }
`
