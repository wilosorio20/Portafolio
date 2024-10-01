import { TextPrincipal } from '@/components/atoms/text'
import Programming  from '@/components/molecules/ability'
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
      </div>
        <hr className='m-5 ' />
        <Language />
        <hr className='m-5' />
        <Programming />
    </div>
  )
}

export default SideBar