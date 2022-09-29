import React from 'react'

export default function Header(props) {
    const select_stage = props.select_stage


    const nav = props.nav
    const navegation = nav.map((nav, index) =>
        <div onClick={() => select_stage(nav)} className='nav_btn' key={index} > {nav} </div>)

    return (
        <div className='header'>
            {navegation}
        </div>
    )
}
