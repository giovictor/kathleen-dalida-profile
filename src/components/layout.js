import React from 'react'
import { Helmet } from 'react-helmet'

import favicon from '../images/logo.png'

const Layout = ({children}) => (
    <div className="profile-container">
        <Helmet>
            <title>Kath Dalida</title>
            <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=swap" rel="stylesheet"/>      
        </Helmet>
        {children}
    </div>
)

export default Layout