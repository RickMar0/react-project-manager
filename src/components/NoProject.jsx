import noProjectsImage from '../assets/no-projects.png';

export default function NoProject() {



  return(
    <>
      <img className="w-16 h-16 object-contain mx-auto" src={noProjectsImage} alt="No projects" />
      <h2 className="text-xl font-bold text-stone-700 my-4">No Project Selected</h2>
      <h3 className="text-xl font-bold text-stone-500 my-4">Select a project or get started with a new one</h3>
      <button className="text-stone-700 hover:text-stone-950">Create new project</button>
    </>
  );
}