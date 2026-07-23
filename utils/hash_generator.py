import hashlib
import os


def calculate_hash(file_path, algorithm):
    hash_function = algorithm()

    with open(file_path, "rb") as file:
        while chunk := file.read(4096):
            hash_function.update(chunk)

    return hash_function.hexdigest()


def hash_generator():
    print("=" * 50)
    print("           FILE HASH GENERATOR")
    print("=" * 50)

    file_path = input("\nEnter file path: ").strip()

    if not os.path.isfile(file_path):
        print("\n❌ File not found!")

        input("\nPress Enter to return...")
        return

    print("\nCalculating hashes...\n")

    print("MD5")
    print("-" * 50)
    print(calculate_hash(file_path, hashlib.md5))

    print("\nSHA1")
    print("-" * 50)
    print(calculate_hash(file_path, hashlib.sha1))

    print("\nSHA256")
    print("-" * 50)
    print(calculate_hash(file_path, hashlib.sha256))

    input("\nPress Enter to return...")