import Sidebar from "@/components/dashboard/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full h-screen">
      <Sidebar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;