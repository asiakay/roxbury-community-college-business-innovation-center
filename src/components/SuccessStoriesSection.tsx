import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  business: string;
  image: string;
  quote: string;
  story: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria Rodriguez",
    business: "Green Roots Urban Farm",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "The BIC helped me transform my community garden initiative into a sustainable urban farming business. Their guidance on securing grants and developing a business model was invaluable.",
    story: "Starting with just a small plot of land, Maria has grown Green Roots into a flourishing urban farm that supplies local restaurants and runs a popular community-supported agriculture program. The BIC helped her secure $50,000 in funding and connected her with restaurant partners."
  },
  {
    id: 2,
    name: "James Washington",
    business: "EcoTech Solutions",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "The mentorship and technical resources at the BIC were game-changing for my solar installation business. Their industry connections helped me land my first major contract.",
    story: "James developed innovative solar panel installation techniques but struggled with business operations. Through the BIC's workshops and mentorship program, he refined his business strategy and now employs a team of 12 technicians serving the greater Boston area."
  },
  {
    id: 3,
    name: "Aisha Johnson",
    business: "Cultural Threads Apparel",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "As a creative entrepreneur, I had the passion but lacked business know-how. The BIC workshops gave me the structure I needed to turn my clothing designs into a profitable business.",
    story: "Aisha's clothing line celebrating cultural diversity has grown from a small online shop to a brand with retail presence in three locations. The BIC helped her navigate manufacturing partnerships, trademark protection, and marketing strategies to reach a wider audience."
  },
];

const SuccessStoriesSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!autoplay) return;
    
    const timer = setTimeout(() => {
      goToNext();
    }, 6000);
    
    return () => clearTimeout(timer);
  }, [current, autoplay]);

  const goToPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <section id="success-stories" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-800 tracking-wide uppercase">Success Stories</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Entrepreneurs Thriving with BIC Support
          </h3>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Discover how local entrepreneurs have transformed their ideas into successful businesses with the help of our center.
          </p>
        </div>

        <div className="relative"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          {/* Testimonial Cards */}
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-xl overflow-hidden mx-auto max-w-4xl">
                    <div className="md:flex">
                      <div className="md:flex-shrink-0 md:w-1/3">
                        <img 
                          className="h-full w-full object-cover md:h-full" 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                        />
                      </div>
                      <div className="p-8 md:p-12 md:w-2/3">
                        <div className="uppercase tracking-wide text-sm text-blue-800 font-semibold">
                          {testimonial.business}
                        </div>
                        <h2 className="mt-2 text-xl font-bold text-gray-900">{testimonial.name}</h2>
                        <div className="mt-4 text-gray-600">
                          <Quote className="h-8 w-8 text-blue-200 mb-2" />
                          <p className="italic text-lg mb-6">{testimonial.quote}</p>
                          <p>{testimonial.story}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={goToPrev}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-blue-800 hover:text-blue-900 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={goToNext}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-blue-800 hover:text-blue-900 focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicator Dots */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index);
                  setAutoplay(false);
                }}
                className={`h-3 w-3 mx-1 rounded-full ${
                  current === index ? 'bg-blue-800' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;