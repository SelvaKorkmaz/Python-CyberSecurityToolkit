import { useState } from "react";
import { Link } from "react-router-dom";

function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    let result = "";

    for (let i = 0; i < length; i++) {
      result += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
    }

    setPassword(result);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    alert("Şifre panoya kopyalandı!");
  };

  return (
    <div className="password-page">
      <div className="password-card">
        <h1>🛡️ Şifre Oluşturucu</h1>

        <label>Şifre Uzunluğu</label>

        <input
          type="number"
          min="4"
          max="50"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />

        <button onClick={generatePassword}>
          Şifre Oluştur
        </button>

        <div className="result-box">
          {password || "Henüz şifre oluşturulmadı"}
        </div>

        {password && (
          <button onClick={copyPassword}>
            📋 Kopyala
          </button>
        )}

        <Link to="/">
          <button>
            ← Ana Sayfaya Dön
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PasswordGenerator;