import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/login'
import Registration from './components/Registration'

function App() {


  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Registration />} />
        </Routes>
      </BrowserRouter>

    </div>

  )
}

export default App
