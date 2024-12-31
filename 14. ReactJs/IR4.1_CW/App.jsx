// How to add interacitivity in your app such as button click

// useState Hook

import React from "react";
import "./App.css";
import { useState } from "react";

export default function App() {
  // Syntax:  const [currentState , setfunction] = useState(initalValue)
  // state variable should be declared on the top

  function ToggleTheme() {
    const [theme, setTheme] = useState("Light");
    return (
      <div>
        <p>Current Theme: {theme}</p>
        <button onClick={() => setTheme(theme === "Light" ? "Dark" : "Light")}>
          Toggle theme
        </button>
      </div>
    );
  }

  function VisiblityText() {
    const [visiblity, setVisiblity] = useState(false);
    return (
      <div>
        <p>{visiblity ? "Password: myPassword123" : "Password: **********"}</p>
        <button onClick={() => setVisiblity(!visiblity)}>
          Show/Hide Password
        </button>
      </div>
    );
  }

  function ExpandText() {
    const [expanded, setExpanded] = useState(false);
    const text =
      "This is a longer text that is typically hidden unless expanded.";

    return (
      <div>
        <p>{expanded ? text : `${text.substring(0, 20)}...`}</p>
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? "Collapse" : "Expand"}
        </button>
      </div>
    );
  }

  function ActiveTabs() {
    const [activeTab, setActiveTab] = useState("Home");
    return (
      <div>
        <button onClick={() => setActiveTab("Home")}>Home</button>
        <button onClick={() => setActiveTab("Profile")}>Profile</button>
        <button onClick={() => setActiveTab("Message")}>Message</button>
        <p>Content of {activeTab} tab.</p>
      </div>
    );
  }

  function CheckFontSize() {
    const [fontSize, setFontSize] = useState(14);
    return (
      <div>
        <p style={{ fontSize: `${fontSize}px` }}>Adjust my font size</p>
        <button onClick={() => setFontSize(fontSize + 1)}>Increase Size</button>
        <button onClick={() => setFontSize(fontSize - 1)}>Decrease Size</button>
      </div>
    );
  }

  return (
    <div>
      
      <main>
        <ToggleTheme />
        <hr />
        <VisiblityText />
        <hr />
        <ExpandText />
        <hr />
        <ActiveTabs />
        <hr />
        <CheckFontSize />
      </main>
    </div>
  );
}
