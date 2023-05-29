#include "stdafx.h"
#include "Global.h"
#include "GBNRdtSender.h"


GBNRdtSender::GBNRdtSender():base(1),nextseqnum(1), waitingState(false), num_packet_win(0)
{
}


GBNRdtSender::~GBNRdtSender()
{
}



bool GBNRdtSender::getWaitingState() {
	return waitingState;
}




bool GBNRdtSender::send(const Message& message) {
	if (nextseqnum < base + len) {
		this->waitingState = false; //标记此时窗口未满
		this->win[num_packet_win].acknum = -1; //ack置为-1
		this->win[num_packet_win].seqnum = this->nextseqnum; //指向下一个报文
		this->win[num_packet_win].checksum = 0;//检查和置0
		memcpy(this->win[num_packet_win].payload, message.data, sizeof(message.data));//拷贝数据

		this->win[num_packet_win].checksum = pUtils->calculateCheckSum(this->win[num_packet_win]);//计算检查和
		pUtils->printPacket("发送方发送报文", this->win[num_packet_win]);
		if (base == nextseqnum)//若为窗口首元素则打开计时器
			pns->startTimer(SENDER, Configuration::TIME_OUT, this->win[num_packet_win].seqnum);

		pns->sendToNetworkLayer(RECEIVER, this->win[num_packet_win]);//发送报文至网络层
		this->num_packet_win++;//窗口内packet数目+1

		if (num_packet_win > len)//判断窗口是否满
			this->waitingState = true;//窗口满了！

		this->nextseqnum++;//发送下一个组
		return true;
	}
	else {
		this->waitingState = true;
		return false;
	}
}

void GBNRdtSender::receive(const Packet& ackPkt) {
	if (this->num_packet_win > 0) { //窗口报文数大于0

		//检查校验和是否正确
		int checkSum = pUtils->calculateCheckSum(ackPkt);

		//如果校验和正确，并且确认序号=发送方已发送并等待确认的数据包序号
		if (checkSum == ackPkt.checksum && ackPkt.acknum >= this->base) {

			int num = ackPkt.acknum - this->base + 1;	//记录收到的ack序号

			base = ackPkt.acknum + 1; 
			pUtils->printPacket("发送方正确收到确认", ackPkt);

			if (this->base == this->nextseqnum)
				pns->stopTimer(SENDER, this->win[0].seqnum);//结束则停止
			else { //重启计时器
				pns->stopTimer(SENDER, this->win[0].seqnum);
				pns->startTimer(SENDER, Configuration::TIME_OUT, this->win[num].seqnum); 
			}

			for (int i = 0; i < num_packet_win - num; i++)
			{
				win[i] = win[i + num];//将窗口内的packet向前移动num位
				printf("The current windows's %d number is %d\n", i, win[i].seqnum);
			}
			this->num_packet_win = this->num_packet_win - num; //窗口内包数目减去num
		}
		
	}
}

void GBNRdtSender::timeoutHandler(int seqNum) {
	
	pUtils->printPacket("发送方定时器时间到，重发上次发送的报文", this->win[0]);
	pns->stopTimer(SENDER, this->win[0].seqnum);
	pns->startTimer(SENDER, Configuration::TIME_OUT, this->win[0].seqnum);
	for (int i = 0; i < num_packet_win; i++)
	{
		pns->sendToNetworkLayer(RECEIVER, this->win[i]);			//重新发送数据包
	}

}
