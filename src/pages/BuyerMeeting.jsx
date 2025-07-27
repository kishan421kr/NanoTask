import "../Style/BuyerMeeting.css"
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxBox } from "react-icons/rx";
import { FaArrowDownLong ,FaArrowUpLong } from "react-icons/fa6";
import { MdKeyboardArrowUp } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import ActionBar from "../Components/actionBar";
import { useState } from "react";
import Data from "../data";
const BuyerMeeting=()=>{
   
    const [selectedIndex, setSelectedIndex] = useState(null);
    return(
        <>
            <div id="BuyerMeetingMainDiv">
                <div id="BuyerMeetingInnerDiv">
                    <div id="BuyerMeetingHead">
                        <div >
                            <div className="BuyerMeetingHeadDiv" style={{color:"rgba(167, 167, 167, 1)",fontWeight:"400"}}>
                                <HiMiniMagnifyingGlass style={{color:"rgba(122, 122, 122, 1)"}}/>
                                Search anything here...
                            </div>
                        </div>

                        <div >
                            <div className="BuyerMeetingHeadDiv bu">
                                Buyer Name
                                <MdKeyboardArrowDown />
                            </div>
                        </div>

                        <div >
                            <div className="BuyerMeetingHeadDiv bu">
                                Brand
                                <MdKeyboardArrowDown />
                            </div>
                        </div>

                        <div >
                            <div className="BuyerMeetingHeadDiv bu">
                                Dept
                                <MdKeyboardArrowDown />
                            </div>
                        </div>

                        <div >
                            <div className="BuyerMeetingHeadDiv bu">
                                Meeting Type
                                <MdKeyboardArrowDown />
                            </div>
                        </div>

                        <div >
                            <div className="BuyerMeetingHeadDiv bu">
                                Participants
                                <MdKeyboardArrowDown />
                            </div>
                        </div>

                        <div >
                            <div className="BuyerMeetingHeadDiv bu">
                                Meeting Date
                                <MdKeyboardArrowDown />
                            </div>
                        </div>

                        <div >
                            <div className="BuyerMeetingHeadDiv bu">
                                Status
                                <MdKeyboardArrowDown />
                            </div>
                        </div>

                        
                    </div>
                    <div style={{overflow:"scroll"}}>
                        <table style={{width:"100%"}}>
                            <thead id="tableHeadings"style={{border:"1px solid rgba(236, 236, 236, 1)"}} >
                                <tr >
                                    <th><RxBox/></th>
                                        <th ><div className="TheadItem">Date & Time <div><MdKeyboardArrowUp /><MdKeyboardArrowDown /></div></div></th>
                                        <th ><div className="TheadItem">Status <div><MdKeyboardArrowUp  /><MdKeyboardArrowDown /></div></div> </th>
                                        <th><div className="TypDiv">Type <FaArrowUpLong className="ArrowIcons" /></div></th>
                                        <th><div className="TypDiv">Buyer Name <FaArrowDownLong className="ArrowIcons" /></div></th>
                                        <th><div className="TypDiv">Brand <FaArrowDownLong className="ArrowIcons" /></div></th>
                                        <th><div className="TypDiv">Dept. <FaArrowDownLong className="ArrowIcons" /></div></th>
                                        <th ><div className="TheadItem"> Title <div><MdKeyboardArrowUp /><MdKeyboardArrowDown /></div></div></th>
                                        <th > <div className="TheadItem">Meeting Date <div><MdKeyboardArrowUp /><MdKeyboardArrowDown /></div></div></th>
                                        <th > <div className="TheadItem">Participants <div><MdKeyboardArrowUp /><MdKeyboardArrowDown /></div></div></th>
                                        <th id="actionSection">Action</th>
                            </tr>
                            
                            </thead>
                            <tbody id="BodyData">
                                {Data.map((key,idx)=>{
                    
                                    return(
                                        <tr key={idx} >
                                            <td><input type="checkbox" name="" id="" width={15} height={15} /></td>
                                            <td>{key.dateTime}</td>
                                            <td><button>{key.status}</button></td>
                                            <td><button id={key.type=="Offline"?"BuyeBtnOffline":"BuyerBtn"}>{key.type}</button></td>
                                            <td>{key.buyerName}</td>
                                            <td>{key.brand}</td>
                                            <td>{key.dept}</td>
                                            <td>{key.title}</td>
                                            <td>{key.meetingDate}</td>
                                            <td>{key.participants}</td>
                                            <td  ><HiDotsVertical 
                                            className={selectedIndex === idx ? "active" : "inactive"}
                                            style={{cursor:"pointer"}} 
                                             onClick={() =>setSelectedIndex(selectedIndex === idx ? null : idx)} /> 
                                             <ActionBar status={selectedIndex === idx}/></td>
                                        </tr>
                                    )
                                })}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BuyerMeeting