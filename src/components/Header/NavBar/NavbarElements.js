import styled from 'styled-components'

export const Nav = styled.nav`
    background-color: ${({ navbar }) => (navbar ? 'rgb(7, 7, 7);' : 'transparent')};
    height: ${({ navbar }) => (navbar ? '50px;' : '80px')};
    transition: ${({ navbar }) => (navbar ? '.5s ease-in-out, padding .5s ease-in-out' : '')};
    //  margin-top: -80px
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: ${({ navbar }) => (navbar ? 'fixed' : 'absolute')};
    top: 0;
    z-index: 10;
    font-family: "Raleway",monospace;
    transition: all .3s ease;
    font-size: 1.1rem;
    z-index: 999;
    @media screen and (max-width: 760px){
     height: 80px;
    }
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px
`

export const NavLogo = styled.h2`
    visibility:  ${({ navbar }) => (navbar ? 'visible' : 'hidden')};
    transition: all .3s ease;
    opacity: 100%;
    color: #5DE189;
    font-size: 1.5rem;
    align-items: center;
    display: flex;
    font-weight: bold;
    text-decoration: none;
    margin: 0;
    font-family: "Nunito";
`

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 760px){
        display: block;
        position: absolute;
        top: 4px;
        transition: .5s ease-in-out, padding .5s ease-in-out;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #f2f2f2;
    }
`

export const NavMenu = styled.ul`
    margin-bottom: 0;
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    padding-right: 30px;
    margin-right: -22px;   
    @media screen and (max-width: 760px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px
`

export const NavLinks = styled.a`
    outline: none;
    color: #f2f2f2; 
    display: flex;
    align-items: center;
    text-decoration: none;
    padding-right: 1.4em;
    height: 100%;
    cursor: pointer;
    transition: all .3s ease;
    &:hover {
        color: #5DE189;
    }
`