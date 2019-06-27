import React from "react"
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'
import History from './history'

import togapic from '../../images/toga.jpg'
import styles from '../../styles/education.module.css'

const Education = () => (
    <div className={styles.education}>
        <div className={styles.historyContainer}>
            <Fade left>
                <History title="SECONDARY" school="Pasay City South High School" year="2010-2014"/>
                <History title="TERTIARY" degree="Bachelor of Science in Information Technology" school="STI College-Global City" year="2014-2018"/>
            </Fade>
        </div>
        <Slide top>   
            <img src={togapic} className={styles.togapic}/>
        </Slide>
        <div className={styles.togaContainer}></div>
    </div>
)

export default Education