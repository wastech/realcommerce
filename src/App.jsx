//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";
import "primereact/resources/primereact.min.css";
import AppHeader from "./components/AppHeader";
import NewArrival from "./components/NewArrival"
import React from "react";

function App() {
  return (
    <div className="">
      <AppHeader />;
      <NewArrival/>
    </div>
  );
}

export default App;
