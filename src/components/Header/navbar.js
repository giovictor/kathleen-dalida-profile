import React from 'react'

import Menu from '../menu'

import logo from '../../images/logo.png'
import styles from '../../styles/header.module.css'

const Navbar = (props) => (
    <div className={props.mobileMode ? styles.mobileMenu : styles.headerMenu}>
        <img src={logo} className={styles.logo}/>
        <Menu mode={props.menuMode}/>
    </div>
)

export default Navbar