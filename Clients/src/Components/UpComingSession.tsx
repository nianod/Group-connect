import { useEffect, useState } from 'react';
import axios from 'axios';
import { Calendar, CheckCheck, ChevronRight, Clock, MessageSquare, Users, MapPin, Repeat, Calendar as CalendarIcon } from 'lucide-react';
import type { UpcomingSession } from '../Types/group';

const UpcomingSessions = () => {
  const [sessions, setSessions] = useState<UpcomingSession[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [joinedSessions, setJoinedSessions] = useState<string[]>([]);  

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchSessions = async () => {
      try {

        const groups = import.meta.env.VITE_BACKEND_URL
        const res = await axios.get(`${groups}/groups`, {
          headers: { 
            Authorization: `Bearer ${token}`
          }
        });
        setSessions(res.data.groups);
      } catch (err) {
        console.error('Error fetching sessions', err);
      } finally {
        setLoading(false);
      }
    };
    fetchSessions();
  }, []);

  
  const handleJoin = (id: string) => {
    // send join request to backend
    // await axios.post(`http://127.0.0.1:8000/groups/${id}/join`, {}, { headers: { Authorization: `Bearer ${token}` } });

     
    setJoinedSessions((prev) => [...prev, id]);
  };

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

  if (loading) return <p>Loading sessions...</p>;

  return (
    <div className="grid grid-cols-1 gap-4">
      {sessions.slice().reverse().map((session, index) => {
        const isJoined = joinedSessions.includes(session._id);

        return (
          <div
            key={session._id || index}
            className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl flex items-center justify-center">
                  <Calendar className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {session.groupName}
                  </h3>
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
                <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    <span>1/ {session.maxMembers}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <p>
                      {formatDate(session.meetingDate)} •{' '}
                      <span className="bg-green-700 rounded px-2 text-green-200">
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

                <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
                  {session.location && (
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span className="bg-[#b03030] px-2 rounded text-amber-400">
                        {session.location}
                      </span>
                    </div>
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
                    className="cursor-pointer px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-xl hover:from-blue-700 hover:to-purple-800 transition-all duration-200 transform hover:scale-105"
                  >
                    Join Session
                  </button>
                )}

                <button className="cursor-pointer px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 transition-colors" title='Open chat section'>
                  <MessageSquare size={16} />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UpcomingSessions;
