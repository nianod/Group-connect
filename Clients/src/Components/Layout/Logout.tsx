import { Trash2 } from "lucide-react";
interface LogoutProps {
  showDeleteConfirm: boolean;
  setShowDeleteConfirm: (value: boolean) => void;
}

const Logout: React.FC<LogoutProps> = ({
  showDeleteConfirm,
  setShowDeleteConfirm,
}) => {
  const handleDeleteAccount = () => {
    //delete lgc
   console.log("Account deletion requested");
    setShowDeleteConfirm(false);
  };

  return (
    <div>
      {showDeleteConfirm && (
        <>
          <div
            className="fixed inset-0 backdrop-blur-md"
            onClick={() => setShowDeleteConfirm(false)}
          />
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999] w-96">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trash2
                    className="text-red-600 dark:text-red-400"
                    size={24}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Delete Account?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  This action cannot be undone. All your data, groups, and
                  sessions will be permanently removed.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowDeleteConfirm(false)}
                    className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-3 rounded-xl hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDeleteAccount}
                    className="flex-1 bg-red-600 text-white py-3 rounded-xl hover:bg-red-700 transition-colors"
                  >
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Logout;
