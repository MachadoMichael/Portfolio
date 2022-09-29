import React, { useEffect, useState } from 'react'
import Header from './Header'
import Homepage from './Homepage'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'

export default function Interface() {
    const [section, setSection] = useState('Homepage')
    const [interface_screen, setInterface_screen] = useState('')

    function select_stage(stage) {
        setSection(stage)
   
    }

    useEffect(() => {
        if(section === 'Homepage') setInterface_screen(<Homepage />) 
        if(section === 'About me') setInterface_screen(<About />) 
        if(section === 'Portfolio') setInterface_screen(<Portfolio />) 
        if(section === 'Contact') setInterface_screen(<Contact />) 
    }, [section])

    
    return (
        <div className='container'>
            <Header
                select_stage={select_stage}
                nav={[
                    'Homepage',
                    'About me',
                    'Portfolio',
                    'Contact'
                ]} />
            {interface_screen}
        </div>
    )
}
