import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  wrapper,
  image,
  charactersInfo,
  naam,
  alias,
} from "./characters.module.css"

export const characters = ({ characters, slug }) => {
  const profile = getImage(characters.characterMeta.profilePicture.localFile)
  return (
    <Link
      className={wrapper}
      to={slug}
    >
      <GatsbyImage
        className={image}
        image={profile}
        alt={characters.characterMeta.profilePicture.altText}
      />
      <div className={charactersInfo}>
        {characters.characterMeta.naam && (
          <p className={naam}>{characters.characterMeta.naam}</p>
        )}
        <p className={alias}>
          {characters.characterMeta.naam} {characters.characterMeta.alias}
        </p>
      </div>
    </Link>
  )
}

export default characters;
