import { Link } from "react-router-dom"
const Header = () => {

    const headerItems = {
        title: "Group Connect",
        image: "/logoipsum-357.svg"
    }
  return (
    <div>
        <div>
            <Link to="/">{headerItems.title}</Link>
        </div>
    </div>
  )
}

export default Header
