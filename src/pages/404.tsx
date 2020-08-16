/** @jsx jsx */
import { graphql } from "gatsby"
import { jsx, Link } from "theme-ui"
import useSiteMetadata from "../../node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"
import Layout from "../../node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import SEO from "../../node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/seo"
// @ts-ignore
import NotFound from "../texts/NotFound.mdx"

const NotFoundPage = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <Layout>
      <SEO title="404: Not Found" />
      <section sx={{ mb: [1, 2], p: { fontSize: [1, 2, 3], mt: [1, 2] } }}>
        <NotFound />
      </section>
    </Layout>
  )
}

export default NotFoundPage