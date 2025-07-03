import Sidebar from "./components/Sidebar";
import NoProject from "./components/NoProject";
import ProjectMenu from "./components/ProjectMenu";
import ProjectDetails from "./components/ProjectDetails";
import { useState, useRef} from "react";

function App() {

  const [isEditing, setIsEditing] = useState(false);

  const [btnState, setBtnState] = useState(false);

  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    dueDate: "",
    id: 0,
  });

  const projCounter = useRef(0);
  const projArray = useRef([]);

  function startEditing() {
    setProjectData({ title: "", description: "", dueDate: "" , id: 0, }); // clear before editing
    setIsEditing(true);
  };
  

  return (
    <>
      <main className="h-dvh flex gap-8">
        <Sidebar 
          setIsEditing={setIsEditing}
          startEditing={startEditing}
          setBtnState={setBtnState}
          setProjectData={setProjectData}
          projectData={projectData} 
          projArray={projArray.current} 
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
              projectData={projectData} 
              projArray={projArray.current} 
              setProjectData={setProjectData}
            />
          )
        }
      </main>
    </>
  );

}

export default App;
