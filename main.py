import os

def clear_screen():
    os.system("cls" if os.name == "nt" else "clear")


def show_menu():
    print("=" * 50)
    print("        CYBER SECURITY TOOLKIT")
    print("=" * 50)
    print("1. Password Strength Checker")
    print("2. Password Generator")
    print("3. File Hash Generator")
    print("4. Port Scanner")
    print("5. Base64 Encoder")
    print("6. Base64 Decoder")
    print("7. Caesar Cipher")
    print("8. URL Security Checker")
    print("9. Exit")
    print("=" * 50)


while True:

    clear_screen()

    show_menu()

    choice = input("Select an option: ")

    if choice == "9":
        print("\nGoodbye!")
        break

    else:
        input("\nThis module is under development. Press Enter...")