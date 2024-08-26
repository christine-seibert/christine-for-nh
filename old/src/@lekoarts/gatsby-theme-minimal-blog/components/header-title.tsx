/** @jsx jsx */
import React from 'react'
import { StaticQuery, Link, graphql } from "gatsby"
import { jsx } from "theme-ui"
import replaceSlashes from "../../../../node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import useSiteMetadata from "../../../../node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"
import useMinimalBlogConfig from "../../../../node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import Img from "gatsby-image"

const HeaderTitle = ({data}) => {
  const { siteTitle } = useSiteMetadata()
  const { basePath } = useMinimalBlogConfig()

  return (
    <Link
      to={replaceSlashes(`/${basePath}`)}
      aria-label={`${siteTitle} - Back to home`}
      sx={{ color: `heading`, textDecoration: `none`, width: 90 + '%' }}
    >
      <Img 
        fixed={data.logo_icon.edges[0].node.fixed} 
        alt={`${siteTitle} - Logo icon`} 
        sx={{float: `left`}} 
      />
      <div style={{marginLeft: 3.25 + 'em'}}>
        <h1 sx={{ my: 0, fontWeight: `medium`, fontSize: [3, 4] }}>
          {siteTitle}
        </h1>
      </div>
      <em sx={{ my: 0, color: `#CC4398`, fontWeight: `medium`, fontSize: [0, 1] }}>"Ideas Thought Out, Not Bought Out"</em>
    </Link>
  )
}

export default function HeaderTitleComponent(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          logo_icon: allImageSharp(filter: {fluid: {originalName: {eq: "christine_seibert_profile_icon_48.png"}}}) {
            edges {
              node {
                fixed(width: 48, height: 48) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
            }
          }
        }
      `}
      render={data => <HeaderTitle data={data} {...props} />}
    />
  )
}