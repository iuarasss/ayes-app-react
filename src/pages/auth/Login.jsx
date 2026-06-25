import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const API_URL = "https://nqtenpztolfrctplpeuj.supabase.co/rest/v1/users";
const API_KEY = "sb_publishable_UVKtLbOJzZ9cQGX-o03J-A_qp6e07Vi";


const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = async (e) => {

    e.preventDefault();

    console.log("Login ditekan");


    try {

      const response = await fetch(
        `${API_URL}?email=eq.${email}&password=eq.${password}`,
        {
          method: "GET",
          headers: {
            apikey: API_KEY,
            Authorization: `Bearer ${API_KEY}`
          }
        }
      );


      const data = await response.json();

      console.log("Response login:", data);


      if (data.length > 0) {

        alert("Login berhasil");


        // cek role kalau nanti dipakai
        const user = data[0];

        if (user.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/dashboard");
        }

      } else {

        alert("Email atau password salah");

      }

    } catch (error) {

      console.log(error);
      alert("Terjadi error saat login");

    }

  };


  return (
    <div className="w-full">

      <h2 className="text-2xl font-bold text-gray-900 text-center mb-1">
        Login to your Account
      </h2>

      <p className="text-xs text-gray-400 text-center mb-6">
        Welcome back! Select method to log in:
      </p>


      {/* Social Login Buttons */}
      <div className="flex gap-4 mb-6">

        <button type="button" className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-lg bg-white">
          Google
        </button>

        <button type="button" className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-lg bg-white">
          Facebook
        </button>

      </div>


      <div className="flex items-center gap-3 mb-6">
        <hr className="flex-1 border-gray-200" />
        <span className="text-[10px] text-gray-400">or continue with email</span>
        <hr className="flex-1 border-gray-200" />
      </div>


      <form className="space-y-4" onSubmit={handleLogin}>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-blue-100 bg-[#F0F4FF]"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-blue-100 bg-[#F0F4FF]"
        />


        <button
          type="submit"
          className="w-full bg-[#6B7CFF] text-white py-3 rounded-lg font-bold"
        >
          LOG IN
        </button>

      </form>


      <p className="text-center text-[11px] text-gray-400 mt-6">
        Don't have account?{' '}
        <Link to="/auth/register" className="text-[#6B7CFF] font-semibold">
          Create an account
        </Link>
      </p>

    </div>
  );
};

export default Login;