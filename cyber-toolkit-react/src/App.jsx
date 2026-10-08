import "./App.css";

function App() {
  const tools = [
    {
      icon: "🔑",
      title: "Şifre Güç Analizi",
      desc: "Şifrenizin güvenlik seviyesini analiz edin.",
    },
    {
      icon: "🛡️",
      title: "Şifre Oluşturucu",
      desc: "Güçlü ve rastgele şifreler oluşturun.",
    },
    {
      icon: "🔒",
      title: "Hash Oluşturucu",
      desc: "MD5 ve SHA256 hash değerleri üretin.",
    },
    {
      icon: "🌐",
      title: "Port Tarayıcı",
      desc: "Hedef sistemde açık portları tarayın.",
    },
    {
      icon: "📄",
      title: "Base64 Aracı",
      desc: "Encode ve Decode işlemlerini gerçekleştirin.",
    },
    {
      icon: "🔐",
      title: "Caesar Şifreleme",
      desc: "Metinleri Caesar algoritması ile şifreleyin.",
    },
    {
      icon: "⚠️",
      title: "URL Güvenlik Kontrolü",
      desc: "Bağlantıları analiz ederek risk seviyesini belirleyin.",
    },
    {
      icon: "📧",
      title: "Phishing Tespit Aracı",
      desc: "Şüpheli e-posta ve bağlantıları analiz edin.",
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
            <button onClick={() => alert(tool.title + " açıldı!")}>
              Aracı Aç
            </button>
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
