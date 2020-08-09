import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM Do, YYYY")
            }
            fields {
              slug
            }
          }
        }
      }
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  // // sort blog posts based on date in descending order
  // data.allMarkdownRemark.edges.sort((a, b) =>
  //   a.node.frontmatter.date < b.node.frontmatter.date ? 1 : -1
  // )

  return (
    <div>
      <Layout>
        <h1>List of Blogs</h1>
        <ol className={blogStyles.posts}>
          {data.allContentfulBlogPost.edges.map(edge => {
            const { title, slug, publishedDate } = edge.node
            return (
              <li key={slug} className={blogStyles.post}>
                <Link to={`/blog/${slug}`}>
                  <h2>{title}</h2>
                  <p>Date: {publishedDate}</p>
                </Link>
              </li>
            )
          })}
        </ol>
        <ol className={blogStyles.posts}>
          {data.allMarkdownRemark.edges.map(edge => {
            const {
              frontmatter: { title, date },
              fields: { slug },
            } = edge.node
            return (
              <li key={slug} className={blogStyles.post}>
                <Link to={`/blog/${slug}`}>
                  <h2>{title}</h2>
                  <p>Date: {date}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
}

export default BlogPage
