import hashlib
import os


def calculate_hash(file_path, algorithm):
    hash_function = algorithm()

    with open(file_path, "rb") as file:
        while chunk := file.read(4096):
            hash_function.update(chunk)

    return hash_function.hexdigest()


def format_size(size):
    if size < 1024:
        return f"{size} B"
    elif size < 1024 * 1024:
        return f"{size / 1024:.2f} KB"
    else:
        return f"{size / (1024 * 1024):.2f} MB"


def hash_generator():
    print("=" * 55)
    print("                 FILE HASH GENERATOR")
    print("=" * 55)

    file_path = input("\nEnter file path: ").strip().strip('"')

    if not os.path.isfile(file_path):
        print("\n❌ File not found!")
        input("\nPress Enter to return...")
        return

    file_name = os.path.basename(file_path)
    extension = os.path.splitext(file_path)[1] or "No Extension"
    file_size = format_size(os.path.getsize(file_path))

    print("\nFile Information")
    print("-" * 55)
    print(f"File Name : {file_name}")
    print(f"Extension : {extension}")
    print(f"Size      : {file_size}")

    print("\nCalculating hashes...\n")

    print("MD5")
    print("-" * 55)
    print(calculate_hash(file_path, hashlib.md5))

    print("\nSHA1")
    print("-" * 55)
    print(calculate_hash(file_path, hashlib.sha1))

    print("\nSHA256")
    print("-" * 55)
    print(calculate_hash(file_path, hashlib.sha256))

    input("\nPress Enter to return...")