import { Routes, Route, Link } from "react-router-dom";
import Home from '@/pages/home';
import moment from 'moment/min/moment-with-locales';

function App() {
  moment.locale("tr");

  return (
    <div className="min-h-screen font-mono pb-16 bg-gradient-to-b from-[#1f69bd] to-[#39a4f0]">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
