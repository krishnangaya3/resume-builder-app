import React from 'react'
import Helmet from 'react-helmet'

import { Main, Features, Demo } from '../../components'


function Landing() {

    
    return (
        <div className="landing">
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
