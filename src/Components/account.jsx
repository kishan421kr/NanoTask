import { FiLogOut } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import "../Style/Account.css"
const Account=({status})=>{
    return(
        <>
            <div id="AccountMainDiv" style={{ display: status ? 'block' : 'none' }} >
                <div id="AccountInnerDiv">
                    <div><FiUser />Profile</div>
                    <div><FiSettings />Settings</div>
                    <div><FiLogOut />Log Out</div>
                </div>
            </div>
        </>
    )
}
export default Account