// main.cpp : 此文件包含 "main" 函数。程序执行将在此处开始并结束。
//
#include<stdio.h>
#include<winsock2.h>
#include <WS2tcpip.h>
#include <iostream>
#include <fstream>
#include<string.h>
#include <exception>

using namespace std;
#pragma comment(lib,"ws2_32.lib")

void send_404(SOCKET s, char* filename);
void send_file(SOCKET s, char* filename);
int error(int backdata, int errordata, string printword);
void send_head(char* arguments, SOCKET s, char* filename);
char* file_type_addr(char* arg);

int error(int backdata, int errordata, string printword)
{
	if (backdata == errordata)
	{
		perror(&printword[0]);
		WSAGetLastError();
		getchar();
		return 1;
	}
	return 0;
}

int main()
{
	WSADATA wsaData;
	fd_set rfds;				//用于检查socket是否有数据到来的的文件描述符，用于socket非阻塞模式下等待网络事件通知（有数据到来）
	fd_set wfds;				//用于检查socket是否可以发送的文件描述符，用于socket非阻塞模式下等待网络事件通知（可以发送数据）
	bool first_connetion = true;
	fstream outFile;

	int nRc = WSAStartup(0x0202, &wsaData);

	if (nRc) {
		printf("Winsock  startup failed with error!\n");
	}

	if (wsaData.wVersion != 0x0202) {
		printf("Winsock version is not correct!\n");
	}

	printf("Winsock  startup Ok!\n");

	//config port ip filedir
	int port = 8090;
	char inaddr[20] = "127.0.0.1";
	char filename[48] = "C:\\Users\\sucy\\Desktop\\lab\\lab\\lab1\\html\\";
	printf("请输入端口号：\n");
	scanf_s("%d", &port, sizeof(port));
	printf("请输入监听地址：\n");
	scanf_s("%s", inaddr, sizeof(inaddr));
	////C:\Users\sucy\Desktop\lab\lab\lab1\html\

	printf("请输入主目录：\n");
	scanf_s("%s", filename, sizeof(filename));

	SOCKET srvSocket;
	sockaddr_in addr, clientAddr;
	SOCKET sessionSocket;
	int addrLen;
	//create socket
	srvSocket = socket(AF_INET, SOCK_STREAM, 0);
	if (srvSocket != INVALID_SOCKET)
		printf("Socket create Ok!\n");
	addr.sin_family = AF_INET;
	addr.sin_port = htons(port);
	inet_pton(AF_INET, inaddr ,&addr.sin_addr.S_un.S_addr);
	printf("服务端的IP和端口号是: %d.%d.%d.%d:%u\n",addr.sin_addr.S_un.S_un_b.s_b1, addr.sin_addr.S_un.S_un_b.s_b2, addr.sin_addr.S_un.S_un_b.s_b3, addr.sin_addr.S_un.S_un_b.s_b4, htons(addr.sin_port));
	//addr.sin_addr.S_un.S_addr = htonl(INADDR_ANY);
	//binding
	int rtn = bind(srvSocket, (LPSOCKADDR)&addr, sizeof(addr));
	if (rtn != SOCKET_ERROR)
		printf("Socket bind Ok!\n");
	//listen
	rtn = listen(srvSocket, 5);
	if (rtn != SOCKET_ERROR)
		printf("Socket listen Ok!\n");

	clientAddr.sin_family = AF_INET;
	addrLen = sizeof(clientAddr);
	char recvBuf[4096];

	u_long blockMode = 1;//将srvSock设为非阻塞模式以监听客户连接请求

	if ((rtn = ioctlsocket(srvSocket, FIONBIO, &blockMode) == SOCKET_ERROR)) { //FIONBIO：允许或禁止套接口s的非阻塞模式。
		cout << "ioctlsocket() failed with error!\n";
		return 0;
	}
	cout << "ioctlsocket() for server socket ok!	Waiting for client connection and data\n";

	//清空read,write描述符，对rfds和wfds进行了初始化，必须用FD_ZERO先清空，下面才能FD_SET
	FD_ZERO(&rfds);
	FD_ZERO(&wfds);

	//设置等待客户连接请求
	FD_SET(srvSocket, &rfds);
	try {

		while (true)
		{
			//清空read,write描述符
			FD_ZERO(&rfds);
			FD_ZERO(&wfds);
			//设置等待连接状态
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
				printf_s("客户端的IP和端口号是：%d.%d.%d.%d:%u\n", clientAddr.sin_addr.S_un.S_un_b.s_b1, clientAddr.sin_addr.S_un.S_un_b.s_b2, clientAddr.sin_addr.S_un.S_un_b.s_b3, clientAddr.sin_addr.S_un.S_un_b.s_b4, htons(clientAddr.sin_port));

				//把会话SOCKET设为非阻塞模式
				if ((rtn = ioctlsocket(sessionSocket, FIONBIO, &blockMode) == SOCKET_ERROR)) { //FIONBIO：允许或禁止套接口s的非阻塞模式。
					cout << "ioctlsocket() failed with error!\n";
					return 0;
				}
				cout << "ioctlsocket() for session socket ok!	Waiting for client connection and data\n";

				//设置等待会话SOKCET可接受数据或可发送数据
				FD_SET(sessionSocket, &rfds);
				FD_SET(sessionSocket, &wfds);

				first_connetion = false;
			}

			if (nTotal >= 0) {
				//如果会话SOCKET有数据到来，则接受客户的数据
				if (FD_ISSET(sessionSocket, &rfds)) {
					//receiving data from client
					memset(recvBuf, '\0', 4096);
					rtn = recv(sessionSocket, recvBuf, 4096, 0);

					if (!error(rtn, SOCKET_ERROR, "Client leaving ...\n")) {
						printf("%s共接收到%d字节数据\n", recvBuf, strlen(recvBuf));
						int i = 0, j = 0;
						char name[50] = " ";
						while (i < strlen(recvBuf) && recvBuf[i] != '/')
							i++;
						while (i + 1 < strlen(recvBuf) && j < 49 && recvBuf[i + 1] != ' ')
						{
							name[j] = recvBuf[i + 1];
							i++;
							j++;
						}
						name[j] = '\0';
						printf("文件名：%s\n", name);
						char* filename2 = new char[strlen(filename) + 1];
						strcpy_s(filename2, strlen(filename) + 1, filename);
						strcat_s(filename2, strlen(filename2) + strlen(name) + 1, name);
						printf_s("path:%s\n", filename2);
						send_head(filename2, sessionSocket, filename2);
						send_file(sessionSocket, filename2);
					}
					else {
						printf("Client leaving ...\n");
						closesocket(sessionSocket);  //既然client离开了，就关闭sessionSocket
					}
				}
			}
		}
			//closesocket(sessionSocket);
		}catch (exception e) {

			cout << "[1]out of bound!" << endl;
		}
	//}
	closesocket(sessionSocket);
	closesocket(srvSocket);
	WSACleanup();

	getchar();
	return 0;
}

