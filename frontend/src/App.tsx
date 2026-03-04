import './App.css'
import JoinPage from './pages/JoinPage'
import Chat from './pages/ChatPage'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path="/" element={<JoinPage />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  )
}

export default App
