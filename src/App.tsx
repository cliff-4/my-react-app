import { useState } from "react";
import Sidebar from "./components/sidebar";
import { Pages } from "./Pages";

function App() {
  const [pageIndex, setPageIndex] = useState(0);
  return (
    <div className="min-h-screen min-w-screen bg-primary">
      <Sidebar pageSetter={setPageIndex} activeIndex={pageIndex} />
      {Pages[pageIndex].view}
    </div>
  );
}

export default App;
