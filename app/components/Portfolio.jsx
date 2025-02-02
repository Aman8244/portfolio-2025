import React from 'react'
import Navbar from './Navbar'
import Seperator from './Seperator'
import Intro from './Intro'
import AboutMe from './AboutMe'
import CreativeWork from './CreativeWork'
import Contact from './Contact'
import Experience from './Experience'

const Portfolio = () => {
    return (
        <div
            className='bg-[#000000f1] text-[#ffffffeb] md:px-[3%] min-h-screen'>
            <Navbar />
            <Seperator/>
            <Intro/>
            <AboutMe/>
            <Experience/>
            <CreativeWork/>
            <Contact/>
        </div>
    )
}

export default Portfolio