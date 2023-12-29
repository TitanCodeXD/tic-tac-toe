//React
import React from 'react'

//
import AvatarProfile from '../../Objects/AvatarProfile';

//Imgs
import Profile from '../../img/Foto Perfil.jpg'

//CSS
import './styles.css';

const ProfileUser = () => {

  return (

    <dl className = 'profile-user'>
        <dd className = 'avatar'><AvatarProfile src = {Profile} alt = "Foto de Perfil Wesley Santos"/></dd>
        <dt className = 'title'>Wesley Santos</dt>
        <dd className = 'description'>Estudante de Engenharia de computação com conhecimentos em HTML, CSS, Javascript e bibliotecas como React, com aptidão em inglês intermediário. "Eat, Sleep, Code, Repeat".</dd>
    </dl>

  )
}

export default ProfileUser;