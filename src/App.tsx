import { useState } from "react";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Swap } from "./Components/Swap/Swap";
import { Limit } from "./Components/Limit/Limit";
import { Send } from "./Components/Send/Send";
import { Buy } from "./Components/Buy/Buy";
import { TabLinks } from "./Constants";
import { BodyStyle } from "./Styles/Header";
import { SettingsIcon, TabLink } from "./Components/Swap/TabLink";
import "./connection.ts";
// import { useThemeToggle } from "./hooks/useTheme.ts";
import { useThemeToggleContext } from "./context/ThemeContext.tsx";


function App() {
  // const { isDarkMode, toggleTheme } = useThemeToggle();
  const { isDarkMode, toggleTheme } = useThemeToggleContext()
  const [links, setLinks] = useState(TabLinks);

  const location = useLocation();

  const navigate = useNavigate();

  const handleLinkClick = (linkName: string) => {
    const newLinks = links.map((ele) => {
      return { ...ele, $isSelected: ele.name == linkName };
    });
    navigate(linkName);
    setLinks(newLinks);
  };

  return (
    <div className={`${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Header toggleTheme={toggleTheme} />
      <BodyStyle>
        <div className="cont">
          <div className="top">
            <div className="tablinks">
              {links.map((ele, index) => (
                <TabLink
                  key={index}
                  {...ele}
                  handleLinkClick={() => handleLinkClick(ele.name)}
                />
              ))}
            </div>
            <button className="setting">
              <SettingsIcon />
            </button>
          </div>
          <Routes key={location.pathname} location={location}>
            <Route index element={<Swap />}></Route>
            <Route path="/limit" element={<Limit />}></Route>
            <Route path="/send" element={<Send />}></Route>
            <Route path="/buy" element={<Buy />}></Route>
            <Route path="/swap" element={<Swap />}></Route>
            {/* <Route
        path="*"
        element={
          <NotFound
            headText="404 - Page Not Found"
            pText="The page you are looking for does not exist."
          />
        }
      /> */}
          </Routes>
        </div>
      </BodyStyle>
    </div>
  );
}

export default App;
