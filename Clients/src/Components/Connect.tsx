import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, ChevronRight, Sparkles } from "lucide-react";

const Connect = () => {
  const [selectedFields, setSelectedFields] = useState<string[]>([])
  const [proceed, setProceed] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const navigate = useNavigate()

  const availableFields = [
    "Software Development",
    "Web Development",
    "Mobile Apps",
    "Data Science",
    "Cybersecurity",
    "Blockchain",
    "Artificial Intelligence",
    "Machine Learning",
    "Cloud Computing",
    "UI/UX Design",
    "Graphic Design",
    "Marketing",
    "Digital Marketing",
    "Business & Entrepreneurship",
    "Finance & Accounting",
    "Economics",
    "Engineering",
    "Architecture",
    "Agriculture",
    "Environmental Science",
    "Biology",
    "Chemistry",
    "Physics",
    "Mathematics",
    "Robotics",
    "Game Development",
    "Music & Audio Production",
    "Film & Photography",
    "Adventure & Travel",
    "Public Speaking",
    "Psychology",
    "Law & Governance",
    "Medicine & Health",
    "Sports & Fitness",
    "Animals & Veterinary",
    "Writing & Literature",
    "Languages & Linguistics",
    "Education & Teaching",
    "Community Service",
    "Tourism & Hospitality"
  ];

  const gotohome = () => {
    setLoading(true)
    //   API call
    setTimeout(() => {
      navigate("/home")
    }, 1500)
  }

  const handleSelect = (field: string) => {
    setSelectedFields((prev) => {
      if (prev.includes(field)) {
        const newFields = prev.filter((item) => item !== field);
        setProceed(newFields.length >= 5);
        return newFields;
      } else if (prev.length >= 5) {
        alert("You can only select up to 5 fields.");
        return prev;
      } else {
        const newFields = [...prev, field];
        setProceed(newFields.length >= 5);
        return newFields;
      }
    });
  };

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 pt-20">
      <div className="max-w-4xl mx-auto px-6 py-8">
   
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="text-yellow-500" size={20} />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
              Customize Your Experience
            </h1>
            <Sparkles className="text-yellow-500" size={20} />
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto text-sm">
            Select at least 5 fields you're interested in. This helps us connect you with 
            like-minded students and relevant study groups.
          </p>
 
          <div className="max-w-md mx-auto mb-6">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                {selectedFields.length} of 5 selected
              </span>
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                {Math.min((selectedFields.length / 5) * 100, 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-600 to-purple-700 h-2 rounded-full transition-all duration-500"
                style={{ width: `${Math.min((selectedFields.length / 5) * 100, 100)}%` }}
              ></div>
            </div>
          </div>
        </div>
 
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {availableFields.map((field, index) => (
              <button
                key={index}
                onClick={() => handleSelect(field)}
                className={`cursor-pointer group p-3 rounded-lg border transition-all duration-200 transform hover:scale-[1.02] hover:shadow-md
                  ${
                    selectedFields.includes(field)
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-sm"
                      : "border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 hover:border-blue-300 dark:hover:border-blue-400"
                  }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-medium text-left leading-tight
                    ${
                      selectedFields.includes(field)
                        ? "text-blue-700 dark:text-blue-300"
                        : "text-gray-700 dark:text-gray-300"
                    }`}>
                    {field}
                  </span>
                  
                  {selectedFields.includes(field) && (
                    <div className="flex-shrink-0 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center ml-1">
                      <Check size={10} className="text-white" />
                    </div>
                  )}
                </div>
                
                {selectedFields.includes(field) && (
                  <div className="mt-1 w-full bg-blue-200 dark:bg-blue-800 rounded-full h-1">
                    <div className="bg-blue-500 h-1 rounded-full w-3/4"></div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
 
        {selectedFields.length > 0 && (
          <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-purple-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-1">
              <Check size={16} className="text-green-500" />
              Your Selected Interests ({selectedFields.length}/5)
            </h3>
            <div className="flex flex-wrap gap-1">
              {selectedFields.map((field, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium"
                >
                  {field}
                  <button
                    onClick={() => handleSelect(field)}
                    className="hover:bg-blue-600 rounded-full w-3 h-3 flex items-center justify-center text-[10px] transition-colors"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}

    
        <div className="text-center mt-8">
          {proceed && (
            <button 
              onClick={gotohome}
              disabled={loading}
              className="group cursor-pointer bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-md hover:shadow-lg text-sm flex items-center gap-2 mx-auto"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Saving...
                </>
              ) : (
                <>
                  Save & Continue
                  <ChevronRight className="group-hover:translate-x-0.5 transition-transform duration-200" size={16} />
                </>
              )}
            </button>
          )}

          {!proceed && selectedFields.length > 0 && (
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
                Select {5 - selectedFields.length} more to continue
              </p>
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index < selectedFields.length 
                        ? "bg-green-500" 
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          )}
        </div>

     
        <div className="text-center mt-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            You can update your interests later in profile settings.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Connect;