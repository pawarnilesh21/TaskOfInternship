
A simple MERN application with authentication and a leaderboard system.  

## ⚙️ Setup Instructions:

1. Clone the Repository
2. backEnd setup :
    cd backend
    bun install
    bun add bcrypt cors express jsonwebtoken mongoose

3. frontEnd setup:
    cd frontend
    bun install
    bun add @tailwindcss/vite axios jwt-decode lucide-react react react-dom react-router-dom tailwindcss
4. setup Variables
        MongoUri
        JwtSecretKey
        Port
5. cd backEnd
    bun run start
   cd frontEnd 
    bun run start


