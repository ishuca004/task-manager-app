import "./ThemeToggle.css"; // Import styles

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
      <span className="slider round"></span>
    </label>
  );
};

export default ThemeToggle;
