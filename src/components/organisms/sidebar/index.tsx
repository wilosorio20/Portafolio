import Programming  from '@/components/molecules/ability'
import Language from '@/components/molecules/language'
import Profile from '@/components/molecules/profile'
import React from 'react'

const SideBar = () => {
  return (
    <div className='bg-white p-5'>
        <Profile />
        <hr className='mb-5' />
        <Language />
        <hr className='m-5' />
        <Programming />
    </div>
  )
}

export default SideBar