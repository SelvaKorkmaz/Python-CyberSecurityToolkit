import { useState } from "react";
import { Link } from "react-router-dom";

function PhishingDetector() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");

  const detectPhishing = () => {
    let score = 0;

    const suspiciousWords = [
      "login",
      "verify",
      "bonus",
      "free",
      "gift",
      "bank",
      "paypal",
      "secure",
      "update",
      "account"
    ];

    const lowerUrl = url.toLowerCase();

    suspiciousWords.forEach(word => {
      if (lowerUrl.includes(word)) {
        score += 10;
      }
    });

    if (url.length > 50) score += 20;
    if (url.includes("@")) score += 30;
    if (url.split("-").length > 3) score += 20;

    if (score >= 60) {
      setResult(`🔴 Yüksek Risk (%${score})`);
    } else if (score >= 30) {
      setResult(`🟡 Orta Risk (%${score})`);
    } else {
      setResult(`🟢 Düşük Risk (%${score})`);
    }
  };

  return (
    <div className="password-page">
      <div className="password-card">
        <h1>📧 Phishing Tespit Aracı</h1>

        <input
          type="text"
          placeholder="URL giriniz..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button onClick={detectPhishing}>
          Analiz Et
        </button>

        <div className="result-box">
          {result || "Risk analizi burada görüntülenecek"}
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

export default PhishingDetector;