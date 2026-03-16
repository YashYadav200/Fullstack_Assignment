import { useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

function Login(){

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e:any)=>{
    e.preventDefault();

    try{

      const res = await api.post("/auth/login",{
        email,
        password
      });

      localStorage.setItem("role",res.data.role);

      navigate("/dashboard");

    }catch(err){
      console.log(err);
    }
  }

  return(
    <div className="flex items-center justify-center h-screen bg-gray-900">

      <div className="bg-gray-800 p-8 rounded-lg w-80">

        <h2 className="text-white text-2xl mb-4 text-center">Login</h2>

        <form onSubmit={handleLogin}>

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

          <button className="bg-blue-500 w-full py-2 rounded text-white">
            Login
          </button>

        </form>

      </div>

    </div>
  )
}

export default Login;