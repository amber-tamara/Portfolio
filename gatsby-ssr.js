import React from 'react';
import { Navv } from './src/components/Header/NavBar/NavbarElements'
import { Nav } from './src/components/Header/NavBar/index'
import { Sidenav } from './src/components/Header/Sidebar/SidebarElement'
import { Sidenavv } from './src/components/Header/Sidebar/index'

export const wrapPageElement = ({ Navv, Nav, Sidenav, Sidenavv }) => (
    <>
        <Nav />
        <Navv />
        <Sidenavv />
        <Sidenav />
    </>
);
