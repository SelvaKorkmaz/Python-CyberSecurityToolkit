import base64


def base64_tool():
    print("=" * 55)
    print("                 BASE64 TOOL")
    print("=" * 55)

    print("\n1. Encode")
    print("2. Decode")

    choice = input("\nSelect option: ")

    if choice == "1":
        text = input("\nEnter text: ")

        encoded = base64.b64encode(text.encode()).decode()

        print("\nEncoded Text:")
        print("-" * 55)
        print(encoded)

    elif choice == "2":
        text = input("\nEnter Base64 text: ")

        try:
            decoded = base64.b64decode(text).decode()

            print("\nDecoded Text:")
            print("-" * 55)
            print(decoded)

        except Exception:
            print("\nInvalid Base64 input!")

    else:
        print("\nInvalid option!")

    input("\nPress Enter to return...")