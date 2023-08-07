import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import "./Profile.css";
///////////////image/////////////////////////////
import map from "./map.png";
import { Link, useParams } from "react-router-dom";
// ////////////redux//////////////////////////
import Chatbox from "./Chatbox";

function Profile({ data }) {
  const { id } = useParams();
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const filteredData = data?.filter((user) => user.id === Number(id));
        if (filteredData.length > 0) {
          setUserData(filteredData[0]);
          setLoading(false);
        } else {
          setLoading(false);
          
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [data, id]);


  return (
    <div style={{ display: "flex", marginLeft: "30px" }}>
      <div>
        <Sidebar id={id} />
      </div>
      {!loading && Object.keys(userData).length !== 0 && (
        <div className="box2">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3 style={{ color: "grey" }}>Profile</h3>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="dropdown">
                <img
                  src={userData.profilepicture}
                  alt=""
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
                    alt=""
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      marginLeft: "5px",
                    }}
                  />
                  <h5>{userData.name}</h5>
                  <h5 style={{ color: "gray" }}>{userData.email}</h5>
                  <hr />
                  {/* <div
                    style={{ display: "flex", marginLeft: "30px", gap: "3vh" }}
                  >
                    <img
                      src={userData.profilepicture}
                      alt=""
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        
                      }}
                    />
                    <h6 style={{ marginTop: "5px" }}>Clementine Bauch</h6>
                  </div> */}
                  {/* <hr /> */}
                  {/* <div
                    style={{ display: "flex", marginLeft: "30px", gap: "3vh" }}
                  >
                    <img
                      src={userData.profilepicture}
                      alt=""
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        // marginRight: "20vh",
                      }}
                    />
                    <h6 style={{ marginTop: "5px" }}>Clementine Bauch</h6>
                  </div> */}
                  <Link to="/">
                    <button
                      style={{
                        backgroundColor: "tomato",
                        color: "#fff",
                        width: "80px",
                        height: "30px",
                        borderColor: "tomato",
                        marginTop: "20px",
                        borderRadius: "15px",
                      }}
                    >
                      Sign Out
                    </button>
                  </Link>
                </div>
              
              </div>
              <h4 style={{ marginTop: "10px" }}>{userData.name}</h4>
            </div>
          </div>
          <hr />
          <div className="container" style={{ display: "flex" }}>
            <div style={{ borderRight: "1px solid black" }}>
              <img
                src={userData.profilepicture}
                alt=""
                style={{
                  width: "200px",
                  height: "200px",
                  marginLeft: "50px",
                  borderRadius: "100px",
                }}
              />
              <h3 style={{ marginLeft: "50px" }}>{userData.name}</h3>
              <ul
                style={{
                  listStyle: "none",
                  color: "gray",
                  marginTop: "10px",
                }}
              >
                <li>
                  Username :{" "}
                  <span style={{ color: "black" }}>{userData.username}</span>
                </li>
                <li>
                  e-mail :{" "}
                  <span style={{ color: "black" }}>{userData.email}</span>
                </li>
                <li>
                  Phone :{" "}
                  <span style={{ color: "black" }}>{userData.phone}</span>
                </li>
                <li>
                  Website :{" "}
                  <span style={{ color: "black" }}>{userData.website}</span>
                </li>
                <hr />
                <h4 style={{ marginLeft: "7vh" }}>Company</h4>
                <li>
                  Name :
                  <span style={{ color: "black" }}>
                    {" "}
                    {userData.company.name}
                  </span>
                </li>
                <li>
                  catchphrase :
                  <span style={{ color: "black" }}>
                    {" "}
                    {userData.company.catchPhrase}
                  </span>
                </li>
                <li>
                  Name :
                  <span style={{ color: "black" }}> {userData.company.bs}</span>
                </li>
              </ul>
            </div>
            <div style={{ display: "block" }}>
              <h4 style={{ color: "gray", marginLeft: "50px" }}>Address:</h4>
              <ul
                style={{ listStyle: "none", color: "grey", marginLeft: "50px" }}
              >
                <li>
                  Street :{" "}
                  <span style={{ color: "black" }}>
                    {userData.address.street}
                  </span>
                </li>
                <li>
                  Suite :{" "}
                  <span style={{ color: "black" }}>
                    {userData.address.suite}
                  </span>
                </li>
                <li>
                  City :{" "}
                  <span style={{ color: "black" }}>
                    {userData.address.city}
                  </span>
                </li>
                <li>
                  Zipcode :{" "}
                  <span style={{ color: "black" }}>
                    {userData.address.zipcode}
                  </span>
                </li>
                <li>
                  <img
                    src={map}
                    alt=""
                    style={{
                      height: "40vh",
                      width: "60vh",
                      borderRadius: "20px",
                    }}
                  />
                </li>
                <div
                  style={{
                    display: "flex",
                    gap: "25px",
                    justifyContent: "end",
                  }}
                >
                  <li>
                    Lat :{" "}
                    <span style={{ color: "black" }}>
                      {userData.address.geo.lat}
                    </span>
                  </li>
                  <li>
                    Lng :{" "}
                    <span style={{ color: "black" }}>
                      {userData.address.geo.lng}
                    </span>
                  </li>
                </div>
              </ul>
              <div style={{ bottom: "16px",position:"fixed",right:"70px" }}>
                <Chatbox data={data} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
