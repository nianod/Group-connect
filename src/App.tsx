import Home from "./Pages/Home"
import Layout from "./Components/Layout/Layout"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
const App = () => {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-[rgb(31,31,59)] dark:text-white transition-colors duration-500 ease-in-out">
      <Router>
        <Routes>
           <Route element={<Layout />}>
              <Route path="/" element={<Home/>} />
           </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App