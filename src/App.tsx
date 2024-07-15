import { useState } from "react";
import Sidebar from "./components/sidebar";
import TodoList from "./components/TodoList";
import DefaultPage from "./components/DefaultPage";

function App() {
  const Pages = [
    <DefaultPage content={"Home page"} />,
    <TodoList />,
    <DefaultPage content={"Page 3"} />,
    <DefaultPage content={"Page 4"} />,
  ];

  const [pageIndex, setPageIndex] = useState(0);
  return (
    <div className="flex-row">
      <Sidebar pageSetter={setPageIndex} />
      {Pages[pageIndex]}
    </div>
  );
}

export default App;
