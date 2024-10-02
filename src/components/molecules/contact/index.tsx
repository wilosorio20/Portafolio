import { TextPrincipal } from '@/components/atoms/text'
import React from 'react'

const Contact = () => {
  return (
    <div className='mx-5'>
        <div>
    <div className="flex w-full justify-between">
      <div className="flex items-start">
        <TextPrincipal text="Edad:" />
      </div>
      <div className="flex items-end">
        <TextPrincipal text="21 años" />
      </div>
    </div>
    <div className="flex w-full justify-between">
      <div className="flex items-start">
        <TextPrincipal text="Correo:" />
      </div>
      <div className="flex items-end">
        <TextPrincipal text="wilosorio04@gmail.com" />
      </div>
    </div>
    <div className="flex w-full justify-between">
      <div className="flex items-start">
        <TextPrincipal text="Ciudad:" />
      </div>
      <div className="flex items-end">
        <TextPrincipal text="Medellín, Colombia" />
      </div>
    </div>
  </div></div>
  )
}

export default Contact;

// Este componente muestra la información de contacto de una persona, incluyendo la edad, el correo electrónico y la ciudad. Cada sección está organizada en una fila con etiquetas a la izquierda y valores a la derecha, utilizando un diseño flexible para adaptarse al ancho del contenedor.