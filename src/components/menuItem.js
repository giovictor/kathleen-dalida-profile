import React from 'react'
import {Link} from 'react-scroll'
import styles from '../styles/menu.module.css'

const MenuItem = (props) => (
    <ul>
        <li>
            <Link className={styles.link} to={props.to} spy={true} smooth={true} duration={800}>{props.itemName}</Link>
        </li>
    </ul>
)

export default MenuItem