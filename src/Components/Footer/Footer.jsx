import React from 'react'

const Footer = () => {
  const today = new Date();
  return (
    <div className='bg-teal-500 py-4 fixed w-full bottom-0 left-0'>
        <div className="max-w-container mx-auto">
        <p className='text-white text-center font-robot font-medium text-xl'>Copyright &copy;{today.getFullYear()}</p>
        </div>
    </div>
  )
}

export default Footer