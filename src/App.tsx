import { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Built with Vite for blazing fast development and production builds"
    },
    {
      icon: "🎨",
      title: "Modern Design",
      description: "Beautiful, responsive UI with Tailwind CSS and smooth animations"
    },
    {
      icon: "🔧",
      title: "Developer Friendly",
      description: "TypeScript, ESLint, and hot reload for the best developer experience"
    },
    {
      icon: "🚀",
      title: "Production Ready",
      description: "Optimized builds and modern deployment strategies included"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Vibecode
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors">Home</a>
              <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors">Features</a>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full bg-white/10 animate-float-${i % 3}`}
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Vibecode
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 opacity-90 animate-fade-in-up-delay">
            Where coding meets creativity in perfect harmony
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-xl">
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-white/30 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Vibecode?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the future of web development with our cutting-edge tools and modern architecture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl transition-all duration-300 cursor-pointer ${
                  activeFeature === index
                    ? 'bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 scale-105'
                    : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2">99%</div>
              <div className="text-lg opacity-90">Performance Score</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2">⚡</div>
              <div className="text-lg opacity-90">Lightning Fast</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2">🎯</div>
              <div className="text-lg opacity-90">Pixel Perfect</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Vibecode
          </div>
          <p className="text-gray-400 mb-8">
            Building the future, one line of code at a time.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500">
            © 2025 Vibecode. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
