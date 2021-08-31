import React from 'react';
import {Link} from 'react-router-dom';

function Nav(){
    return(
        <nav>
            <div className="topnav">
                {/* use class active for the active page*/}
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/emojies'><li>Emojies</li></Link>
                    <Link to='/about'><li>About</li></Link>
                </ul>
            </div>
        </nav>
    );
}
export default Nav;