import noProjectsImage from '../assets/no-projects.png';

export default function NoProject({setIsEditing}) {



  return(
    <div className="flex flex-col justify-center items-center gap-4 w-full">
      <img className="w-16 h-16 object-contain mx-auto py-0 my-0" src={noProjectsImage} alt="No projects" />
      <h2 className="text-xl font-bold text-stone-700 my-0">
        No Project Selected
      </h2>
      <h3 className="text-xl font-bold text-stone-500 my-0">
        Select a project or get started with a new one
      </h3>
      <button
      className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 my-0 hover:cursor-pointer" 
      onClick={() => setIsEditing(true)}>
        Create new project
      </button>
    </div>
  );
}