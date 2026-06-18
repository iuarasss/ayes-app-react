import React from "react";
import {
  Plane,
  Hotel,
  MapPin,
  Calendar,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Star,
} from "lucide-react";

const Guest = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* ================= HERO SECTION & NAVBAR ================= */}
      <div className="relative h-[600px] xl:h-[700px] w-full">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=2074"
            alt="Hero Background"
            className="w-full h-full object-cover brightness-75"
          />
        </div>

        {/* Navbar (Transparent) */}
        <nav className="relative z-10 w-full pt-6 px-6 lg:px-12 flex justify-between items-center text-white">
          <div className="text-2xl font-bold tracking-tight cursor-pointer">
            Trip<span className="text-sky-400">ora.</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#" className="hover:text-sky-400 transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-sky-400 transition-colors">
              Offers
            </a>
            <a href="#" className="hover:text-sky-400 transition-colors">
              Destinations
            </a>
            <a href="#" className="hover:text-sky-400 transition-colors">
              Blog
            </a>
            <a href="#" className="hover:text-sky-400 transition-colors">
              Testimonial
            </a>
            <a href="#" className="hover:text-sky-400 transition-colors">
              Contact Us
            </a>
          </div>
          <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/50 text-white px-5 py-2 rounded-full text-sm font-bold transition-all">
            Sign In
          </button>
        </nav>

        {/* Hero Text */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 -mt-16">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Explore, Dream, Travel
          </h1>
          <p className="text-lg text-white/90 max-w-2xl font-medium">
            Discover the most beautiful places in the world with exclusive
            deals.
          </p>
        </div>
      </div>

      {/* ================= SEARCH WIDGET (Overlapping Hero) ================= */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-20 -mt-24 mb-20">
        <div className="bg-white/40 backdrop-blur-md p-2 rounded-[2rem] w-fit mx-auto mb-4 border border-white/20">
          <div className="flex bg-white rounded-full p-1 shadow-sm">
            <button className="flex items-center gap-2 bg-sky-500 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md">
              <Plane size={16} /> Flight
            </button>
            <button className="flex items-center gap-2 text-slate-500 hover:text-slate-800 px-6 py-2.5 rounded-full text-sm font-bold transition-colors">
              <Hotel size={16} /> Hotel
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-4 justify-between border border-slate-100">
          <div className="flex-1 w-full flex items-center bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3">
            <div className="flex-1">
              <p className="text-[10px] uppercase font-bold text-slate-400 mb-0.5">
                Living From
              </p>
              <h4 className="text-sm font-bold text-slate-900">
                Jakarta (CGK)
              </h4>
            </div>
            <MapPin size={20} className="text-slate-400" />
          </div>

          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 shrink-0 hidden md:flex">
            <ArrowRight size={16} />
          </div>

          <div className="flex-1 w-full flex items-center bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3">
            <div className="flex-1">
              <p className="text-[10px] uppercase font-bold text-slate-400 mb-0.5">
                Going To
              </p>
              <h4 className="text-sm font-bold text-slate-900">
                Istanbul (IST)
              </h4>
            </div>
            <MapPin size={20} className="text-slate-400" />
          </div>

          <div className="flex-1 w-full flex items-center gap-4 bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3">
            <div className="flex-1">
              <p className="text-[10px] uppercase font-bold text-slate-400 mb-0.5">
                Depart
              </p>
              <h4 className="text-sm font-bold text-slate-900">12 Jan, Sat</h4>
            </div>
            <div className="w-px h-8 bg-slate-300"></div>
            <div className="flex-1">
              <p className="text-[10px] uppercase font-bold text-slate-400 mb-0.5">
                Return
              </p>
              <h4 className="text-sm font-bold text-slate-900">14 Jan, Thu</h4>
            </div>
            <Calendar size={20} className="text-slate-400" />
          </div>
        </div>
      </div>

      {/* ================= UPCOMING OFFERS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mb-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Upcoming Offers
          </h2>
          <p className="text-slate-500 text-sm">
            Best deals for your next adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Miami Beaches",
              price: "$550",
              img: "https://images.unsplash.com/photo-1514365313628-984407b46d7e?auto=format&fit=crop&q=80&w=800",
            },
            {
              title: "Japan Sakura",
              price: "$1200",
              img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800",
            },
            {
              title: "Dubai Luxury",
              price: "$850",
              img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800",
            },
            {
              title: "Taj Mahal",
              price: "$420",
              img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800",
            },
            {
              title: "New York City",
              price: "$680",
              img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800",
            },
            {
              title: "Greece Santorini",
              price: "$750",
              img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5f1?auto=format&fit=crop&q=80&w=800",
            },
          ].map((offer, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-4 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                <img
                  src={offer.img}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-bold text-slate-800">
                  <Star size={12} className="inline text-yellow-500 mr-1" /> 4.8
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-lg font-bold text-slate-900 text-center mb-4">
                  {offer.title}
                </h3>
                <div className="flex justify-between items-center text-xs font-semibold text-slate-500 mb-6">
                  <span className="bg-sky-50 text-sky-600 px-3 py-1 rounded-md">
                    2 Days 3 Nights
                  </span>
                  <span>Flight + Hotel</span>
                </div>
                <div className="flex justify-between items-center border-t border-slate-100 pt-4">
                  <div>
                    <span className="text-xl font-extrabold text-slate-900">
                      {offer.price}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      /Person
                    </span>
                  </div>
                  <button className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-xl text-sm font-bold transition-colors shadow-md shadow-sky-500/20">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= DISCOVER SECTION ================= */}
      <section className="bg-orange-50/50 py-20 mb-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full relative">
            <img
              src="https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?auto=format&fit=crop&q=80&w=1000"
              alt="Discover the World"
              className="w-full h-[400px] object-cover rounded-3xl shadow-lg"
            />
          </div>
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
              Discover the world with us
            </h2>
            <p className="text-slate-500 leading-relaxed font-medium">
              Would you explore nature paradise in the world, let's find the
              best destination in world with us. Would you explore nature
              paradise in the world, let's find the best destination in world
              with us.
            </p>
            <button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3.5 rounded-full text-sm font-bold transition-colors shadow-md">
              Find Out More
            </button>
          </div>
        </div>
      </section>

      {/* ================= DESTINATIONS CAROUSEL ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mb-12 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
            Destinations You Shouldn't Miss
          </h2>
          <p className="text-slate-500 text-sm font-medium mb-8">
            Discover your destinations and contact our experts for the best
            deals!
          </p>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center hover:bg-slate-300 transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors shadow-md">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="md:w-2/3 flex gap-6 overflow-hidden">
          {[
            {
              name: "Indonesia",
              img: "https://images.unsplash.com/photo-1553626599-5667e412586e?auto=format&fit=crop&q=80&w=600",
            },
            {
              name: "Santorini",
              img: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=600",
            },
            {
              name: "Amazon",
              img: "https://images.unsplash.com/photo-1518182170546-076616fd449a?auto=format&fit=crop&q=80&w=600",
            },
          ].map((dest, i) => (
            <div
              key={i}
              className="relative w-48 h-72 rounded-[2rem] overflow-hidden shrink-0 group cursor-pointer shadow-sm"
            >
              <img
                src={dest.img}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-center pb-6">
                <h3 className="text-white font-bold tracking-wide">
                  {dest.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ARTICLES / BLOG ================= */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-12">
            Read Before You Travel
          </h2>

          <div className="space-y-12">
            {/* Article 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
              <div className="md:w-1/2 h-64 rounded-3xl overflow-hidden shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&q=80&w=800"
                  alt="Nusa Penida"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 space-y-4">
                <h3 className="text-xl font-extrabold text-slate-900 uppercase">
                  Nusa Penida Island Guide
                </h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">
                  The beautiful, exotic Nusa Penida Island lies just 25
                  kilometers from Bali, the most famous tourist destinations in
                  Indonesia.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-sky-600 font-bold text-sm hover:underline"
                >
                  Read More <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>

            {/* Article 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
              <div className="md:w-1/2 h-64 rounded-3xl overflow-hidden shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&q=80&w=800"
                  alt="Waterfalls"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 space-y-4 text-left md:text-right">
                <h3 className="text-xl font-extrabold text-slate-900 uppercase">
                  17 Best Waterfalls in Indonesia
                </h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">
                  Putting together an Indonesia waterfall guide is tough,
                  because there are so many great waterfalls in this country.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center justify-end w-full text-sky-600 font-bold text-sm hover:underline"
                >
                  Read More <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-16">
          What Customers Say About Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item, i) => (
            <div
              key={i}
              className={`bg-white rounded-3xl p-8 border ${i === 1 ? "border-sky-200 shadow-xl scale-105" : "border-slate-100 shadow-sm"} relative mt-6`}
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md">
                <img
                  src={`https://i.pravatar.cc/150?img=${i + 10}`}
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center mt-6">
                <h4 className="font-bold text-slate-900">Halima Meyer</h4>
                <div className="flex justify-center gap-1 my-3 text-yellow-400">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
                <p className="text-slate-500 text-sm italic">
                  "Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum."
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-12">
          <div className="w-2 h-2 rounded-full bg-slate-300"></div>
          <div className="w-6 h-2 rounded-full bg-sky-500"></div>
          <div className="w-2 h-2 rounded-full bg-slate-300"></div>
        </div>
      </section>

      {/* ================= CTA BANNER ================= */}
      <section className="relative h-80 max-w-7xl mx-auto mb-16 rounded-[2rem] overflow-hidden mx-4 sm:mx-6 shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000"
          alt="Waves"
          className="absolute inset-0 w-full h-full object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-sky-900/20 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Register now for this weekend and
            <br />
            save up to 10%!
          </h2>
          <button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3.5 rounded-full font-bold shadow-lg transition-transform hover:-translate-y-1">
            Sign Up Now
          </button>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-white pt-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 gap-12 pb-12">
          <div className="space-y-4">
            <div className="text-2xl font-bold tracking-tight">
              Trip<span className="text-sky-500">ora.</span>
            </div>
            <p className="text-slate-500 text-sm">
              123 Travel Avenue, Suite 100
              <br />
              New York, NY 10001
            </p>
            <div>
              <p className="text-sm font-bold text-slate-900">
                Follow us on Social Media
              </p>
              <div className="flex gap-3 mt-2 text-slate-400">
                <div className="flex gap-3 mt-2 text-slate-400">
                  <a href="#" className="hover:text-sky-500">
                    F
                  </a>
                  <a href="#" className="hover:text-sky-500">
                    X
                  </a>
                  <a href="#" className="hover:text-sky-500">
                    IG
                  </a>
                  <a href="#" className="hover:text-sky-500">
                    YT
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-sky-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-500">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-500">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-500">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Our Instagram</h4>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="w-full aspect-square rounded-lg overflow-hidden"
                >
                  <img
                    src={`https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=150&q=80&sig=${i}`}
                    alt="Instagram"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Newsletter</h4>
            <p className="text-sm text-slate-500 mb-4">
              Sign up to get the latest deals and updates.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl text-sm outline-none focus:border-sky-500 focus:bg-white"
              />
              <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2.5 rounded-xl text-sm font-bold transition-colors">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="bg-slate-900 py-4 text-center text-slate-400 text-xs">
          © 2026 Triprora. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Guest;
