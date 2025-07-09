import { useState, useRef } from 'react';

export default function ProjectMenu({ setIsEditing, projectData, setProjectData, projArray, projCounter }) {

  const errorTextRef = useRef(null);

  const [showError, setShowError] = useState(false);

  const [formData, setFormData] = useState(projectData);


/**
handleSave Function
* This function validates the form data and saves the 
  project details. It ensures that all fields 
  (title, description, and due date) are filled before proceeding.

* If validation passes: 
  - it updates the project data state
  - adds the new project to the project array
  - resets the form fields
  - then exits the editing mode.

* If validation fails: 
  - it displays an error message to the user.
*/
  const handleSave = () => {
  
    if (
      formData.title !== "" &&
      formData.description !== "" &&
      formData.dueDate !== ""
    ) 
    {
      setProjectData(formData);
      projArray.current.push({
        id: projCounter.current++,
        title: formData.title,
        description: formData.description,
        dueDate: formData.dueDate,
        tasks: [],
      });
      setFormData({ title: "", description: "", dueDate: "", });
      setShowError(false);
      setTimeout(() => setIsEditing(false), 100);
    } else 
    {
      setShowError(true);
    }
  };
  
  return(
    <menu className="flex flex-col items-center justify-center gap-4 my-4 w-full">
      <div className="flex flex-row gap-4 my-2 w-lg items-center justify-end">
        <button 
        onClick={()=>setIsEditing(false)} 
        className="hover:cursor-pointer bg-stone-200">
          Cancel
        </button>
        <button 
        className="hover:cursor-pointer bg-stone-900 text-stone-50 px-4 pt-0.5 pb-1 rounded-sm"
        onClick={() => {handleSave()}}
        >
          Save
        </button>
      </div>
      <div className="flex flex-col items-center">
        <label className="w-lg justify-start font-bold text-stone-500">TITLE</label>
        <input  
          className="w-lg justify-start border-b-2 border-b-stone-400 bg-orange-100 mb-3" 
          type="text"
          value={formData.title}
          onChange={(e) =>
            setFormData({ ...formData, title: e.target.value })
          }
        />
        <label 
          className="w-lg justify-start font-bold text-stone-500">
          DESCRIPTION
        </label>
        <textarea 
          className="w-lg justify-start border-b-2 border-b-stone-400 bg-orange-100 mb-3"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <label className="w-lg justify-start font-bold text-stone-500">DUE DATE</label>
        <input 
          className="w-lg justify-start border-b-2 border-b-stone-400 bg-orange-100" 
          type="date"
          value={formData.dueDate}
          onChange={(e) =>
            setFormData({ ...formData, dueDate: e.target.value })
          }
        />
        {showError && (
          <h2 
            className="text-red-400 font-bold mt-2"
            ref={errorTextRef}>
            Please fill out all form fields before submitting
          </h2>
        )}
      </div>
    </menu>
  );
};