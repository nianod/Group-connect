import { ArrowRight, Star, Users, Calendar, MessageSquare, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "../Components/Layout/Carousel";

const Landing = () => {
  const movingText = [
    "Built By Students, For Students",
    "Connect • Collaborate • Succeed",
    "Find Your Perfect Study Group"
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
        }, 2000);
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

  const features = [
    {
      icon: Users,
      title: "Find study partners by interest",
      description: "Connect with students who share your academic goals",
      image: "/04b93b68-a3aa-4297-9a84-49305faf5ec3.jpeg",
      gradient: "from-blue-600 to-purple-700"
    },
    {
      icon: Calendar,
      title: "Plan meetups easily",
      description: "Schedule study sessions that work for everyone",
      image: "/25 Best Practices for Meetup Organizers.jpeg",
      gradient: "from-purple-600 to-pink-700"
    },
    {
      icon: MessageSquare,
      title: "Real-time group chats",
      description: "Instant communication with your study groups",
      image: "/Connect instantly with others on FreeChatNow….jpeg",
      gradient: "from-green-600 to-blue-700"
    },
    {
      icon: Brain,
      title: "Collaborate on topics you love",
      description: "Share knowledge and learn together effectively",
      image: "/31c82266-4909-4bf2-aa3c-004401765f68.jpeg",
      gradient: "from-orange-600 to-red-700"
    }
  ];

  const stats = [
    { number: "50+", label: "Universities", color: "text-blue-600" },
    { number: "1000+", label: "Users per campus", color: "text-purple-600" },
    { number: "50,000+", label: "Across all campuses", color: "text-green-600" },
    { number: "100+", label: "Groups formed this semester", color: "text-orange-600" }
  ];

  return (
    <div className="pt-10 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 min-h-screen">
     
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-end">
          <Link
            className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md px-5 font-semibold text-black hove:from-blue-700 hover:to-purple-800"
            to="/register"
          >
            Get started
          </Link>
          
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
         
          <div className="flex flex-col max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200 dark:border-gray-700 w-fit">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Find your perfect study group
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
                Connect
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">
                with students who
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-600 to-blue-700 bg-clip-text text-transparent">
                share your passion
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Team up with like-minded students, form study groups, and achieve academic success together. 
              Learning is better when you're connected.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button
                onClick={start}
                className="group cursor-pointer bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                Get Started Free
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={20} />
              </button>
              
              <Link
                to="/about"
                className="group cursor-pointer border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-400 font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                Learn More
              </Link>
            </div>
          </div>

       
          <div className="relative">
            <div className="flex gap-6">
              <img
                src="/Preparing for the CA exams can be a daunting task….jpeg"
                alt="Students studying together"
                className="w-56 h-72 object-cover rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
              />
              <img
                src="/Studying in Library.jpeg"
                alt="Group discussion"
                className="w-56 h-72 object-cover rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300 mt-8"
              />
            </div>
            
       
            <div className="absolute -top-4 -left-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
              🚀 95% Success Rate
            </div>
            <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
              ⭐ 4.9/5 Rating
            </div>
          </div>
        </div>

       
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-6 shadow-2xl">
            <h2 className="text-white text-center text-2xl font-bold">
              {text}
              <span className="animate-pulse">|</span>
            </h2>
          </div>
        </div>

         
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose GroupConnect?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to find the perfect study partners and achieve academic excellence together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="text-white" size={24} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {feature.description}
                </p>
                
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-32 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

         
        <div className="mt-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Star className="text-yellow-500" size={28} />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Trusted by Students Worldwide
            </h2>
            <Star className="text-yellow-500" size={28} />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700"
              >
                <p className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </p>
                <span className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

           
          <div className="max-w-2xl mx-auto">
              <Carousel />
          </div>
        </div>

         
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Study Experience?
            </h2>
            <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already collaborating, learning, and succeeding together.
            </p>     
            <button
              onClick={start}
              className="bg-white cursor-pointer text-gray-900 hover:bg-gray-100 font-bold py-4 px-12 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg text-lg"
            >
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;