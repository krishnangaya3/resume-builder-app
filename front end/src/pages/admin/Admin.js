import React from "react";

import {
  Sidebar,
  Home,
  Navbar,
} from "../../components";
import "./admin.css";

function Admin() {
  return (
       <div className="pageContainer">
      <Navbar />
      <div className="container">
        <Sidebar />
        
          <Home />
        </div>
        </div>
  )
}

export default Admin;
