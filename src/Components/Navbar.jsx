
import { RxHamburgerMenu } from "react-icons/rx";
import { FiMessageSquare } from "react-icons/fi";
import "../Style/Navbar.css"
import SideNavbar from "./SideNavbar";
import { useState } from "react";
import PageHader from "./PageHeader";
import Account from "./account";
import Chat from "./Chat";
import NotificationPanel from "./Notification";
const Navbar=()=>{
    const [SideBarActive ,setSideBarActive] = useState(false)
    const [profile ,setProfile] = useState(false);
    const [chat ,setChat] =useState(false)
    const [notifi ,setNotifi] = useState(false);
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
                        <div onClick={()=>{setChat(!chat)}}><img src="/MessageIcon.png" alt="" /><Chat status={chat}/></div>
                        <div onClick={()=>{setNotifi(!notifi)}}><img src="/Notifications.png" alt="" /><NotificationPanel status={notifi}/></div>
                        <div onClick={()=>{setProfile(!profile)}}><img src="/Profile.png" alt="" /><Account status={profile}/></div>
                    </div>
                </div>
                
            </div>
            <PageHader status={SideBarActive}/>
            
            
        </>
    )
}
export default Navbar