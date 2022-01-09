import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const AboutPage = ({ data }) => {
  console.log(data)
  return (
    <Layout pageTitle="About Us">
      <p>
        ma namen is jef !
      </p>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query {
    wpPage(slug: { eq: "about-us" }) {
      aboutPage {
        headerAboutUs {
          title
          description
          picture {
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
        }
        mission {
          title
          description
          bannerPicture {
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
        }
      }
    }
  }
`