import './App.css'
import { BrowserRouter, Routes, Route, HashRoute } from 'react-router-dom';
import Home from './Pages/Home';
import Resume from './Pages/Resume';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';

function App() {

  return (
    <div className="App">
      
      <HashRoute baseName="/">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRoute>
    </div>
  )
}

export default App
