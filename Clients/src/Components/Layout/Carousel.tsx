import { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const testimonials = [
    {
      id: 1,
      text: "I met my current study group here, we've improved our grades and made learning fun again! The platform made it so easy to find people who were as serious about academics as I am.",
      author: "Arnold, Founder",
      gradient: "from-blue-600 to-purple-700"
    },
    {
      id: 2,
      text: "This platform transformed how I study. Found amazing partners who keep me motivated and accountable throughout the semester.",
      author: "James, Computer Science Student",
      gradient: "from-green-600 to-blue-700"
    },
    {
      id: 3,
      text: "As an international student, finding study buddies was challenging until I discovered this platform. Now I have friends to study with every day!",
      author: "Sofia, Software Engineer",
      gradient: "from-purple-600 to-pink-700"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: any) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
         
        <div className="relative overflow-hidden">
        
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                <p className="text-[15px] text-gray-700 dark:text-gray-300 italic mb-4 text-center">
                  {testimonial.text}
                </p>
                <div className="text-center">
                  <span className={`bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent font-semibold text-lg`}>
                    — {testimonial.author}
                  </span>
                </div>
              </div>
            ))}
          </div>

         
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-blue-600' 
                    : 'bg-gray-300 hover:bg-blue-400'
                }`}
              />
            ))}
          </div>

          
          <button 
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-700/80 rounded-full p-2 shadow-lg hover:bg-white dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-700/80 rounded-full p-2 shadow-lg hover:bg-white dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;