import { Routes, Route } from "react-router-dom";

import Home from "./ruta/Home";
import Second from "./ruta/Dos";
import Main from "./ruta/Main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dos" element={<Second />} />
        <Route path="/matchs" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
