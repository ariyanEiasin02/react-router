import React from 'react'
import { useParams, Link } from 'react-router-dom'
const Post = ({ post, handleDelete }) => {
  const { id } = useParams();
  const posts = post.find(post => (post.id).toString() === id)
  return (
    <div>
      <div className="max-w-container mx-auto">
        <article className='border-b border-b-[#d1d1d1] my-6'> 
          {posts &&
            <>
              <h2 className='font-robot font-medium text-4xl text-black'>{posts.title}</h2>
              <p className='font-robot mt-2 font-normal text-sm text-teal-500'>{posts.datetime}</p>
              <p className='w-[50%] font-robot mt-2 font-light text-base'>{posts.body}</p>
              <button className='mb-6 bg-red-500 py-3 px-4 text-white font-robot font-normal rounded-xl mt-4' onClick={() => handleDelete(posts.id)}>Delete Post</button>
            </>
          }
          {!posts && 
            <>
              <h2 className='font-robot font-medium text-4xl text-black'>Post Not Found</h2>
              <p className='font-robot mt-2 font-normal text-sm text-teal-500'>Well, that's disappoing</p>
              <button className='mb-6 bg-red-500 py-3 px-4 text-white font-robot font-normal rounded-xl mt-4'>
                <Link to="/">Visit Our Home Page</Link>
              </button>
            </>
          }
        </article>
      </div>
    </div>
  )
}

export default Post