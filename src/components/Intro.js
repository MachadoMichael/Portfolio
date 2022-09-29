import React from 'react'
import { Link } from 'react-router-dom'


export default function Intro() {

    return (
        <div className='presentation '>
            <Link className='redirect_interface' to={'/Interface'}>
                <div className='first_text'>Welcome</div>
                <div className='second_text'>portfolio by </div>
                <div className='third_text'>Michael Machado</div>
                <div className='click_text'>open</div>
            </Link>
        </div>
    )
}
