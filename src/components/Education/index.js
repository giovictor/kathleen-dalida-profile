import React from "react"
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'

import togapic from '../../images/toga.jpg'
import styles from '../../styles/education.module.css'

const Education = () => (
    <div className={styles.education}>
        <div className={styles.historyContainer}>
            <Fade left>
                <div className={styles.history}>
                    <h3 className={styles.historyTitle}>SECONDARY</h3>
                    <p className={styles.historySchool}>Pasay City South High School</p>
                    <p className={styles.historySchoolYear}>2010 - 2014</p>
                </div>

                <div className={styles.history}>
                    <h3 className={styles.historyTitle}>TERTIARY</h3>
                    <p className={styles.historyDegree}>Bachelor of Science in Information Technology</p>
                    <p className={styles.historySchool}>STI College-Global City</p>
                    <p className={styles.historySchoolYear}>2014 - 2018</p>
                </div>
            </Fade>
        </div>
        <Slide top>   
            <img src={togapic} className={styles.togapic}/>
        </Slide>
        <div className={styles.togaContainer}></div>
    </div>
)

export default Education