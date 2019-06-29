import React from "react"
import Slide from 'react-reveal/Slide'

import Introduction from './introduction'
import Menu from '../menu'

import logo from '../../images/logo.png'
import styles from '../../styles/header.module.css'

const Header = () => (
    <header className={styles.header} id="header">
        <Introduction/>
        <div className={styles.headerMenu}>
            <img src={logo} className={styles.logo}/>
            <Slide right>
                <Menu mode="headerNav"/>
            </Slide>
        </div>
    </header>
)


export default Header