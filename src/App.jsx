
import Header from './components/Header'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Home from './pages/Home.jsx'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
