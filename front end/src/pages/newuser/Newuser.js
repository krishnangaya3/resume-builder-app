import React from "react";

import {
  Sidebar,
  NewUser,
  Navbar,
} from "../../components";
import "./newuser.css";

function NewuserPage() {
  return (
       <>
      <Navbar />
      <div className="container">
        <Sidebar />
        
          <NewUser />
        </div>
        </>
  )
}

export default NewuserPage;
