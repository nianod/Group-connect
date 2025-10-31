import React, { useState } from 'react';
import { Mail, Edit3,Camera, Save, X, Trash2, Plus, Calendar } from 'lucide-react';
import md5 from "md5"

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [user, setUser] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@university.edu",
    role: "Student",
    university: "University of California",
    bio: "Computer Science major passionate about algorithms and machine learning. Always looking for study partners to collaborate with!",
    avatar: null
  });

 

const getGravatar = (email: string) => {
  const hash = md5(email.trim().toLowerCase());
  return `https://www.gravatar.com/avatar/${hash}?d=identicon&s=200`;
};


  const [editedUser, setEditedUser] = useState(user);

  const groupStats = [
    { icon: Plus, label: "Groups Created", value: "3", color: "from-blue-600 to-purple-700" },
    { icon: Calendar, label: "Active Groups", value: "4", color: "from-purple-600 to-pink-700" },
  ];

  const handleSave = () => {
    setUser(editedUser);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedUser(user);
    setIsEditing(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setEditedUser({ ...editedUser, avatar: e.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteAccount = () => {
    // Add account deletion logic here
    console.log("Account deletion requested");
    setShowDeleteConfirm(false);
  };

  return (
    <div className="min-h-screen mt-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 py-8">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Profile</h1>
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="flex cursor-pointer items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-800 transition-all duration-200 transform hover:scale-105"
            >
              <Edit3 size={20} />
              Edit Profile
            </button>
          ) : (
            <div className="flex gap-3">
              <button
                onClick={handleCancel}
                className="flex cursor-pointer items-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl hover:border-red-500 dark:hover:border-red-400 transition-colors"
              >
                <X size={20} />
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex items-center cursor-pointer gap-2 bg-gradient-to-r from-green-600 to-blue-700 text-white px-6 py-3 rounded-xl hover:from-green-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105"
              >
                <Save size={20} />
                Save Changes
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Card */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-6">
                {/* Avatar Section */}
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full flex items-center justify-center text-white text-2xl font-bold">                        
                      <img 
                        src={user.avatar || getGravatar(user.email)} 
                        alt={user.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                     
                  </div>
                  {isEditing && (
                    <label className="absolute bottom-0 right-0 bg-white dark:bg-gray-700 p-2 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform duration-200">
                      <Camera size={16} className="text-gray-600 dark:text-gray-300" />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>

                {/* User Info */}
                <div className="flex-1 space-y-4">
                  {isEditing ? (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={editedUser.name}
                          onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
                          className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          value={editedUser.email}
                          onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
                          className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Bio
                        </label>
                        <textarea
                          value={editedUser.bio}
                          onChange={(e) => setEditedUser({ ...editedUser, bio: e.target.value })}
                          rows={3}
                          className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {user.name}
                        </h2>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-4">
                          <Mail size={18} />
                          <span>{user.email}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {user.bio}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Group Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {groupStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="text-white" size={24} />
                  </div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Actions */}
          <div className="space-y-6">
            {/* Account Actions */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Account Actions
              </h3>
              <div className="space-y-3">
                <button
                  onClick={() => setIsEditing(true)}
                  className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 text-left"
                >
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    <Edit3 size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Edit Profile</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Update your information</p>
                  </div>
                </button>
                
                <button
                  onClick={() => setShowDeleteConfirm(true)}
                  className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200 text-left"
                >
                  <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400">
                    <Trash2 size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Delete Account</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Permanently remove your account</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
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
                  <Trash2 className="text-red-600 dark:text-red-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Delete Account?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  This action cannot be undone. All your data, groups, and sessions will be permanently removed.
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

export default Profile;