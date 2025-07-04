import { useState, useEffect } from 'react';

export default function Sidebar({setIsEditing, projArray, setBtnState, setProjectData}) {



  return(
    <aside className="mt-8 w-1/3 px-8 pt-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl ">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        your projects
      </h2>
      <button className="px-4 py-2 mb-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 hover:cursor-pointer"
        onClick={() => { 
          setBtnState(false);
          setIsEditing(true);
        }}>
        + Add Project
      </button>
      <ol>
        {projArray.current && projArray.current.length > 0 ? (
          projArray.current.map((project) => (
            <li key={project.id}>
              <button 
                className="w-full text-center px-2 py-1 rounded-sm mt-2 hover:text-stone-200 hover:bg-stone-600 hover: cursor-pointer"
                onClick={() => {
                  setProjectData(projArray.current.find(p => p.id === project.id));
                  setBtnState(true);
                  setIsEditing(false);
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