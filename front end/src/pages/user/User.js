import {
  Sidebar,
  User,
  Navbar,
} from "../../components";
import "./user.css";

function Userpage() {
  return (
       <div className="pageContainer">
      <Navbar />
      <div className="container">
        <Sidebar />
        
          <User />
        </div>
        </div>
  )
}

export default Userpage;
