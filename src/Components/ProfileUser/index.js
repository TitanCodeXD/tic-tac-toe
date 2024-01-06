//React
import React from 'react'

//
import AvatarProfile from '../../Objects/AvatarProfile';
import IconSocial from '../../Objects/IconSocial';

//Imgs
import Profile from '../../img/Foto Perfil.jpg';
import GitHub from '../../img/GitHub Icon.png';
import Linkedin from '../../img/Linkedin Icon.png';
import Twitter from '../../img/Twitter Icon.png';
import Instagram from '../../img/Instagram Icon.png';

//CSS
import './styles.css';

const ProfileUser = () => {

  return (

    <dl className = 'profile-user'>
        <dd className = 'avatar'><AvatarProfile src = {Profile} alt = "Foto de Perfil Wesley Santos"/></dd>
        <dt className = 'title'>Wesley Santos</dt>
        <dd className = 'description'>Estudante de Engenharia de computação com conhecimentos em HTML, CSS, Javascript e bibliotecas como React, com aptidão em inglês intermediário. "Eat, Sleep, Code, Repeat".</dd>
        <dd className = "socials">
          <IconSocial src = {GitHub} alt = "Logo da GitHub"/>
          <IconSocial src = {Linkedin} alt = "Logo do Linkedin"/>
          <IconSocial src = {Twitter} alt = "Logo do Twitter"/>
          <IconSocial src = {Instagram} alt = "Logo do Instagram"/>
        </dd>
    </dl>

  )
}

export default ProfileUser;