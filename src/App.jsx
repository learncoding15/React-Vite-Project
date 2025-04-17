import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Registration from './components/Registration'
import RecruiterLogin from './components/RecruiterLogin'
import Login from './components/Login'
import Index from './components'

function App() {


  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/" element={< Index/>} />
          <Route path="/recruiterLogin" element={<RecruiterLogin />} />

        </Routes>
      </BrowserRouter>

    </div>

  )
}

export default App
