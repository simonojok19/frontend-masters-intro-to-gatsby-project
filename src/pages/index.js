import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <main>
      <h1>Hello Frontend Masters</h1>
      <Link to="/about">About</Link>
    </main>
  )
}