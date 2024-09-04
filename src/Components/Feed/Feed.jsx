import React from 'react'
import PostItem from '../PostItem/PostItem'

const Feed = ({posts}) => {
  return (
    <div>
        {posts.map(post =>(
            <PostItem key={post.id} post={post} />
        ))}
    </div>
  )
}

export default Feed