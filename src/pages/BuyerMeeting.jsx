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
const BuyerMeeting = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

 
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "status-completed";
      case "upcoming":
        return "status-upcoming";
      case "follow up":
        return "status-follow-up";
      case "rescheduled":
        return "status-rescheduled";
      case "overdue":
        return "status-overdue";
      case "in progress":
        return "status-in-progress";
      case "ongoing":
        return "status-ongoing";
      case "draft":
        return "status-draft";
      case "archived":
        return "status-archived";
      default:
        return "";
    }
  };

  return (
    <>
      <div id="BuyerMeetingMainDiv">
        <div id="BuyerMeetingInnerDiv">
          <div id="BuyerMeetingHead">
            <div>
              <div
                className="BuyerMeetingHeadDiv"
                style={{ color: "rgba(167, 167, 167, 1)", fontWeight: "400" }}
              >
                <HiMiniMagnifyingGlass style={{ color: "rgba(122, 122, 122, 1)" }} />
                Search anything here...
              </div>
            </div>

            {["Buyer Name", "Brand", "Dept", "Meeting Type", "Participants", "Meeting Date", "Status"].map((item, idx) => (
              <div key={idx}>
                <div className="BuyerMeetingHeadDiv bu">
                  {item}
                  <MdKeyboardArrowDown />
                </div>
              </div>
            ))}
          </div>

          <div style={{ overflow: "scroll" }}>
            <table style={{ width: "100%" }}>
              <thead id="tableHeadings" style={{ border: "1px solid rgba(236, 236, 236, 1)" }}>
                <tr>
                  <th><RxBox /></th>
                  <th>
                    <div className="TheadItem">
                      Date & Time <div><MdKeyboardArrowUp style={{marginBottom:"-4px"}} /><MdKeyboardArrowDown style={{marginTop:"-4px"}} /></div>
                    </div>
                  </th>
                  <th>
                    <div className="TheadItem">
                      Status <div><MdKeyboardArrowUp style={{marginBottom:"-4px"}} /><MdKeyboardArrowDown style={{marginTop:"-4px"}}/></div>
                    </div>
                  </th>
                  <th><div className="TypDiv">Type <FaArrowUpLong className="ArrowIcons" /></div></th>
                  <th><div className="TypDiv">Buyer Name <FaArrowDownLong className="ArrowIcons" /></div></th>
                  <th><div className="TypDiv">Brand <FaArrowDownLong className="ArrowIcons" /></div></th>
                  <th><div className="TypDiv">Dept. <FaArrowDownLong className="ArrowIcons" /></div></th>
                  <th><div className="TheadItem">Title<div><MdKeyboardArrowUp style={{marginBottom:"-4px"}} /><MdKeyboardArrowDown style={{marginTop:"-4px"}} /></div></div></th>
                  <th><div className="TheadItem">Meeting Date<div><MdKeyboardArrowUp style={{marginBottom:"-4px"}} /><MdKeyboardArrowDown style={{marginTop:"-4px"}} /></div></div></th>
                  <th><div className="TheadItem">Participants<div><MdKeyboardArrowUp style={{marginBottom:"-4px"}} /><MdKeyboardArrowDown style={{marginTop:"-4px"}} /></div></div></th>
                  <th id="actionSection">Action</th>
                </tr>
              </thead>

              <tbody id="BodyData">
                {Data.map((key, idx) => (
                  <tr key={idx}>
                    <td><input type="checkbox" /></td>
                    <td>{key.dateTime}</td>

                    <td>
                      <button className={`statusBtn ${getStatusClass(key.status)}`}>
                        {key.status}
                      </button>
                    </td>

                    <td>
                      <button id={key.type === "Offline" ? "BuyeBtnOffline" : "BuyerBtn"}>
                        {key.type}
                      </button>
                    </td>
                    <td><u>{key.buyerName}</u></td>
                    <td><u>{key.brand}</u></td>
                    <td><u>{key.dept}</u></td>
                    <td><u>{key.title}</u></td>
                    <td>{key.meetingDate}</td>
                    <td>{key.participants}</td>
                    <td>
                      <HiDotsVertical
                        className={selectedIndex === idx ? "active" : "inactive"}
                        style={{ cursor: "pointer" }}
                        onClick={() => setSelectedIndex(selectedIndex === idx ? null : idx)}
                      />
                      <ActionBar status={selectedIndex === idx} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

     
    </>
  );
};
export default BuyerMeeting