import React from "react"
import { ParallaxLayer } from "react-spring/renderprops-addons"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ParallaxLayer offset={0} factor={1}>
      <Image></Image>
    </ParallaxLayer>
    <ParallaxLayer offset={1} speed={0.5}>
      <Hero></Hero>
    </ParallaxLayer>
    <ParallaxLayer offset={0.5} speed={0.5}>
      <h1 style={{ textAlign: "center" }}>Hi people</h1>
    </ParallaxLayer>
  </Layout>
)

export default IndexPage
