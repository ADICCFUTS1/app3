import { Routes, Route } from "react-router-dom";

import Home from "./ruta/Home";
import Second from "./ruta/Dos";
import Matchs from "./ruta/Matchs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dos" element={<Second />} />
        <Route path="/matchs" element={<Matchs />} />
      </Routes>
    </>
  );
}

export default App;
