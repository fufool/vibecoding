import { type FormEvent, useState } from 'react'

interface LoginFormData {
  email: string
  password: string
}

const Login = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate login process
    try {
      console.log('Login attempt:', formData)
      // Here you would typically make an API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      alert('Login successful!')
      // Navigate back to home after successful login
      window.navigate('/')
    } catch (error) {
      console.error('Login failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleBackToHome = () => {
    window.navigate('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-web-green-600 via-web-green-500 to-web-green-700 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <button 
            onClick={handleBackToHome}
            className="mb-4 text-web-green-600 hover:text-web-green-500 transition-colors"
          >
            ← Back to Home
          </button>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-web-green-500 to-web-green-600 bg-clip-text text-transparent">
            Vibecode
          </h1>
          <p className="text-neutral-600 dark:text-neutral-300 mt-2">
            Welcome back! Please sign in to your account.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-web-green-500 focus:border-transparent dark:bg-neutral-700 dark:text-white transition-all duration-200"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-web-green-500 focus:border-transparent dark:bg-neutral-700 dark:text-white transition-all duration-200"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-web-green-600 focus:ring-web-green-500 border-neutral-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-neutral-700 dark:text-neutral-300">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-web-green-600 hover:text-web-green-500">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-web-green-500 to-web-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-web-green-600 hover:to-web-green-700 focus:outline-none focus:ring-2 focus:ring-web-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-200"
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-neutral-600 dark:text-neutral-300">
            Don't have an account?{' '}
            <a href="#" className="text-web-green-600 hover:text-web-green-500 font-medium">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login