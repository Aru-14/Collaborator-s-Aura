import { useState, useEffect } from 'react';

const Navbar = () => {
  const [themeIcon, setThemeIcon] = useState("./Images/brightness.png");

  // Load theme from localStorage on initial mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", storedTheme);

    // Set icon accordingly
    setThemeIcon(
      storedTheme === "light"
        ? "./Images/dark-mode.png"
        : "./Images/brightness.png"
    );
  }, []);

  const handleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    const newIcon = newTheme === "light" ? "./Images/dark-mode.png" : "./Images/brightness.png";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setThemeIcon(newIcon);
  };

  return (
    <div className="flex justify-between items-center mb-10 mt-1 px-6 bg-base-100 text-base-content">
      <span className="text-xl font-semibold text-base-content">Collaborator's Aura</span>

      <div className="flex items-center gap-4">
        <button type="button" onClick={handleTheme}>
          <img src={themeIcon} alt="Theme Toggle" className="w-10 h-10" />
        </button>

        <button className="btn btn-primary">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
