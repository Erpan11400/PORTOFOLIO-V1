import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LandingPage } from './LandingPage.tsx'
import Error from './Error.tsx'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import PreLoader from './components/PreLoader.tsx'
import 'animate.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init();

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element=
          {
            <>
              <PreLoader />
              <div className='container mx-auto px-4'>
                <Navbar />
                <LandingPage />
                <Footer />
              </div>
            </>
          } />
        <Route path='/error' element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
