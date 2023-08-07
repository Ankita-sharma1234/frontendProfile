import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import Next from "../images/next.png";

const Sidebar = ({ id }) => {
  const [selected, setSelected] = useState("");

  const handleSelected = (str) => {
    setSelected(str);
  };
  return (
    <>
      <aside>
        <a href="javascript:void(0)">
          <Link to={`/${id}/profile`} onClick={() => handleSelected("Profile")}>
            <h2 aria-hidden="true" />
            Profile
          </Link>
        </a>
        <a href="javascript:void(0)">
          <Link to={`/${id}/post`} onClick={() => handleSelected("Post")}>
            <h2 aria-hidden="true" />
            Post
          </Link>
        </a>
        <a href="javascript:void(0)">
          <Link to={`/${id}/gallery`} onClick={() => handleSelected("Gallery")}>
            <h2 aria-hidden="true" />
            Gallery
          </Link>
        </a>
        <a href="javascript:void(0)">
          <Link to={`/${id}/todo`} onClick={() => handleSelected("Todo")}>
            <h2 aria-hidden="true" />
            ToDo
          </Link>
        </a>
      </aside>
    </>
  );
};

export default Sidebar;
