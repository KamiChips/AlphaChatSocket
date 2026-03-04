import { useState } from "react";
import { socket } from "../socket";
import ChatBubble from "./ChatBubble";

interface Message{
    system?:boolean;
    user?: string;
    text: string;
    senderId?: string;
}

interface TextBarProps{
    messages: Message[];
    currentUser: string;
}

function Textbar( {messages, currentUser}:TextBarProps) {
    const [message, setMessage] = useState("");

    const sendMessage = () => {
        if (!message.trim()) return
        socket.emit("message", message)
        setMessage("")
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            sendMessage()
        }
    }

    return (
        <>
            {/* Messages Section */}
            < div className="mt-20 ml-64 p-6 pb-32 w-full" >
                {messages.map((msg, index) => (
                        <ChatBubble
                            key={index}
                            message={msg}
                            currentUser={currentUser}
                        />
                    ))
                }
            </div >

            <nav className="fixed bottom-0 left-0 w-full h-30 z-50 bg-[#7665cc] text-white flex justify-between items-center px-8">

                <textarea
                    placeholder="Escribe tu mensaje..."
                    className="w-full h-20 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 margin-right-4"
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    value={message}
                />

                <button
                    className="bg-white text-blue-600 
             px-4 py-2 rounded-md 
             font-semibold 
             hover:bg-gray-300 
             transition duration-300 
             ml-8 flex items-center gap-2 cursor-pointer"
             onClick={sendMessage}

            >
                <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                        <path
                            fillRule="evenodd"
                            d="M12 2a1 1 0 0 1 .932.638l7 18a1 1 0 0 1-1.326 1.281L13 19.517V13a1 1 0 1 0-2 0v6.517l-5.606 2.402a1 1 0 0 1-1.326-1.281l7-18A1 1 0 0 1 12 2Z"
                            clipRule="evenodd"
                        />
                    </svg>

                    <span>Send</span>

                </button>

            </nav >
        </>
    );
}


export default Textbar;