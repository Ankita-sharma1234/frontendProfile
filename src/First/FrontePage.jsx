
////////////////////////////////////////
import React from "react";
import "./Font.css";
import { Link } from "react-router-dom";

const List = ({ data }) => {
  return (
    <div>
      <div className="back">
        <div
          style={{
            position: "absolute",
            background: "#fff",
            width: "40vw",
            borderRadius: "30px",
            boxShadow: "5px 5px 5px 5px #8080804b",
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              padding: "30px",
              background: "#80808033",
              fontWeight: " 600",
              borderTopLeftRadius: "30px",
              borderTopRightRadius: "30px",
            }}
          >
            <h5 style={{ fontWeight: "500" }}>
              <b>Select an account</b>
            </h5>
          </div>
          <div>
            <ul
              style={{
                listStyle: "none",
                padding: "2rem",
                overflowY: "scroll",
                height: "60vh",
                borderBottomLeftRadius: "30px",
                borderBottomRightRadius: "30px",
              }}
            >
              {data.map((user) => (
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: "1px solid #80808033",
                    padding: "10px",
                  }}
                >
                  <img
                    src={user.profilepicture}
                    alt="img"
                    style={{
                      width: "40px",
                      height: "40px",
                      marginRight: "10px",
                      borderRadius: "50%",
                    }}
                  />
                 
                  <Link to={`/${user.id}/profile`} style={{textDecoration:"none",color:"black"}}>
                    <h5 style={{ marginBottom: "0", fontSize: "18px" }}>
                      {user.name}
                    </h5>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;

