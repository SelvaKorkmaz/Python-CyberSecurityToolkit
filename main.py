import os

from utils.password_checker import check_password_strength
from utils.password_generator import generate_password
from utils.hash_generator import hash_generator

def clear_screen():
    os.system("cls" if os.name == "nt" else "clear")


def show_menu():
    print(
        r"""
 ██████╗██╗   ██╗██████╗ ███████╗██████╗
██╔════╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔══██╗
██║      ╚████╔╝ ██████╔╝█████╗  ██████╔╝
██║       ╚██╔╝  ██╔══██╗██╔══╝  ██╔══██╗
╚██████╗   ██║   ██████╔╝███████╗██║  ██║
 ╚═════╝   ╚═╝   ╚═════╝ ╚══════╝╚═╝  ╚═╝

        Cyber Security Toolkit
              Version 1.0
"""
    )

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


def main():
    while True:
        clear_screen()
        show_menu()

        choice = input("Select an option: ")

        if choice == "1":
            clear_screen()
            check_password_strength()

        elif choice == "2":
            clear_screen()
            generate_password()

        elif choice == "3":
            clear_screen()
            hash_generator()

        elif choice == "9":
            print("\nGoodbye!")
            break

        else:
            input("\nThis module is under development. Press Enter...")


if __name__ == "__main__":
    main()