import { useState } from "react";
import Sidebar from "./components/sidebar";
import TodoList from "./components/TodoList";

function App() {
  const Pages = [
    <div>Home page</div>,
    <TodoList />,
    <div>Page 3</div>,
    <div>Page 4</div>,
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
