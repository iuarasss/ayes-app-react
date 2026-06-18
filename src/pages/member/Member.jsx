import React, { useState } from "react";
import {
  Plane,
  MapPin,
  Ticket,
  Star,
  CalendarDays,
  LogOut,
  Award,
  Settings,
  Headphones,
  Copy,
  CheckCircle2,
  Bell,
  MessageSquare,
  Users,
  History,
  Search,
  ChevronRight,
  Coffee
} from "lucide-react";

const Member = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [copied, setCopied] = useState(false);

  // FUNGSI COPY REFERRAL
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // FUNGSI SCROLL OTOMATIS KE SECTION TERTENTU
  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      // scroll-mt-24 di Tailwind akan menangani offset agar tidak tertutup header
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // FUNGSI SIGN OUT
  const handleSignOut = () => {
    const confirmSignOut = window.confirm("Apakah Anda yakin ingin keluar dari akun?");
    if (confirmSignOut) {
      alert("Berhasil Sign Out! (Mengarahkan ke halaman login...)");
    }
  };

  const trips = [
    {
      title: "Bali Holiday Escape",
      date: "12 Juli - 16 Juli 2026",
      status: "Confirmed",
      location: "Bali, Indonesia",
      statusColor: "bg-emerald-100 text-emerald-700"
    },
    {
      title: "Japan Sakura Experience",
      date: "20 April - 27 April 2026",
      status: "Completed",
      location: "Tokyo, Japan",
      statusColor: "bg-slate-100 text-slate-600"
    }
  ];

  const menuItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "booking", label: "Booking Perjalanan" },
    { id: "riwayat", label: "Riwayat Perjalanan" },
    { id: "poin", label: "Poin & Reward" },
    { id: "bantuan", label: "Pusat Bantuan" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 scroll-smooth">
      
      {/* TOP NAVIGATION (Sticky Header) */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex justify-between items-center">
          
          <div className="flex items-center gap-10 lg:gap-12 overflow-x-auto no-scrollbar">
            <div 
              className="text-2xl font-bold tracking-tight text-slate-900 cursor-pointer shrink-0"
              onClick={() => scrollToSection("dashboard")}
            >
              Trip<span className="text-indigo-600">ora.</span>
            </div>
            
            <div className="flex items-center gap-6 lg:gap-8 shrink-0">
              {menuItems.map((menu) => (
                <button
                  key={menu.id}
                  onClick={() => scrollToSection(menu.id)}
                  className={`text-sm font-semibold transition-all relative whitespace-nowrap ${
                    activeTab === menu.id
                      ? "text-indigo-600"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {menu.label}
                  {activeTab === menu.id && (
                    <span className="absolute -bottom-[29px] left-0 w-full h-0.5 bg-indigo-600 rounded-t-full"></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 shrink-0 pl-6 border-l border-slate-200">
            <button className="text-slate-400 hover:text-indigo-600 transition-colors relative hidden sm:block">
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
              <Bell size={22} />
            </button>
            
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-900">Ayu Sara</p>
                <p className="text-xs font-medium text-indigo-600">Gold Member</p>
              </div>
              <img src="https://i.pravatar.cc/150?img=47" alt="Profile" className="w-10 h-10 rounded-full border-2 border-slate-100" />
            </div>

            <button 
              onClick={handleSignOut}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-100 hover:bg-red-50 text-slate-600 hover:text-red-600 rounded-xl transition-colors font-semibold text-sm ml-1"
            >
              <LogOut size={16} />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>

        </div>
      </nav>

      {/* MAIN CONTENT CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-12">
        
        {/* ================= SECTION: DASHBOARD ================= */}
        <section id="dashboard" className="scroll-mt-28">
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-slate-900">Selamat datang kembali, Ayu! </h1>
            <p className="text-slate-500 mt-2">Berikut adalah ringkasan akun keanggotaan dan aktivitas perjalananmu hari ini.</p>
          </div>

          {/* Top Widgets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Membership Card */}
            <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 rounded-3xl p-7 text-white shadow-lg relative overflow-hidden flex flex-col justify-between h-56">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-indigo-200 text-xs font-semibold tracking-wider uppercase mb-1">Level Membership</p>
                    <h2 className="text-2xl font-bold">Gold Traveler</h2>
                  </div>
                  <Award className="text-yellow-400" size={32} />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-indigo-200 text-sm font-medium">Total Travel Points</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-black tracking-tight">2,450</p>
                  <p className="text-indigo-300 font-medium">pts</p>
                </div>
              </div>
            </div>

            {/* Informasi Akun */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm flex flex-col justify-center h-56">
              <h3 className="text-sm font-bold text-slate-900 mb-5 flex items-center gap-2">
                <Settings size={18} className="text-slate-400" />
                Informasi Akun
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <span className="text-sm font-medium text-slate-500">Status Member</span>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-lg border border-emerald-100">
                    <CheckCircle2 size={14} /> Aktif
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <span className="text-sm font-medium text-slate-500">Tanggal Daftar</span>
                  <span className="text-sm font-bold text-slate-900">14 Januari 2024</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-500">Member ID</span>
                  <span className="text-sm font-mono font-bold text-slate-900 bg-slate-50 px-2 py-1 rounded-md">TRV-99812</span>
                </div>
              </div>
            </div>

            {/* Program Referral */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm flex flex-col justify-center h-56">
              <div className="mb-5">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-1">
                  <Users size={18} className="text-indigo-500" />
                  Program Referral
                </h3>
                <p className="text-xs font-medium text-slate-500">Bagikan kodemu ke teman dan dapatkan ekstra 500 Poin untuk setiap pendaftaran.</p>
              </div>
              <div className="space-y-3">
                <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">Creator Code</p>
                <div className="bg-indigo-50/50 border border-indigo-100 rounded-xl p-3 flex justify-between items-center">
                  <span className="font-mono text-base font-bold text-indigo-700 tracking-wider">AYUSARA-2026</span>
                  <button onClick={handleCopy} className={`p-2 rounded-lg transition-colors ${copied ? 'bg-emerald-100 text-emerald-600' : 'bg-white shadow-sm text-slate-500 hover:text-indigo-600 border border-slate-200'}`}>
                    {copied ? <CheckCircle2 size={18} /> : <Copy size={18} />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { label: "Total Perjalanan", value: "12", icon: MapPin },
              { label: "Booking Aktif", value: "2", icon: CalendarDays },
              { label: "Voucher Tersedia", value: "4", icon: Ticket },
              { label: "Teman Diundang", value: "8", icon: Users },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:border-indigo-200 transition-colors">
                <div className="bg-indigo-50 p-3.5 rounded-xl text-indigo-600 shrink-0">
                  <stat.icon size={22} />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-slate-900">{stat.value}</p>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION: BOOKING ================= */}
        <section id="booking" className="scroll-mt-28">
          <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-indigo-50 to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Search size={22} className="text-indigo-600" />
                Mulai Booking Perjalanan Baru
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase">Dari (Asal)</label>
                  <div className="flex items-center border border-slate-200 rounded-xl px-4 py-3 bg-slate-50 focus-within:border-indigo-500 focus-within:bg-white transition-colors">
                    <Plane size={18} className="text-slate-400 mr-2" />
                    <input type="text" placeholder="Jakarta (CGK)" className="bg-transparent w-full outline-none text-sm font-medium text-slate-900" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase">Ke (Tujuan)</label>
                  <div className="flex items-center border border-slate-200 rounded-xl px-4 py-3 bg-slate-50 focus-within:border-indigo-500 focus-within:bg-white transition-colors">
                    <MapPin size={18} className="text-slate-400 mr-2" />
                    <input type="text" placeholder="Pilih destinasi..." className="bg-transparent w-full outline-none text-sm font-medium text-slate-900" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase">Tanggal Keberangkatan</label>
                  <div className="flex items-center border border-slate-200 rounded-xl px-4 py-3 bg-slate-50 focus-within:border-indigo-500 focus-within:bg-white transition-colors">
                    <CalendarDays size={18} className="text-slate-400 mr-2" />
                    <input type="date" className="bg-transparent w-full outline-none text-sm font-medium text-slate-900" />
                  </div>
                </div>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white w-full py-3.5 rounded-xl font-bold text-sm transition-transform hover:-translate-y-0.5 shadow-md">
                  Cari Tiket
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION: RIWAYAT & POIN ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* KIRI: Riwayat (Lebar 2/3) */}
          <section id="riwayat" className="lg:col-span-2 scroll-mt-28">
            <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm h-full">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <History size={20} className="text-slate-400" />
                  Aktivitas & Riwayat
                </h2>
                <button className="text-indigo-600 font-semibold text-sm hover:underline">Lihat Semua</button>
              </div>

              <div className="space-y-4">
                {trips.map((trip, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition-all gap-4">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-500 border border-slate-200 shrink-0">
                        <Plane size={20} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900">{trip.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <MapPin size={14} className="text-slate-400" />
                          <p className="text-sm font-medium text-slate-500">{trip.location} <span className="mx-1.5 text-slate-300">•</span> {trip.date}</p>
                        </div>
                      </div>
                    </div>
                    <span className={`${trip.statusColor} px-4 py-1.5 rounded-xl text-xs font-bold shrink-0 self-start sm:self-center`}>
                      {trip.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* KANAN: Poin & Reward (Lebar 1/3) */}
          <section id="poin" className="scroll-mt-28">
            <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm h-full">
               <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Ticket size={20} className="text-indigo-500" />
                  Tukar Poin
                </h2>
                <span className="text-xs font-bold bg-indigo-50 text-indigo-700 px-2 py-1 rounded-md">2,450 pts</span>
              </div>

              <div className="space-y-4">
                {/* Contoh Reward 1 */}
                <div className="border border-slate-100 rounded-2xl p-4 flex items-center gap-4 hover:border-indigo-200 transition-colors group cursor-pointer">
                  <div className="bg-orange-50 p-3 rounded-xl text-orange-500 group-hover:bg-orange-100">
                    <Coffee size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-slate-900">Akses Airport Lounge</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Berlaku di Soekarno-Hatta</p>
                  </div>
                  <div className="text-right">
                    <span className="text-indigo-600 font-bold text-sm block">1,200</span>
                    <span className="text-[10px] text-slate-400 uppercase font-bold">Poin</span>
                  </div>
                </div>

                {/* Contoh Reward 2 */}
                <div className="border border-slate-100 rounded-2xl p-4 flex items-center gap-4 hover:border-indigo-200 transition-colors group cursor-pointer">
                  <div className="bg-emerald-50 p-3 rounded-xl text-emerald-500 group-hover:bg-emerald-100">
                    <Star size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-slate-900">Diskon Hotel 20%</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Semua jaringan Marriott</p>
                  </div>
                  <div className="text-right">
                    <span className="text-indigo-600 font-bold text-sm block">2,000</span>
                    <span className="text-[10px] text-slate-400 uppercase font-bold">Poin</span>
                  </div>
                </div>

                <button className="w-full mt-2 py-3 bg-slate-50 hover:bg-slate-100 text-slate-600 text-sm font-bold rounded-xl transition-colors flex justify-center items-center gap-1">
                  Lihat Semua Reward <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </section>

        </div>

        {/* ================= SECTION: BANTUAN ================= */}
        <section id="bantuan" className="scroll-mt-28">
           <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -z-0 pointer-events-none"></div>
            
            <div className="relative z-10 flex-1">
              <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Headphones size={22} className="text-indigo-500" />
                Butuh Bantuan Perjalanan?
              </h2>
              <p className="text-sm text-slate-500 mb-6 max-w-lg">
                Sebagai <span className="font-bold text-indigo-600">Gold Member</span>, Anda berhak mendapatkan akses layanan prioritas 24/7 tanpa antre. Hubungi Dedicated Travel Agent Anda sekarang.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <button className="flex justify-center items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl text-sm font-bold transition-transform hover:-translate-y-0.5 shadow-md">
                  <MessageSquare size={18} />
                  Live Chat Sekarang
                </button>
                <button className="flex justify-center items-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-6 py-3 rounded-xl text-sm font-bold transition-colors">
                  <CalendarDays size={18} />
                  Jadwalkan Konsultasi
                </button>
              </div>
            </div>

            {/* Profile Agent */}
            <div className="relative z-10 text-center bg-slate-50 p-6 rounded-2xl border border-slate-100 min-w-[250px]">
              <div className="relative inline-block mb-3">
                <img src="https://i.pravatar.cc/150?img=68" alt="Agent" className="w-20 h-20 rounded-full mx-auto border-4 border-white shadow-sm" />
                <span className="absolute bottom-1 right-0 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
              </div>
              <h3 className="text-base font-bold text-slate-900">Bima Anugerah</h3>
              <p className="text-xs font-medium text-slate-500 mt-1 uppercase tracking-wider">Dedicated Agent</p>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
};

export default Member;