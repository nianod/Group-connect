import { Link } from "react-router-dom"
const Header = () => {

    const headerItems = {
        title: "Group Connect",
        image: "/logoipsum-357.svg"
    }
  return (
    <div className="fixed z-30 p-3">
        <div>
            <img src={headerItems.image} alt="Arnold" />
            <Link to="/">{headerItems.title}</Link>
        </div>
    </div>
  )
}

export default Header
