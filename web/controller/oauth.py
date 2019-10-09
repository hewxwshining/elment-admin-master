from flask import Blueprint, jsonify, request, session
import requests
import json

oauth = Blueprint('oauth',__name__)

@oauth.route('/redirect', methods = ['get'])
def get():
	code = request.args.get('code')
	print("code=",code)
	client_id = "0768d5f1c46456bf149d"
	client_secret ="89b57306814ffc15f2ae8f2425631490e72d0b70"
	url = 'https://github.com/login/oauth/access_token?client_id=' + client_id + '&client_secret=' + client_secret + '&code=' + code
	tokenResponse = requests.post(url);

	tokenResponseParams = getParams(tokenResponse.text)
	access_token = tokenResponseParams.get('access_token')
	print("access_token=",access_token)
	setHeaders = {"Accept":"application/json", "Authorization":"Token {}".format(access_token)}
	print(setHeaders)
	proxies = {"http_proxy": "http://web-proxy.oa.com:8080",
               "https_proxy": "http://web-proxy.oa.com:8080"
               }
	userinfoResponse = requests.get('https://api.github.com/user', headers = setHeaders, proxies=proxies)
	print(userinfoResponse);
	return jsonify({"data": access_token})


def getParams(str):
	keyValueArr = str.split('&')
	paramObj = {}
	for val in keyValueArr:
		keyValue = val.split('=')
		paramObj[keyValue[0]] = keyValue[1]
	return paramObj