import React from 'react'
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
const EditPost = ({ posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle }) => {
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);

    useEffect(() => {
        if (!post) {
            setEditTitle(post.title)
            setEditBody(post.body)
        }
    }, [post, setEditBody, setEditTitle])
    return (
        <div>
            <div className="max-w-container mx-auto py-4 px-4 md:px-0">
                {editTitle &&
                    <>
                        <h2 className='font-robot font-medium text-4xl text-black'>Edit Post</h2>
                        <form className='mt-4' action="" onSubmit={(e) => e.preventDefault()}>
                            <label className='block font-robot py-2 font-normal text-xl text-black' htmlFor="">Title : </label>
                            <input className='w-full border py-2 px-4 font-robot font-light text-black rounded-lg' type="text" required value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                            <label className='font-robot py-2 block font-normal text-xl text-black' htmlFor="">Post : </label>
                            <textarea className='w-full h-36 border py-2 px-4 font-robot font-light text-black rounded-lg' required value={editBody} onChange={(e) => setEditBody(e.target.value)} name="" id=""></textarea>

                            <button onClick={() => handleEdit(post.id)} type='submit' className='mt-6 bg-[#d1d1d1] w-full border border-black py-2 px-4 font-robot font-light text-black rounded-lg'>Submit</button>
                        </form>
                    </>
                }
                {!editTitle &&
                    <>
                        <h2 className='font-robot font-medium text-4xl text-black'>Post Not Found</h2>
                        <p className='font-robot mt-2 font-normal text-sm text-teal-500'>Well, that's disappoing</p>
                        <button className='mb-6 bg-red-500 py-3 px-4 text-white font-robot font-normal rounded-xl mt-4'>
                            <Link to="/">Visit Our Home Page</Link>
                        </button>
                    </>
                }
            </div>
        </div>
    )
}

export default EditPost