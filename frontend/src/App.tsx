import './App.css'
import JoinPage from './pages/JoinPage'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path="/" element={<JoinPage />} />
      {/*<Route path="/chat" element={<ChatPage />} />*/ }
    </Routes>
  )
}

export default App
