import * as React from "react"
import Layout from "../components/layout"
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  header,
  headerInfo,
  headerPicture,
  headerTitle,
  CTA,
} from "../page.module.css"


// Imports

const IndexPage = ({
  data: {
    wpPage: { homePage },
  },
}) => {
  const image = getImage(homePage.headerHome.picture.localFile)

  return (
    <Layout>
      <div className={header}>
        <div className={headerInfo}>
          <h1 className={headerTitle}>{homePage.headerHome.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: homePage.headerHome.description,
            }}
          />
          <a className={CTA} target="__blank" href={homePage.callToAction.link}>
            {homePage.callToAction.description}
          </a>
        </div>
        <div>
          <GatsbyImage
            image={image}
            className={headerPicture}
            alt={homePage.headerHome.picture.altText}
          />
        </div>
      </div>
      <div>
    <h2>{homePage.featuredCharacter.title}</h2>
    <p>{homePage.featuredCharacter.description}</p>
    <div>
      {homePage.featuredCharacter.characters.map(characters => {
        const profile = getImage(characters.characterMeta.profilePicture.localFile)

        return (
          <Link to={`Champion/${characters.slug}`}>
            <GatsbyImage
              image={profile}
              alt={characters.characterMeta.profilePicture.altText}
            />
            <div>
              {characters.characterMeta.naam && (
                <p>{characters.characterMeta.naam}</p>
              )}
              <p>
                {characters.characterMeta.naam} {characters.characterMeta.alias}
              </p>
            </div>
          </Link>
          )
      })}
    </div>
  </div>
</Layout>
  )
}

// Page Query
export const query = graphql`
query  {
  wpPage(slug: {eq: "home"}) {
    homePage {
      headerHome {
        description
        title
        picture {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, width: 500, height: 500)
            }
          }
        }
      }
      callToAction {
        description
        link
      }
      featuredCharacter {
        characters {
          ... on WpCharacters {
            id
            characterMeta {
              naam
              alias
              orign
              profilePicture {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, transformOptions: {grayscale: true})
                  }
                }
                slug
              }
            }
          }
        }
        description
        title
      }
    }
  }
}

`
export default IndexPage