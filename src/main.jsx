import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import JournalApp from './JournalApp';
import "./styles.css";
import PurpleTheme from "./theme/PurpleTheme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <JournalApp/>
    </BrowserRouter>
  </React.StrictMode>
);
