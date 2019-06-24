import React from "react"
import Layout from '../components/layout'
import Header from '../components/Header'
import About from '../components/About'

const IndexPage = () => (
    <Layout>
        <div className="profile">
            <Header />
            <About />
        </div>
    </Layout>
)

export default IndexPage
