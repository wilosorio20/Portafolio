
import Programming  from '@/components/molecules/ability'
import Contact from '@/components/molecules/contact'
import Language from '@/components/molecules/language'
import Profile from '@/components/molecules/profile'
import React from 'react'

const SideBar = () => {
  return (
    <div className='bg-white p-5'>
        <div className="sticky top-0 bg-white">
        <Profile />
      </div>
      <hr className="m-5 mt-0" />
        <Contact />
        <hr className='m-5 ' />
        <Language />
        <hr className='m-5' />
        <Programming />
    </div>
  )
}

export default SideBar;

// Este componente SideBar se encarga de renderizar una barra lateral en la interfaz. 
// Contiene componentes como Profile, Contact, Language y Programming, 
// que muestran información relevante sobre el usuario. 
// La barra es "sticky", lo que significa que se mantendrá visible en la parte superior 
// de la pantalla mientras se desplaza el contenido.