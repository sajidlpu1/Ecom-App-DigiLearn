import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock"
import DualInfoblock from "../components/Reusable/DualInfoblock"
import Team from "../components/About/Team"

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
    //Check out HeroSection from Reusable folder these are props
    img={data.img.childImageSharp.fluid}
    title="About DigiLearn"
    subtitle = ""
    heroclass="about-background"
    />
    <DualInfoblock heading="A message from CEO"/>
    <Infoblock heading="About Our Company and Our Team "/>
    <Team/>

  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "about123.jpg"}){
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default AboutPage
