import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

import { Router } from "./Router";
import { NavBar } from "./Components/Navbar";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const ThemeSwitch = () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    if (theme == "dark") {
      window.document.body.classList.add("dark");
    } else {
      window.document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="w-full min-h-screen dark:bg-jet bg-whitesmoke dark:text-whitesmoke text-jet backdrop-blur-md">
      <NavBar switch={ThemeSwitch} theme={theme} />
      <Router theme={theme} />
    </div>
  );
}

export default App;
