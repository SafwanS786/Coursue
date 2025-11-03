import React from "react";
import Sidebar from "./component/Sidebar/Sidebar";
import Navbar from "./component/Navbar/Navbar";
import HomePages from "./Pages/HomePages";
import StaticSectionPages from "./Pages/StaticSectionPages";
import Togglebtn from "./component/Togglebtn";
import { useTheme } from "./Context/ThemeContext";
function App() {
  const { theme } = useTheme();
  return (
    <>
      <div
        className={`flex min-h-screen p-2 relative ${
          theme === "light" ? "bg-[#F9FAFB]" : "bg-[#123456]"
        }`}
      >
        <div className="h-full sticky top-0 bottom-0 overflow-hidden">
          <Sidebar />
        </div>
        <div className="flex-1 transition-all duration-300 ml-0 lg:ml-0">
          <div className="p-2 md:p-4 lg:p-6">
            <div className="sticky top-0">
              <Navbar />
            </div>
            <div className="flex flex-col 2xl:flex-row gap-6 mt-15 lg:mt-6">
              <div className="flex-1">
                <HomePages />
              </div>
              <div className="">
                <StaticSectionPages />
              </div>
            </div>
          </div>
        </div>
        <div className="fixed top-1/2 right-6 -translate-y-1/2 z-50">
          <Togglebtn />
        </div>
      </div>
    </>
  );
}

export default App;
