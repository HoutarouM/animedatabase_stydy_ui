import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// my components
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// styles
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Header />

      <Router>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />

          {/* Page don't exist */}
          <Route path="*" element={<h1>Page don't exist</h1>} />
        </Routes>
      </Router>

      <Footer />
    </div>
  )
}

export default App
