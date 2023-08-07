import React, { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import FrontePage from './First/FrontePage'
import Profile from './Second/Profile';
import Gallery from './Second/Gallery';
import Post from './Second/Post';
import Todo from './Second/Todo';
import List from './First/FrontePage';
import Sidebar from './Second/Sidebar';
import axios from "axios";



function App() {
    const [userList, setUserlist] = useState([]);
  
    useEffect(() => {
      axios.get("https://panorbit.in/api/users.json").then((response) => {
        setUserlist(response.data.users);
      });
    }, []);
  
    return (
      <>
      <Routes>
        <Route path="/" element={<List data={userList} />} />
        <Route path="/:id/profile" element={<Profile data={userList} />} />
        <Route path="/:id/post" element={<Post data={userList} />} />
        <Route path="/:id/gallery" element={<Gallery data={userList} />} />
        <Route path="/:id/todo" element={<Todo e data={userList} />} />
        <Route path='/sidebar' element={<Sidebar/>}></Route>
      </Routes>
      </>
    );
  }
  

export default App