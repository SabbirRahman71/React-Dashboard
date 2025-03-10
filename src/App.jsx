import { useState } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/ui/Main";
import Content from "./components/ui/Content";
import Profile from "./profile/Profile";
import Stats from "./components/stats/Stats";
import Team from "./components/Team/Team";
import Event from "./components/event/Event";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleSideBar = () => setIsSideBarOpen(!isSideBarOpen);
  return (
    <div className={`${darkMode && "dark"} font-quickSand`}>
      <Header
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        toggleSideBar={toggleSideBar}
      />
      <Sidebar isSideBarOpen={isSideBarOpen} />

      <Main>
        <Content>
          <Stats darkMode={darkMode} />
          <div className="flex flex-col gap-3 lg:flex-row">
            <Team />
            <Event />
          </div>
        </Content>
        <Profile />
      </Main>
    </div>
  );
}

export default App;
