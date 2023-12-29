//React
import React from 'react'


import AvatarProfile from '../../Objects/AvatarProfile';

//Imgs
import Profile from '../../img/Foto Perfil.jpg'


const ProfileUser = () => {

  return (

    <dl>
        <dd><AvatarProfile src = {Profile} alt = "Foto de Perfil Wesley Santos"/></dd>
        <dt>Wesley Santos</dt>
        <dd>Estudante de Engenharia de computação motivado, com experiência e foco na área de programação. Oferecendo conhecimentos básicos em HTML, CSS, Javascript e bibliotecas como React, com aptidão em inglês intermediário. Programador energético, coletivo e comunicativo, capaz de navegar e explorar novas áreas a fim de sempre querer mais experiência e aprendizado.</dd>
    </dl>

  )
}

export default ProfileUser;