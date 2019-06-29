import React from "react"
import Introduction from './introduction'
import Menu from '../menu'

import logo from '../../images/logo.png'
import styles from '../../styles/header.module.css'

const Header = () => (
    <header className={styles.header} id="header">
        <Introduction/>
        <div className={styles.headerMenu}>
            <img src={logo} className={styles.logo}/>
            <Menu mode="headerNav"/>
        </div>
    </header>
)


export default Header