import { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';
import DarkModeImg from '../assets/night-img.svg';
const DarkModeToggler = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const [darkSide, setDarkSide] = useState(
    colorTheme === 'light' ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <img
      onClick={toggleDarkMode}
      className="block h-[29px] w-[29px] cursor-pointer"
      src={DarkModeImg}
      alt="dark-mode-img"
    />
  );
};

export default DarkModeToggler;
