import React, { useState } from 'react';
import { X, Loader2, Video, Calendar, Clock, Users, Link, BookOpen, Globe } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';


type OnlineSessionProps = {
    onlineSession: boolean;
    setOnlineSession: React.Dispatch<React.SetStateAction<boolean>>
}

const OnlineSession: React.FC<OnlineSessionProps> = ({ onlineSession, setOnlineSession }) => {
  const [formData, setFormData] = useState({ 
    sessionTitle: '',
    subject: '',
    meetingLink: '',
    meetingDate: '',
    meetingTime: '',
    duration: '',
    description: '',
    meetingPlatform: 'zoom'
  });

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try{
      const token = localStorage.getItem('token')
      const onlineAPI = import.meta.env.VITE_BACKEND_URL
      const response = await axios.post(`${onlineAPI}/online/create`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      console.log('Online session scheduled:', response.data);
      toast.success('meeting scheduled successfully')
      setFormData({
        sessionTitle: '',
        subject: '',
        meetingLink: '',
        meetingDate: '',
        meetingTime: '',
        duration: '',
        description: '',
        meetingPlatform: 'zoom'
      })
      setOnlineSession(false);
    } catch(err: any) {
      setError("Error scheduling meeting")
      console.log(err)
    }  finally {
       setLoading(false)
    }
  };

  const meetingPlatforms = [
    { value: 'zoom', label: 'Zoom Meeting' },
    { value: 'google-meet', label: 'Google Meet' },
    { value: 'teams', label: 'Microsoft Teams' },
    { value: 'other', label: 'Other Platform' }
  ];

  if (!onlineSession) return null;

  return (
    <div>
      {onlineSession && (
        <div
          className="fixed inset-0 z-[9998] backdrop-blur-sm bg-black/50"
          onClick={() => setOnlineSession(false)}
        ></div>
      )}

      <div
        data-aos="zoom-in"
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      >
        <div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl flex items-center justify-center">
                  <Video className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Schedule Online Session
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Create a virtual study meeting
                  </p>
                </div>
              </div>
              <button
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                onClick={() => setOnlineSession(false)}
              >
                <X className="text-gray-600 dark:text-gray-300" size={20} />
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Session Title *
              </label>
              <input
                type="text"
                name="sessionTitle"
                value={formData.sessionTitle}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400 dark:placeholder:text-gray-500"
                placeholder="Enter session title..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <BookOpen size={16} className="inline mr-1" />
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400 dark:placeholder:text-gray-500"
                placeholder="e.g., Mathematics, Computer Science"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Globe size={16} className="inline mr-1" />
                  Platform *
                </label>
                <select
                  name="meetingPlatform"
                  value={formData.meetingPlatform}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {meetingPlatforms.map((platform) => (
                    <option key={platform.value} value={platform.value}>
                      {platform.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Duration *
                </label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400 dark:placeholder:text-gray-500"
                  placeholder="e.g., 2 hours, 90 minutes..."
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Calendar size={16} className="inline mr-1" />
                  Date *
                </label>
                <input
                  type="date"
                  name="meetingDate"
                  value={formData.meetingDate}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Clock size={16} className="inline mr-1" />
                  Time *
                </label>
                <input
                  type="time"
                  name="meetingTime"
                  value={formData.meetingTime}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <Link size={16} className="inline mr-1" />
                Meeting Link *
              </label>
              <input
                type="url"
                name="meetingLink"
                value={formData.meetingLink}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400 dark:placeholder:text-gray-500"
                placeholder="https://zoom.us/j/..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Session Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none placeholder:text-gray-400 dark:placeholder:text-gray-500"
                placeholder="Describe what you'll be covering in this session..."
              />
            </div>

            <p className="text-center italic flex gap-2 ">
              {" "}
              <Users size={18} /> Online sessions support up to 250 participants
            </p>
              {error && (
                <span className="text-sm text-center text-red-600">
                  {error}
                </span>
              )}
            <div className="sticky bottom-0 bg-white dark:bg-gray-800 pb-2 border-t border-gray-200 dark:border-gray-700">
              <button
                disabled={loading}
                type="submit"
                className={`w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white py-4 rounded-xl hover:from-blue-700 hover:to-purple-800 transition-all duration-200 transform font-semibold text-lg ${
                  loading
                    ? "cursor-not-allowed opacity-70"
                    : "cursor-pointer hover:scale-105"
                }`}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 className="animate-spin h-5 w-5 text-white" />
                    Processing...
                  </div>
                ) : (
                  "Schedule a session"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OnlineSession