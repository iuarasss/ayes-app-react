import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const API_URL = "https://nqtenpztolfrctplpeuj.supabase.co/rest/v1/users";

const API_KEY = "sb_publishable_UVKtLbOJzZ9cQGX-o03J-A_qp6e07Vi";


const Register = () => {


  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");



  const handleRegister = async (e) => {

    e.preventDefault();


    console.log("Register ditekan");



    if(password !== confirmPassword){

      alert("Password tidak sama");
      return;

    }



    try {


      const response = await fetch(API_URL, {


        method: "POST",


        headers: {

          "apikey": API_KEY,

          "Authorization": `Bearer ${API_KEY}`,

          "Content-Type": "application/json",

          "Prefer": "return=minimal"

        },


        body: JSON.stringify({

          username: username,

          email: email,

          password: password,

          role: "user"

        })


      });



      console.log("Response:", response);



      if(response.ok){


        alert("Register berhasil");


        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");


      } else {


        const error = await response.text();

        console.log(error);

        alert("Register gagal");


      }



    } catch(error){


      console.log(error);

      alert("Terjadi error koneksi");


    }


  };





  return (

    <div className="w-full">


      <div className="text-center mb-8">

        <h2 className="text-2xl font-bold text-gray-900 mb-1">

          Create your account

        </h2>


        <p className="text-xs text-gray-400">

          Unlock all Features!

        </p>


      </div>




      <form 
        className="space-y-4"
        onSubmit={handleRegister}
      >



        <div className="relative">

          <input

            type="text"

            placeholder="Username"

            value={username}

            onChange={(e)=>setUsername(e.target.value)}

            className="w-full pl-10 pr-4 py-3 rounded-lg border border-blue-100 bg-[#F0F4FF] text-sm"

          />

        </div>




        <div className="relative">

          <input

            type="email"

            placeholder="Email"

            value={email}

            onChange={(e)=>setEmail(e.target.value)}

            className="w-full pl-10 pr-4 py-3 rounded-lg border border-blue-100 bg-[#F0F4FF] text-sm"

          />

        </div>




        <div className="relative">


          <input

            type="password"

            placeholder="Password"

            value={password}

            onChange={(e)=>setPassword(e.target.value)}

            className="w-full pl-10 pr-4 py-3 rounded-lg border border-blue-100 bg-[#F0F4FF] text-sm"

          />


        </div>





        <div className="relative">


          <input

            type="password"

            placeholder="Confirm Password"

            value={confirmPassword}

            onChange={(e)=>setConfirmPassword(e.target.value)}

            className="w-full pl-10 pr-4 py-3 rounded-lg border border-blue-100 bg-[#F0F4FF] text-sm"

          />


        </div>





        <div className="flex items-center gap-2">


          <input

            type="checkbox"

            className="w-3.5 h-3.5"

          />


          <span className="text-[11px] text-gray-400">

            Accept terms and conditions

          </span>


        </div>





        <button

          type="submit"

          className="w-full bg-[#6B7CFF] hover:bg-[#5869e8] text-white py-3 rounded-lg text-sm font-bold"

        >

          REGISTER

        </button>



      </form>





      <p className="text-center text-[11px] text-gray-400 mt-6">


        You have account?{' '}


        <Link

          to="/auth/login"

          className="text-[#6B7CFF] font-semibold"

        >

          Login now

        </Link>


      </p>



    </div>

  );

};


export default Register;