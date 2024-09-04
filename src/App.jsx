import Header from "./Components/Header/Header"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Missing from "./Pages/Missing/Missing"
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react"
import NewPostItem from "./Pages/NewPostItem/NewPostItem"
import { format } from 'date-fns'
import MainPost from "./Pages/Post/MainPost"
import api from './api/posts'
import EditPost from "./Components/EditPost/EditPost"

function App() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([])
  const [search, SetSearch] = useState("")
  const [searchResults, setSearchResults] = useState('')
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const [editTitle, setEditTitle] = useState('')
  const [editBody, setEditBody] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date, 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody }
    try {
      const response = await api.post('/post', newPost)
      const allPost = [...posts, response.data]
      setPosts(allPost)
      setPostTitle("")
      setPostBody("")
      navigate("/")
    } catch (err) {
      console.log(`Error : ${err.message}`);
    }
  }

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await api.get('/post');
        setPosts(response.data)
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error : ${err.message}`);
        }
      }
    }
    fetchPostData()
  }, [])

  useEffect(() => {
    const fillteredResult = posts.filter(post => {
      // Optional: Add logging to identify which post is causing the issue
      if (!post.body) {
        return false;
      }
      if (!post.title) {
        return false;
      }

      return (
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
      );
    });

    setSearchResults(fillteredResult.reverse());
  }, [posts, search]);

  const handleEdit = async (id) => {
    const datetime = format(new Date, 'MMMM dd, yyyy pp');
    const updatePost = { id, title: editTitle, datetime, body: editBody }
    try {
      const response = await api.put(`/post/${id}`, updatePost)
      setPosts(posts.map(post => post.id === id ? { ...response.data } : post))
      setEditTitle('')
      setEditBody('')
      navigate('/')
    } catch (err) {
      console.log(`Error : ${err.message}`);
    }
  }

  const handleDelete = async (id) => {
    try {
      const postlist = posts.filter(post => post.id !== id)
      setPosts(postlist)
      navigate('/')
    } catch (err) {
      console.log(`Error : ${err.message}`);
    }
  }
  return (
    <div className="h-screen">
      <Header title="React JS Blog" />
      <Navbar search={search} setSearch={SetSearch} />
      <Routes>
        <Route exact path='/' element={
          <Home posts={searchResults} />}
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
        <Route path='/edit/:id' element={
          <EditPost
            posts={posts}
            handleEdit={handleEdit}
            editTitle={editTitle}
            setEditTitle={setEditTitle}
            editBody={editBody}
            setEditBody={setEditBody}
          />}
        />
        <Route path='/post/:id' element={
          <MainPost posts={posts} handleDelete={handleDelete} />}
        />
        <Route path='*' element={
          <Missing />}
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
