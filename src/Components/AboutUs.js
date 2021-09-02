import React, { Component } from 'react';
import '../Styles/AboutUs.css';
import alan from '../images/alan.jpeg';
import greg from '../images/greg.jpeg';
import pete from '../images/pete.png';
import paul from '../images/paul.jpg';
import tanner from '../images/tanner.png';

class AboutUs extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <h1>The Development Team:</h1>
                <div className="profile">
                    <img src={pete} alt="pete"/>
                    <p>My name is Pete. I'm a software developer in Portland, Oregon.  I enjoy disc golf and lounging with my cats. My favorite thing about saving money is having it around to do fun stuff at a later date.</p>
                </div>
                <div className="profile">
                    <img src={paul} alt="paul"/>
                    <p>Hey I'm Paul. I'm a software developer interested in the potential for technology to work with and augment human intelligence rather than replace it. My favorite sport is mountain running and my favorite food is hashbrowns.</p>
                </div>            
                <div className="profile">
                    <img src={alan} alt="alan"/>
                    <p>My name is Alan, and I’m a software engineer based in the Portland metropolitan region.  I enjoy chai, metacinema, and the haunting call of loons in the gloaming.  My favorite method to save money is to sock it away in a dirty mattress within my van down by the river.</p>
                </div>
                <div className="profile">
                    <img src={greg} alt="greg"/>
                    <p>Hey there, I’m Greg - a software developer in Portland, OR. I enjoy time outdoors, my dog and spending money I don’t have. Saving money doesn’t come easily for me.</p>
                </div>
                <div className="profile">
                    <img src={tanner} alt="tanner"/>
                    <p>Hi I'm Tanner. I'm a full stack software developer who enjoys both sides of the engineering field. I would love to work wherever I can fill a niche in my future career. My favorite technique for saving money is investing left over change into cryptocurrency.</p>
                </div>
            </>
         );
    }
}
 
export default AboutUs;