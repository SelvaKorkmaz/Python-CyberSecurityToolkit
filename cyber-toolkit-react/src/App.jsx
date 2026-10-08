import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const tools = [
    {
      icon: "🔑",
      title: "Şifre Güç Analizi",
      desc: "Şifrenizin güvenlik seviyesini analiz edin.",
      path: "/password-checker",
    },
    {
      icon: "🛡️",
      title: "Şifre Oluşturucu",
      desc: "Güçlü ve rastgele şifreler oluşturun.",
      path: "/password-generator",
    },
    {
      icon: "🔒",
      title: "Hash Oluşturucu",
      desc: "MD5 ve SHA256 hash değerleri üretin.",
      path: "/hash-generator",
    },
    {
      icon: "🌐",
      title: "Port Tarayıcı",
      desc: "Hedef sistemde açık portları tarayın.",
      path: null,
    },
    {
      icon: "📄",
      title: "Base64 Aracı",
      desc: "Encode ve Decode işlemlerini gerçekleştirin.",
      path: "/base64-tool",
    },
    {
      icon: "🔐",
      title: "Caesar Şifreleme",
      desc: "Metinleri Caesar algoritması ile şifreleyin.",
      path: "/caesar-cipher",
    },
    {
      icon: "⚠️",
      title: "URL Güvenlik Kontrolü",
      desc: "Bağlantıları analiz ederek risk seviyesini belirleyin.",
      path: "/url-checker",
    },
    {
      icon: "📧",
      title: "Phishing Tespit Aracı",
      desc: "Şüpheli e-posta ve bağlantıları analiz edin.",
      path: "/phishing-detector",
    },
  ];

  return (
    <div className="container">
      <header>
        <h1>🛡️ Siber Güvenlik Araç Seti</h1>
        <p>React ve Python kullanılarak geliştirilen güvenlik araçları</p>
      </header>

      <div className="grid">
        {tools.map((tool, index) => (
          <div className="card" key={index}>
            <h2>{tool.icon}</h2>
            <h3>{tool.title}</h3>
            <p>{tool.desc}</p>

            {tool.path ? (
              <Link to={tool.path}>
                <button>Aracı Aç</button>
              </Link>
            ) : (
              <button disabled>Yakında</button>
            )}
          </div>
        ))}
      </div>

      <footer>
        <p>© 2026 Selva Korkmaz | Cyber Security Toolkit</p>
      </footer>
    </div>
  );
}

export default App;