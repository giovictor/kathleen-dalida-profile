import React from 'react'
import Slide from 'react-reveal/Slide'

import styles from '../../styles/header.module.css'
import logo from '../../images/logo.png'

import MenuItem from './menuItem'

const Menu = () => (
    <div className="nav">
        <img src={logo} className={styles.logo}/>
        <Slide right>
            <nav className={styles.navbar}>
                <MenuItem itemName="Home"/>
                <MenuItem itemName="About"/>
                <MenuItem itemName="Education"/>
                <MenuItem itemName="My Skills"/>
                <MenuItem itemName="Design Fields"/>
                <MenuItem itemName="Contact"/>
            </nav>
        </Slide>
    </div>
)

export default Menu