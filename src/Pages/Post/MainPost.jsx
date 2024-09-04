import React from 'react'
import { useParams, Link } from 'react-router-dom'
const MainPost = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find(post => {
    if (!post || !post.id) {

      return false;
    }
    return post.id.toString() === id;
  });
  
  return (
    <div>
      <div className="max-w-container mx-auto px-4 md:px-0">
        <article className='border-b border-b-[#d1d1d1] my-6'> 
          {post &&
            <>
              <h2 className='font-robot font-medium text-4xl text-black'>{post.title}</h2>
              <p className='font-robot mt-2 font-normal text-sm text-teal-500'>{post.datetime}</p>
              <p className='w-[50%] font-robot mt-2 font-light text-base'>{post.body}</p>
              <Link to={`/edit/${post.id}`}><button className='mb-6 bg-green-500 py-3 px-4 text-white font-robot font-normal rounded-xl mt-4'>Edit Post</button></Link>
              <button className='mb-6 bg-red-500 py-3 px-4 text-white font-robot font-normal rounded-xl mt-4' onClick={() => handleDelete(post.id)}>Delete Post</button>
            </>
          }
          {!post && 
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

export default MainPost