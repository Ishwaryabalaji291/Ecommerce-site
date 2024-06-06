import React from "react";
import toggle from "../assets/toggle.png";
import Switch from "../assets/switch.png";

export default function Darkmode() {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "toggle"
  );
  const element = document.documentElement;
  console.log(element);
  return (
    <div className="flex items-center relative">
      <img
        src={toggle}
        alt="toggle"
        className="w-10 cursor-pointer drop-shadow[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10"
      />

      <img
        src={Switch}
        alt="Switch"
        className="w-10 cursor-pointer drop-shadow[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
      />
    </div>
  );
}
