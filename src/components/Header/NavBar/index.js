import React from 'react'
import "./NavbarElements.css"

const Index = ({ navbar, toggle, isOpen }) => {

    return (
        <div className={`nav ${navbar ? 'navVisible' : ''}`}>
            <div className={'navbarContainer'}>
                <h3 className={`${navbar ? 'navLogo' : 'navLogoInvisible'}`} navbar={navbar}>Amber Jansen</h3>
                <ul className={'navMenu'}>
                    <li className={'navItem'}>
                        <span className={'navLinks'} to="home">Home</span>
                    </li>
                    <li className={'navItem'}>
                        <span className={'navLinks'} to="about">About</span>
                    </li>
                    <li className={'navItem'}>
                        <span className={'navLinks'} to="projects">My Work</span>
                    </li>
                    <li className={'navItem'}>
                        <span className={'navLinks'} to="contact">Contact</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Index