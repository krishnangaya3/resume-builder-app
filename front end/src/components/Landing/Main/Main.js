import { Button } from '@material-ui/core'
import React from 'react';
import { useHistory } from "react-router-dom";

import './Main.css';





function Main() {
  let history = useHistory();

  function handleClick() {
    history.push("/create");
  }
  
    return (
        <div className="main">
            
            <div className="main-container">
                <div className="main-description">
                    <h1>Build your brand-new resume in as little as 5 minutes.</h1>
                    <p>Try it for free.</p>
                    <Button onClick={handleClick}>Create Resume</Button>
                </div>
                
            </div>  
                       
        </div>
    )
}

export default Main
