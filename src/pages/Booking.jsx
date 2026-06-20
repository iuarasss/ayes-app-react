import React, { useRef, useEffect } from "react";

const Booking = () => {

  const nameRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  return (
    <div className="pt-32 pb-20 container mx-auto px-6 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Book Your Next Trip
      </h1>

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <form className="space-y-6">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>

            <input
              ref={nameRef}
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1679ab]"
            />

          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Leaving From
              </label>

              <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1679ab]">
                <option>Dubai (DXB)</option>
                <option>Jakarta (CGK)</option>
                <option>New York (JFK)</option>
                <option>London (LHR)</option>
              </select>
            </div>


            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Going To
              </label>

              <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1679ab]">
                <option>Istanbul (IST)</option>
                <option>Japan (HND)</option>
                <option>Miami (MIA)</option>
                <option>Paris (CDG)</option>
              </select>

            </div>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Departure Date
              </label>

              <input
                type="date"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1679ab]"
              />

            </div>


            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Return Date
              </label>

              <input
                type="date"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1679ab]"
              />

            </div>

          </div>


          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Passengers
            </label>

            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1679ab]"
            />

          </div>


          <button
            type="button"
            className="w-full bg-[#1679ab] text-white py-4 rounded-xl font-bold hover:bg-[#115b82] transition mt-8 text-lg"
          >
            Confirm Booking
          </button>


        </form>
      </div>

    </div>
  );
};

export default Booking;