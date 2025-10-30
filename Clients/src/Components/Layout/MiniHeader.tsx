import { Bell } from "lucide-react";
import { getGreeting } from "../../Utilities/greeting";
import { useState } from "react";

const MiniHeader = () => {
  const greeting = getGreeting();

  const [user] = useState({
    name: "Alex Johnson",
    role: "Student",
    university: "University of California",
  });

  return (
    <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {greeting} {user.name}!
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                {user.role} • {user.university}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <Bell className="text-gray-600 dark:text-gray-300" size={20} />
            </button>
            <button className="w-10 h-10 cursor-pointer bg-gradient-to-r from-blue-600 to-purple-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                {user.name.charAt(0)}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MiniHeader;
