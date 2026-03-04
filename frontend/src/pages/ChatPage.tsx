import { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';
import Textbar from '../components/TextBar';
import UserBar from '../components/UserBar';
import { socket } from '../socket';

export interface Message {
  system?: boolean
  user?: string
  text: string
  senderId?: string
}

export default function ChatPage() {
    const [messages, setMessages] = useState<Message[]>([])
  const [currentUser, setCurrentUser] = useState("")

  useEffect(() => {
    const nickname = localStorage.getItem("nickname") || ""
    setCurrentUser(nickname)

    socket.on("message", (msg: Message) => {
      setMessages((prev) => [...prev, msg])
    })

    return () => {
      socket.off("message")
    }
  }, [])
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        <UserBar/>
        <Textbar
         messages={messages}
         currentUser={currentUser}/>
      </div>
    </div>
  )
}