// import { Sidebar, Header, Footer } from '../components';
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"
import Nav from "../components/Nav"
import Analytics from "../components/Analytics"

export default function Dashboard(){
    return(
        <div className="w-full flex">
            {/* <Header /> */}
            <Sidebar />
            <div className="mid-section bg-[#f5f9ff] sm:w-5/6 md:w-5/6 w-4/6 p-6">
            <Nav />
            <Analytics />
            </div>
            {/* <Footer /> */}
        </div>
    )
}