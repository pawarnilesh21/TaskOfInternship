
import {  User, Lock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const Login=()=>{
    const navigate=useNavigate()
    const [formData,setFormData]=useState({email:'',password:''})
    const [error,setError]=useState('')

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})

    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        setError('')
        try {
            const res=await axios.post('http://localhost:3000/api/users/login',formData)

            localStorage.setItem('token',res.data.token)
            navigate('/dashboard')
        } catch (error) {
            setError(error.response?.data?.error ||error.message ||'Login Failed')

        }

    }

    return(
          <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 space-y-6">
                    <div className="text-center space-y-2">
                         <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
                        
                    </div>

                     <form onSubmit={handleSubmit} className="space-y-4">
                                 <div className="relative">
                                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                    <input
                                        type="email"
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        autoComplete="email"
                                        required
                                        className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition"
                                    />
                                  </div>
                            
                             <div className="relative">
                                    <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                    <input
                                        type="password"
                                        name='password'
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Password"
                                        required
                                        className="w-full pl-10 pr-12 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition"
                                    />
                             </div>
                               {error && <p className="text-red-500 text-sm">{error}</p>}

                                <button
                                        type='submit'
                                        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-[1.02] transition-all"
                                        >
                                        Login
                                </button>
                                 <p className="text-center text-sm text-gray-500">
                                        Don't have an account?{' '}
                                        <span onClick={() => navigate('/')}
                                         className="text-blue-500 hover:text-blue-600 font-medium cursor-pointer">
                                        Sign Up 
                                        </span>
                                </p>
                        </form>
                </div>
            </div>
        </div>
    )
}

export default Login






