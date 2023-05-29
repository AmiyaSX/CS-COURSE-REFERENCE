#include "RdtReceiver.h"
#ifndef TCP_TCPRECEIVER_H
#define TCP_TCPRECEIVER_H
class TCPRdtReceiver :public RdtReceiver
{
private:
    int seq; 
    Packet lastAckPkt;   
public:
    TCPRdtReceiver();
    virtual ~TCPRdtReceiver();

public:
    void receive(const Packet& packet);
};
#endif