void send_head(char* arguments, SOCKET s, char* filename)
{
	char* extension = (char*)malloc(10);
	extension = file_type_addr(arguments);//解析文件类型
	string content_type = "text/plain";
	string body_length = "Content-Length: ";
	if (NULL == extension) return;
	if (strcmp(extension, "html") == 0)
	{
		content_type = "text/html";
	}
	else if (strcmp(extension, "gif") == 0)
	{
		content_type = "image/gif";
	}
	else if (strcmp(extension, "jpg") == 0)
	{
		content_type = "image/jpg";
	}
	else if (strcmp(extension, "css") == 0)
	{
		content_type = "text/css";
	}
	else if (strcmp(extension, "js") == 0)
	{
		content_type = "application/x-javascript";
	}
	else if (strcmp(extension, "ico") == 0)
	{
		content_type = "image/x-icon";
	}
	else if (strcmp(extension, "mp4") == 0)
	{
		content_type = "video/mp4";
	}
	else if (strcmp(extension, "mp3") == 0)
	{
		content_type = "video/mp3";
	}
	else {
		printf("文件后缀名错误，无法解析文件！\n");
		printf("Sending error");
		return;
	}

	string head = "HTTP/1.1 200 OK\r\n";//构造响应报文头部，并发送
	string not_find = "HTTP/1.1 404 Not Found\r\nConnection: close\r\nContent-Type: text/html\r\n\r\n";
	int len, len1;
	char temp_1[50] = "Content-type: ";
	len = head.length();
	len1 = not_find.length();
	FILE* pfile;
	fopen_s(&pfile, filename, "rb");
	if (pfile == NULL)
	{
		send(s, &not_find[0], len1, 0);
		return;
	}
	else if (send(s, &head[0], len, 0) == -1)
	{
		printf("Sending error");
		return;
	}
	strcat_s(temp_1, &content_type[0]);
	strcat_s(temp_1, "\r\n");
	len = strlen(temp_1);
	if (send(s, temp_1, len, 0) == -1) {
		printf("Sending error!");
		return;
	}
	send(s, "\r\n", 2, 0);
}

char* file_type_addr(char* arg)//定位文件名后缀位置
{
	char* temp;
	if ((temp = strrchr(arg, '.')) != NULL)
	{
		return temp + 1;
	}
	return nullptr;
}

void send_404(SOCKET s, char* filename) {
	int ok;
	FILE* pfile;
	fopen_s(&pfile, "notfound.htm", "rb");
	fseek(pfile, 0L, SEEK_SET);
	int flen = ftell(pfile);
	char* p = (char*)malloc(flen + 1);
	fread(p, flen, 1, pfile);
	send(s, p, flen, 0);
}
void send_file(SOCKET s, char* filename)//发送文件给客户端
{
	int ok;
	FILE* pfile;
	fopen_s(&pfile, filename, "rb");
	if (pfile == NULL)
	{
		printf("打开文件失败！找不到文件: %s\n", filename);
		string p = "<HTML><HEAD><META NAME=\"GENERATOR\" Content=\"Microsoft Visual Studio\"><TITLE>Testing Site</TITLE></HEAD><BODY><h1>Not Found</h1></BODY></HTML>\r\n";
		send(s, p.c_str(), p.size(), 0);
		return;
	}
	fseek(pfile, 0L, SEEK_END);
	int flen = ftell(pfile);
	char* p = (char*)malloc(flen + 1);
	fseek(pfile, 0L, SEEK_SET);
	fread(p, flen, 1, pfile);
	send(s, p, flen, 0);
}
// 运行程序: Ctrl + F5 或调试 >“开始执行(不调试)”菜单
// 调试程序: F5 或调试 >“开始调试”菜单

// 入门使用技巧: 
//   1. 使用解决方案资源管理器窗口添加/管理文件
//   2. 使用团队资源管理器窗口连接到源代码管理
//   3. 使用输出窗口查看生成输出和其他消息
//   4. 使用错误列表窗口查看错误
//   5. 转到“项目”>“添加新项”以创建新的代码文件，或转到“项目”>“添加现有项”以将现有代码文件添加到项目
//   6. 将来，若要再次打开此项目，请转到“文件”>“打开”>“项目”并选择 .sln 文件
