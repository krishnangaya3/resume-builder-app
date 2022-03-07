import React from "react";

import {
  Sidebar,
  UserList,
  Navbar,
} from "../../components";
import "./userlist.css";

function Userlistpage() {
  return (
       <div className="pageContainer">
      <Navbar />
      <div className="container">
        <Sidebar />
        
          <UserList />
        </div>
        </div>
  )
}

export default Userlistpage;
