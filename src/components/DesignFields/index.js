import React from "react"
import DesignField from './designFields'

import styles from '../../styles/designFields.module.css'

const DesignFields = () => (
    <div className={styles.designFields}>
        <h3 className={styles.heading}>Design Fields</h3>

        <div className={styles.fieldsContainer}>
            <DesignField field="Logo"/>
            <DesignField field="Brochure"/>
            <DesignField field="Business Cards"/>
            <DesignField field="Web Mockup"/>
            <DesignField field="Flyers"/>
            <DesignField field="Banners"/>
        </div>
    </div>
)

export default DesignFields