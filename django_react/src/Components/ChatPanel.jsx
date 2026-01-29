import { useState } from "react";

export default function ChatPanel() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input) return;
        setMessages([...messages, { text: input, user: true }]);
        setInput("");
        // यहाँ आप AI API call जोड़ सकते हो
        setMessages(prev => [...prev, { text: input, user: true }, { text: "hii how are you", user: false }]);
    };

    return (
        <div className="flex-1 flex flex-col p-4 bg-gray-50">
            <div className="flex-1 overflow-y-auto mb-4">
                {messages.map((msg, index) => (
                    <div key={index} className={`mb-2 ${msg.user ? "text-right" : "text-left"}`}>
                        <span className={`inline-block p-2 rounded ${msg.user ? "bg-blue-400 text-white" : "bg-gray-300"}`}>
                            {msg.text}
                        </span>
                    </div>
                ))}
            </div>
            <div className="flex gap-2">
                <input 
                    className="flex-1 p-2 border rounded" 
                    value={input} 
                    onChange={e => setInput(e.target.value)} 
                    placeholder="Type a message..." 
                />
                <button className="bg-blue-500 text-white p-2 rounded" onClick={handleSend}>Send</button>
            </div>
        </div>
    );
}
