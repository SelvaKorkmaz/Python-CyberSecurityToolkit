import { useState } from "react";
import { Link } from "react-router-dom";

function CaesarCipher() {
  const [text, setText] = useState("");
  const [shift, setShift] = useState(3);
  const [result, setResult] = useState("");

  const encryptText = () => {
    let output = "";

    for (let i = 0; i < text.length; i++) {
      let char = text[i];

      if (char.match(/[a-z]/i)) {
        let code = text.charCodeAt(i);

        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(
            ((code - 65 + Number(shift)) % 26) + 65
          );
        } else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(
            ((code - 97 + Number(shift)) % 26) + 97
          );
        }
      }

      output += char;
    }

    setResult(output);
  };

  return (
    <div className="password-page">
      <div className="password-card">
        <h1>🔐 Caesar Şifreleme</h1>

        <textarea
          placeholder="Şifrelenecek metni girin..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows="5"
        />

        <input
          type="number"
          value={shift}
          onChange={(e) => setShift(e.target.value)}
          min="1"
          max="25"
        />

        <button onClick={encryptText}>
          Şifrele
        </button>

        <div className="result-box">
          {result || "Şifrelenmiş metin burada görüntülenecek"}
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

export default CaesarCipher;