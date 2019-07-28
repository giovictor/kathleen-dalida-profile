import React from 'react'

import styles from '../styles/menu.module.css'
import MenuItem from './menuItem'

const Menu = (props) => {
    const {mode} = props
    return (
        <div className={styles[mode]}>
            <nav className={styles.navbar}>
                <ul>
                    <MenuItem to="header" itemName="Home" />
                    <MenuItem to="about" itemName="About"/>
                    <MenuItem to="education" itemName="Education"/>
                    <MenuItem to="skills" itemName="My Skills"/>
                    <MenuItem to="designFields" itemName="Design Fields"/>
                    <MenuItem to="contact" itemName="Contact"/>
                </ul>
            </nav>
        </div>
    )
}

export default Menu