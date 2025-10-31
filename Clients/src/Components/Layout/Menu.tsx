import { Link } from "react-router-dom";
import { User, LogOut, ChevronRight } from "lucide-react"

interface MenuProps {
  userMenu: boolean;
  setUserMenu: (value: boolean) => void;
}

const Menu = ({ userMenu, setUserMenu }: MenuProps) => {
  const user = {
    name: "Alex Johnson",
    email: "alex.johnson@university.edu",
    role: "Student",
  };

  const menuItems = [
    {
      icon: User,     
      label: "Profile",
      description: "View your profile",
      href: "/profile",
      color: "text-blue-600",
    },
  ];

  const handleLogout = () => {
    console.log("Logging out...");
    setUserMenu(false);
  };

  if (!userMenu) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[9998] bg-black/10"
        onClick={() => setUserMenu(false)}
      />

      <div className="fixed top-18 right-6 z-[9999] w-60">
        <div className="bg-white/95 dark:bg-gray-600 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-2">
          <div className="p-2 border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 dark:text-white truncate">
                  {user.name}
                </p>
              </div>
            </div>
          </div>
          <div className="">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                onClick={() => setUserMenu(false)}
                className="flex items-center gap-3 p-1 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 group cursor-pointer"
              >
                <div
                  className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-700 group-hover:scale-110 transition-transform duration-200 ${item.color}`}
                >
                  <item.icon size={18} />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 dark:text-white">
                    {item.label}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-300 truncate">
                    {item.description}
                  </p>
                </div>
                <ChevronRight
                  size={16}
                  className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors"
                />
              </Link>
            ))}
          </div>

          <div className="p-2 border-t border-gray-100 dark:border-gray-700">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full p-1 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 transition-all duration-200 group cursor-pointer"
            >
              <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30 group-hover:scale-110 transition-transform duration-200">
                <LogOut size={18} />
              </div>
              <span className="font-medium">Log Out</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
