from urllib.parse import urlparse
import re


def url_checker():
    print("=" * 55)
    print("               URL SECURITY CHECKER")
    print("=" * 55)

    url = input("\nEnter URL: ").strip()

    risk_score = 0

    parsed = urlparse(url)

    print("\nAnalysis Results")
    print("-" * 55)

    # HTTPS Check
    if parsed.scheme == "https":
        print("HTTPS                     ✔")
    else:
        print("HTTPS                     ✘")
        risk_score += 1

    # Contains @
    if "@" in url:
        print("Contains @                ⚠")
        risk_score += 1
    else:
        print("Contains @                ✔")

    # URL Length
    if len(url) > 75:
        print("Very Long URL             ⚠")
        risk_score += 1
    else:
        print("Very Long URL             ✔")

    # IP Address Check
    ip_pattern = r"(\d{1,3}\.){3}\d{1,3}"

    if re.search(ip_pattern, parsed.netloc):
        print("Contains IP Address       ⚠")
        risk_score += 1
    else:
        print("Contains IP Address       ✔")

    print("\n" + "-" * 55)

    if risk_score == 0:
        print("Risk Level : LOW")
    elif risk_score <= 2:
        print("Risk Level : MEDIUM")
    else:
        print("Risk Level : HIGH")

    input("\nPress Enter to return...")