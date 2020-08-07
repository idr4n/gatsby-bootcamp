import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

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
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <Layout>
        <h1>List of Blogs</h1>
        <ol>
          {data.allMarkdownRemark.edges.map(post => {
            const {
              frontmatter: { title, date },
              excerpt,
              fields: { slug },
            } = post.node
            return (
              <li key={slug}>
                <h2>
                  <Link to={`/blog/${slug}`}>{title}</Link>
                </h2>
                <h4>Date: {date}</h4>
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
