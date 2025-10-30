import { Calendar, Users, Clock, MessageSquare, ChevronRight, Search, Filter, Repeat } from 'lucide-react';
import { upcomingSessions, pastGroups,  } from '../Json/dummy';
import MiniHeader from '../Components/Layout/MiniHeader';
import QuickActions from '../Components/Layout/QuickActions';


const Dashboard = () => {


  return (
    <div className="min-h-screen mt-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">

       <MiniHeader />
    
      <div className="max-w-7xl mx-auto px-6 py-8">
                
      <QuickActions />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2">
             
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Upcoming Sessions
              </h2>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search sessions..."
                    className="pl-10 pr-4 py-2 bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="p-2 bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <Filter size={20} className="text-gray-600 dark:text-gray-300" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {upcomingSessions.map((session) => (
                <div
                  key={session.id}
                  className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl flex items-center justify-center">
                        <Calendar className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {session.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {session.subject} • {session.skillLevel}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center gap-2">
                        <Users size={16} />
                        <span>{session.members}/{session.maxMembers} members</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{session.date} • {session.time}</span>
                      </div>
                      <div className="text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">
                        {session.duration}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="cursor-pointer px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-xl hover:from-blue-700 hover:to-purple-800 transition-all duration-200 transform hover:scale-105">
                        Join Session
                      </button>
                      <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                        <MessageSquare size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Your Study Groups
              </h3>
              
              <div className="space-y-4">
                {pastGroups.map((group) => (
                  <div
                    key={group.id}
                    className="group p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-purple-900/20 rounded-xl border border-blue-100 dark:border-purple-800 hover:shadow-md transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">
                        {group.sessionsCompleted} sessions
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {group.lastActive}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {group.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      {group.subject} • {group.skillLevel}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <Users size={14} />
                        <span>{group.members} members</span>
                      </div>
                      <button className="flex cursor-pointer items-center gap-1 text-sm bg-gradient-to-r from-green-600 to-blue-700 text-white px-3 py-1 rounded-lg hover:from-green-700 hover:to-blue-800 transition-all duration-200">
                        <Repeat size={14} />
                        Repost
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

             
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-6 shadow-2xl">
              <h3 className="text-white text-lg font-semibold mb-4">
                Your Progress This Week
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between text-blue-100">
                  <span>Study Sessions</span>
                  <span className="font-semibold">3/5</span>
                </div>
                <div className="w-full bg-blue-500/30 rounded-full h-2">
                  <div 
                    className="bg-white h-2 rounded-full transition-all duration-500"
                    style={{ width: '60%' }}
                  ></div>
                </div>
                
                <div className="flex justify-between text-blue-100 mt-4">
                  <span>Groups Active</span>
                  <span className="font-semibold">2/3</span>
                </div>
                <div className="w-full bg-blue-500/30 rounded-full h-2">
                  <div 
                    className="bg-white h-2 rounded-full transition-all duration-500"
                    style={{ width: '66%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;