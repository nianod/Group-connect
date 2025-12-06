const onfix = true

import React, { useState } from "react";
import { X, FileText, BookOpen, Tag, Save, Loader2 } from "lucide-react";

type NoteFormProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (noteData: NoteFormData) => void;
  loading?: boolean;
  notes: boolean;
  setNotes: React.Dispatch<React.SetStateAction<boolean>>;
};

interface NoteFormData {
  title: string;
  content: string;
  subject: string;
  tags: string[];
}

const NoteForm: React.FC<NoteFormProps> = ({
  notes,
  setNotes,
  isOpen,
  onClose,
  onSubmit,
  loading = false,
}) => {
  const [formData, setFormData] = useState<NoteFormData>({
    title: "",
    content: "",
    subject: "",
    tags: [],
  });

  const [currentTag, setCurrentTag] = useState("");

  const subjects = [
    "Computer Science",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Engineering",
    "Business",
    "Medicine",
    "Law",
    "Arts & Humanities",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddTag = () => {
    if (currentTag.trim() && !formData.tags.includes(currentTag.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim()],
      }));
      setCurrentTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);

    // Reset after submit
    setFormData({
      title: "",
      content: "",
      subject: "",
      tags: [],
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.currentTarget.tagName !== 'TEXTAREA') {
      e.preventDefault();
      handleAddTag();
    }
  };

  // Close modal shortcut
  const closeForm = () => {
    setNotes(false);
    onClose();
  };

  // if (!isOpen) return null;
if(onfix) {
  return (
    <div>Page currently under MAINTENANCE</div>
  )
}
  return (
    <>
 
      <div 
        className="fixed inset-0 z-[9998] backdrop-blur-sm bg-black/50"
        onClick={closeForm}
      ></div>
      
      
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        <div 
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
        
          <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-600 to-red-700 rounded-xl flex items-center justify-center">
                  <FileText className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Create New Note</h2>
                  <p className="text-gray-600 dark:text-gray-300">Organize your study materials</p>
                </div>
              </div>
              <button
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                onClick={closeForm}
                disabled={loading}
              >
                <X className="text-gray-600 dark:text-gray-300" size={20} />
              </button>
            </div>
          </div>

          
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
         
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Note Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                disabled={loading}
                className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder:text-gray-400 dark:placeholder:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="e.g., Data Structures Summary, Calculus Formulas..."
              />
            </div>

           
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <BookOpen size={16} className="inline mr-1" />
                Subject *
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                disabled={loading}
                className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="">Select a subject</option>
                {subjects.map(subject => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
                <option value="other">Other</option>
              </select>
            </div>

             
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Content *
              </label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                required
                rows={6}
                disabled={loading}
                className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none placeholder:text-gray-400 dark:placeholder:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Start typing your notes here... You can add formulas, code snippets, diagrams descriptions, etc."
              />
            </div>

      
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <Tag size={16} className="inline mr-1" />
                Tags
              </label>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={loading}
                  placeholder="Add tags (press Enter)"
                  className="flex-1 px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder:text-gray-400 dark:placeholder:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <button
                  type="button"
                  onClick={handleAddTag}
                  disabled={loading || !currentTag.trim()}
                  className="px-4 bg-gradient-to-r from-orange-600 to-red-700 text-white rounded-xl hover:from-orange-700 hover:to-red-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.tags.map(tag => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      disabled={loading}
                      className="hover:text-orange-900 dark:hover:text-orange-100 disabled:opacity-50"
                    >
                      <X size={14} />
                    </button>
                  </span>
                ))}
              </div>
            </div>

       
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
              <h4 className="text-sm font-medium text-blue-700 dark:text-blue-300 mb-2">
                Formatting Tips:
              </h4>
              <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                <li>• Use **bold** for important terms</li>
                <li>• Use `code` for code snippets</li>
                <li>• Use bullet points for lists</li>
                <li>• Add [links] for references</li>
                <li>• Mark formulas with $$</li>
              </ul>
            </div>
 
            <div className="sticky bottom-0 bg-white dark:bg-gray-800 pt-4 pb-2 border-t border-gray-200 dark:border-gray-700">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-orange-600 to-red-700 text-white py-4 rounded-xl hover:from-orange-700 hover:to-red-800 transition-all duration-200 transform hover:scale-105 font-semibold text-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 className="animate-spin h-5 w-5 text-white" />
                    Creating Note...
                  </div>
                ) : (
                  'Create Note'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NoteForm;