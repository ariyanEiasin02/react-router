import React from 'react'
import { Link } from 'react-router-dom'

const PostItem = ({ post }) => {
    return (
        <article className='border-b border-b-[#d1d1d1 py-4'>
            <div className="max-w-container mx-auto">
                <Link to={`/post/${post.id}`}>
                    <h2 className='font-robot font-medium text-4xl text-black'>{post.title}</h2>
                    <p className='font-robot mt-2 font-normal text-sm text-teal-500'>{post.datetime}</p>
                </Link>
                <p className='font-robot mt-2 font-light text-base'>
                    {
                        (post.body).length <= 25 ?
                        post.body :
                        `${(post.body).slice(0, 25)}.......`
                    }
                </p>
            </div>
        </article>
    )
}

export default PostItem