import React from "react";

import {
  Sidebar,
  UserList,
  Navbar,
} from "../../components";
import "./userlist.css";

function Userlistpage() {
  return (
       <>
      <Navbar />
      <div className="container">
        <Sidebar />
        
          <UserList />
        </div>
        </>
  )
}

export default Userlistpage;
