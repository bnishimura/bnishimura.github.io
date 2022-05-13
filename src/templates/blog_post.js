import React from "react"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

// import '../css/blog_post.css';

export default function Template({ data }) {
    const post = data.mdx
    return (
        <div className="blog-post-container">
            <Helmet title={`NishiWare - ${post.frontmatter.title}`} />
            <div className="blog-post">
                <h1>{post.frontmatter.title}</h1>
                <div className="blog-post-content">
                    <MDXRenderer>{post.body}</MDXRenderer>
                </div>
            </div>
        </div>
    )
}

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        mdx(frontmatter: { path: { eq: $path } }) {
            body
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                }
            }
        }
    `
