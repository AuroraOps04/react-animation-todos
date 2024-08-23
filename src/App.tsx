import { useState } from "react";
import TaskItemCheckbox from "./components/TaskItem/TaskItemCheckbox";
import ThemeToggler from "./components/ThemeToggler";

const App = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="h-screen overflow-x-hidden bg-background text-foreground">
      <div className="flex flex-col items-center justify-center h-full gap-10">
      
      <ThemeToggler />
      <TaskItemCheckbox checked={checked} onClick={() => setChecked(prev => !prev)} />

      
      </div>
    </div>
  );
};

export default App;
