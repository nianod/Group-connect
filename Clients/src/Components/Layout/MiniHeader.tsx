import { Bell } from "lucide-react";
import { getGreeting } from "../../Utilities/greeting";
import { useState } from "react";
import Menu from "./Menu";
import { useFetchUser } from "../../Hooks/UseFetchUsers";

const MiniHeader = () => {
  const [userMenu, setUserMenu] = useState<boolean>(false);
  const greeting = getGreeting();
  const {user} = useFetchUser()

  // const [user] = useState({
  //   name: "Alex Johnson",

  //   university: "University of California",
  // });

  return (
    <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {greeting} {user?.name}!
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-4 relative z-50">
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <Bell className="text-gray-600 dark:text-gray-300" size={20} />
            </button>
            <button
              onClick={() => setUserMenu(!userMenu)}
              className="w-10 h-10 cursor-pointer bg-gradient-to-r from-blue-600 to-purple-700 rounded-full flex items-center justify-center relative z-50"
            >
              <span className="text-white font-bold text-lg">
                {user?.name.charAt(0)}
              </span>
            </button>
          </div>
        </div>
      </div>
      <Menu userMenu={userMenu} setUserMenu={setUserMenu} />
    </header>
  );
};

export default MiniHeader;
