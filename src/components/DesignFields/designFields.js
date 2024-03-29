import React from "react"

import styles from '../../styles/designFields.module.css'


const DesignField = (props) => (
    <div className={styles.field}>
        <p className={styles.fieldText}>{props.field}</p>
    </div>
)

export default DesignField