import { useState,useRef } from "react"; 

export default function ProjectDetails({ projectData, setBtnState, projArray, startEditing, setDummy}) {

  const [tasks, setTasks] = useState("");
  const taskInputRef = useRef(null);
  
  // This function handles the tasks for the project.
  function handleTasks() {


    const handleAdd = () => {
      const value = taskInputRef.current?.value;
      if (value) {
        setTasks(prev => [...prev, value]);
        taskInputRef.current.value = ""; // Clear the input field after adding
      }
    }

    const handleRemove = () => {
      b
    };
}

  return(
    <div className="flex flex-col items-center justify-center gap-4 my-4 w-full">
      <div className="flex flex-row gap-4 my-2 w-lg items-center justify-center">
        <button 
          className="hover:cursor-pointer px-3 py-1 rounded-3xl border-2"
          onClick={()=>{setBtnState(false)}}
        >Close
        </button>
        <button 
          className="bg-stone-700 text-stone-100 hover:cursor-pointer align-middle px-3 py-1 border-2 border-stone-700 rounded-3xl"
          onClick={()=>{
            projArray.current = projArray.current.filter(p => p.id !== projectData.id); 
            setDummy(prev => prev + 1);
            setBtnState(false);
            startEditing();
          }}
        >Delete
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 my-0 py-0 w-full">
        <label className="flex flex-col font-bold leading-5 text-[25px] items-center">TITLE
          <span className="font-normal text-[15px]">{projectData.title}</span>
        </label>
        <label className="flex flex-col font-bold leading-5 text-[25px] items-center">DESCRIPTION
          <span className="font-normal text-[15px]">{projectData.description}</span>
        </label>
        <label className="flex flex-col font-bold leading-5 text-[25px] items-center">DUE DATE
          <span className=" my-0 py-0 text-stone-400 text-[10px]">(YYYY-MM-DD)</span>
          <span className="font-normal text-[15px]">{projectData.dueDate}</span>
        </label>
      </div>
      <div className=" flex flex-col font-bold text-[15px] my-2 w-full ml-5">
        <label>
          Tasks:
        </label>
        {}
      </div>
      <div className="flex">
        <input
          type="text" 
          placeholder=" insert task"
          className="border-2 rounded-md mr-7 bg-amber-100"
          ref={taskInputRef}>
        </input>
        <button 
          className="hover:cursor-pointer mr-2 px-3 py-1 rounded-3xl border-2"
          onClick={() => handleAdd()}>
          Add
        </button>
        <button 
          className="bg-stone-700 text-stone-100 hover:cursor-pointer align-middle px-3 py-1 border-2 border-stone-700 rounded-3xl">
          Remove
        </button>
      </div>
    </div>
  );
};