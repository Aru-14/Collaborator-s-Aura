import SignUp from './Components/SignUp.jsx';
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx';
import "./App.css";
import Login from './Components/Login.jsx';
import Chat from './Components/Chat.jsx';
function App() {


  return (
    <>
     <div
  className="min-h-screen bg-base-100"
>
 

  



<Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="chat" element={<Chat/>} />
        {/* Add other routes here as needed */}
      </Routes>
     
</div>

     
    </>
  )
}

export default App
