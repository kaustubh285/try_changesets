import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          
          <h1 className="text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            User Application
          </h1>
          
          <p className="text-xl text-gray-300 mb-12">
            Welcome to your beautiful user dashboard
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl">✨</span>
            </div>
            <h2 className="text-2xl font-semibold text-white mb-4">New Feature</h2>
            <p className="text-gray-300">Experience our latest innovation designed to enhance your workflow.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl">🚀</span>
            </div>
            <h4 className="text-xl font-semibold text-white mb-4">Feature C Implementation</h4>
            <p className="text-gray-300">Advanced functionality to streamline your user experience.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-pink-500 rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl">🔧</span>
            </div>
            <h5 className="text-lg font-semibold text-white mb-4">Critical Feature C Bug Fix</h5>
            <p className="text-gray-300">Resolved issues for improved stability and performance.</p>
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
