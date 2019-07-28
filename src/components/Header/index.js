import React from "react"
import Slide from 'react-reveal/Slide'

import Introduction from './introduction'
import Navbar from './navbar'

import styles from '../../styles/header.module.css'

const Header = () => (
    <div className="headerContainer">
        <Navbar mobileMode={true} menuMode="mobileNav"/>
        
        <header className={styles.header} id="header">
            <Introduction/>
            <Slide right>
                <Navbar mobileMode={false} menuMode="headerNav"/>
            </Slide>
        </header>
    </div>
)


export default Header