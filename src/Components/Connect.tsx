import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Connect = () => {
  const [selectedFields, setSelectedFields] = useState<string[]>([])
  const [proceed, setProceed] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

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
  const navigate = useNavigate()

  navigate("/home")
}
 
const handleSelect = (field: string) => {
  setSelectedFields((prev) => {
    if (prev.includes(field)) {
      setProceed(true)
      return prev.filter((item) => item !== field);
    } else if (prev.length >= 5) {
     
      alert("You can only select up to 5 fields.");
      return prev;
    } else {
      setProceed(true)
      return [...prev, field];
      
    }
  });
};

  return (
    <div className="p-4 mt-10">
      <h1 className="font-bold mb-2 text-lg text-center">
        select at least 5 files you're interested in
      </h1>

      <div className="border justify-center items-center m-auto p-3 rounded-lg bg-black flex max-w-xl flex-wrap gap-2">
        {availableFields.map((field, index) => (
          <button
            key={index}
            onClick={() => handleSelect(field)}
            className={`px-1 text-[10px] cursor-pointer py-1 rounded-full border transition-all duration-300
              ${
                selectedFields.includes(field)
                  ? "bg-amber-600 text-white border-amber-700"
                  : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200"
              }`}
          >
            {field}
          </button>
        ))}
      </div>
        {proceed && (
          <button className={`m-auto mt-5 flex gap-3 w-fit rounded p-2 cursor-pointer font-semibold text-white bg-gray-900        dark:text-black dark:bg-white hover:bg-gray-800 transition dark:hover:bg-gray-300 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={gotohome}
          >
            {loading ? "Saving..." : "Save & Proceed"}
          </button>
        )}
      {/* {selectedFields.length > 0 && (
        <div className="mt-4 text-sm">
          <strong>Selected:</strong> {selectedFields.join(", ")}
        </div>
      )} */}
    </div>
  );
};

export default Connect;
