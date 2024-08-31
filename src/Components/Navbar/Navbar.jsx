import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ search, setSearch }) => {
  return (
    <nav className='bg-[#333333] py-4'>
      <div className="max-w-container mx-auto">
        <div className="flex justify-between items-center">
          <form className='w-2/4' action="" onSubmit={(e) => e.preventDefault()}>
            <input className='w-full border py-2 px-4 font-robot font-light text-black rounded-lg' type="text"
              required
              placeholder='Search Posts'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
          <ul className='w-2/4 flex justify-end gap-x-10'>
            <li className='text-white font-robot font-normal'>
              <Link to="/">Home</Link>
            </li>
            <li className='text-white font-robot font-normal'>
              <Link to="/post">Post</Link>
            </li>
            <li className='text-white font-robot font-normal'>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar