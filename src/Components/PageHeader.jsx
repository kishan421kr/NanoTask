import { CiExport } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import "../Style/PageHader.css"
import BuyerMeeting from "../pages/BuyerMeeting";
import ActionItems from "./ActiveItems";
const PageHader=({status})=>{
    return(
        <>
            <div id={status ? "PageHaderMainDivActive":"PageHaderMainDiv"}>
                <div id="PageFirstPart">
                    <div id="PageHaderHeading">Buyer Meeting List View</div>
                    <div style={{display:"flex",gap:"8px"}}>
                        <button id="ExportBTn"><CiExport />Export</button>
                        <button id="NewMeetingNBtn"><FaPlus />Create New Meeting</button>
                    </div>
                </div>
                <div id="HeadFirstAndSecondDiv">
                    Buyer Meeting <span style={{color:"rgba(103, 103, 103, 1)",display:"flex",justifyContent:"start",alignItems:"center",gap:"4px"}}><MdKeyboardDoubleArrowRight />
Buyer Meeting List View</span>
                </div>
                <div id="PageSecondPart">
                    <div id="HeadSecondInnerDiv">
                        <div className="PageSecondDivText">All <span className="PageSecondSpan">100</span></div>
                        <div className="PageSecondDivText">Draft <span className="PageSecondSpan">50</span></div>
                        <div className="PageSecondDivText">Archive <span className="PageSecondSpan">75</span></div>
                    </div>
                </div>
                <BuyerMeeting/>
                <ActionItems/>
                <div style={{display:"flex",
                    justifyContent:"space-between",
                    padding:"20px"
                }}>
                    <div style={{display:"flex",gap:"20px",justifyContent:"start",alignItems:"center"}}>Items Per Page <span className="BuyerMeetingHeadDiv" style={{color:"rgba(167, 167, 167, 1)",backgroundColor:"white",fontWeight:"400"}}>50</span></div>
                    <div style={{display:"flex",gap:"10px",justifyContent:"center",alignItems:"center"}}>
                        1-50 Of 100 
                        <div style={{display:"flex",gap:"10px"}}>
                            <button style={{width:"35px",
                                height:"35px",
                                backgroundColor:"rgba(175, 99, 255, 1)"
                                ,border:"none",
                                borderRadius:"5px",
                                color:"white"}}>1</button>
                            <button style={{width:"35px",
                                height:"35px",
                                backgroundColor:"rgba(255, 255, 255, 1)"
                                ,border:"none",
                                borderRadius:"5px",
                                color:"rgba(149, 149, 149, 1)"}}>2</button>
                            <button style={{width:"35px",
                                height:"35px",
                                backgroundColor:"rgba(236, 236, 236, 1)"
                                ,border:"none",
                                borderRadius:"5px",
                                color:"rgba(149, 149, 149, 1)"}}>3</button>
                            <button style={{width:"35px",
                                height:"35px",
                                backgroundColor:"rgba(236, 236, 236, 1)"
                                ,border:"none",
                                borderRadius:"5px",
                                color:"rgba(149, 149, 149, 1)"}}>4</button>
                            <span>...</span>
                            <button style={{width:"35px",
                                height:"35px",
                                backgroundColor:"rgba(236, 236, 236, 1)"
                                ,border:"none",
                                borderRadius:"5px",
                                color:"rgba(149, 149, 149, 1)"}}>10</button>
                            <button style={{width:"35px",
                                height:"35px",
                                backgroundColor:"rgba(236, 236, 236, 1)"
                                ,border:"none",
                                borderRadius:"5px",
                                color:"rgba(149, 149, 149, 1)"}}>11</button>
                            <button style={{width:"35px",
                                height:"35px",
                                backgroundColor:"rgba(236, 236, 236, 1)"
                                ,border:"none",
                                borderRadius:"5px",
                                color:"rgba(149, 149, 149, 1)"}}>12</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PageHader