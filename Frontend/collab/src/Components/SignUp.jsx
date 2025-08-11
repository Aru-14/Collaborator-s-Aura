import { useState } from "react";
import Navbar from "./Navbar.jsx";
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
const navigate= useNavigate();


const [userObj, setUserObj] = useState({
  username: "",
  email: "",
  password:""  
});
const [showModal, setShowModal] = useState(false);
const [error, setError] = useState("");
const handleChange = (e) => {
  
    setUserObj({
      ...userObj,
      [e.target.name]: e.target.value
    });

}

const handleSubmit = async (e) => {
    e.preventDefault();
    
    const url="http://localhost:3000/auth/signup";

    const response = await fetch(url, {
      method: "POST",
      headers: {        
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userObj)
    });

    const responseObj = await response.json();

    if(!responseObj.success) {
      setShowModal(false);  
      setError(responseObj.message);}

    else{setShowModal(true);}
    
}
  return (


    <>
    <Navbar />
    {showModal && (
  <dialog className="modal modal-open">
    <div className="modal-box">
      <h3 className="font-bold text-lg">You have signed up successfully!</h3>
      
      <div className="modal-action">
        <button className="btn btn-primary" onClick={() =>{ setShowModal(false); navigate('/login') }}>Close</button>
      </div>
    </div>
  </dialog>
)}
    {error && (
  <div className="alert alert-error shadow-amber-700 mt-4 mb-4 flex justify-between items-center w-full ">
    
      <span className="text-white text-lg">{error}</span>
      <button className="btn btn-soft btn-square float-end" onClick={() => setError("")}>✕</button>
    
  </div>
)}
    <form
  onSubmit={handleSubmit}
  className="max-w-md mx-auto p-10 rounded-lg shadow-2xl space-y-4 "
>
  <div >
    <label
      htmlFor="username"
      className="block text-sm font-medium  mb-1"
    >
      Username
    </label>
    <input
      type="text"
      name="username"
      required
      onChange={handleChange}
      className="w-full px-3 py-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 "
    />
  </div>

  <div>
    <label
      htmlFor="email"
      className="block text-sm font-mediummb-1"
    >
      Email
    </label>
    <input
      type="email"
      name="email"
      required
      onChange={handleChange}
      className="w-full px-3 py-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 "
    />
  </div>

  <div>
    <label
      htmlFor="password"
      className="block text-sm font-medium  mb-1"
    >
      Password
    </label>
    <input
      type="password"
      name="password"
      required
      onChange={handleChange}
      className="w-full px-3 py-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 "
    />
  </div>

  <button
    type="submit"
    className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition"
  >
    Sign Up
  </button>
</form>

    </>
  )
}


export default SignUp;
