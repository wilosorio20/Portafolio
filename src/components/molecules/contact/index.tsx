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

export default Contact