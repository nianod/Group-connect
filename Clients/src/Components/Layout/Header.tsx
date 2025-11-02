import { Link } from "react-router-dom"
import { Moon, Sun } from "lucide-react"
import { useSelector, useDispatch } from "react-redux"
import { toggleTheme } from "../Theme/ThemeSlice"
import { useEffect } from "react"

const Header = () => {
  const theme = useSelector((state: any) => state.theme.theme)
  const dispatch = useDispatch()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const headerItems = {
    title: "Group Connect",
    image: "/logoipsum-357.svg"
  }

  return (
    <div className="fixed top-0 z-1000 w-full border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
      <div className="flex justify-between items-center px-6 py-4">
       
        <Link 
          to="/" 
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">G</span>
          </div>
          <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
            {headerItems.title}
          </span>
        </Link>
        
        <div className="flex items-center gap-4">
          <button
            onClick={() => dispatch(toggleTheme())}
            className="p-2 cursor-pointer rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-sm hover:shadow-md"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={20} className="text-yellow-500" />
            ) : (
              <Moon size={20} className="text-gray-600" />
            )}
          </button>

 
        </div>
      </div>
    </div>
  )
}

export default Header