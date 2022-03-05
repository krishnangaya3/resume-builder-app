import React from 'react';

import {Link} from 'react-router-dom';
import './Header.css';






export default function Header() {
    

    return (
        
            // <div className='header'>
            //     <nav className='nav'>
            //         <h1 className='logo'> Article Blog</h1>
            //         <div className='art' >
            //             <Link className='articles' to="/">Home</Link>

            //             {/* <Link className='articles'  to="/articlelist" >Articles</Link>
            //          <Link className='articles' to="/addarticle">AddArticles</Link> */}
            //             <Link className='articles' to="/signup">SignUp</Link>
            //             <Link className='articles' to="/login">Login</Link>
            //         </div>
            //     </nav>

            // </div> 
        <nav class="navbar fixed-top  navbar-light bg-light">
            <a class="navbar-brand" href="/">Resume Builder</a>
           

            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <a class="nav-link active" href="/signup">SignUp</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/signin">SignIn</a>
                </li>
                {/* <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li> */}
                
            </ul>
        </nav>
      
  
    );
  }
