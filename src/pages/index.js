import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Landing from '../components/Landing'
import Skills from '../components/Skills'
import Testimonials from '../components/Testimonials'
import MyWork from '../components/MyWork'
import About from '../components/About'
import GitHub from '../components/GitHub'

const IndexPage = () => (
  <Layout>
    <Landing />
    <Skills />
    <Testimonials />
    <MyWork />
    <About />
    <GitHub />
  </Layout>
)

export default IndexPage
