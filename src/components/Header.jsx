import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import images from "../services/images"; // Update this path according to your project structure

export default function Header() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isNavExpanded, setIsNavExpanded] = useState(false); // State to manage sidebar expansion
  const navRef = useRef(); // Ref for the navigation bar

  // Function to handle outside click
  const handleOutsideClick = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsNavExpanded(false);
    }
  };

  // UseEffect to add event listener for outside clicks
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const navigationItems = [
    { name: "Dashboard", icon: images.Home, route: "/dashboard" },
    { name: "Message", icon: images.MessageMail, route: "/message" },
    { name: "Analytics", icon: images.BarChartAnalysis, route: "/analytics" },
    { name: "News", icon: images.form, route: "/news" },
    { name: "Recruitment", icon: images.Breifcase, route: "/recruitment" },
    { name: "Project", icon: images.MultiFolder, route: "/project" },
    // ... Add more items as needed
  ];

  return (
    <aside
      ref={navRef}
      className={`fixed inset-y-0 left-0 z-10 flex flex-col ${
        isNavExpanded ? "w-64" : "w-20"
      } bg-gray-800 transition-width duration-300`}
    >
      <div
        className={`flex ${
          isNavExpanded ? "justify-start" : "justify-center"
        } w-full p-4`}
      ></div>
      <div
        className={`text-gray-200 ${
          isNavExpanded ? "space-y-20" : "space-y-4"
        }`}
      >
        {navigationItems.map((item) => (
          <Link
            to={item.route}
            key={item.name}
            className="flex items-center justify-center p-2 my-2 transition-colors duration-200"
            onClick={() => {
              setActiveSection(item.name.toLowerCase());
              setIsNavExpanded(!isNavExpanded); // Toggle sidebar on click
            }}
          >
            <img
              src={item.icon}
              alt={`${item.name} Icon`}
              className="w-10 h-10"
            />
            {isNavExpanded && (
              <span className="mx-4 text-lg font-normal">{item.name}</span>
            )}
          </Link>
        ))}
      </div>
    </aside>
  );
}
