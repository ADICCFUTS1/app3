import { Routes, Route } from "react-router-dom";

import Home from "./ruta/Home";
import Second from "./ruta/Dos";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dos" element={<Second />} />
      </Routes>
    </>
  );
}

export default App;
