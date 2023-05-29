#include "SocketServer.h"
#include "config.h"


//char* file_type_addr(char* filename)//定位文件名后缀位置
//{
//	char* temp = strrchr(filename, '.');
//	if (temp != NULL)
//	{
//		return temp + 1;
//	}
//	return filename;
//}

SocketServer::SocketServer()
{
	int nRc = WSAStartup(0x0202, &wsaData);
	if (nRc) {
		printf("Winsock  startup failed with error!\n");
	}
	if (wsaData.wVersion != 0x0202) {
		printf("Winsock version is not correct!\n");
	}
	printf("Winsock  startup Ok!\n");
}

SocketServer::~SocketServer()
{
	close_socket();
}

void SocketServer::start_up()
{
	createSocket();
	bindPort();
	listenClient();
	connectClient();
	recv_msg();
}

bool SocketServer::createSocket()
{
	//create socket
	srvSocket = socket(AF_INET, SOCK_STREAM, 0);
	if (srvSocket != INVALID_SOCKET) {
		printf("Socket create Ok!\n");
		return true;
	}
	return false;
}

bool SocketServer::bindPort()
{
	//set port and ip and bind
	addr.sin_family = AF_INET;
	addr.sin_port = htons(SERVER_PORT);
	addr.sin_addr.S_un.S_addr = htonl(INADDR_ANY);
	clientAddr.sin_family = AF_INET;
	addrLen = sizeof(clientAddr);
	int rtn = bind(srvSocket, (LPSOCKADDR)&addr, sizeof(addr));
	if (rtn != SOCKET_ERROR) {
		printf("Socket bind Ok!\n");
		return true;
	}
	return false;
}

bool SocketServer::listenClient()
{
	//监听
	int rtn = listen(srvSocket, 5);
	if (rtn != SOCKET_ERROR)
		printf("Socket listen Ok!\n");
	return false;
}

bool SocketServer::connectClient() const
{
	u_long blockMode = 1;//将srvSock设为非阻塞模式以监听客户连接请求
	int rtn;
	if (!(rtn = ioctlsocket(srvSocket, FIONBIO, &blockMode) == SOCKET_ERROR)) { //FIONBIO：允许或禁止套接口s的非阻塞模式。
		cout << "ioctlsocket() for server socket ok!	Waiting for client connection and data\n";
		//清空read,write描述符，对rfds和wfds进行了初始化，必须用FD_ZERO先清空，下面才能FD_SET
		FD_ZERO(&rfds);
		FD_ZERO(&wfds);

		//设置等待客户连接请求
		FD_SET(srvSocket, &rfds);

		return true;
	}
	cout << "ioctlsocket() failed with error!\n";
	return false;
}

void SocketServer::recv_msg()
{
	int rtn;
	while (true) {
		//清空read,write描述符
		FD_ZERO(&rfds);
		FD_ZERO(&wfds);

		//设置等待客户连接请求
		FD_SET(srvSocket, &rfds);

		if (!first_connetion) {
			//设置等待会话SOKCET可接受数据或可发送数据
			FD_SET(sessionSocket, &rfds);
			FD_SET(sessionSocket, &wfds);
		}

		//开始等待
		int nTotal = select(0, &rfds, &wfds, NULL, NULL);

		//如果srvSock收到连接请求，接受客户连接请求
		if (FD_ISSET(srvSocket, &rfds)) {
			nTotal--;

			//产生会话SOCKET
			sessionSocket = accept(srvSocket, (LPSOCKADDR)&clientAddr, &addrLen);
			if (sessionSocket != INVALID_SOCKET)
				printf("Socket listen one client request!\n");

			u_long blockMode = 1;
			//把会话SOCKET设为非阻塞模式
			if ((rtn = ioctlsocket(sessionSocket, FIONBIO, &blockMode) == SOCKET_ERROR)) { //FIONBIO：允许或禁止套接口s的非阻塞模式。
				cout << "ioctlsocket() failed with error!\n";
				return;
			}
			cout << "ioctlsocket() for session socket ok!	Waiting for client connection and data\n";

			//设置等待会话SOKCET可接受数据或可发送数据
			FD_SET(sessionSocket, &rfds);
			FD_SET(sessionSocket, &wfds);

			first_connetion = false;

		}

		//检查会话SOCKET是否有数据到来
		if (nTotal > 0) {
			//如果会话SOCKET有数据到来，则接受客户的数据
			if (FD_ISSET(sessionSocket, &rfds)) {
				//receiving data from client
				memset(recvBuf, '\0', 4096);
				rtn = recv(sessionSocket, recvBuf, 256, 0);
				if (rtn > 0) {
					printf("Received %d bytes from client: %s\n", rtn, recvBuf);
					strcat_s(filename, recvBuf);
					handle_msg();
					send_file_to_client();
				}
				else {
					printf("Client leaving ...\n");
					close_socket();  //既然client离开了，就关闭sessionSocket
				}

			}
		}
	}
}

void SocketServer::handle_msg()
{
	char* file_type;
	//= file_type_addr(filename);
	//string head = "HTTP/1.1 200 OK\r\n";	//响应报文头部
	//string content_type = "text/plain";
	//string body_length = "Content-Length: ";

	//if (strcmp(file_type, "html") == 0)
	//{
	//	content_type = "text/html";
	//}
	//if (strcmp(file_type, "gif") == 0)
	//{
	//	content_type = "image/gif";
	//}
	//if (strcmp(file_type, "jpg") == 0)
	//{
	//	content_type = "image/jpg";
	//}
	//if (strcmp(file_type, "png") == 0)
	//{
	//	content_type = "image/png";
	//}
	//FILE* pfile;
	//fopen_s(&pfile, filename, "rb");
	//if (pfile == NULL)
	//{
	//	head = "HTTP/1.1 404 NOT FOUND\r\n";
	//	send(sessionSocket, &head[0],strlen(&head[0]), 0);
	//}
	//else if (send(sessionSocket, &head[0], strlen(&head[0]), 0) == -1)
	//{
	//	printf("Sending error");
	//	return;
	//}
}

int SocketServer::send_http_pkg()
{
	return 0;
}

int SocketServer::send_file_to_client()
{
	int ok;
	FILE* pfile;
	fopen_s(&pfile, filename, "rb");
	if (pfile == NULL)
	{
		printf("打开文件失败！\n");
		return 0;
	}
	fseek(pfile, 0L, SEEK_END);
	int flen = ftell(pfile);
	char* p = (char*)malloc(flen + 1);
	fseek(pfile, 0L, SEEK_SET);
	fread(p, flen, 1, pfile);
	send(sessionSocket, p, flen, 0);
}

bool SocketServer::close_socket()
{
	closesocket(srvSocket);
	closesocket(sessionSocket);
	return false;
}

