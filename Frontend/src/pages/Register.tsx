import { useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

function Register(){

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [role,setRole] = useState("USER");

  const navigate = useNavigate();

  const handleRegister = async (e:any)=>{
    e.preventDefault();

    const data = {
      name,
      email,
      password,
      role
    };

    try{
      const res = await api.post("/auth/register",data);
      alert(res.data);
      navigate("/login");
    }catch(err){
      console.log(err);
    }
  }

  return(
    <div className="flex items-center justify-center h-screen bg-gray-900">

      <div className="bg-gray-800 p-8 rounded-lg w-80">

        <h2 className="text-white text-2xl mb-4 text-center">Register</h2>

        <form onSubmit={handleRegister}>

          <input
            className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
            placeholder="Name"
            onChange={(e)=>setName(e.target.value)}
          />

          <input
            className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
            placeholder="Email"
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="password"
            className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
          />

          <div className="flex gap-2 mb-4">
            <button type="button" onClick={()=>setRole("USER")} className="bg-blue-500 px-3 py-1 rounded text-white">USER</button>
            <button type="button" onClick={()=>setRole("ADMIN")} className="bg-green-500 px-3 py-1 rounded text-white">ADMIN</button>
          </div>

          <p className="text-gray-300 mb-3">Selected Role: {role}</p>

          <button className="bg-purple-500 w-full py-2 rounded text-white">
            Register
          </button>

        </form>

        <button
          onClick={()=>navigate("/login")}
          className="text-blue-400 mt-3"
        >
          Go to Login
        </button>

      </div>

    </div>
  )
}

export default Register;