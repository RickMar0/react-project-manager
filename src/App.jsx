import Sidebar from "./components/Sidebar";
import NoProject from "./components/NoProject";
import ProjectMenu from "./components/ProjectMenu";
import { useState, useEffect, useRef} from "react";

function App() {

  const [isEditing, setIsEditing] = useState(false);

  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  const projCounter = useRef(0);
  const projArray = useRef([]);
  
  useEffect(() => {
    if (
      projArray.current && 
      projectData.title !== "" && 
      projectData.description !== "" && 
      projectData.dueDate !== ""
    ) {
      projArray.current.push({ id: projCounter.current, ...projectData });
      projCounter.current++;
      console.log(projArray.current);
    }
  }, [projectData]);
  
  
  

  return (
    <>
      <main className="h-dvh flex gap-8">
        <Sidebar setIsEditing={setIsEditing} />
        {!isEditing 
          ? <NoProject setIsEditing={setIsEditing} />
          : <ProjectMenu setIsEditing={setIsEditing} projectData={projectData} setProjectData={setProjectData} />
        }
      </main>
    </>
  );

}

export default App;
