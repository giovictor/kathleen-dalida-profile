import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Slide from 'react-reveal/Slide'

import styles from '../../styles/header.module.css'

const Introduction = () => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        firstname
                        lastname
                        job
                    }
                }
            }
        `
    )
    
    return (
        <Slide left>
            <div className={styles.introduction}>
                <p className={styles.greeting}>Hi I'm</p>
                <p className={styles.firstName}>{data.site.siteMetadata.firstname}</p>
                <p className={styles.lastName}>{data.site.siteMetadata.lastname}</p>
                <p className={styles.job}>{data.site.siteMetadata.job}</p>
            </div>
        </Slide>
    )
}

export default Introduction