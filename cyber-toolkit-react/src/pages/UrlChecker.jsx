import { useState } from "react";
import { Link } from "react-router-dom";

function UrlChecker() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");

  const checkUrl = () => {
    const suspiciousWords = [
      "login",
      "verify",
      "bonus",
      "free",
      "gift",
      "bank",
      "paypal",
      "secure"
    ];

    const lowerUrl = url.toLowerCase();

    const suspicious = suspiciousWords.some(word =>
      lowerUrl.includes(word)
    );

    if (!url.startsWith("http")) {
      setResult("🔴 Geçersiz URL");
    } else if (suspicious) {
      setResult("🟡 Şüpheli URL");
    } else {
      setResult("🟢 Güvenli Görünüyor");
    }
  };

  return (
    <div className="password-page">
      <div className="password-card">
        <h1>⚠️ URL Güvenlik Kontrolü</h1>

        <input
          type="text"
          placeholder="https://ornek.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button onClick={checkUrl}>
          Analiz Et
        </button>

        <div className="result-box">
          {result || "Analiz sonucu burada görüntülenecek"}
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

export default UrlChecker;