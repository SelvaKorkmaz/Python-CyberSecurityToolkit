import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import PasswordChecker from "./pages/PasswordChecker.jsx";
import PasswordGenerator from "./pages/PasswordGenerator.jsx";
import HashGenerator from "./pages/HashGenerator.jsx";
import Base64Tool from "./pages/Base64Tool.jsx";
import CaesarCipher from "./pages/CaesarCipher.jsx";
import UrlChecker from "./pages/UrlChecker.jsx";
import PhishingDetector from "./pages/PhishingDetector.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/password-checker" element={<PasswordChecker />} />
        <Route path="/password-generator" element={<PasswordGenerator />} />
        <Route path="/hash-generator" element={<HashGenerator />} />
        <Route path="/base64-tool" element={<Base64Tool />} />
        <Route path="/caesar-cipher" element={<CaesarCipher />} />
        <Route path="/url-checker" element={<UrlChecker />} />
        <Route path="/phishing-detector" element={<PhishingDetector />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
