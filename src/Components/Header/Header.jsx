import React from 'react'

const Header = ({ title }) => {
  return (
    <div className='bg-[#4CA5C3] py-4'>
      <div className="max-w-container mx-auto">
        <h2 className='font-robot text-3xl text-white font-medium uppercase'>{title}</h2>
      </div>
    </div>
  )
}

export default Header