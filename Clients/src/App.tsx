import Landing from "./Pages/Landing"
import Layout from "./Components/Layout/Layout"
import Connect from "./Components/Connect"
import SignUp from "./Pages/Auth/SignUp"
import SignIn from "./Pages/Auth/SignIn"
import "aos/dist/aos.css"
import AOS from 'aos'
import { useEffect } from "react"
import Home from "./UI/Home"
 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Profile from "./UI/Profile"
import Notes from "./UI/Notes"
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])
  return (
    <div className="min-h-screen bg-white text-black dark:bg-[rgb(31,31,59)] dark:text-white transition-colors duration-500 ease-in-out">
      <Router>
        <Routes>
           <Route element={<Layout />}>
              <Route path="/" element={<Landing/>} />
              <Route path="/connect" element={<Connect/>} />
              <Route path="/register" element={<SignUp/>} />
              <Route path="/login" element={<SignIn/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="notes" element={<Notes/>} />
            </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App