import { useState } from "react";
import { Link } from "react-router-dom";

function PortScanner() {
  const [host, setHost] = useState("");
  const [results, setResults] = useState([]);

  const scanPorts = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/scan-ports", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          host: host,
        }),
      });

      const data = await response.json();

      const formatted = data.open_ports.map((port) => ({
        port: port.port,
        service: port.service,
        status: "Açık",
      }));

      setResults(formatted);
    } catch (error) {
      console.error("Hata:", error);
      alert("Flask API bağlantısı başarısız!");
    }
  };

  return (
    <div className="password-page">
      <div className="password-card">
        <h1>🌐 Port Tarayıcı</h1>

        <input
          type="text"
          placeholder="IP veya Domain Giriniz"
          value={host}
          onChange={(e) => setHost(e.target.value)}
        />

        <button onClick={scanPorts}>Taramayı Başlat</button>

        <div className="result-box">
          {results.length === 0
            ? "Tarama sonuçları burada görüntülenecek"
            : results.map((item, index) => (
                <div
                  key={index}
                  style={{
                    padding: "10px",
                    marginBottom: "8px",
                    borderBottom: "1px solid #00d4ff",
                  }}
                >
                  <strong>Port:</strong> {item.port}
                  {" | "}
                  <strong>Servis:</strong> {item.service}
                  {" | "}
                  <strong>Durum:</strong> {item.status}
                </div>
              ))}
        </div>

        <Link to="/">
          <button>← Ana Sayfaya Dön</button>
        </Link>
      </div>
    </div>
  );
}

export default PortScanner;
