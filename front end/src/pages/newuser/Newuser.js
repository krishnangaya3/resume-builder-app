import React from "react";

import {
  Sidebar,
  NewUser,
  Navbar,
} from "../../components";
import "./newuser.css";

function NewuserPage() {
  return (
       <div className="pageContainer">
      <Navbar />
      <div className="container">
        <Sidebar />
        
          <NewUser />
        </div>
        </div>
  )
}

export default NewuserPage;
