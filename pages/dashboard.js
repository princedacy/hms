// import { Sidebar, Header, Footer } from '../components';
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";
import Analytics from "../components/Analytics";
import BusinessProfile from "../components/BusinessProfile";

export default function Dashboard() {
  return (
    <div className="w-full flex">
      <Sidebar />
      <div className="mid-section bg-[#f5f9ff] sm:w-5/6 md:w-5/6 w-4/6 p-6">
        <Nav />
        <Analytics />
      </div>
      <aside className="sm:hidden md:hidden w-1/6 p-6 border-l">
        <BusinessProfile />
      </aside>
    </div>
  );
}
