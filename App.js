// https://codesandbox.io/s/screenshot-app-forked-7gfhu?file=/src/App.js:39-77

import React, { useRef } from "react";
import html2canvas from "html2canvas";
import "./styles.css";

import { ReactComponent as Logo } from "./assets/logo.svg";

export default function App() {
  const appRef = useRef();

  const downloadScreenshot = async () => {
    try {
      const canvas = await html2canvas(appRef.current);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = canvas.toDataURL("image/png");
      a.download = `screenshot.png`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="App" ref={appRef}>
        <h1>Hello world</h1>
        <Logo fill="#09d3ac" width="400" />
      </div>
      <button className="screenshot-btn" onClick={downloadScreenshot}>
        Screenshot the div above
      </button>
    </>
  );
}
