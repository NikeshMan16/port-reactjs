// import React from "react";
// import { data } from "../data/data.js";

// export const Work = () => {
//   const project = data;

//   return (
//     <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0c2040] ">
//       <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
//         <div className="pb-10 mt-2">
//           <h2 className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 ">
//             Work
//           </h2>
//           <p className="py-6">// Check out some of my recent work</p>
//         </div>

//         {/* container for projects */}
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 ">
//           {/* Gird Item */}
//           {project.map((item, index) => (
//             <div
//               key={index}
//               style={{ backgroundImage: `url(${item.image})` }}
//               className="shadow-lg shadow-[#040c16] group container rounded-md 
//                 flex justify-center text-center items-center mx-auto content-div  "
//             >
//               {/* Hover effect for images */}
//               <div className="opacity-0 group-hover:opacity-80 ">
//                 <span className="mx-auto text-2xl font bold text-white tracking-wider text-nowrap">
//                   {item.name}
//                 </span>
//                 <div className="pt-8 text-center ">
//                   {/* eslint-disable-next-line */}
//                   <a href={item.github} target="_blank">
//                     <button
//                       className="text-center rounded-lg px-4 py-3 m-2
//                          bg-white text-gray-700 font-bold text-lg"
//                     >
//                       Code
//                     </button>
//                   </a>
//                   {/* eslint-disable-next-line */}
//                   <a href={item.live} target="_blank">
//                     <button
//                       className="text-center rounded-lg px-4 py-3 m-2
//                          bg-white text-gray-700 font-bold text-lg"
//                     >
//                       Live
//                     </button>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";
import { data } from "../data/data.js";

export const Work = () => {
  const projects = data;

  return (
    <div name="work" className="w-full h-full text-gray-300 bg-[#0c2040]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-10 mt-2">
          <h2 className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </h2>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((item, index) => (
            <div
              key={index}
              className="bg-[#0c2040] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Details */}
              <div className="p-4">
                <h3 className="text-xl font-bold text-blue-100">{item.name}</h3>
                {/* <p className="mt-2 text-sm text-gray-400">
                  {item.description || "No description available."}
                </p> */}

                {/* Tags */}
                {item.tags && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-800 text-gray-200 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Buttons */}
                <div className="flex gap-2 mt-6">
                  {/* <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-600 transition duration-300"
                  >
                    Code
                  </a> */}
                  <a
                    href={item.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition duration-300"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
