import { Navigate, Route, Routes } from "react-router-dom";
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from "./pages/signup/SignUp";
import { useAuthContext } from "./contex/AuthContext";
import { Toaster } from "react-hot-toast";
import Tittle from "./pages/home/Tittle";

function App() {
  const {authUser} = useAuthContext();

  return (
    <div className='p-4 h-screen flex items-center justify-center flex-col gap-6"'>
      <Tittle />
      <Routes>
        <Route path='/' element={ authUser ? <Home /> : <Navigate to='/login' />} />
        <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
      </Routes>

      <Toaster />
    </div>

  )
}

export default App
