import Nav from "../components/Nav";
import Analytics from "../components/Analytics";
function MainBody() {
  return (
    <div className="mid-section bg-[#f5f9ff] sm:w-5/6 md:w-5/6 w-4/6 p-6">
        <Nav />
        <Analytics />
    </div>
  )
}

export default MainBody