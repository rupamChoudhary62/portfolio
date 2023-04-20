import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Resume from './Pages/Resume';
import Blogs from './Pages/Blogs';

function App() {

  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
