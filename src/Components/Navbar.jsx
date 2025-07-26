
import { RxHamburgerMenu } from "react-icons/rx";
import { FiMessageSquare } from "react-icons/fi";
import "../Style/Navbar.css"
import SideNavbar from "./SideNavbar";
import { useState } from "react";
const Navbar=()=>{
    const [SideBarActive ,setSideBarActive] = useState(false)
    return(
        <>
            <div style={{display:"flex",width:"100%"}}>
                <SideNavbar activeCheck = {SideBarActive}/>
                <div id={SideBarActive ? "NavBarMAinDivActive" : "NavBarMAinDiv"}>
                    <div style={{display:"flex",justifyContent:"center",gap:"40px",alignItems:"center"}}>
                        <div onClick={()=>setSideBarActive(!SideBarActive)} ><RxHamburgerMenu id="Hamburger" /></div>
                        <div><input type="text" id="SearchIcon" placeholder="Search anything here"/></div>
                    </div>
                    <div style={{display:"flex",gap:"20px"}}>
                        <div><img src="/MessageIcon.png" alt="" /></div>
                        <div><img src="/Notifications.png" alt="" /></div>
                        <div><img src="/Profile.png" alt="" /></div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default Navbar