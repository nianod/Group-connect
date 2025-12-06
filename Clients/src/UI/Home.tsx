import { Users, Search, Filter, Repeat } from 'lucide-react';
import { pastGroups } from '../Json/dummy';
import MiniHeader from '../Components/Layout/MiniHeader';
import QuickActions from '../Components/Layout/QuickActions';
import { useState } from 'react';
import CreateGroup from '../Components/CreateGroup';
import UpcomingSessions from '../Components/UpComingSession';
import OnlineSession from '../Components/OnlineSession';
import NoteForm from '../Components/NoteForm';
import Notes from './Notes';

const Dashboard = () => {

  const [showCreateGroup, setShowCreateGroup] = useState(false);
  const [showOnlineSession, setShowOnlineSession] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [showNoteForm, setShowNoteForm] = useState(false);

  const handleCreateGroup = () => {
    setShowCreateGroup(true);
  };

  const handleCreateOnlineSession = () => {
    setShowOnlineSession(true);
  };

  const handleOpenNotes = () => {
    setShowNotes(true);
  };

  const handleCreateNote = () => {
    setShowNoteForm(true);
  };

  const handleCloseNotes = () => {
    setShowNotes(false);
  };

  return (
    <div className="min-h-screen mt-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <MiniHeader />
    
      <div className="max-w-7xl mx-auto px-6 py-8">
        <QuickActions 
          onCreateGroup={handleCreateGroup} 
          onCreateOnlineSession={handleCreateOnlineSession} 
          onCreateNote={handleOpenNotes}
        />
         
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
            <div className="h-[600px] overflow-y-auto pr-2"> 
              <div className="space-y-4">
                <UpcomingSessions />
              </div>
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

      
      {showCreateGroup && (
        <CreateGroup post={showCreateGroup} setPost={setShowCreateGroup} />
      )}
      
      {showOnlineSession && (
        <OnlineSession onlineSession={showOnlineSession} setOnlineSession={setShowOnlineSession} />
      )}
      
      
      {showNotes && (
        <Notes onCreate={handleCreateNote} onClose={handleCloseNotes} />
      )}
       
      {showNoteForm && (
        <NoteForm
          isOpen={showNoteForm}     
          onClose={() => setShowNoteForm(false)}
          onSubmit={(data) => {
            console.log("SUBMITTED: ", data);
            setShowNoteForm(false);
          }}
          loading={false}
        />
      )}
    </div>
  );
};

export default Dashboard;