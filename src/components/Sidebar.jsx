import { useState, useEffect } from 'react';

export default function Sidebar({setIsEditing, projArray, startEditing, setBtnState, setProjectData}) {

  

  return(
    <aside className="mt-8 w-1/3 px-8 pt-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl ">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        your projects
      </h2>
      <button className="px-4 py-2 mb-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 hover:cursor-pointer" onClick={() => startEditing()}>
        + Add Project
      </button>
      <ol>
        {projArray && projArray.length > 0 ? (
          projArray.map((project) => (
            <li key={project.id}>
              <button 
                className="w-full text-center px-2 py-1 rounded-sm mt-2 hover:text-stone-200 hover:bg-stone-600 hover: cursor-pointer"
                onClick={() => {
                  setProjectData(projArray.find(p => p.id === project.id)); // set the project data to the clicked project
                  setBtnState(true); // when cliked set the button state to true, thus showing the project details
                  setIsEditing(false); // to allow the project details to be shown
                }}
              >
                {project.title}
              </button>
            </li>
          ))
        ) : (
          <li className="text-stone-400 mt-5">
            No projects available
          </li>
        )}
      </ol>
    </aside>
  );
};