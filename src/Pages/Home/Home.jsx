import React from 'react'
import Fed from '../../Components/Fed/Fed'
const Home = ({post}) => {
  return (
    <main className='h-96'>
      {post.length ?(
        <Fed post={post} />
      ):(
        <p className='text-2xl font-robot font-normal'>No Posts to Display</p>
      )}
    </main>
  )
}

export default Home