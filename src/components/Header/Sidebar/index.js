import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { FaTimes } from 'react-icons/fa';
import "./SidebarElement.css";

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

    return (
        <div className={`sidebarContainer ${isOpen ? 'sidebarContainerVisible' : 'sidebarContainerInvisible'}`} onKeyDown={isOpen} aria-hidden="true">
            <div className={'icon'} onClick={toggle} onKeyDown={toggle} aria-hidden="true">
                <FaTimes className={'closeIcon'} />
            </div>
            <div className={'SidebarWrapper'}>
                <ul className={`${isOpen ? 'sidebarContainerVisible' : '.sidebarContainerInvisible'}`} onKeyDown={isOpen} aria-hidden="true">
                    <li className={'sidebarLink'}>
                        <a href='#home' onClick={toggle} onKeyDown={toggle}> Home </a>
                    </li>
                    <li className={'sidebarLink'}>
                        <a href='#about' onClick={toggle} onKeyDown={toggle}> About </a>
                    </li>
                    <li className={'sidebarLink'}>
                        <a href='#work' onClick={toggle} onKeyDown={toggle}> My Work </a>
                    </li>
                    <li className={'sidebarLink'}>
                        <a href='#contact' onClick={toggle} onKeyDown={toggle}> Contact Me </a>
                    </li>
                    <a
                        className={'svgStyle'}
                        href="https://github.com/amber-tamara"
                        target="_blanc"
                        rel="noopener noreferrer"
                    >
                        <Img fluid={data.file.childImageSharp.fluid} alt="Github Icon" />
                    </a>
                </ul>
            </div>
        </div>
    )
}

export default SidebarElement