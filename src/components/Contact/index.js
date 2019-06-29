import React from "react"
import Menu from '../menu'

import styles from '../../styles/contact.module.css'

const Contact = () => (
    <div className={styles.contact} id="contact">
        <div className={styles.menu}>
            <Menu mode="contactNav" />
        </div>

        <div className={styles.details}>

        </div>
    </div>
)

export default Contact