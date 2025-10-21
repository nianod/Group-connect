import Home from "./Pages/Home"
import Layout from "./Components/Layout/Layout"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
const App = () => {
  return (
    <div>
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