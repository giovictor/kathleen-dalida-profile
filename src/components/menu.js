import React from 'react'
import Slide from 'react-reveal/Slide'

import styles from '../styles/menu.module.css'
import MenuItem from './menuItem'

const Menu = (props) => {
    const {mode} = props
    return (
        <div className={styles[mode]}>
            <Slide right>
                <nav className={styles.navbar}>
                    <MenuItem to="header" itemName="Home" />
                    <MenuItem to="about" itemName="About"/>
                    <MenuItem to="education" itemName="Education"/>
                    <MenuItem to="skills" itemName="My Skills"/>
                    <MenuItem to="designFields" itemName="Design Fields"/>
                    <MenuItem to="contact" itemName="Contact"/>
                </nav>
            </Slide>
        </div>
    )
}

export default Menu