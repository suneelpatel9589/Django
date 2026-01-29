export default function Sidebar() {
    return (
        <div className="w-64 bg-gray-100 p-4 flex flex-col gap-4">
            <button className="p-2 bg-blue-500 text-white rounded">New Chat</button>
            <button className="p-2 hover:bg-gray-200 rounded">Saved Chats</button>
            <button className="p-2 hover:bg-gray-200 rounded">Profile</button>
        </div>
    );
}
