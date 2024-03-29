import React from "react"
import Layout from '../components/layout'
import Header from '../components/Header'
import About from '../components/About'
import Education from '../components/Education'
import Skills from '../components/Skills'
import DesignFields from '../components/DesignFields'
import Contact from '../components/Contact'

const IndexPage = () => (
    <Layout>
        <div className="profile">
            <Header />
            <About />
            <Education/>
            <Skills/>
            <DesignFields/>
            <Contact/>
        </div>
    </Layout>
)

export default IndexPage
