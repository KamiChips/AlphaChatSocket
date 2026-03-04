import './App.css'
import JoinPage from './pages/JoinPage'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path="/" element={<JoinPage />} />
    </Routes>
  )
}

export default App
