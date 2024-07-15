import { useState } from "react";
import Sidebar from "./components/sidebar";
import TodoList from "./components/TodoList";
import DefaultPage from "./components/DefaultPage";
import Home from "./components/Home";

function App() {
  const Pages = [
    <Home />,
    <TodoList />,
    <DefaultPage content={"Page 3"} />,
    <DefaultPage content={"Page 4"} />,
  ];

  const [pageIndex, setPageIndex] = useState(0);
  return (
    <div className="min-h-screen min-w-screen bg-primary">
      <Sidebar pageSetter={setPageIndex} activeIndex={pageIndex} />
      {Pages[pageIndex]}
    </div>
  );
}

export default App;
