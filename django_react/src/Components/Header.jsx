export default function Header() {
    return (
        <div className="w-full bg-blue-600 text-white p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">AI Chat App</h1>
            <div>
                <button className="bg-white text-blue-600 px-3 py-1 rounded">Settings</button>
            </div>
        </div>
    );
}
