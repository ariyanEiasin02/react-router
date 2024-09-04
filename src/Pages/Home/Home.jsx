import React from 'react'
import Feed from '../../Components/Feed/Feed'
const Home = ({posts}) => {
  return (
    <main className='max-w-container mx-auto px-4 md:px-0'>
      {posts.length ?(
        <Feed posts={posts} />
      ):(
        <p className='md:px-0 px-4 my-2 text-2xl font-robot font-normal'>No Posts to Display</p>
      )}
    </main>
  )
}

export default Home