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
      path: "#",
    },
    {
      icon: "🌐",
      title: "Port Tarayıcı",
      desc: "Hedef sistemde açık portları tarayın.",
      path: "#",
    },
    {
      icon: "📄",
      title: "Base64 Aracı",
      desc: "Encode ve Decode işlemlerini gerçekleştirin.",
      path: "#",
    },
    {
      icon: "🔐",
      title: "Caesar Şifreleme",
      desc: "Metinleri Caesar algoritması ile şifreleyin.",
      path: "#",
    },
    {
      icon: "⚠️",
      title: "URL Güvenlik Kontrolü",
      desc: "Bağlantıları analiz ederek risk seviyesini belirleyin.",
      path: "#",
    },
    {
      icon: "📧",
      title: "Phishing Tespit Aracı",
      desc: "Şüpheli e-posta ve bağlantıları analiz edin.",
      path: "#",
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

            <Link to={tool.path}>
              <button>Aracı Aç</button>
            </Link>

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