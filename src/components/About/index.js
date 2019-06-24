import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Fade from 'react-reveal/Fade'

import styles from '../../styles/about.module.css'

const About = () => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        about
                    }
                }
            }
        `
    )

    return (
        <div className={styles.about}>
            <Fade top>
                <h1 className={styles.heading}>About Me</h1>
                <p className={styles.body}>{data.site.siteMetadata.about}</p>
            </Fade>
        </div>
    )
}

export default About