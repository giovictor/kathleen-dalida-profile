import React from "react" 

import styles from '../../styles/skills.module.css'

const Skill = (props) => (
    <div className={styles.skill}>
        <p className={styles.skillText}>{props.skill}</p>
    </div>
)

export default Skill
