import secrets
import string


def generate_password():
    print("=" * 50)
    print("        PASSWORD GENERATOR")
    print("=" * 50)

    while True:
        try:
            length = int(input("\nPassword Length (minimum 8): "))

            if length < 8:
                print("Password must be at least 8 characters.")
                continue

            break

        except ValueError:
            print("Please enter a valid number.")

    include_numbers = input("Include numbers? (y/n): ").lower() == "y"
    include_symbols = input("Include symbols? (y/n): ").lower() == "y"

    characters = string.ascii_letters

    if include_numbers:
        characters += string.digits

    if include_symbols:
        characters += string.punctuation

    password = "".join(secrets.choice(characters) for _ in range(length))

    print("\nGenerated Password:\n")
    print(password)

    input("\nPress Enter to return to menu...")