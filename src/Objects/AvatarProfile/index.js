import React from 'react';
import './styles.css';

const AvatarProfile  = ( {src , alt}) => (
    <img className = "avatar-profile"src = {src} alt = {alt} width="320" height="320"></img>
)


export default AvatarProfile;