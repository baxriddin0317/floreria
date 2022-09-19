import React from 'react'

const Border = ({children}) => {
  return (
    <div className='bg-linear pb-px mb-5'>
        <div className='bg-white pb-4'>
          {children}
        </div>
    </div>
  )
}

export default Border
