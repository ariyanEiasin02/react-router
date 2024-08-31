import Header from "./Components/Header/Header"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Post from "./Pages/Post/Post"
import Missing from "./Pages/Missing/Missing"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
    return (
   <>
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/about' element={< About/>} />
        <Route path='/post' element={<Post/>} />
        <Route path='*' element={<Missing/>} />
      </Routes>
      <Footer/>
    </Router>
   </>
  )
}

export default App
