import React from "react";

import {
  Sidebar,
  Home,
  Navbar,
} from "../../components";
import "./admin.css";

function Admin() {
  return (
       <>
      <Navbar />
      <div className="container">
        <Sidebar />
        
          <Home />
        </div>
        </>
  )
}

export default Admin;
