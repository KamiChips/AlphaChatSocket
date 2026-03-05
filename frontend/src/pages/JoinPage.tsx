import { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { socket } from "../socket";

export default function JoinPage(){
    const[nickname, setNickname] = useState("");
    const[error, setError] = useState("");
    const navigation =useNavigate();

    const handleJoin = () => {
        if(!nickname.trim()){
            setError("Please enter a nickname");
            return;
        }

        socket.connect()
        socket.emit("join", nickname)

        navigation("/chat", {state: nickname})
    }
    return(
        <div className="fixed inset-0 bg-linear-to-r from-[#3c75f3]  to-[#9F67D6] flex items-center justify-center">
            <div className="bg-white/10 backdrop-blur-lg p-12 rounded-2xl shadow-2xl flex flex-col gap-8 items-center">
                <div className="flex flex-row gap-2 items-center">
                    <h1 className="font-bold text-4xl text-white underline decoration-white">SeMeCerroElSocket</h1>
                    <svg className="w-12 h-12 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"/>
                    </svg>
                </div>
                <div className="w-full flex flex-col gap-10">
                    <input placeholder="Nickname" value={nickname}
                     onChange={(e) => {
                        setNickname(e.target.value);
                        setError("");
                     }}
                     className="text-white py-3 border-b-3 border-white bg-transparent outline-none focus:border-yellow-300 transition-all duration-300 "/>
                     {error && (
                        <span className="text-red-300 text-sm">{error}</span>
                     )}
                    <Button label="Join" 
                    type="button" 
                    onClick={handleJoin}
                    className="text-xl font-bold text-white px-25 py-5 rounded-full border-2 hover:bg-white hover:text-[#3c75f3] transition-all duration-300"  
                    />
                </div>
            </div>
        </div>
    );
}