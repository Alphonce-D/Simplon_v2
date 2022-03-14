import React from "react";
import Accueil from "./Pages/Accueil.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dev_Web from "./Pages/Formations/Dev_Web";
import Ref_Dig from "./Pages/Formations/Ref_Dig";
import CDA from "./Pages/Formations/CDA";
import TSSR from "./Pages/Formations/TSSR";
import Actualites from "./Pages/Actualites.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Formation-Dev-Web" element={<Dev_Web />} />
        <Route path="/Formation-Ref-Dig" element={<Ref_Dig />} />
        <Route path="/Formation-CDA" element={<CDA />} />
        <Route path="/Formation-TSSR" element={<TSSR />} />
        <Route path="Actualites" element={<Actualites />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
