package com.example.mapsbackend.Service;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class SmsService {


    private String accountSid="AC443a71070268584c9dd96585359e9c30";


    private String authToken = "b63ea5a2a6aef15ffaed7d18a6320439";


    private String fromPhoneNumber = "+18052965147";

    public SmsService() {
        Twilio.init(accountSid, authToken);
    }

    public void sendSms(String toPhoneNumber, String message) {
        Message.creator(new PhoneNumber(toPhoneNumber), new PhoneNumber(fromPhoneNumber), message).create();
    }
}

