import React from "react"

import styles from '../../styles/education.module.css'

const History = (props) => (
    <div className={styles.history}>
        <h3 className={styles.historyTitle}>{props.title}</h3>
        <p className={styles.historyDegree}>{props.degree}</p>
        <p className={styles.historySchool}>{props.school}</p>
        <p className={styles.historySchoolYear}>{props.year}</p>
    </div>
)

export default History;