import React from 'react'
import {Link} from 'react-scroll'
import styles from '../../styles/header.module.css'

const MenuItem = (props) => (
    <ul>
        <li>
            {/* <a href="#" className={styles.link}>{props.itemName}</a> */}
            <Link className={styles.link} to={props.to} spy={true} smooth={true} duration={1000}>{props.itemName}</Link>
        </li>
    </ul>
)

export default MenuItem