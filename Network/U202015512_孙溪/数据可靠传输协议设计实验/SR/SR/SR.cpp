// SR.cpp : 定义控制台应用程序的入口点。
//
#include "stdafx.h"
#include "Global.h"
#include "RdtSender.h"
#include "RdtReceiver.h"
#include "SrRdtSender.h"
#include "SrRdtReceiver.h"


int main(int argc, char* argv[])
{
	RdtSender* ps = new SrRdtSender();
	RdtReceiver* pr = new  SrRdtReciver();
	//	pns->setRunMode(0);  //VERBOS模式
	pns->setRunMode(1);  //安静模式
	pns->init();
	pns->setRtdSender(ps);
	pns->setRtdReceiver(pr);
	pns->setInputFile("C:\\Users\\sucy\\Desktop\\lab\\lab\\lab2\\SR\\test\\input.txt");
	pns->setOutputFile("C:\\Users\\sucy\\Desktop\\lab\\lab\\lab2\\SR\\test\\output.txt");

	pns->start();

	delete ps;
	delete pr;
	delete pUtils;									//指向唯一的工具类实例，只在main函数结束前delete
	delete pns;										//指向唯一的模拟网络环境类实例，只在main函数结束前delete

	return 0;
}