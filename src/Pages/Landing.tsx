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
            Connect with students who share your passion. <br /> Team up. Study better.
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
      <div>
        <div>
          <p>
            🧑‍🤝‍🧑 Find study partners by interest
          </p>
          <img
           className="w-60 h-30 object-cover"
           src="/04b93b68-a3aa-4297-9a84-49305faf5ec3.jpeg"
           alt="group" />
        </div>
                <div>
          <p>
            📅 Plan meetups easily
          </p>
          <img
           className="w-60 h-30 object-cover"
           src="/25 Best Practices for Meetup Organizers.jpeg"
           alt="group" />
        </div>
                <div>
          <p>
            💬 Real-time group chats
          </p>
          <img
           className="w-60 h-30 object-cover"
           src="/Connect instantly with others on FreeChatNow….jpeg"
           alt="group" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
