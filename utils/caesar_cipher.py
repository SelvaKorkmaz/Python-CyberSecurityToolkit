def caesar_cipher():
    print("=" * 55)
    print("                CAESAR CIPHER")
    print("=" * 55)

    text = input("\nEnter text: ")
    shift = int(input("Enter shift value: "))

    result = ""

    for char in text:
        if char.isalpha():
            start = ord("A") if char.isupper() else ord("a")
            result += chr((ord(char) - start + shift) % 26 + start)
        else:
            result += char

    print("\nEncrypted Text:")
    print("-" * 55)
    print(result)

    input("\nPress Enter to return...")