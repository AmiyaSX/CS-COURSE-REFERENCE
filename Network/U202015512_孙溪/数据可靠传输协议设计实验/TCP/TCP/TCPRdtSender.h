#include "RdtSender.h"
#ifndef TCP_TCPSENDER_H
#define TCP_TCPSENDER_H
#define len 8
class TCPRdtSender :public RdtSender
{
private:
    int base;
    int nextseqnum;     //下一个发送序号
    bool waitingState;  //是否等待ack
    Packet win[len];    //窗口
    int num_pac_win;    //下一个存放在窗口中的序号
    int count;  //快速重传判断
    int current_rcv_ack;    //当前要收到的ack
    int last_rcv_ack;   //最后收到的ack
public:
    bool getWaitingState(); 
    bool send(const Message& message);
    void receive(const Packet& ackPkt);
    void timeoutHandler(int seqNum);

public:
     TCPRdtSender();
    virtual ~TCPRdtSender();
};
#endif //TCP_TCPSENDER_H