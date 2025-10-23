import Landing from "./Pages/Landing"
import Layout from "./Components/Layout/Layout"
import Connect from "./Components/Connect"
import SignUp from "./Pages/Auth/SignUp"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
const App = () => {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-[rgb(31,31,59)] dark:text-white transition-colors duration-500      ease-in-out">
      <Router>
        <Routes>
           <Route element={<Layout />}>
              <Route path="/" element={<Landing/>} />
              <Route path="connect" element={<Connect/>} />
              <Route path="register" element={<SignUp/>} />
           </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App