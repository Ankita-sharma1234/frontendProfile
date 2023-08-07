import React, { useEffect, useState } from "react";
import MSG from "../images/msg.png";
import DOWN from "../images/down.png";
import "./Profile.css";
import { Link } from "react-router-dom";

const Chatbox = ({ data }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div class="drop-up">
        <button className="btn1" onClick={() => setShow(!show)}>
          <div style={{ display: "flex" }}>
            <img
              src={MSG}
              alt="msg"
              style={{ height: "30px", width: "30px", marginTop: "3px" }}
            />
            <p className="pp1">Chats</p>
            <img
              src={DOWN}
              alt="msg"
              style={{
                height: "20px",
                width: "20px",
                marginTop: "5px",
                marginLeft: "90px",
              }}
            />
          </div>
        </button>
        {show && (
          <div className="list1">
            <ul>
              {data.map((user) => (
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "6px",
                  }}
                >
                  <img
                    src={user.profilepicture}
                    alt="img"
                    style={{
                      width: "28px",
                      height: "28px",
                      marginRight: "10px",
                      borderRadius: "50%",
                    }}
                  />
                  <Link to={`/${user.id}/profile`}>
                    <h5 style={{ fontSize: "15px", color: "black" }}>
                      {user.name}
                    </h5>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbox;
