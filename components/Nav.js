import Welcome from "./Welcome"
import Search from "./Search"

function Nav() {
  return (
    <div className="w-full flex items-center justify-between">
        <Welcome />
        <Search/>
    </div>
  )
}

export default Nav