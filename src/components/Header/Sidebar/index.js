import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "./SidebarElement.css";

const SidebarElement = ({ toggle, isOpen, navbar }) => {
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
        <div className={` ${isOpen ? 'sidebarContainerVisible' : 'sidebarContainerInvisible'}`} aria-hidden="true">
            <div className={'sidebarWrapper'}>
                <ul className={`${isOpen ? 'sidebarContainerVisible' : '.sidebarContainerInvisible'}`} aria-hidden="true">
                    <li className={'sidebarLink'}>
                        <a href='#home' onClick={toggle}> Home </a>
                    </li>
                    <li className={'sidebarLink'}>
                        <a href='#about' onClick={toggle}> About </a>
                    </li>
                    <li className={'sidebarLink'}>
                        <a href='#work' onClick={toggle}> My Work </a>
                    </li>
                    <li className={'sidebarLink'}>
                        <a href='#contact' onClick={toggle}> Contact Me </a>
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