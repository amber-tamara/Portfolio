import { FaBars } from 'react-icons/fa';
import React from 'react'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks
} from "./NavbarElements"

const Index = ({ toggle, navbar }) => {

    return (
        <Nav navbar={navbar}>
            <NavbarContainer>
                <NavLogo navbar={navbar}>Amber Jansen</NavLogo>
                <MobileIcon navbar={navbar} onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks href="#home">Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks href="#about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks href="#work">My Work</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks href="#contact">Contact</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Index


