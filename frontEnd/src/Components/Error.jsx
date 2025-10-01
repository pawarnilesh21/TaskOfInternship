import { AlertCircle } from 'lucide-react'

const Error =()=>{
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center space-y-4 max-w-md">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto" />
        <h1 className="text-2xl font-bold text-gray-800">This Page is Not Avl</h1>
        <p className="text-gray-500 text-sm">Change Ur Path</p>
        <button onClick={() => window.location.href = '/'} className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2.5 rounded-lg font-medium hover:shadow-lg transition-all">
          Back to Sign Up
        </button>
      </div>
    </div>
  );
}


export default Error
