from urllib.parse import urlparse
import re


def phishing_detector():
    print("=" * 55)
    print("             PHISHING DETECTOR")
    print("=" * 55)

    url = input("\nEnter URL to analyze: ").strip()

    score = 0

    parsed = urlparse(url)

    print("\nAnalysis Results")
    print("-" * 55)

    # HTTPS
    if parsed.scheme == "https":
        print("HTTPS                     ✔")
    else:
        print("HTTPS                     ✘")
        score += 1

    # @ karakteri
    if "@" in url:
        print("Contains @                ⚠")
        score += 1
    else:
        print("Contains @                ✔")

    # Uzun URL
    if len(url) > 75:
        print("Long URL                  ⚠")
        score += 1
    else:
        print("Long URL                  ✔")

    # IP adresi kullanımı
    ip_pattern = r"(\d{1,3}\.){3}\d{1,3}"

    if re.search(ip_pattern, parsed.netloc):
        print("Uses IP Address           ⚠")
        score += 1
    else:
        print("Uses IP Address           ✔")

    # Çok fazla tire
    if parsed.netloc.count("-") >= 2:
        print("Suspicious Domain         ⚠")
        score += 1
    else:
        print("Suspicious Domain         ✔")

    print("-" * 55)

    if score <= 1:
        print("Risk Level : LOW")
    elif score <= 3:
        print("Risk Level : MEDIUM")
    else:
        print("Risk Level : HIGH")

    input("\nPress Enter to return...")