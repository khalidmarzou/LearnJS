
# # A very simple Flask Hello World app for you to get started with...

# from flask import Flask
# from flask import request

# import json

# app = Flask(__name__)

# @app.route('/',method=["GET","POST"])

# def handle_request():
#     data_set = {"data":[
#                         {"id": "cat-162", "titre":"Sante", "description":"Sante, beaute, cosmetiques bio"},
#                         {"id":"cat-161", "titre":"Sport","description":"Produits et accessoires pour le sport"},
#                         {"id":"cat-160", "titre":"Alimentation","description":"Alimentation et produits locaux"}]}
#     json_dump = json.dumps(data_set)
#     return json_dump

from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/', methods=["GET", "POST"])
def handle_request():
    if request.method == "OPTIONS":
        # Preflight request, respond with CORS headers
        headers = {
            'Access-Control-Allow-Origin': request.headers.get('Origin', '*'),
            'Access-Control-Allow-Methods': 'GET, POST',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '3600'
        }
        return ('', 204, headers)

    data_set = {
        "data": [
            {"id": "cat-162", "titre": "Sante", "description": "Sante, beaute, cosmetiques bio"},
            {"id": "cat-161", "titre": "Sport", "description": "Produits et accessoires pour le sport"},
            {"id": "cat-160", "titre": "Alimentation", "description": "Alimentation et produits locaux"}
        ]
    }
    json_dump = jsonify(data_set)

    # Set CORS headers
    json_dump.headers['Access-Control-Allow-Origin'] = request.headers.get('Origin', '*')
    json_dump.headers['Access-Control-Allow-Methods'] = 'GET, POST'
    json_dump.headers['Access-Control-Allow-Headers'] = 'Content-Type'

    return json_dump

if __name__ == "__main__":
    app.run(debug=True)

