import React from 'react'
import styles from '../../styles/header.module.css'
import logo from '../../images/logo.png'

import MenuItem from './menuItem'

const Menu = () => (
    <div className="header">
        <img src={logo} className={styles.logo}/>
        <nav className={styles.navbar}>
            <MenuItem itemName="Home"/>
            <MenuItem itemName="About"/>
            <MenuItem itemName="Education"/>
            <MenuItem itemName="My Skills"/>
            <MenuItem itemName="Design Fields"/>
            <MenuItem itemName="Contact"/>
        </nav>
    </div>
)

export default Menu