import { useState,useRef } from "react"; 

export default function ProjectDetails({ projectData, setProjectData, setBtnState, projArray, startEditing, setDummy, taskInputRef}) {

/*
- Handles the addition of a new task to the project data.
- Retrieves the value from the input field, updates the project data state
  by appending the new task, and clears the input field afterward.
*/
  function handleAdd() {
    const value = taskInputRef.current?.value;
    if (value) {
      projArray.current.tasks.push(value); // Add the new task to the tasks array
      taskInputRef.current.value = ""; // Clear the input field after adding
      console.log("Task added:", value, projArray.current);
    }
  }


/*
- Removes a task from the list of tasks based on its index.
- Filters out the task at the specified index and updates the state 
  with the new list of tasks.
*/
  function handleRemove(i) {
    const newTasks = projectData.tasks .filter((_, index) => index !== i);
    setProjectData(prev => ({...prev, tasks: newTasks}));
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
        {!projectData.tasks // if tasks is empty
          ? <p>no tasks are present</p>  // show this message
          :     // otherwise, show the tasks in a list
          <ol>
            {projectData.tasks .map((element, i) => (
              <div className="flex gap-5 items-center justify-between my-3" key={i}>
                <li key={i}>{element}</li>
                <button 
                  className="bg-stone-700 text-stone-100 hover:cursor-pointer align-middle px-3 py-1 border-2 border-stone-700 rounded-3xl"
                  onClick={() => handleRemove(i)}
                  >
                  Remove
                </button>
              </div>
            ))}
          </ol>
        }
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
      </div>
    </div>
  );
};