from flask import Blueprint, jsonify, request , session

user = Blueprint('user', __name__)

@user.route("/get", methods=['GET'])
def get():
    username = session.get("username")
    return jsonify({"name": "hex","user_id":"123456"})


@user.route("/login", methods=['POST'])
def login():
    data= request.get_json()
    userName = data.get("userName")
    password = data.get("password")
    return jsonify({"Token":"djskfkj9e0r89809"})