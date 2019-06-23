import React from 'react'

import styles from '../../styles/header.module.css'

const MenuItem = (props) => (
    <ul>
        <li>
            <a href="#" className={styles.link}>{props.itemName}</a>
        </li>
    </ul>
)

export default MenuItem