import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import "../Style/Notification.css"
const NotificationPanel = ({status}) => {
  return (
    <>
      <div className="box" style={{display:status?"block":'none'}}>
        <p className="note"></p>

        <div className="card">
          <div className="top">
            <h3 className="title">Notifications</h3>
            <span className="new">5 new</span>
          </div>

          <div className="rows">
            
            <div className="row">
              <img src="onlyprofile.png" alt="user" className="img" />
              <div className="info">
                <p className="msg">Task completed</p>
                <p className="text">
                  <span className="link">[task_name]</span> marked as completed..
                </p>
                <p className="time">10 mins ago</p>
              </div>
              <AiOutlineClose className="icon" />
            </div>

           
            <div className="row">
              <div className="icon-img-wrapper">
                <img src="calander.png" alt="calendar" className="icon-img" />
              </div>
              <div className="info">
                <p className="msg">Meeting Created</p>
                <p className="text">
                  New meeting <span className="link">[meeting_title]</span> is created for <br />
                  <span className="link">[date_time]</span>
                </p>
                <p className="time">5 mins ago</p>
              </div>
              <AiOutlineClose className="icon" />
            </div>

            
            <div className="row">
              <div className="icon-img-wrapper">
                <img src="calander.png" alt="calendar" className="icon-img" />
              </div>
              <div className="info">
                <p className="msg">Action Item Added</p>
                <p className="text">
                  <span className="link">[action_item_name]</span> is added in meeting <br />
                  <span className="link">[meeting_title]</span>
                </p>
                <p className="time">22 May 2025</p>
              </div>
              <AiOutlineClose className="icon" />
            </div>

   
            <div className="row">
              <img src="onlyprofile.png" alt="user" className="img" />
              <div className="info">
                <p className="msg">Task assigned</p>
                <p className="text">
                  <span className="link">[task_name]</span> has been assigned to <span className="link">[user_name]</span>.
                </p>
                <p className="time">2 hours ago</p>
              </div>
              <AiOutlineClose className="icon" />
            </div>
          </div>

          <div className="buttonborder">
            <button className="btn">View All</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationPanel;