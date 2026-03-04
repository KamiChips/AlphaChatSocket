import { useState } from 'react';
import Navbar from '../assets/NavBar';
import Textbar from '../assets/TextBar';
import UserBar from '../assets/UserBar';

export default function ChatPage() {
  const [users] = useState<string[]>(["Kamila", "Mayrin"]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        <UserBar users={users} />
        <Textbar />
      </div>
    </div>
  )
}