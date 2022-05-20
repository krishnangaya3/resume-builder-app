import React from 'react'
import Helmet from 'react-helmet'

import { Main, Features, Demo, Navbar } from '../../components'


function Landing() {

    
    return (
        <div className="landing">
            <Navbar/>
            <Helmet>
                <title>Build Your Resume</title>
            </Helmet>
            <Main />
            <Features />
            <Demo />
        
        </div>
    )
}

export default Landing
