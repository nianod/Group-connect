import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="pt-20 text-black dark:text-white">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
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
        
        <div className="flex flex-col items-center text-center bg-white dark:bg-blue-900 shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 rounded-2xl p-5 w-64">
          <p className="text-lg font-semibold mb-3">
            🧑‍🤝‍🧑 Find study partners by interest
          </p>
          <img
            className="w-56 h-36 object-cover rounded-xl"
            src="/04b93b68-a3aa-4297-9a84-49305faf5ec3.jpeg"
            alt="group"
          />
        </div>

   
        <div className="flex flex-col items-center text-center bg-white dark:bg-gray-900 shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 rounded-2xl p-5 w-64">
          <p className="text-lg font-semibold mb-3">📅 Plan meetups easily</p>
          <img
            className="w-56 h-36 object-cover rounded-xl"
            src="/25 Best Practices for Meetup Organizers.jpeg"
            alt="group"
          />
        </div>

   
        <div className="flex flex-col items-center text-center bg-white dark:bg-blue-900 shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 rounded-2xl p-5 w-64">
          <p className="text-lg font-semibold mb-3">💬 Real-time group chats</p>
          <img
            className="w-56 h-36 object-cover rounded-xl"
            src="/Connect instantly with others on FreeChatNow….jpeg"
            alt="group"
          />
        </div>

         
        <div className="flex flex-col items-center text-center bg-white dark:bg-gray-900 shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 rounded-2xl p-5 w-64">
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
    </div>
  );
};

export default Landing;
