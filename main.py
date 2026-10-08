import os

from utils.password_checker import check_password_strength
from utils.password_generator import generate_password
from utils.hash_generator import hash_generator
from utils.port_scanner import port_scanner
from utils.base64_tool import base64_tool
from utils.caesar_cipher import caesar_cipher
from utils.url_checker import url_checker

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
    print("5. Base64 Tool")
    print("6. Caesar Cipher")
    print("7. URL Security Checker")
    print("8. Exit")
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

        elif choice == "4":
            clear_screen()
            port_scanner()

        elif choice == "5":
            clear_screen()
            base64_tool()

        elif choice == "6":
            clear_screen()
            caesar_cipher()

        elif choice == "7":
            clear_screen()
            url_checker()

        elif choice == "8":
            print("\nGoodbye!")
            break

        else:
            input("\nInvalid option. Press Enter to continue...")


if __name__ == "__main__":
    main()