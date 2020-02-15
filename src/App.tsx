import React from "react";
import "./App.scss";

import { Input } from "./Input";

function App() {
  return (
    <div className="App">
      <h2>Roman Numbers</h2>
      <p>Write any number from 0 to 4999.</p>
      <Input />
    </div>
  );
}

export default App;
