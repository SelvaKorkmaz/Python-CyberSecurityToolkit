import socket


def port_scanner():
    print("=" * 55)
    print("                 PORT SCANNER")
    print("=" * 55)

    target = input("\nEnter IP Address: ")

    common_ports = [21, 22, 23, 25, 53, 80, 110, 143, 443]

    print(f"\nScanning {target}...\n")

    for port in common_ports:
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(0.5)

        result = sock.connect_ex((target, port))

        if result == 0:
            print(f"Port {port} OPEN")

        sock.close()

    input("\nPress Enter to return...")