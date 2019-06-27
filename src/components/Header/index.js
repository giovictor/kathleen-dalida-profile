import React from "react"
import Introduction from './introduction'
import Menu from './menu'

import styles from '../../styles/header.module.css'

const Header = () => (
    <header className={styles.header} id="header">
        <Introduction/>
        <Menu/>
    </header>
)


export default Header