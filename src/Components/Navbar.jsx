
import { RxHamburgerMenu } from "react-icons/rx";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
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
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center",color:"rgba(167, 167, 167, 1)"}}><input type="text" id="SearchIcon" placeholder="Search anything here...."/>
                        <span id="SearchIconeGlass"><HiMiniMagnifyingGlass style={{color:"rgba(122, 122, 122, 1)"}}/></span>
                        </div>
                    </div>
                    <div style={{display:"flex",gap:"20px"}}>
                        <div onClick={()=>{setChat(!chat),setNotifi(false),setProfile(false)}}><img src="/MessageIcon.png" alt="" /><Chat status={chat}/></div>
                        <div onClick={()=>{setNotifi(!notifi),setChat(false),setProfile(false)}}><img src="/Notifications.png" alt="" /><NotificationPanel status={notifi}/></div>
                        <div onClick={()=>{setProfile(!profile),setChat(false),setNotifi(false)}} style={{
                            display:"flex",
                            fontSize:"13px",
                            fontWeight:"700",
                            color:"rgba(103, 103, 103, 1)",
                            lineHeight:"16px",
                            gap:"10px",
                            alignItems:"center"
                        }}> <div style={{
                            borderRadius:"50%",
                            overflow:"hidden",
                            width:"40px",
                            height:"40px",
                            display:"flex",
                            justifyContent:"center"
                        }}><img src="/profilepice.png"/></div>  <h3 style={{display:"flex",flexDirection:"column"}}>Mohd Saleem <span style={{
                            fontSize:"15px",
                            fontWeight:"500",
                            color:"rgba(149, 149, 149, 1)",
                            lineClamp:"12px"
                        }}>Admin</span></h3><div/><Account status={profile}/></div>
                    </div>
                </div>
                
            </div>
            <PageHader status={SideBarActive}/>
            
            
        </>
    )
}
export default Navbar