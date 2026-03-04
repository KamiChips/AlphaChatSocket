interface Message {
  id: number;
  user: string;
  text: string;
}

interface ChatBubbleProps {
  message: Message;
  currentUser: string;
}

export default function ChatBubble({ message, currentUser }: ChatBubbleProps) {
  const isMe = message.user === currentUser;

  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`
          max-w-xs md:max-w-md
          px-4 py-2
          rounded-2xl
          shadow-md
          ${isMe 
            ? "bg-indigo-500 text-white rounded-br-none" 
            : "bg-gray-200 text-gray-800 rounded-bl-none"}
        `}
      >
        <p
          className={`text-xs font-semibold mb-1 ${
            isMe ? "text-indigo-200 text-right" : "text-indigo-600 text-left"
          }`}
        >
          {message.user}
        </p>

        <p className="text-sm">{message.text}</p>
      </div>
    </div>
  );
}