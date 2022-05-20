import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import logo from "../../../images/logo.png"
const About = () => {
  const visitLocation = () => {
    window.location = "https://goo.gl/maps/AX9KLNAUxmQvKvGZ7";
  };
  return (
    <div className="aboutSection">
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={logo}
              alt="logo"
            />
            <Typography style={{color:"black"}}>Address:</Typography>
            <br/>
            <span>
              D6 Ashifa's New Civil Nagar Palakkad 678001
            </span>
            <br/>
            <Button onClick={visitLocation} color="primary" id="instaBtn">
              Locate us
            </Button>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Follow us</Typography>
            <a
              href="https://www.youtube.com/channel/UCXs_k3Jz8J3fbwgvnKhI9Aw"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/leaves_and_stitches" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
