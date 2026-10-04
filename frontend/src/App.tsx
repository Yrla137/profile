import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages imports //
import Home from './pages/Home'
// import ProjectsList from './pages/ProjectsList'

// Components imports //

// CSS //
import './css/App.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/projects" element={<ProjectsList />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
