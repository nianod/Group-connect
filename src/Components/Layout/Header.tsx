import { Link } from "react-router-dom"
import { Moon, Sun } from "lucide-react"
const Header = () => {

    const headerItems = {
        title: "Group Connect",
        image: "/logoipsum-357.svg"
    }
  return (
    <div className="fixed z-30 w-full border-b border-gray-600">
        <div className="flex bg-[black] items-center gap-2 p-3">
            <img src={headerItems.image} alt="Arnold" />
            <Link
             to="/"
             className="text-white"
            >
              {headerItems.title}
            </Link>
        </div>
        <div>
          <button>
            
            {/* {theme === "dark" ? <Sun /> : <Moon />} */}
          </button>
        </div>
    </div>
  )
}

export default Header
