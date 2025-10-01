
import { Eye, EyeOff, User, Mail, Lock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'


const SignUp=()=>{
    const navigate=useNavigate()
    const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })
   const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
 const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

   const handleSubmit = async (e) => {
    e.preventDefault()
    setError('');
    setSuccess('')

    try {
      const res = await axios.post('http://localhost:3000/api/users', formData)

      if (res.status === 201) {
        setSuccess('User created successfully! Redirecting...')
        setTimeout(() => navigate('/login'), 1500)
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error || 'Signup failed')
      } else {
        setError('Server not responding. Try again later.')
      }
    }
  }
    return(
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 space-y-6">
                    <div className="text-center space-y-2">
                         <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
                        
                    </div>
                         <form onSubmit={handleSubmit} className='space-y-4'>
                   
                            <div className="grid grid-cols-2 gap-3">
                                <div className="relative">
                                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                    <input
                                    type="text"
                                      name="firstName"
                                    placeholder="First Name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition"
                                    />
                                </div>
                            

                                <div className="relative">
                                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                    <input
                                    type="text"
                                      name="lastName"
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition"
                                    />
                                </div>
                            </div>

                              <div className="relative">
                                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                    <input
                                        type="email"
                                          name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition"
                                    />
                             </div>
                            
                             <div className="relative">
                                    <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                    <input
                                        type="password"
                                          name="password"
                                        placeholder="Password"
                                        value={formData.password}
                                    onChange={handleChange}
                                    required
                                        className="w-full pl-10 pr-12 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition"
                                    />
                             </div>
                            {/* error/success messages */}
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-500 text-sm">{success}</p>}

                                <button
                                        type='submit'
                                        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-[1.02] transition-all"
                                        >
                                        Sign Up
                                </button>
                        </form>
                                <p className="text-center text-sm text-gray-500">
                                        If You have an account?{' '}
                                        <span onClick={() => navigate('/login')}
                                         className="text-blue-500 hover:text-blue-600 font-medium cursor-pointer">
                                        Login 
                                        </span>
                                </p>
                        
                </div>
            </div>
        </div>

    )
}

export default SignUp

