 import React from 'react'

const AuthHeader = (props) => {
  return (
    <>
    <div className='flex mb-4'>
        <img src='/logo.png'></img>
        <p className='text-[#6C5DD3] font-bold m-2'>LOGO</p>
    </div>
    <div className='mb-4'>
        <h2 className='font-bold text-2xl p-1'>{props.heading}</h2>
        <p className='text-sm leading-tight'>{props.subhead}</p>
    </div>
    </>
  )
}

export default AuthHeader