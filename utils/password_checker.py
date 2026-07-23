import re

COMMON_PASSWORDS = [
    "123456",
    "password",
    "qwerty",
    "123456789",
    "admin",
    "welcome",
    "letmein"
]

def check_password_strength():
    password = input("\nEnter your password: ")

    score = 0
    suggestions = []

    # Length
    if len(password) >= 8:
        score += 1
        print("✔ Length (8+)")
    else:
        print("✘ Length (8+)")
        suggestions.append("Use at least 8 characters.")

    # Uppercase
    if re.search(r"[A-Z]", password):
        score += 1
        print("✔ Uppercase")
    else:
        print("✘ Uppercase")
        suggestions.append("Add at least one uppercase letter.")

    # Lowercase
    if re.search(r"[a-z]", password):
        score += 1
        print("✔ Lowercase")
    else:
        print("✘ Lowercase")
        suggestions.append("Add at least one lowercase letter.")

    # Number
    if re.search(r"\d", password):
        score += 1
        print("✔ Number")
    else:
        print("✘ Number")
        suggestions.append("Add at least one number.")

    # Special Character
    if re.search(r"[!@#$%^&*(),.?\":{}|<>]", password):
        score += 1
        print("✔ Special Character")
    else:
        print("✘ Special Character")
        suggestions.append("Add at least one special character.")

    # Common Password Check
    if password.lower() in COMMON_PASSWORDS:
        print("\n⚠ This password is very common!")
        score = max(score - 2, 0)

    percentage = score * 20

    print(f"\nSecurity Score: {percentage}/100")

    if percentage <= 20:
        level = "Very Weak"
    elif percentage <= 40:
        level = "Weak"
    elif percentage <= 60:
        level = "Medium"
    elif percentage <= 80:
        level = "Strong"
    else:
        level = "Very Strong"

    print(f"Password Strength: {level}")

    if suggestions:
        print("\nSuggestions:")
        for suggestion in suggestions:
            print(f"- {suggestion}")

    input("\nPress Enter to return to menu...")