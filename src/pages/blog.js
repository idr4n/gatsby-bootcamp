import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            excerpt
          }
        }
      }
    }
  `)

  const { edges: posts } = data.allMarkdownRemark

  return (
    <div>
      <Layout>
        <h1>List of Blogs</h1>
        <ol>
          {posts.map(post => {
            const { frontmatter, excerpt } = post.node
            return (
              <li key={frontmatter.title}>
                <h2>{frontmatter.title}</h2>
                <h4>Date: {frontmatter.date}</h4>
                <p>{excerpt}</p>
              </li>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
}

export default BlogPage
