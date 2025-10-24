import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
 

const Landing = () => {
  const movingText = [
    "Build By students, for students"
  ];
  
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed] = useState(150);
  
    useEffect(() => {
      const currentString = movingText[index]
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

    const navigate = useNavigate()
    const start = () => {
      navigate("/register")
    }

  return (
    <div className="pt-20 text-black dark:text-white">
      <div
        
        className="flex flex-col md:flex-row justify-between items-center gap-10"
      >
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
      <div 
          data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
          className="flex flex-wrap justify-center gap-8 mt-16">
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
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-semibold items-center justify-center gap-1 flex mb-8">
          {" "}
          <Star /> Testimonials & Statistics <Star />
        </h2>

        <div 
        data-aos="flip-up"
        className="flex flex-wrap justify-center gap-10 text-lg font-medium">
          <div className="flex flex-col items-center bg-gray-800 dark:bg-black shadow-md hover:shadow-lg rounded-xl px-8 py-6 transition-all duration-300">
            <p className="text-3xl font-bold text-amber-600">50+</p>
            <span className="text-white dark:text-gray-300">
              Universities
            </span>
          </div>

          <div className="flex flex-col items-center bg-gray-800 dark:bg-black shadow-md hover:shadow-lg rounded-xl px-8 py-6 transition-all duration-300">
            <p className="text-3xl font-bold text-amber-600">1000+</p>
            <span className="text-white dark:text-gray-300">
              Users per campus
            </span>
          </div>

          <div className="flex flex-col items-center bg-gray-800 dark:bg-black shadow-md hover:shadow-lg rounded-xl px-8 py-6 transition-all duration-300">
            <p className="text-3xl font-bold text-amber-600">50,000+</p>
            <span className="text-white dark:text-gray-300">
              Across all campuses
            </span>
          </div>

          <div className="flex flex-col items-center bg-gray-800 dark:bg-black shadow-md hover:shadow-lg rounded-xl px-8 py-6 transition-all duration-300">
            <p className="text-3xl font-bold text-amber-600">100+</p>
            <span className="text-white dark:text-gray-300">
              Groups formed this semester
            </span>
          </div>
        </div>

        <div 
        data-aos="zoom-in"
        className="mt-12 max-w-2xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-sm italic">
          “I met my current study group here, we’ve improved our grades and made
          learning fun again!”
          <br />
          <span className="text-amber-600 font-semibold not-italic">
            — Amina, Computer Science Student
          </span>
        </div>
      </div>
      {/* <Link 
        to="/register"
        className="flex p-1 m-auto mt-12 px-6 py-3 rounded text-lg font-bold bg-green-500 w-fit justify-center "
      >
          Get started
      </Link> */}
            <button
        onClick={start}
        className="flex p-1 m-auto mt-12 px-6 py-3 rounded text-lg font-bold bg-green-500 w-fit justify-center "
      >
          Get started
      </button>
    </div>
  );
};

export default Landing;
