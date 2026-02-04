import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppleLanding from "./pages/AppleLanding";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<AppleLanding />} />

        {/* Home / eventos */}
        <Route path="/home" element={<Index />} />

        {/* Página institucional */}
        <Route path="/sobre" element={<About />} />

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
