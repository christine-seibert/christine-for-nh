/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import useSiteMetadata from "../../../../node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"

const Footer = () => {
  const { siteTitle, author, siteDescription } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [1, 2],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()}{` `}
        <Link
          aria-label="Link to GatsbyJS"
          href="https://fb.com/Christine4NHStateRep"
        >
          {siteTitle}.
        </Link>
      </div>
      <div>
        {siteDescription}.
      </div>
      <div>
        <Link
          aria-label="Link to GatsbyJS"
          href="https://www.gatsbyjs.com/"
        >
          Gatsby
        </Link>
        {` `}
        <Link
          aria-label="Link to the theme's GitHub repository"
          href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog"
        >
          Theme
        </Link>
        {` `}
        by
        {` `}
        <Link aria-label="Link to the theme author's website" href="https://www.lekoarts.de/en">
          LekoArts
        </Link>
      </div>
    </footer>
  )
}

export default Footer
