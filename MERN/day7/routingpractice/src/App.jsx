import Home from './views/Home'
import ViewOne from './views/ViewOne'
import Text from './views/Text'
import TextColor from './views/TextColor'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:num' element={<ViewOne />} />
          <Route path='/:word/:tcolor/:bg' element={<TextColor />} />
          
        </Routes>
      </Router>
    </>
  )
}

export default App
