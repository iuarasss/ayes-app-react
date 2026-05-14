import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';

// Layouts (Bisa langsung di-import karena enteng dan mengatur struktur awal)
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';

// Lazy Loading Pages
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Booking = lazy(() => import('./pages/Booking'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Lazy Loading Auth Pages
const Login = lazy(() => import('./pages/auth/Login'));
const Register = lazy(() => import('./pages/auth/Register'));
const ForgotPassword = lazy(() => import('./pages/auth/ForgotPassword'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Main Layout Routes (Navbar & Footer included) */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="booking" element={<Booking />} />
          </Route>

          {/* Auth Layout Routes (No Navbar/Footer, specialized design) */}
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot" element={<ForgotPassword />} />
          </Route>

          {/* 404 Route (Menangkap semua URL yang tidak terdaftar) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import BiodataDiri from "./components/BiodataDiri"
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
//     return (
//     <div>
//       <BiodataDiri />
//     </div>
//   ); 
// }


// export default App
