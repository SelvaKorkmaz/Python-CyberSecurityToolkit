import socket

def scan_ports(target):
    common_ports = [21, 22, 23, 25, 53, 80, 110, 143, 443]

    open_ports = []

    for port in common_ports:
        try:
            sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            sock.settimeout(0.5)

            result = sock.connect_ex((target, port))

            if result == 0:
                service = socket.getservbyport(port, "tcp")

                open_ports.append({
                    "port": port,
                    "service": service.upper()
                })

            sock.close()

        except:
            pass

    return open_ports