from flask import Flask, request, jsonify
from flask_cors import CORS
from utils.port_scanner import scan_ports

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return {"message": "Cyber Security Toolkit API çalışıyor"}

@app.route("/scan-ports", methods=["POST"])
def scan_ports_api():
    data = request.json
    host = data.get("host")

    ports = scan_ports(host)

    return jsonify({
        "host": host,
        "open_ports": ports
    })

if __name__ == "__main__":
    app.run(debug=True, port=5000)