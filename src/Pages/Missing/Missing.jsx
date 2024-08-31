import React from 'react'
import { Link } from 'react-router-dom'

const Mising = () => {
  return (
    <main className='py-6'>
      <div className="max-w-container mx-auto">
        <h2 className='font-robot font-medium text-4xl text-black'>Post Not Found</h2>
        <p className='font-robot mt-2 font-normal text-sm text-teal-500'>Well, that's disappoing</p>
        <button className='mb-6 bg-red-500 py-3 px-4 text-white font-robot font-normal rounded-xl mt-4'>
          <Link to="/">Visit Our Home Page</Link>
        </button>

      </div>
    </main>
  )
}

export default Mising