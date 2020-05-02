import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock"
import DualInfoblock from "../components/Reusable/DualInfoblock"
import Coursecart from "../components/Cart/Coursecart"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
    //Check out HeroSection from Reusable folder these are props
    img={data.img.childImageSharp.fluid}
    title="DigiLearn"
    subtitle = "Build a life you deserve"
    heroclass="hero-background"
    />
    <Infoblock heading="About Us"/>
    <Coursecart courses={data.courses} />


  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "titleimg.png"}){
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }

  courses:allContentfulCourses
  {
    edges
    {
      node
      {
        id
        title
        price
        category
        description
        image
        {
          fixed(width:200, height:120)
          {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`

export default IndexPage
