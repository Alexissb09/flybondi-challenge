import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { SelectDestiny } from "./components/SelectDestiny";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <SelectDestiny />
    </div>
  );
}

export default App;
