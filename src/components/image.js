import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// Note: You can change "images" to whatever you'd like.

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid {
                  base64
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                  originalImg
                  originalName
                  presentationWidth
                  presentationHeight
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }
      return (
        <Img
          alt={props.alt}
          fluid={image.node.childImageSharp.fluid}
          style={{ position: "static", paddingBottom: 0 }}
        />
      )
    }}
  />
)

export default Image
