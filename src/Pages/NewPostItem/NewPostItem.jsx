import React from 'react'

const NewPostItem = ({postTitle,setPostTitle,postBody,setPostBody,handleSubmit}) => {
  return (
    <div>
        <div className="max-w-container mx-auto py-4 px-4 md:px-0">
           <h2 className='font-robot font-medium text-4xl text-black'>New Post</h2>
           <form className='mt-4' action="" onSubmit={handleSubmit}>
            <label className='block font-robot py-2 font-normal text-xl text-black' htmlFor="">Title : </label>
            <input className='w-full border py-2 px-4 font-robot font-light text-black rounded-lg' type="text" required value={postTitle} onChange={(e)=> setPostTitle(e.target.value)} />
            <label className='font-robot py-2 block font-normal text-xl text-black' htmlFor="">Post : </label>
            <textarea className='w-full h-36 border py-2 px-4 font-robot font-light text-black rounded-lg' required value={postBody} onChange={(e)=> setPostBody(e.target.value)} name="" id=""></textarea>

            <button type='submit' className='mt-6 bg-[#d1d1d1] w-full border border-black py-2 px-4 font-robot font-light text-black rounded-lg'>Submit</button>
           </form>
        </div>
    </div>
  )
}

export default NewPostItem