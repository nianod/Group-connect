import React, { useState } from "react";
import { X, FileText } from "lucide-react";
import type { NoteFormData } from "../Types/group";

type NoteFormProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (noteData: NoteFormData) => void;
  loading?: boolean;
};

const NoteForm: React.FC<NoteFormProps> = ({isOpen, onClose, onSubmit, loading = false}) => {

  const [formData, setFormData] = useState<NoteFormData>({
    title: "",
    content: "",
    subject: "",
    tags: []
  });

  const [currentTag, setCurrentTag] = useState("");
  // const [processing,  setProssing] = useState<boolean>(false)
  // const [error, setLoading] = useState<string>('')


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

  const handleInputChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddTag = () => {
    if (currentTag.trim() && !formData.tags.includes(currentTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim()],
      }));
      setCurrentTag("");
    }
  };

  const handleRemoveTag = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(t => t !== tag),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    onSubmit(formData);

    // Reset form
    setFormData({
      title: "",
      content: "",
      subject: "",
      tags: []
    });
    onClose();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && e.currentTarget.tagName !== "TEXTAREA") {
      e.preventDefault();
      handleAddTag();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[9998] backdrop-blur-sm bg-black/50"
        onClick={onClose}
      ></div>

      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        <div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* HEADER */}
          <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 z-10">
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
                onClick={onClose}
                disabled={loading}
              >
                <X className="text-gray-600 dark:text-gray-300" size={20} />
              </button>
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">

            {/* TITLE */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Note Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                disabled={loading}
                placeholder="e.g., Data Structures Summary"
                className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* SUBJECT */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject *</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                disabled={loading}
                className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="">Select a subject</option>
                {subjects.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* CONTENT */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Content *</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                required
                rows={6}
                disabled={loading}
                className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Start typing your notes..."
              />
            </div>

            {/* TAGS */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tags</label>

              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={loading}
                  placeholder="Add tags"
                  className="flex-1 px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="button"
                  onClick={handleAddTag}
                  disabled={loading || !currentTag.trim()}
                  className="px-6 bg-orange-600 text-white rounded-xl hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Add
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {formData.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 rounded-full flex items-center gap-1 text-sm">
                    {tag}
                    <button 
                      type="button" 
                      onClick={() => handleRemoveTag(tag)}
                      className="hover:text-orange-900 dark:hover:text-orange-100"
                    >
                      <X size={14} />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-orange-600 to-red-700 text-white py-4 rounded-xl hover:from-orange-700 hover:to-red-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 font-semibold"
            >
              {loading ? "Creating..." : "Create Note"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NoteForm;