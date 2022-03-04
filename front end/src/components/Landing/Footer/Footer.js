import React from 'react';



import './Footer.css'


function Footer() {

    var year=new Date().getFullYear();
    return (
        <div className="footer">
            
            <p>Copyright © {year} | Resume Builder</p>
            

        </div>
    )
}

export default Footer
