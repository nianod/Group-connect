import { Bell } from "lucide-react";
import { getGreeting } from "../../Utilities/greeting";
import { useState } from "react";
import Menu from "./Menu";
import { useFetchUser } from "../../Hooks/UseFetchUsers";
import md5 from "md5";

const MiniHeader = () => {
  const [userMenu, setUserMenu] = useState<boolean>(false);
  const greeting = getGreeting();
  const { user } = useFetchUser();

  
  const gravatarUrl = user?.email
    ? `https://www.gravatar.com/avatar/${md5(user.email.trim().toLowerCase())}?d=identicon`
    : "https://www.gravatar.com/avatar/?d=mp"; 

  return (
    <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
       
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {greeting} {user?.name}!
            </h1>
          </div>
 
          <div className="flex items-center gap-4 relative z-50">
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <Bell className="text-gray-600 dark:text-gray-300" size={20} />
            </button>

       
            <button
              onClick={() => setUserMenu(!userMenu)}
              className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-600 cursor-pointer"
            >
              <img
                src={gravatarUrl}
                alt={`${user?.name || "User"}'s avatar`}
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>
      </div>

      <Menu userMenu={userMenu} setUserMenu={setUserMenu} />
    </header>
  );
};

export default MiniHeader;
