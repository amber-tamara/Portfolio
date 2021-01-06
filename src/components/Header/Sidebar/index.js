import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarLink,
    SidebarWrapper,
    SidebarMenu

} from './SidebarElement'

const SidebarElement = ({ toggle, isOpen }) => {
    const data = useStaticQuery(graphql`
    {
                file(relativePath: {eq: "Github.png"}) {
                    childImageSharp {
                        fluid(maxWidth: 2000) {
                            ...GatsbyImageSharpFluid
                        }
                }
              }
            }
      `)

    const svgStyle = {
        width: '70px',
        height: '70px',
        margin: '40px auto',
    };
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle} >
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu isOpen={isOpen}>
                    <SidebarLink href="#home" onClick={toggle}>
                        Home
                </SidebarLink>
                    <SidebarLink href="#about" onClick={toggle}>
                        About
                </SidebarLink>
                    <SidebarLink href="#work" onClick={toggle}>
                        My Work
                </SidebarLink>
                    <SidebarLink href="#contact" onClick={toggle}>
                        Contact Me
                </SidebarLink>
                    <a
                        style={svgStyle}
                        href="https://github.com/amber-tamara"
                        target="_blanc"
                        rel="noopener noreferrer"
                    >
                        <Img fluid={data.file.childImageSharp.fluid} alt="Github Icon" />
                    </a>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default SidebarElement