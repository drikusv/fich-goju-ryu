import React from "react";
import TopBanner from "./components/main/TopBanner";
import RightBackgroundImage from "./components/main/RightBackgroundImage";
import BodyContent from "./components/main/BodyContent";

function App() {
  return (
    <div className="relative max-h-screen">
      <RightBackgroundImage />
      <div>
        <div className="fixed top-0 left-0 w-full h-20 bg-black z-10">
          <TopBanner />
          <BodyContent />
        </div>
      </div>
    
    </div>
  );
}

export default App;
