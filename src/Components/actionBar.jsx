import "../Style/actionBar.css"
import { GoEye } from "react-icons/go";
import { FiEdit2 } from "react-icons/fi";
import { FiActivity } from "react-icons/fi";
import { FiDelete } from "react-icons/fi";
import ViewDisplay from "./ViewDisplay";
import { useState } from "react";
const ActionBar=({status,index})=>{
    const [OCView ,setView] = useState(false)
    return(
        <>
            <div id="ActionMainDiv" style={{display:status?'block':'none'}}>
                <div id="ActionInnerDiv">
                    <div onClick={()=>setView(!OCView)}><GoEye />View</div>
                    <div><FiEdit2 />Edit</div>
                    <div><FiActivity />Activity Log</div>
                    <div><FiDelete />Delete</div>
                </div>
            </div>
            <ViewDisplay  status={OCView}/>

        </>
    )
}
export default ActionBar