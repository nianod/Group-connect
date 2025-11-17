import React, { useState } from 'react';
import { X, Users, MapPin, Clock, Calendar } from 'lucide-react';
import axios from 'axios';

type postProps = {
    post: boolean;
    setPost: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateGroup: React.FC<postProps> = ({post, setPost}) => {
  const [formData, setFormData] = useState({
    groupName: '',
    subject: '',
    description: '',
    maxMembers: '',
    meetingFrequency: 'Only Once', 
    skillLevel: 'beginner',
    meetingTime: '',
    location: '',
    meetingDate: ''
  });

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    // form submission  

      const dataToSend = {
    ...formData,
    maxMembers: Number(formData.maxMembers)
    }
    try{

      const crestegroup = import.meta.env.VITE_BACKEND_URL

      const token = localStorage.getItem('token')
      const response = await axios.post(`${crestegroup}/groups/create`, dataToSend, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })

      console.log("TOKEN IN CREATE GROUP:", token);

      console.log("data  is", response.data)
      alert("Bravooo")

    } catch(err: any) {
      setError("Error creating group")
      console.log(err)

    } finally {
      setLoading(false)
    }
      
    
    console.log('Group created:', formData);
    
  }

  const skillLevels = [
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
    { value: 'all', label: 'All Levels' }
  ];

  const meetingFrequencies = [
    'Only Once',
    'Once a week',
    'Twice a week',
    'Every day',
    'Weekends only',
    'Flexible'
  ];

  if (!post) return null;

  return (
    <div> 
        {post && (
            <div
              className="z-[9998] inset-0 fixed bg-black/50"
              onClick={() => setPost(false)}
            ></div>
        )}
          <div
            data-aos="zoom-out-left"
            className={`fixed right-0 top-0 bottom-0 w-full max-w-md bg-white dark:bg-gray-800 z-[9999] transform transition-transform duration-300 ease-in-out shadow-2xl overflow-y-auto`}
            onClick={(e) => e.stopPropagation()}
          >
 
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl flex items-center justify-center">
                    <Users className="text-white" size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">Create Study Group</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Connect with like-minded students</p>
                  </div>
                </div>
                <button
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                  onClick={() => setPost(false)}
                >
                  <X className="text-gray-600 dark:text-gray-300" size={20} />
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Group Name <span className='text-red-700'>*</span>
                </label>
                <input
                  type="text"
                  name="groupName"
                  value={formData.groupName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 dark:placeholder-gray-400"
                  placeholder="e.g., Advanced Calculus Study Group"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject/Course <span className='text-red-700'>*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 dark:placeholder-gray-400"
                  placeholder="e.g., Mathematics, Computer Science"
                />
              </div>

           
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Description <span className='text-red-700'>*</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none placeholder-gray-400 dark:placeholder-gray-400"
                  placeholder="Describe what your group will focus on..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
             
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Max Members <span className='text-red-700'>*</span>
                  </label>
                  <input
                    type="number"
                    name="maxMembers"
                    value={formData.maxMembers}
                    onChange={handleInputChange}
                    required
                    min="2"
                    max="20"
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 dark:placeholder-gray-400"
                    placeholder="e.g., 6"
                  />
                </div>
 
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Skill Level <span className='text-red-700'>*</span>
                  </label>
                  <select
                    name="skillLevel"
                    value={formData.skillLevel}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 dark:placeholder-gray-400"
                  >
                    {skillLevels.map(level => (
                      <option key={level.value} value={level.value} >
                        {level.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
 
              <div className='grid grid-cols-2 gap-2'>
                <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Meeting Frequency <span className='text-red-700'>*</span>
                </label>
                <select
                  name="meetingFrequency"
                  value={formData.meetingFrequency}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 dark:placeholder-gray-400"
                >
                  <option value="">Select frequency</option>
                  {meetingFrequencies.map(freq => (
                    <option key={freq} value={freq}>
                      {freq}
                    </option>
                  ))}
                </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <MapPin size={16} className="inline mr-1" />
                    Venue
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 dark:placeholder-gray-400"
                    placeholder="e.g., Library, Online"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <Calendar size={16} className="inline mr-1" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="meetingDate"
                    value={formData.meetingDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 dark:placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <Clock size={16} className="inline mr-1" />
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    name="meetingTime"
                    value={formData.meetingTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />  
                </div>
              </div>
                  {error && (
                    <span className='text-sm text-center text-red-600'>{error}</span>
                  )}
              <div className="sticky bottom-0 bg-white dark:bg-gray-800 pt-4 pb-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  disabled={loading}
                  type="submit"
                  className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-purple-700 text-white py-4 rounded-xl hover:from-blue-700 hover:to-purple-800 transition-all duration-200 transform hover:scale-105 font-semibold text-lg"
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Creating Account...
                  </div>
                ) : (
                  "Create Group"
                  )}
                </button>
              </div>
            </form>
        </div>
    </div>
  )
}

export default CreateGroup;