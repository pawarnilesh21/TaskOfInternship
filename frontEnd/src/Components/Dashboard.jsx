import { useEffect, useState } from 'react'
import { Menu, ChevronLeft, User } from 'lucide-react'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Dashboard = () => {
  const nav=useNavigate()
  const [open, setOpen] = useState(true)
  const [user,setUser]=useState(null)
  const [leaderboard, setLeaderboard] = useState([])

    useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token')
      if (!token) return nav('/login')

      try {
      
        const res = await axios.get('http://localhost:3000/api/users/dashboard', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(res.data.user); 
        setLeaderboard(res.data.leaderboard)
      } catch (error) {
        console.error('Error fetching user:', error)
        localStorage.removeItem('token');
        nav('/login');
      }
    };

    fetchUser()
  }, [nav])


  return (
    <div className="flex h-screen">
  
      <aside className={`bg-white shadow ${open ? 'w-48' : 'w-0'} transition-all duration-300 overflow-hidden`}>
        <div className="p-4 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold">Menu</h2>
            <button onClick={() => setOpen(false)}>
              <ChevronLeft size={18} />
            </button>
          </div>
          <nav className="space-y-2">
            <div className="text-blue-600">Dashboard</div>
            <div>Analytics</div>
            <div>Reports</div>
            <div>Settings</div>
          </nav>
        </div>
      </aside>

      
      <main className="flex-1 flex flex-col">
    
        <header className="flex items-center justify-between p-4 bg-white shadow">
          {!open && (
            <button onClick={() => setOpen(true)}>
              <Menu size={20} />
            </button>
          )}
          <h1 className="font-bold text-lg">Dashboard</h1>
          <div className="flex items-center gap-2">
            <User className="w-7 h-7 bg-gray-200 rounded-full p-1" />
            <div className="hidden sm:block text-sm">
             <p>{user?.email ? user.email.split('@')[0] : 'Guest'}</p>
            <p className="text-gray-500 text-xs">{user?.email || 'No Email'}</p>
            </div>

          <button
              onClick={() => {
                localStorage.removeItem('token')
                 nav('/login')
              }}
              className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Logout
            </button>

          </div>
        </header>

        
        <section className="p-4 overflow-auto flex-1">
          <h2 className="text-xl font-bold mb-3">Leaderboard</h2>
          <div className="bg-white shadow rounded">
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 text-left">Rank</th>
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left">Score</th>
                </tr>
              </thead>
              <tbody>
               {leaderboard.map(user => (
                <tr key={user.rank} className="border-t">
                  <td className="p-2">{user.rank}</td>
                  <td className="p-2">{user.name}</td>
                  <td className="p-2">{user.score}</td>
                </tr>
              ))}

              </tbody>
            </table>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}

export default Dashboard
