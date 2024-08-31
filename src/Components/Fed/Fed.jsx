import React from 'react'
import PostItem from '../PostItem/PostItem'

const Fed = ({post}) => {
  return (
    <div>
        {post.map(post =>(
            <PostItem key={post.id} post={post} />
        ))}
    </div>
  )
}

export default Fed