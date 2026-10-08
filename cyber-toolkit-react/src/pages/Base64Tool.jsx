import { useState } from "react";
import { Link } from "react-router-dom";

function Base64Tool() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const encodeText = () => {
    setResult(btoa(text));
  };

  const decodeText = () => {
    try {
      setResult(atob(text));
    } catch {
      setResult("❌ Geçersiz Base64 verisi");
    }
  };

  return (
    <div className="password-page">
      <div className="password-card">
        <h1>📄 Base64 Aracı</h1>

        <textarea
          placeholder="Metin veya Base64 verisi girin..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows="5"
        />

        <button onClick={encodeText}>
          Encode
        </button>

        <button
          onClick={decodeText}
          style={{ marginLeft: "10px" }}
        >
          Decode
        </button>

        <div className="result-box">
          {result || "Sonuç burada görüntülenecek"}
        </div>

        <Link to="/">
          <button>
            ← Ana Sayfaya Dön
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Base64Tool;