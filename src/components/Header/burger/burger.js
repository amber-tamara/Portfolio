import React from 'react'
import "./burger.css"
import SideBar from "../Sidebar/index"

const Index = ({ navbar, toggle, isOpen }) => {

    return (
        <div className={'styledBurger'} onClick={toggle} onKeyDown={toggle}>
            <div className={`navBars ${isOpen ? 'navBarOneRotate' : 'navBarOne'}`}></div>
            <div className={`navBars ${isOpen ? 'navBarTwoInvisible' : 'navBarTwo'}`}></div>
            <div className={`navBars ${isOpen ? 'navBarThreeRotate' : 'navBarThree'}`}></div>
            <SideBar />
        </div>
    )
}
export default Index    