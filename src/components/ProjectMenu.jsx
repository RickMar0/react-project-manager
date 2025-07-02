import { useRef } from 'react';

export default function ProjectMenu({ setIsEditing, setProjectData}) {


  const projNameRef = useRef(null);
  const projDescRef = useRef(null);
  const projDueDateRef = useRef(null);

  const handleSave = () => {
    const newData = {
      title: projNameRef.current.value,
      description: projDescRef.current.value,
      dueDate: projDueDateRef.current.value
    };
  
    setProjectData(newData);
  };
  
  return(
    <menu className="flex flex-col items-center justify-center gap-4 my-4 w-full">
      <div className="flex flex-row gap-4 my-2 w-lg items-center justify-end">
        <button onClick={()=>setIsEditing(false)} className="hover:cursor-pointer bg-stone-200">
          Cancel
        </button>
        <button className="hover:cursor-pointer bg-stone-900 text-stone-50 px-4 pt-0.5 pb-1 rounded-sm"
        onClick={() => {
          handleSave();
          setIsEditing(false);
        }}>
          Save
        </button>
      </div>
      <div className="flex flex-col items-center">
        <label className="w-lg justify-start font-bold text-stone-500">TITLE</label>
        <input  
          className="w-lg justify-start border-b-2 border-b-stone-400 bg-orange-100 mb-3" 
          type="text"
          ref={projNameRef}>
        </input>
        <label 
          className="w-lg justify-start font-bold text-stone-500">
          DESCRIPTION
        </label>
        <textarea 
          className="w-lg justify-start border-b-2 border-b-stone-400 bg-orange-100 mb-3"
          ref={projDescRef}>
        </textarea>
        <label className="w-lg justify-start font-bold text-stone-500">DUE DATE</label>
        <input 
          className="w-lg justify-start border-b-2 border-b-stone-400 bg-orange-100" 
          type="date"
          ref={projDueDateRef}>
        </input>
      </div>
    </menu>
  );
};