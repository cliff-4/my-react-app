import { useState } from "react";
import Sidebar from "./components/sidebar";
import { Pages } from "./components/Pages";

function App() {
  const [pageIndex, setPageIndex] = useState(0);
  return (
    <>
      <Sidebar pageSetter={setPageIndex} activeIndex={pageIndex} />
      <div
        className="
        md:min-h-screen md:min-w-screen
        md:max-h-screen md:max-w-screen
        bg-primary
        "
      >
        {Pages[pageIndex].view}
      </div>
    </>
  );
}

export default App;
