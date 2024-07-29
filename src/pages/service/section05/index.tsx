import React, { useState, useEffect, useRef } from 'react';

interface Testimonial {
  quote: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
  companyLogo?: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Designs look great, lot's of great thinking here.",
    name: "Zishaan Hayat",
    position: "Founder",
    company: "Toppr",
    avatar: "/path/to/zishaan.jpg",
    companyLogo: "/path/to/toppr-logo.png"
  },
  {
    quote: "Designs look great, lot's of great thinking here.",
    name: "Joe Kochutty",
    position: "VP Product",
    company: "Ola",
    avatar: "/path/to/joe.jpg",
    companyLogo: "/path/to/ola-logo.png"
  },
  {
    quote: "Designs look great, lot's of great thinking here.",
    name: "Rahul Preet",
    position: "VP Product",
    company: "Ola",
    avatar: "/path/to/rahul.jpg",
    companyLogo: "/path/to/ola-logo.png"
  },
  // Add more testimonials as needed
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-gray-200 rounded-lg p-6 mr-4 flex-shrink-0 w-80">
    <div className="mb-4">
      <p className="text-gray-800 text-lg font-medium">{testimonial.quote}</p>
    </div>
    <div className="flex items-center">
      {testimonial.companyLogo ? (
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3">
          <img src={testimonial.companyLogo} alt={testimonial.company} className="w-6 h-6" />
        </div>
      ) : (
        <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center mr-3">
          <span className="text-white font-bold">{testimonial.company[0]}</span>
        </div>
      )}
      <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full mr-3" />
      <div>
        <p className="font-medium text-sm">{testimonial.name}</p>
        <p className="text-gray-600 text-xs">{testimonial.position} at {testimonial.company}</p>
      </div>
    </div>
  </div>
);

const TestimonialContainer: React.FC = () => {
  const [items, setItems] = useState<Testimonial[]>([...testimonials, ...testimonials]); // Duplicate items for seamless loop
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (!isPaused && scrollContainerRef.current) {
        setScrollPosition((prevPosition) => {
          const newPosition = prevPosition + 1; // Adjust this value to control scroll speed
          const maxScroll = scrollContainerRef.current!.scrollWidth - scrollContainerRef.current!.clientWidth;
          
          // Reset to start when reaching the end
          if (newPosition >= maxScroll) {
            return 0;
          }
          return newPosition;
        });
      }
    }, 50); // Adjust this value to control scroll smoothness

    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div className="container mx-auto w-full py-16 ">
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-hidden pb-4  px-4"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style >{`
          div::-webkit-scrollbar {
            display: none; 
          }
        `}</style>
        {items.map((item, index) => (
          <TestimonialCard key={index} testimonial={item} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialContainer;