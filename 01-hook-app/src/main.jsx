import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HooksApp } from "./HooksApp";
import { CounterApp } from "./01-use-state/CounterApp";
import { CounterWithCustomHook } from "./01-use-state/CounterWithCustomHook";
import { SimpleForm } from "./02-useEffect/SimpleForm";
import { FormWithCustomHook } from "./02-useEffect/FormWIthCustomHook";
import { MultipleCustomHook } from "./03-examples/MultipleCustomHook";
import { FocusScreen } from "./04-useRef/FocusScreen";
import { Memorize } from "./06-memos/memorize";
import { MemoHook } from "./06-memos/MemoHook";
import { CallbackHook } from "./06-memos/CallbackHook";
import { Padre } from "./07-tarea-memo/07-tarea-memo/Padre";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Padre />
  </React.StrictMode>
);
