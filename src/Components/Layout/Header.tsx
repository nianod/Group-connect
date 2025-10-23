import { Link } from "react-router-dom"
import { Moon, Sun, ArrowRight } from "lucide-react"
import { useSelector, useDispatch } from "react-redux"
import { toggleTheme } from "../Theme/ThemeSlice"
import { useEffect } from "react"


const Header = () => {


  const theme = useSelector((state: any) => state.theme.theme)
  const dispatch = useDispatch()


  useEffect(() =>{
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

    const headerItems = {
        title: "Group Connect",
        image: "/logoipsum-357.svg"
    }
  return (
    <div className="fixed top-0 z-30 w-full border- border-gray-600 flex justify-between items-center p-2 bg-[#d4d4d4] dark:bg-gray-900 text-black dark:text-white">
      <div className="flex items-center gap-2 p">
        <img src={headerItems.image} alt="Arnold" />
        <Link to="/" className="font-bold text-xl text-black dark:text-white">
          {headerItems.title}
        </Link>
      </div>
      <div className="flex gap-5">
 
        <button
          
          onClick={() => dispatch(toggleTheme())}
          className="text-[10px] hover:bg-gray-700 rounded p-1 cursor-pointer text-black dark:text-white"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </div>
  );
}

export default Header
