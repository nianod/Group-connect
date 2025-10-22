import { Link } from "react-router-dom"
import { Moon, Sun } from "lucide-react"
import { useSelector, useDispatch } from "react-redux"
import { toggleTheme } from "../Theme/ThemeSlice"
import { useEffect } from "react"


const Header = () => {


  const theme = useSelector((state) => state.theme.theme)
  const dispatch = useDispatch()


  useEffect(() =>{
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

    const headerItems = {
        title: "Group Connect",
        image: "/logoipsum-357.svg"
    }
  return (
    <div className="fixed z-30 w-full border-   border-gray-600 flex justify-between items-center p-2 bg-white dark:bg-gray-900 text-black dark:text-white">
      
        <div className="flex items-center gap-2 p-3">
            <img src={headerItems.image} alt="Arnold" />
            <Link
             to="/"
             className="text-white font-bold text-xl"
            >
              {headerItems.title}
            </Link>
        </div>
        <div>
          <button onClick={() => dispatch(toggleTheme())}
            className="text-white text-[10px] hover:bg-gray-700 rounded p-1 cursor-pointer "
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
       
        </div>
    </div>
  )
}

export default Header
