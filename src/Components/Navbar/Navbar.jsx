import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ search, setSearch }) => {
  return (
    <nav className='bg-[#333333] md:py-4 py-0'>
      <div className="max-w-container mx-auto">
        <div className="md:flex justify-between items-center md:px-0 px-4">
          <form className='md:w-2/4 w-full md:pt-0 pt-6' action="" onSubmit={(e) => e.preventDefault()}>
            <input className='w-full border py-2 px-4 font-robot font-light text-black rounded-lg' type="text"
              required
              placeholder='Search Posts'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
          <ul className='md:w-2/4 py-3 flex md:justify-end'>
            <li className=''>
              <Link className='rounded-md py-3 px-4 text-white font-robot font-normal hover:bg-slate-600' to="/">Home</Link>
            </li>
            <li>
              <Link className='rounded-md py-3 px-4 text-white font-robot font-normal hover:bg-slate-600' to="/post">Post</Link>
            </li>
            <li>
              <Link className='rounded-md py-3 px-4 text-white font-robot font-normal hover:bg-slate-600' to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar