import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import HeroSection from "../components/sections/HeroSection"
import SEO from "../components/layout/seo"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
    </Layout>
  )
}

export default IndexPage
