import "./sidebar.css";
import { Link } from "react-router-dom";
import {
  LineStyle,
  PermIdentity,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  
} from "@material-ui/icons";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
          <Link to="/admin"  className="link">
            <li className="sidebarListItem active">
            <LineStyle className="sidebarIcon" />
            Home
            </li>
            </Link>
            </ul>
        </div>
     
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
          <Link to="/users"  className="link">
            <li className="sidebarListItem">
            <PermIdentity className="sidebarIcon" />
            Users
            </li>
            </Link>
            
          </ul>
        </div>
     
     
     
      </div>
    </div>
  );
};

export default Sidebar;
