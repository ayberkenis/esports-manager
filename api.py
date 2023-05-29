from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api, Resource

api = Flask(__name__)
CORS(api) # This will enable CORS for all routes to ensure that the API can be accessed by any domain for testing
# purposes


@api.route('/api/v1/status', methods=['GET'])
def status():
    return jsonify({'status': 'ok'})


@api.route('/api/v1/echo', methods=['POST'])
def echo():
    return jsonify(request.json)


if __name__ == '__main__':
    api.run(debug=True)