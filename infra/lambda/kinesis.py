import base64
import json

def lambda_handler(event,context):
    output = []
    print(event)
    try:
        # loop through records in incoming Event
        for record in event["records"]:
            # extract message
            message = json.loads(base64.b64decode(record["data"]))
            
            print('User Agent: ',message)
            timestamp = message["timestamp"]
            action = message["action"]
            country = message["httpRequest"]["country"]
            user_agent = message["httpRequest"]["headers"][1]["value"]
            http_method = message["httpRequest"]["httpMethod"]
            
            print('Country: ', country)
            print('Action: ', action)
            print('User Agent: ',user_agent)
            
            mobileUserAgent, browserUserAgent = filter_user_agent(user_agent)
            usTraffic, ukTraffic, otherTraffic = traffic_from_country(country, action)
            getHttpMethod, headHttpMethod, postHttpMethod = filter_http_request_method(http_method, action)
            
            # append new fields in message dict
            message["usTraffic"] = usTraffic
            message["ukTraffic"] = ukTraffic
            message["otherTraffic"] = otherTraffic
            message["mobileUserAgent"] = mobileUserAgent
            message["browserUserAgent"] = browserUserAgent
            message["getHttpMethod"] = getHttpMethod
            message["headHttpMethod"] = headHttpMethod
            message["postHttpMethod"] = postHttpMethod

            
            # base64-encoding
            data = base64.b64encode(json.dumps(message).encode('utf-8'))
            
            output_record = {
                "recordId": record['recordId'], # retain same record id from the Kinesis data Firehose
                "result": "Ok",
                "data": data.decode('utf-8')
            }
            output.append(output_record)
        return {"records": output}
    except Exception as e:
        print(e)
        
def filter_user_agent(user_agent):
    # returns one hot encoding based on user agent
    if "Mobile" in user_agent:
        mobile_user_agent = True
        return (1, 0)
    else:
        mobile_user_agent = False
        return (0, 1) # anomaly recorded
        
def traffic_from_country(country_code, action):
    # returns one hot encoding based on allowed traffic from countries
    if action == "ALLOW":
        if "US" in country_code:
            allowed_country_traffic = True
            return (1, 0, 0)
        elif "UK" in country_code:
            allowed_country_traffic = True
            return (0, 1, 0)
        else:
            allowed_country_traffic = False
            return (0, 0, 1) # anomaly recorded
    else :
        return (0, 0, 0)
        
def filter_http_request_method(http_method, action):
    # returns one hot encoding based on allowed http method type
    if action == "ALLOW":
        if "GET" in http_method:
            return (1, 0, 0)
        elif "HEAD" in http_method:
            return (0, 1, 0)
        elif "POST" in http_method:
            return (0, 0, 1) # anomaly recorded
    else :
        return (0, 0, 0)