import { useSelector } from 'react-redux'
import { Routes, Route, Link } from "react-router-dom";
import Home from '@/pages/home';
import About from '@/pages/about';

function App() {
  const count = useSelector((state) => state.counter.value)

  return (
    <div className="min-h-screen bg-neutral-300">
      <nav className='flex justify-center px-4 py-3 space-x-8 text-white bg-slate-600'>
        <Link to={"/"}>Home</Link>
        <Link to={"/about-5"}>About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-:id" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
