import React from "react"
import Fade from 'react-reveal/Fade'

import styles from '../../styles/skills.module.css'

const Skills = () => (
    <div className={styles.skills}>
        <h3 className={styles.heading}>Skills</h3>

        <div className={styles.skillsContainer}>
            <Fade top>
                <div className={styles.skill}>
                    <p className={styles.skillText}>Ps</p>
                </div>
            
                <div className={styles.skill}>
                    <p className={styles.skillText}>Ai</p>
                </div>
                
                <div className={styles.skill}>
                    <p className={styles.skillText}>Id</p>
                </div>
            </Fade>
        </div>
    </div>
)

export default Skills