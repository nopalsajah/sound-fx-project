import React from "react";
import YouTubePlayer from "./components/YouTubePlayer";

function App() {
  return (
    <div className="bg-black text-white h-screen flex flex-col justify-center items-center">
      <div className="equalizer-bg absolute inset-0"></div>
      
      <div className="relative text-center z-10">
        <h1 className="text-5xl font-bold">12:19</h1>
        <h2 className="text-2xl mt-2">Welcome</h2>
        <YouTubePlayer />
      </div>

      <div className="absolute bottom-5 right-5 p-4 bg-gray-800 rounded-lg shadow-lg text-center">
        <p className="text-sm">Melihat hasil download</p>
        <button className="mt-2 px-4 py-2 bg-yellow-500 text-black rounded-lg">
          Open File
        </button>
      </div>
    </div>
  );
}

export default App;
