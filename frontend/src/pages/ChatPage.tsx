import Navbar from '../components/NavBar';
import Textbar from '../components/TextBar';
import UserBar from '../components/UserBar';

export default function ChatPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        <UserBar/>
        <Textbar />
      </div>
    </div>
  )
}