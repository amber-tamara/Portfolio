import React from 'react'
import "./NavbarElements.css"

const Index = ({ navbar, toggle, isOpen }) => {

    return (
        <div className={`nav ${navbar ? 'navVisible' : ''}`}>
            <div className={'navbarContainer'}>
                <h3 className={`${navbar ? 'navLogo' : 'navLogoInvisible'}`} navbar={navbar}>Amber Jansen</h3>
                <ul className={'navMenu'}>
                    <li className={'navItem'}>
                        <a className={'navLinks'} href="#home">Home</a>
                    </li>
                    <li className={'navItem'}>
                        <a className={'navLinks'} href="#about">About</a>
                    </li>
                    <li className={'navItem'}>
                        <a className={'navLinks'} href="#work">My Work</a>
                    </li>
                    <li className={'navItem'}>
                        <a className={'navLinks'} href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Index