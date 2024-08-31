import Header from "./Components/Header/Header"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Post from "./Pages/Post/Post"
import Missing from "./Pages/Missing/Missing"
import { Routes, Route, useNavigate} from 'react-router-dom'
import { useState,useEffect } from "react"
import NewPostItem from "./Pages/NewPostItem/NewPostItem"
import {format} from 'date-fns'

function App() {
  const navigate = useNavigate();
  const [post,setPost] = useState([
    {
      id : 1,
      title : "My First Post",
      datetime : "July 1 , 2021 11:17:36 Am",
      body :"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea voluptates temporibus saepe distinctio exercitationem eveniet nesciunt? Fugit non amet laborum."
    },
    {
      id : 2,
      title : "My 2nd Post",
      datetime : "July 1 , 2021 11:17:36 Am",
      body :"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea voluptates temporibus saepe distinctio exercitationem eveniet nesciunt? Fugit non amet laborum."
    },
    {
      id : 3,
      title : "My 3nd Post",
      datetime : "July 1 , 2021 11:17:36 Am",
      body :"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea voluptates temporibus saepe distinctio exercitationem eveniet nesciunt? Fugit non amet laborum."
    },
    {
      id : 4,
      title : "My 4nd Post",
      datetime : "July 1 , 2021 11:17:36 Am",
      body :"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea voluptates temporibus saepe distinctio exercitationem eveniet nesciunt? Fugit non amet laborum."
    },
  ])
  const [search,SetSearch] = useState("")
  const [searchResults,setSearchResults] = useState('')
  const [postTitle,setPostTitle] = useState('')
  const [postBody,setPostBody] = useState('')
  const handleSubmit = (e)=>{
    e.preventDefault()
    const id = post.length ? post[post.length -1].id +1 : 1;
    const datetime = format(new Date, 'MMMM dd, yyyy pp');
    const newPost = {id,title: postTitle,datetime,body:postBody}
    const allPost =[...post,newPost]
    setPost(allPost)
    setPostTitle("")
    setPostBody("")
    navigate("/")
  }

  useEffect(()=>{
    const fillteredResult = post.filter(post => ((post.body).toLowerCase()).includes(search.toLowerCase())
    || ((post.title).toLowerCase()).includes(search.toLowerCase()));

    setSearchResults(fillteredResult.reverse())
  },[post,search])

  const handleDelete = (id)=>{
   const postlist = post.filter(post => post.id !== id)
   setPost(postlist)
   navigate('/')
  }
  return (
    <>
        <Header title="React JS Blog" />
        <Navbar search={search} setSearch={SetSearch} />
        <Routes>
          <Route exact path='/' element={
            <Home post={searchResults}/>}
          />
          <Route path='/about' element={
            <About />}
          />
          <Route path='/post' element={
            <NewPostItem 
              handleSubmit={handleSubmit}
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
            />}
          />
          <Route path='/post/:id' element={
            <Post post={post} handleDelete={handleDelete} />}
          />
          <Route path='*' element={
            <Missing />}
          />
        </Routes>
        <Footer />
    </>
  )
}

export default App
