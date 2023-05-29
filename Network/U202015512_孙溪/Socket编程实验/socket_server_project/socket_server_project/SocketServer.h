#pragma once
#include "winsock2.h"
#include <stdio.h>
#include <string.h>
#include <iostream>
using namespace std;

#pragma comment(lib,"ws2_32.lib")

class SocketServer
{
	WSADATA wsaData;
	fd_set rfds;
	fd_set wfds;
	bool first_connetion = true;
	int port = 0;
	char recvBuf[4096];
	char filename[48] = "";
	SOCKET srvSocket;
	sockaddr_in addr, clientAddr;
	SOCKET sessionSocket;
	int addrLen;
	
public:
	SocketServer();

	~SocketServer();

	void start_up();

private:
	bool createSocket();

	bool bindPort();

	bool listenClient();

	bool connectClient() const;

	void recv_msg();

	void handle_msg();

	int send_http_pkg();

	int send_file_to_client();

	bool close_socket();
};


