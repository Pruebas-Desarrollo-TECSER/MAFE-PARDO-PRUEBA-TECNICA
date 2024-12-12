
import './App.css'
import { Landing } from './pages/Landing'
import {Sellers} from './pages/Sellers'
import {Sales} from './pages/Sales'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sellers" element={<Sellers />} />
        <Route path="/sales" element={<Sales />} />
      </Routes>
    </Router>
  )
}

export default App
