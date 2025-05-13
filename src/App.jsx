import { useState } from 'react'
import badbunnz from './assets/badbunnz-bg.png'
import './App.css'

function App() {
  return (
    <>
      <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden rounded-3xl">
        {/* Main container with rounded edges similar to the image */}
        <div className="w-full max-w-6xl bg-white rounded-3xl border-2 border-gray-900 shadow-xl flex flex-col md:flex-row p-8 relative">
          {/* Left side with text */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-8 font-mono">
              WELCOME TO<br />BADBUNNZ
            </h1>
            
            <button className="bg-gray-800 hover:bg-black text-white text-2xl font-mono py-3 px-10 rounded-md transition-colors duration-300 uppercase w-40 text-center">
              ENTER
            </button>
          </div>
          
          {/* Right side with bunny image */}
          <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
            <img 
              src={badbunnz} 
              alt="BadBunnz Character" 
              className="max-h-96 object-contain"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App