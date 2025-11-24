import { useEffect, useState } from 'react';
import axios from 'axios';
import { Calendar, CheckCheck, ChevronRight, Clock, MessageSquare, Users, MapPin, Repeat, Calendar as CalendarIcon, Video, Globe, Link } from 'lucide-react';
import type { UpcomingSession } from '../Types/group';

const UpcomingSessions = () => {
  const [sessions, setSessions] = useState<UpcomingSession[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
const [physicalSessions, setPhysicalSessions] = useState<UpcomingSession[]>([]);
const [onlineSessions, setOnlineSessions] = useState<UpcomingSession[]>([]);

const token = localStorage.getItem("token")

useEffect(() => {
  const fetchPhysical = async () => {
    const groups = import.meta.env.VITE_BACKEND_URL;
    const res = await axios.get(`${groups}/groups`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setPhysicalSessions(res.data.groups);
  };

  const fetchOnline = async () => {
    const groups = import.meta.env.VITE_BACKEND_URL;
    const res = await axios.get(`${groups}/online`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setOnlineSessions(res.data.online);
  };

  Promise.all([fetchPhysical(), fetchOnline()]).finally(() => setLoading(false));
}, []);


 
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatCreatedAt = (dateString?: string) => {
    if (!dateString) return 'Recently';
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  // Helper function to check if session is online
  const isSessionOnline = (session: UpcomingSession): boolean => {
    return !!(session.isOnline || session.meetingLink || session.meetingPlatform);
  };

const sessions =
  sessionType === 'online'
    ? onlineSessions
    : sessionType === 'physical'
    ? physicalSessions
    : [...physicalSessions, ...onlineSessions];


  });

  if (loading) return <p>Loading sessions...</p>;

  return (
    <div className="space-y-4">
      {/* Session Type Filter */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setSessionType('all')}
          className={`px-4 py-2 rounded-xl transition-all duration-200 ${
            sessionType === 'all'
              ? 'bg-gradient-to-r from-blue-600 to-purple-700 text-white'
              : 'bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-500'
          }`}
        >
          All Sessions
        </button>
        <button
          onClick={() => setSessionType('online')}
          className={`px-4 py-2 rounded-xl transition-all duration-200 ${
            sessionType === 'online'
              ? 'bg-gradient-to-r from-green-600 to-blue-700 text-white'
              : 'bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-green-500'
          }`}
        >
          Online
        </button>
        <button
          onClick={() => setSessionType('physical')}
          className={`px-4 py-2 rounded-xl transition-all duration-200 ${
            sessionType === 'physical'
              ? 'bg-gradient-to-r from-orange-600 to-red-700 text-white'
              : 'bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-orange-500'
          }`}
        >
          Physical
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredSessions.slice().reverse().map((session, index) => {
          const isJoined = joinedSessions.includes(session._id);
          const isOnline = isSessionOnline(session);

          return (
            <div
              key={session._id || index}
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    isOnline 
                      ? 'bg-gradient-to-r from-green-600 to-blue-700' 
                      : 'bg-gradient-to-r from-blue-600 to-purple-700'
                  }`}>
                    {isOnline ? (
                      <Video className="text-white" size={24} />
                    ) : (
                      <Calendar className="text-white" size={24} />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {session.groupName}
                      </h3>
                      {isOnline && (
                        <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full text-xs font-medium">
                          Online
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {session.subject} • {session.skillLevel}
                    </p>
                  </div>
                </div>
                <ChevronRight className="text-gray-400 group-hover:text-gray-600 transition-colors" />
              </div>

              {session.description && (
                <div className="mt-3">
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {session.description}
                  </p>
                </div>
              )}

              <div className="flex items-center justify-between mt-4">
                <div className="flex flex-col gap-3">
                  {/* First row - Common details */}
                  <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-2">
                      <Users size={16} />
                      <span>1/ {session.maxMembers}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <p>
                        {formatDate(session.meetingDate)} •{' '}
                        <span className={`rounded px-2 ${
                          isOnline 
                            ? 'bg-green-700 text-green-200' 
                            : 'bg-blue-700 text-blue-200'
                        }`}>
                          {session.meetingTime}
                        </span>
                      </p>
                    </div>
                    {session.meetingFrequency && (
                      <div className="flex items-center gap-2">
                        <Repeat size={16} />
                        <span>{session.meetingFrequency}</span>
                      </div>
                    )}
                  </div>

                  {/* Second row - Conditional details */}
                  <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
                    {isOnline ? (
                      <>
                        {session.meetingPlatform && (
                          <div className="flex items-center gap-2">
                            <Globe size={16} />
                            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 rounded">
                              {session.meetingPlatform}
                            </span>
                          </div>
                        )}
                        {session.meetingLink && (
                          <div className="flex items-center gap-2">
                            <Link size={16} />
                            <a 
                              href={session.meetingLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                            >
                              Join Link
                            </a>
                          </div>
                        )}
                        {session.duration && (
                          <div className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>{session.duration}</span>
                          </div>
                        )}
                      </>
                    ) : (
                      session.location && (
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-2 rounded">
                            {session.location}
                          </span>
                        </div>
                      )
                    )}
                    {session.created_at && (
                      <div className="flex items-center gap-2">
                        <CalendarIcon size={16} />
                        <span>Created {formatCreatedAt(session.created_at)}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-2">
                  {isJoined ? (
                    <button
                      disabled
                      className="cursor-not-allowed px-4 py-2 bg-green-600 text-white rounded-xl flex items-center gap-2 transition-all duration-200"
                    >
                      <CheckCheck size={18} /> Joined
                    </button>
                  ) : (
                    <button
                      onClick={() => handleJoin(session._id)}
                      className={`cursor-pointer px-4 py-2 text-white rounded-xl transition-all duration-200 transform hover:scale-105 ${
                        isOnline
                          ? 'bg-gradient-to-r from-green-600 to-blue-700 hover:from-green-700 hover:to-blue-800'
                          : 'bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800'
                      }`}
                    >
                      {isOnline ? 'Join Online' : 'Join Session'}
                    </button>
                  )}

                  <button 
                    className="cursor-pointer px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 transition-colors" 
                    title='Open chat section'
                  >
                    <MessageSquare size={16} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredSessions.length === 0 && (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="text-gray-400" size={24} />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            No sessions found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {sessionType === 'all' 
              ? 'No upcoming sessions scheduled yet.'
              : `No ${sessionType} sessions found.`
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default UpcomingSessions;