import Sidebar from "./components/Sidebar";
import NoProject from "./components/NoProject";
import ProjectMenu from "./components/ProjectMenu";
import { React, useState, useRef } from "react";

function App() {

  const [isEditing, setIsEditing] = useState(false);

  const projectData = {
    title: "",
    description: "",
    dueDate: "",
  };

  return (
    <>
    <main className="h-dvh flex gap-8">
      <Sidebar setIsEditing={setIsEditing} />
      {!isEditting 
        ? <NoProject setIsEditing={setIsEditing} />
        : <ProjectMenu setIsEditing={setIsEditing} />
      }
    </main>
    </>
  );
}

export default App;
