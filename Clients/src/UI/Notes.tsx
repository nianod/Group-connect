import React, { useState } from 'react';
import { BookOpen, Plus, Search, Filter, FileText, Users, Download, Share2, MoreVertical, Folder, X } from 'lucide-react';
import type { Note } from '../Types/group';

interface NotesProps {
  onCreate?: () => void;
  onClose?: () => void;
}
 
const Notes: React.FC<NotesProps> = ({ onCreate, onClose }) => {
  const [Createnotes] = useState<Note[]>([
    {
      id: '1',
      title: 'Data Structures Summary',
      content: 'Binary trees, graphs, and sorting algorithms...',
      subject: 'Computer Science',
      lastModified: '2 hours ago',
      shared: true,
      tags: ['algorithms', 'exam-prep']
    },
    {
      id: '2',
      title: 'Calculus Formulas',
      content: 'Derivatives, integrals, and limits...',
      subject: 'Mathematics',
      lastModified: '1 day ago',
      shared: false,
      tags: ['formulas', 'midterm']
    },
    {
      id: '3',
      title: 'Organic Chemistry Reactions',
      content: 'Important organic reactions and mechanisms...',
      subject: 'Chemistry',
      lastModified: '3 days ago',
      shared: true,
      tags: ['reactions', 'lab']
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredNotes = Createnotes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const subjects = ['All Subjects', 'Computer Science', 'Mathematics', 'Chemistry', 'Physics'];

  return (
    <>
      <div
        className="fixed inset-0 z-[9998] backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="fixed inset-0 z-[9999] overflow-y-auto">
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 py-8">
          <div className="max-w-6xl mx-auto px-6">
          
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-700 rounded-xl flex items-center justify-center">
                  <BookOpen className="text-white" size={24} />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">My Notes</h1>
                  <p className="text-gray-600 dark:text-gray-300">Create, organize & share study notes</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <button 
                  onClick={onCreate}
                  className="flex cursor-pointer items-center gap-2 bg-gradient-to-r from-orange-600 to-red-700 text-white px-6 py-3 rounded-xl hover:from-orange-700 hover:to-red-800 transition-all duration-200 transform hover:scale-105"
                >
                  <Plus size={20} />
                  New Note
                </button>
                
                {onClose && (
                  <button
                    onClick={onClose}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/80 dark:bg-gray-800/80 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                  >
                    <X className="text-gray-600 dark:text-gray-300" size={20} />
                  </button>
                )}
              </div>
            </div>
             
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search notes by title, subject, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent backdrop-blur-sm"
                />
              </div>
              <button className="cursor-pointer p-3 bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors backdrop-blur-sm">
                <Filter size={20} className="text-gray-600 dark:text-gray-300" />
              </button>
            </div>
           
            <div className="flex gap-2 mb-6 overflow-x-auto">
              {subjects.map((subject) => (
                <button
                  key={subject}
                  className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-orange-500 dark:hover:border-orange-400 transition-colors backdrop-blur-sm whitespace-nowrap"
                >
                  <Folder size={16} className="text-orange-600" />
                  {subject}
                </button>
              ))}
            </div>        
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNotes.map((note) => (
                <div
                  key={note.id}
                  className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
                >
               
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 line-clamp-1">
                        {note.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded">
                          {note.subject}
                        </span>
                        {note.shared && (
                          <span className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">
                            <Users size={12} />
                            Shared
                          </span>
                        )}
                      </div>
                    </div>
                    <button className="cursor-pointer p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors">
                      <MoreVertical size={16} className="text-gray-400" />
                    </button>
                  </div>

        
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {note.content}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {note.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

           
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {note.lastModified}
                    </span>
                    <div className="flex gap-2">
                      <button className="p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                        <Share2 size={16} className="text-gray-600 dark:text-gray-300" />
                      </button>
                      <button className="p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                        <Download size={16} className="text-gray-600 dark:text-gray-300" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

       
            {filteredNotes.length === 0 && (
              <div className="text-center py-12">
                <FileText className="mx-auto text-gray-400 mb-4" size={48} />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  No notes found
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {searchTerm ? 'Try adjusting your search terms' : 'Create your first note to get started'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;