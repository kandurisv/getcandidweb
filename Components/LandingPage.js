import React from 'react'
import LandingScreen1 from './LandingScreen1'
import LandingScreen2 from './LandingScreen2'
import LandingScreen3 from './LandingScreen3'

const LandingPage = ({content}) => {
    return (
        <div>
           <LandingScreen1 />
           <LandingScreen2 brands = {content} />
           <LandingScreen3 />
        </div>
    )
}

export default LandingPage
