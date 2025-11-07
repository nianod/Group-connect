 import { Link } from "react-router-dom";
import { quickActions } from "../../Json/dummy";

interface QuickActionsProps {
  onCreateGroup?: () => void;
}

const QuickActions = ({ onCreateGroup }: QuickActionsProps) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {quickActions.map((action, index) => {
          const ActionIcon = action.icon;
         
          const isCreateGroup = action.label === "Create Group";

          return isCreateGroup ? (
            <div
              key={index}
              onClick={onCreateGroup}  
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700 cursor-pointer"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <ActionIcon className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {action.label}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {action.description}
              </p>
            </div>
          ) : (
            <Link
              key={index}
              to={action.link}
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700 cursor-pointer"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <ActionIcon className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {action.label}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {action.description}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;
