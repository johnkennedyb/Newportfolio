import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    text: "From the start of the project, through to completion, Johnkennedy supported us and exceeded our expectations in every way. Not only was our experience personal and friendly, his ability to identify and present our key messages in an imaginative .",
    author: "Betani sponges"
  },
  {
    id: 2,
    text: "Johnkennedy was very helpful and fast to respond to my inquiry to help with Wordpress website issues. His knowledge was comprehensive. Even better, his advice helped me enough to solve the problems and he did not accept any payment for this.",
    author: "Savior.co"
  },
  {
    id: 3,
    text: "Without doubt one of the most talented programmers out there. I always go back to Johnkennedy when I'm out of my depth and he's never failed to deliver what I ask for. Smart, trustworthy and professional. You won't be disappointed........",
    author: "Thorium Logic"
  }
];

function TestimonialSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="testimonial-section bg-black text-white min-h-screen flex justify-center items-center" style={{
      backgroundImage: 'radial-gradient(black, #000033)',
      height: '110vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      position: 'relative',
    }}>
      <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
      <div className="max-w-8xl mx-auto p-10 flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:w-2/4 mx-10">
          <img src="https://cdn.sanity.io/images/tlr8oxjg/production/9f15109746df254c5a030a7ba9239f8a4bb5dadb-1456x816.png?w=3840&q=100&fit=clip&auto=format" alt="" className="w-full rounded-lg" />
        </div>
        <div className="lg:w-2/4 mb-10 lg:mb-0">
          <div className="relative">
            <div
              key={testimonials[currentTestimonial].id}
              className="testimonial-card bg-gray-800 rounded-lg p-6 w-full transition-transform duration-500 transform scale-100 hover:scale-110"
            >
              <p className="text-lg mb-4">{testimonials[currentTestimonial].text}</p>
              <p className="text-gray-400">- {testimonials[currentTestimonial].author}</p>
            </div>
            <button
              onClick={nextTestimonial}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-lg"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;

