const MAINTENANCE = true;


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
import PageTrackerWrapper from "./PageTrackWrapper"
import ForgotPassword from "./Pages/Auth/ResetPassword"
import { Toaster } from "react-hot-toast"

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

if (MAINTENANCE) {
  return (
    <div>
      <p className="flex flex-col items-center">404 Server suspended by the owner!
      <span>Our engineers are currently working on it!</span> </p>  
    </div>
  );
}else
  return (
    <div className="min-h-screen bg-white text-black dark:bg-[rgb(31,31,59)] dark:text-white transition-colors duration-500 ease-in-out">
       <Toaster position="top-right" reverseOrder={false} />
      <Router>
          <PageTrackerWrapper />

        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/home" element={<Home />} />
            <Route path="reset" element={<ForgotPassword />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="notes" element={<Notes />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App

