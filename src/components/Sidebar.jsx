export default function Sidebar({setIsEditing}) {



  return(
    <aside className="mt-8 w-1/3 px-8 pt-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl ">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        your projects
      </h2>
      <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 hover:cursor-pointer" onClick={() => setIsEditing(true)}>
        + Add Project
      </button>
    </aside>
  );
};