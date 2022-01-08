import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image' 
import Layout from '../../components/layout'

const charactersPage = ({
  data: {
    wpCharacters: { characterMeta: characters },
  },
}) => {
  const image = getImage(characters.profilePicture.localFile)

  return (
    <Layout pageTitle="leugue  Template">
      <div>
      <GatsbyImage image={image} alt={characters.profilePicture.altText} />
      <h3>{characters.naam}</h3>
      <h1>{characters.alias}</h1>
      <div dangerouslySetInnerHTML={{__html: characters.description}} />
        <p>naam: {characters.naam}</p>
        <p>age: {characters.age}</p>
        <p>alias: {characters.alias}</p>
        <p>height: {characters.height}</p>
        <p>orign: {characters.orign}</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
query MyQuery($id: String)  {
  wpCharacters(id: {eq: $id}) {
    characterMeta {
      age
      alias
      description
      height
      naam
      orign
      profilePicture {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        altText
      }
    }
  }
}

`

export default charactersPage
