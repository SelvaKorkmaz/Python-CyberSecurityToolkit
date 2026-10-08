import { useState } from "react";
import { Link } from "react-router-dom";
import CryptoJS from "crypto-js";

function HashGenerator() {
  const [text, setText] = useState("");
  const [md5, setMd5] = useState("");
  const [sha256, setSha256] = useState("");

  const generateHash = () => {
    if (!text.trim()) {
      setMd5("");
      setSha256("");
      return;
    }

    setMd5(CryptoJS.MD5(text).toString());
    setSha256(CryptoJS.SHA256(text).toString());
  };

  return (
    <div className="password-page">
      <div className="password-card">
        <h1>🔒 Hash Oluşturucu</h1>

        <textarea
          placeholder="Hash oluşturmak istediğiniz metni girin..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows="5"
        />

        <button onClick={generateHash}>
          Hash Oluştur
        </button>

        <div className="result-box">
          {md5 || sha256 ? (
            <>
              <p><strong>MD5:</strong></p>
              <p>{md5}</p>

              <br />

              <p><strong>SHA256:</strong></p>
              <p>{sha256}</p>
            </>
          ) : (
            "MD5 ve SHA256 burada görüntülenecek"
          )}
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

export default HashGenerator;