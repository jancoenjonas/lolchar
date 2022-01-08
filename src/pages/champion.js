import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const characterPage = ({data: {allWpCharacters: {edges}}}) => {
  return (
    <Layout pageTitle="testing">
      {edges.map((item) => {
        const character = item.node.characterMeta;
        const slug = item.node.slug;
        return <Link to={`/Champion/${slug}`}>
          <p key={item.node.id}>{character.naam} {character.alias}</p>
        </Link>

      })}
    </Layout>
  )
}

export const query = graphql`
query {
  allWpCharacters {
    edges {
      node {
        characterMeta {
          naam
          alias
        }
        id
        slug
      }
    }
  }
}

`

export default characterPage