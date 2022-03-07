import {
  Sidebar,
  User,
  Navbar,
} from "../../components";
import "./user.css";

function Userpage() {
  return (
       <>
      <Navbar />
      <div className="container">
        <Sidebar />
        
          <User />
        </div>
        </>
  )
}

export default Userpage;
