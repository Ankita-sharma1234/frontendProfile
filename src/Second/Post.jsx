import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useParams, Link } from "react-router-dom";

const Post= ({ data }) => {
  const { id } = useParams();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    let Data = data?.filter((user) => user.id == id);
    setUserData(Data[0]);
  }, []);
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div style={{ marginTop: "40px" }}>
        <Sidebar id={id} />
      </div>
      <div className="box2">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3 style={{ color: "grey" }}>Gallery</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "200px",
            }}
          >
            <div className="dropdown">
              <img
                src={userData.profilepicture}
                alt="Cinque Terre"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  marginTop: "20px",
                }}
              />
              <div className="dropdown-content">
                <img
                  src={userData.profilepicture}
                  alt="Cinque Terre"
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    marginTop: "20px",
                  }}
                />
                <h5>{userData.name}</h5>
                <h5 style={{ color: "grey" }}>{userData.email}</h5>
                <hr style={{ backgroundColor: "grey", marginLeft: "20px" }} />

                {/* <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    display: "flex",
                    marginLeft: "50px",
                  }}
                >
                  <img
                    src={userData.profilepicture}
                    alt="Cinque Terre"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "14px",
                      marginLeft: "10px",
                      marginTop: "5px",
                    }}
                  >
                    Clementine Bauch
                  </p>
                </Link>
                <hr style={{ backgroundColor: "grey", marginLeft: "20px" }} />

                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    display: "flex",
                    marginLeft: "50px",
                  }}
                >
                  <img
                    src={userData.profilepicture}
                    alt="Cinque Terre"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "14px",
                      marginLeft: "10px",
                      marginTop: "5px",
                    }}
                  >
                    Clementine Bauch
                  </p>
                </Link> */}
                <Link to="/">
                  <button
                    style={{
                      backgroundColor: "tomato",
                      color: "#fff",
                      border: "1px solid tomato",
                      borderRadius: "15px 15px",
                      width: "80px",
                      height: "35px",
                      paddingTop: "8px",
                    }}
                  >
                    <h6>Sign Out</h6>
                  </button>{" "}
                </Link>
              </div>
            </div>

            <h5 style={{ marginTop: "10px" }}>{userData.name}</h5>
          </div>
        </div>
        <hr style={{ backgroundColor: "black", width: "100%" }} />
        <div className="container">
          <h1 className="hed"> Coming Soon </h1>
        </div>
      </div>
    </div>
  );
};

export default Post;
