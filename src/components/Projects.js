import React from 'react';

function ProjectSection() {
  return (
    <div className="bg-black py-20" style={{ background: '#010131' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-10">My Projects</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}

   <div className="project-card bg-white rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
            <img className="w-full h-48 object-cover object-center" src="blob:https://web.whatsapp.com/62224054-524a-487a-939a-4b2fa24b44f4" alt="Project 4" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">KriaPay Technology Limited</h3>
              <p className="text-gray-600">I built the Fintech application dashboard with React + vitejs</p>
              <div className="flex justify-between mt-4">
                <a href="https://kriapay.com/">
                  <button className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-gray-900 hover:text-white focus:outline-none focus:bg-gray-900">Live Demo</button>
                </a>
                <a href="#">
                  <button className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-gray-900 hover:text-white focus:outline-none focus:bg-gray-900">Github</button>
                </a>
              </div>
            </div>
          </div>


                    {/* Project 2 */}

          
          <div className="project-card bg-white rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
            <img className="w-full h-48 object-cover object-center" src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1719413969/Zwilt_q0qgbb.png" alt="Project 6" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Zwilt Landing page</h3>
              <p className="text-gray-600">This is a fully functional Landing page built with Mern Stack and Redux.</p>
              <div className="flex justify-between mt-4">
                <a href="https://zwilt-john.vercel.app/">
                  <button className="px-4 py-2 bg-yellow-500 text-black rounded hover:text-white hover:bg-gray-900 focus:outline-none focus:bg-gray-900">Live Demo</button>
                </a>
                <a href="https://github.com/johnkennedyb/punch-zwilt">
                  <button className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-gray-900 hover:text-white focus:outline-none focus:bg-gray-900">Github</button>
                </a>
              </div>
            </div>
          </div>

       

          {/* Project 3 */}
          <div className="project-card bg-white rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
            <img className="w-full h-48 object-cover object-center" src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Project 1" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Metronic</h3>
              <p className="text-gray-600">This Metronic-based website showcases my development skills with its sleek design.</p>
              <div className="flex justify-between mt-4">
                <a href="https://metronix.vercel.app/">
                  <button className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-gray-900 hover:text-white focus:outline-none focus:bg-gray-900">Live Demo</button>
                </a>
                <a href="https://github.com/Johnkennedyb/Blossom">
                  <button className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-gray-900 hover:text-white focus:outline-none focus:bg-gray-900">Github</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Project 4 */}
        

          {/* Project 5 */}
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Project 7 */}
          <div className="project-card bg-white rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
            <img className="w-full h-48 object-cover object-center" src="https://i.ibb.co/9ydG6Hy/boston-1536x1024.jpg" alt="Project 6" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Dac Investigation Services</h3>
              <p className="text-gray-600">This is a fully functional and scalable website built with Wordpress and themes.</p>
              <div className="flex justify-between mt-4">
                <a href="https://dacinvestigationservice.com/">
                  <button className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-gray-900 focus:outline-none focus:bg-gray-900">Live Demo</button>
                </a>
                <button className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-gray-900 focus:outline-none focus:bg-gray-900">Github</button>
              </div>
            </div>
          </div>

          {/* Project 6 */}
          <div className="project-card bg-white rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
            <img className="w-full h-48 object-cover object-center" src="https://i.ibb.co/TBk57Tz/HD-wallpaper-pink-orchid-stones-flowers-spa-flowering-plant-beauty-in-nature.jpg" alt="Project 5" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Mitchell Morris Lpc</h3>
              <p className="text-gray-600">This is a fully functional and scalable website built with Wordpress and themes.</p>
              <div className="flex justify-between mt-4">
                <a href="https://michellemorrislpc.com/">
                  <button className="px-4 py-2 bg-yellow-500 text-black rounded hover:text-white hover:bg-gray-900 focus:outline-none focus:bg-gray-900">Live Demo</button>
                </a>
                <button className="px-4 py-2 bg-yellow-500 text-black rounded hover:text-white hover:bg-gray-900 focus:outline-none focus:bg-gray-900">Github</button>
              </div>
            </div>
          </div>
        </div>

        {/* Third Row */}
       

          {/* Project 8 */}
          {/* Placeholder for additional projects */}
          
          {/* Project 9 */}
          {/* Placeholder for additional projects */}
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
    </div>
  );
}

export default ProjectSection;
