import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { FaTimes } from 'react-icons/fa';
import "./SidebarElement.css";

const SidebarElement = ({ navbar }) => {
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
        <div className={`sidebarContainer ${navbar ? 'sidebarContainerVisible' : 'sidebarContainerInvisible'}`} onKeyDown={navbar} aria-hidden="true">
            <div className={'icon'} onClick={navbar} onKeyDown={navbar} aria-hidden="true">
                <FaTimes className={'closeIcon'} />
            </div>
            <div className={'SidebarWrapper'}>
                <ul className={`${navbar ? 'sidebarContainerVisible' : '.sidebarContainerInvisible'}`} onKeyDown={navbar} aria-hidden="true">
                    <li className={'sidebarLink'}>
                        <a href='#home' onClick={navbar} onKeyDown={navbar}> Home </a>
                    </li>
                    <li className={'sidebarLink'}>
                        <a href='#about' onClick={navbar} onKeyDown={navbar}> About </a>
                    </li>
                    <li className={'sidebarLink'}>
                        <a href='#work' onClick={navbar} onKeyDown={navbar}> My Work </a>
                    </li>
                    <li className={'sidebarLink'}>
                        <a href='#contact' onClick={navbar} onKeyDown={navbar}> Contact Me </a>
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