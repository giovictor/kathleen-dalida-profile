import React from "react"
import Menu from '../menu'
import ContactIcon from './contactIcon'

import facebookLogo from '../../images/facebookLogo.png'
import behanceLogo from '../../images/behanceLogo.png'
import mailLogo from '../../images/mailLogo.png'

import styles from '../../styles/contact.module.css'

const Contact = () => (
    <div className={styles.contact} id="contact">
        <div className={styles.menu}>
            <Menu mode="contactNav" />
        </div>

        <div className={styles.details}>
            <ContactIcon src={facebookLogo} url="https://www.facebook.com/kathm.dalida"/>
            <ContactIcon src={behanceLogo} url="https://www.behance.net/kathdalida"/>
            <ContactIcon src={mailLogo} url="mailto:kathdalida93@gmail.com"/>
        </div>
    </div>
)

export default Contact