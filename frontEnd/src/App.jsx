
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Error from './Components/Error'
import DashBoard from './Components/Dashboard'
import Login from './Components/Login'
import SignUp from './Components/SignUp'

const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<SignUp/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/dashboard' element={<DashBoard/>}></Route>
          <Route path='*' element={<Error/>}></Route>
         
      </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App



