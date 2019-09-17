import React from 'react';
import './styles/FollowUs.css'; 
import {  Image } from 'react-bootstrap';
import logo_facebook from '../images/logo_facebook.webp';
import logo_twitter from '../images/logo_twitter.webp';
import logo_youtube from '../images/logo_youtube.webp';
import logo_microphone from '../images/logo_microphone.webp';
import logo_instagram from '../images/logo_instagram.webp';


function FollowUs(props){
    return (
        <React.Fragment>
            <h1 className="FollowTitle d-none d-md-block">¡Seguinos!</h1>
            <a target="_blank" href="https://www.facebook.com/ElTablonQac/"><Image src={logo_facebook}></Image></a>
            <a target="_blank" href="https://twitter.com/ElTablonQac"><Image src={logo_twitter}></Image></a>
            <a target="_blank" href="https://www.instagram.com/eltablonqac/"><Image src={logo_instagram}></Image></a>
            <a target="_blank" href="https://www.youtube.com/eltablonqac"><Image src={logo_youtube}></Image></a>
            <a target="_blank" href="https://fm961radioplus.com/"><Image src={logo_microphone}></Image></a>
        </React.Fragment>
    )
}

export default FollowUs;

