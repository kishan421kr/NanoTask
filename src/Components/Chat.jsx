import React from 'react';
import '../Style/Chat.css';
import { AiOutlineClose } from 'react-icons/ai';

const Chat = ({status}) => {
  return (
    <div className="box" style={{display:status?"block":"none"}}>
      <p className="note"></p>

      <div className="card">
        <div className="top">
          <h3 className="title2">Chat</h3>
          <span className="new">5 new</span>
        </div>

        <div className="rows">
          <div className="row">
            <img src="/profilepice.png" alt="user" className="img" />
            <div className="info">
              <p className="msg">New Message</p>
              <p className="text">
                You have a new message from <span className="link">[user_name]</span>
              </p>
              <p className="time">10 mins ago</p>
            </div>
            <AiOutlineClose className="icon" />
          </div>

          <div className="row">
            <img src="/profilepice.png" alt="user" className="img" />
            <div className="info">
              <p className="msg">New Message</p>
              <p className="text">
                You have a new message from <span className="link">[user_name]</span>
              </p>
              <p className="time">10 mins ago</p>
            </div>
            <AiOutlineClose className="icon" />
          </div>

          <div className="row">
            <img src="/profilepice.png" alt="user" className="img" />
            <div className="info">
              <p className="msg">New Message</p>
              <p className="text">
                You have a new message from <span className="link">[user_name]</span>
              </p>
              <p className="time">10 mins ago</p>
            </div>
            <AiOutlineClose className="icon" />
          </div>

          <div className="row">
            <img src="/profilepice.png" alt="user" className="img" />
            <div className="info">
              <p className="msg">New Message</p>
              <p className="text">
                You have a new message from <span className="link">[user_name]</span>
              </p>
              <p className="time">10 mins ago</p>
            </div>
            <AiOutlineClose className="icon" />
          </div>
        </div>

        <div className="buttonborder">
          <button className="btn">View All</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;