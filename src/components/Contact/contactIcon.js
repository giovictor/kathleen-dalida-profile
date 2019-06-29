import React from "react"



import styles from '../../styles/contact.module.css'

const ContactIcon = (props) => (
    <a href={props.url} target="_blank">
        <img src={props.src} className={styles.contactIcon}/>
    </a>
)

export default ContactIcon