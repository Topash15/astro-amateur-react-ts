import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Photos from './pages/Photos'
import About from './pages/About'
import Navbar from './components/Navbar';
import './App.css'


function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
