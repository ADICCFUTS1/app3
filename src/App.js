import { Routes, Route } from "react-router-dom";

import Home from "./ruta/Home";
import Dos from "./ruta/Dos";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dos" element={<Dos />} />
      </Routes>
    </>
  );
}

export default App;
