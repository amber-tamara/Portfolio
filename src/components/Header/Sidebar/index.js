import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'

export const SidebarContainer = styled.aside`
  height: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100')};    
  @media screen and (max-width: 760px){
  z-index: 999;
  width: 100%;
  position: fixed;
  background: black;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  font-family: "Raleway",monospace;
  }
`

export const CloseIcon = styled(FaTimes)`
  color: #f2f2f2;
  transition: 0.2s ease-in-out;
  &:hover {
    color: #5DE189;
  }
`

export const Icon = styled.div`
  position: absolute;
  top: 1.4rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const SidebarWrapper = styled.div`
  color: #f2f2f2;
`

export const SidebarMenu = styled.ul`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  flex-direction: column;
  padding: 0;

  @media screen and (max-width:  480px) {
      grid-template-rows: repeat(6, 60px);
  }
`

export const SidebarLink = styled.a`
  display: flex;
  padding: 40px;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #f2f2f2;
  cursor: pointer;

  &:hover {
    color: #5DE189;
    transition: 0.2s ease-in-out;
}
`

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