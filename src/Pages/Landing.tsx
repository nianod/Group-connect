import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const Landing = () => {
  const movingText = [
    "Build By students, for students"
  ];
  
  
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed] = useState(150);
  
    useEffect(() => {
      const currentString = movingText[index];
      let timeout: any
  
      if (!isDeleting) {
        if (text.length < currentString.length) {
          timeout = setTimeout(() => {
            setText(currentString.substring(0, text.length + 1));
          }, speed);
        } else {
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, 500);
        }
      } else {
        if (text.length > 0) {
          timeout = setTimeout(() => {
            setText(currentString.substring(0, text.length - 1));
          }, speed / 2);
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % movingText.length);
        }
      }
  
      return () => clearTimeout(timeout);
    }, [text, isDeleting, index, speed]);
  return (
    <div className="pt-20 text-black dark:text-white">
      <div data-aos="zoom-out" className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col max-w-xl space-y-4 p-3">
          <p className="text-xl font-semibold text-gray-600 dark:text-gray-300">
            Find your perfect study group, learn smarter, not harder.
          </p>
          <h1 className="m-5 text-4xl md:text-5xl font-[helvetica] font-semibold leading-tight text-green-500">
            Connect with students who share your passion. <br /> Team up. Study
            better.
          </h1>

          <Link
            to="/register"
            className="flex items-center gap-2 w-fit rounded px-4 py-2 mt-4 font-semibold text-white bg-gray-900 dark:text-black dark:bg-white"
          >
            Get started <ArrowRight />
          </Link>
        </div>

        <div className="flex gap-4">
          <img
            src="/Preparing for the CA exams can be a daunting task….jpeg"
            alt="Students studying together"
            className="w-48 h-48 object-cover rounded-2xl shadow-md"
          />
          <img
            src="/Studying in Library.jpeg"
            alt="Group discussion"
            className="w-48 h-48 object-cover rounded-2xl shadow-md mt-6"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-16">
        
        <div className="flex flex-col text-white items-center text-center bg-gray-900 dark:bg-blue-900 shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 rounded-2xl p-5 w-64">
          <p className="text-lg font-semibold mb-3">
            🧑‍🤝‍🧑 Find study partners by interest
          </p>
          <img
            className="w-56 h-36 object-cover rounded-xl"
            src="/04b93b68-a3aa-4297-9a84-49305faf5ec3.jpeg"
            alt="group"
          />
        </div>

   
        <div className="flex flex-col text-white items-center text-center bg-blue-900 dark:bg-gray-900 shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 rounded-2xl p-5 w-64">
          <p className="text-lg font-semibold mb-3">📅 Plan meetups easily</p>
          <img
            className="w-56 h-36 object-cover rounded-xl"
            src="/25 Best Practices for Meetup Organizers.jpeg"
            alt="group"
          />
        </div>

   
        <div className="flex flex-col text-white items-center text-center bg-gray-900 dark:bg-blue-900 shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 rounded-2xl p-5 w-64">
          <p className="text-lg font-semibold mb-3">💬 Real-time group chats</p>
          <img
            className="w-56 h-36 object-cover rounded-xl"
            src="/Connect instantly with others on FreeChatNow….jpeg"
            alt="group"
          />
        </div>

         
        <div className="flex flex-col text-white items-center text-center bg-blue-900 dark:bg-gray-900 shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 rounded-2xl p-5 w-64">
          <p className="text-lg font-semibold mb-3">
            🧠 Collaborate on topics you love
          </p>
          <img
            className="w-56 h-36 object-cover rounded-xl"
            src="/31c82266-4909-4bf2-aa3c-004401765f68.jpeg"
            alt="group"
          />
        </div>
      </div>
      <div className="mt-10 bg-[#050594] w-1/2 m-auto p-3">
        <h2 className="text-white text-center text-2xl font-bold">
          {text}
          <span> | </span>
        </h2>
      </div>
      <div>
        <p>Testimonial & Statistics</p>
        
      </div>
    </div>
  );
};

export default Landing;
