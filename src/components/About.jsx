import React from 'react';
import MyImage from './assets/me.jpg';

function About(){
    return(
        <main>
            <div className='title'>
                <h1>About <meta http-equiv="X-UA-Compatible" content="IE=7" /></h1>
                <hr/>
            </div> 
            <br/><br/>
            <div className='container-about'>
                <img className='my-image'src={MyImage} alt='Matan Baruch'/>
                <p>Hey! My name is Matan Baruch and I am from Israel.<br/>
                    I created this react project to enrich my knowledge about
                    react, to build and create sites from Api's around the web.
                    This is my first ever made site, and I wish to improve my knowledge
                    to build better sites.
                </p>
            </div>
        </main>
    );
}

export default About;