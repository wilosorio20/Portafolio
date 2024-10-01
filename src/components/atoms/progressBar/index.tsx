import React from 'react'
import { TextPrincipal } from '../text'

const progressBar = ({text, progress}: {text: string, progress: string}) => {
  return (
    <div className='mb-4'>
       <div className='flex justify-between mb-1'>
        <TextPrincipal text={text} />
        <TextPrincipal text={progress + '%'} />
        </div>
        <div className='w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700'>
            <div className='bg-primary h-1.5 rounded-full' style={{width: `${progress}%`}}>
            </div>
        </div> 
    </div>
  )
}

export default progressBar