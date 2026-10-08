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
          onChange={(e) => setLength(e.target.value)}
        />

        <button onClick={generatePassword}>
          Şifre Oluştur
        </button>

        {password && (
          <h2 style={{ marginTop: "20px" }}>
            {password}
          </h2>
        )}

        <Link to="/">
          <button style={{ marginTop: "15px" }}>
            ← Ana Sayfaya Dön
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PasswordGenerator;