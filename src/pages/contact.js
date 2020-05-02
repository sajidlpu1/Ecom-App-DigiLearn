import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock"
import Contactcomp from '../components/Contact/Contactcomp'

const ContactPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
    //Check out HeroSection from Reusable folder these are props
    img={data.img.childImageSharp.fluid}
    title="Contact Us"
    subtitle = ""
    heroclass="about-background"
    />


    <Contactcomp/>
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "contact1.jpg"}){
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default ContactPage
