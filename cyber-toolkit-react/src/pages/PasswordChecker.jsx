import { useState } from "react";
import { Link } from "react-router-dom";

function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");

  const checkPassword = () => {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2) {
      setResult("🔴 Zayıf");
    } else if (score <= 4) {
      setResult("🟡 Orta");
    } else {
      setResult("🟢 Güçlü");
    }
  };

  return (
    <div className="password-page">
      <div className="password-card">
        <h1>🔑 Şifre Güç Analizi</h1>

        <input
          type="password"
          placeholder="Şifre giriniz..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={checkPassword}>
          Analiz Et
        </button>

        <h2 style={{ marginTop: "20px" }}>
          {result}
        </h2>

        <Link to="/">
          <button style={{ marginTop: "15px" }}>
            ← Ana Sayfaya Dön
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PasswordChecker;