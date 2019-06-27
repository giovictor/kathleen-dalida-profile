import React from "react"
import Fade from 'react-reveal/Fade'
import Skill from './skill'

import styles from '../../styles/skills.module.css'

const Skills = () => (
    <div className={styles.skills} id="skills">
        <h3 className={styles.heading}>Skills</h3>

        <div className={styles.skillsContainer}>
            <Fade top>
                <Skill skill="Ps"/>
                <Skill skill="Ai"/>
                <Skill skill="Id"/>
            </Fade>
        </div>
    </div>
)

export default Skills