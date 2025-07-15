import Sidebar from "./components/Sidebar";
import NoProject from "./components/NoProject";
import ProjectMenu from "./components/ProjectMenu";
import ProjectDetails from "./components/ProjectDetails";
import { useState, useRef} from "react";

function App() {

  const [clickedProject, setClickedProject] = useState(0); 

  const [isEditing, setIsEditing] = useState(false);

  const [btnState, setBtnState] = useState(false);

  const taskInputRef = useRef(null);

  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    dueDate: "",
    id: 0,
    tasks: []
  });

  const projCounter = useRef(0);
  const projArray = useRef([]);

  function startEditing() {
    setProjectData({ title: "", description: "", dueDate: "", id: undefined, tasks:[] }); 
    setIsEditing(true);
  };
  

  return (
    <>
      <main className="h-dvh flex">
        <Sidebar 
          setIsEditing={setIsEditing}
          startEditing={startEditing}
          setBtnState={setBtnState}
          setProjectData={setProjectData}
          setClickedProject={setClickedProject}
          projectData={projectData} 
          projArray={projArray} 
          btnState={btnState}
        />
        {!isEditing && !btnState
          ? (<NoProject 
              setIsEditing={setIsEditing}
              startEditing={startEditing}
            />)
          : isEditing && !btnState ? 
            (<ProjectMenu 
              setIsEditing={setIsEditing} 
              setProjectData={setProjectData} 
              projectData={projectData} 
              projArray={projArray}
              projCounter={projCounter}
            />)
          : !isEditing && btnState &&
            (<ProjectDetails 
              setBtnState={setBtnState}
              setProjectData={setProjectData}
              startEditing={startEditing}
              setClickedProject={setClickedProject}
              projectData={projectData} 
              projArray={projArray}
              taskInputRef={taskInputRef}
            />
          )
        }
      </main>
    </>
  );

}

export default App;
