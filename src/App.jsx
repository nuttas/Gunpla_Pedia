import './App.css'
import Home from './pages/home/Home'
import Gunpla from './pages/gunpla/Gunpla'
import Collection from './pages/collection/Collection'
import Techniques from './pages/techniques/Techniques'
import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/header/Navbar'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Footer from './components/bottom/footer'
import Videotech from './pages/techniques/videotech/Videotech'
import Blogtech from './pages/techniques/blogtech/Blogtech'
import Account from './pages/account/Account'



function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gunpla" element={<Gunpla />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/techniques" element={<Techniques />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/videotech" element={<Videotech/>} />
        <Route path="/blogtech" element={<Blogtech/>} />
        <Route path="/account" element={<Account/>} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
