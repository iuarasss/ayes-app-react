import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex bg-[#f5f7fb] min-h-screen">

      <Sidebar />

      <div className="ml-64 w-full">
        {children}
      </div>

    </div>
  );
};

export default DashboardLayout;