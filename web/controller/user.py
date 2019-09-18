from flask import Blueprint, jsonify, request , session

user = Blueprint('user', __name__)

@user.route("/get", methods=['GET'])
def get():
    username = session.get("username")
    return jsonify({"username": "hex"})


@user.route("/login", methods=['POST'])
def login():
    data= request.get_json()
    username = data.get("username")
    password = data.get("password")
    return jsonify({"username":username,"password":password})