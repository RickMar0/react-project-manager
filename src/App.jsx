import Sidebar from "./components/Sidebar";
import NoProject from "./components/NoProject";
import ProjectMenu from "./components/ProjectMenu";
import { React, useState, useRef } from "react";

function App() {

  const [isEditing, setIsEditing] = useState(false);

  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    dueDate: "",
  });
  

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
