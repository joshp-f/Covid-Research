from flask import (Flask, 
      send_from_directory, 
      jsonify, 
      request)
import os
os.environ["JAVA_HOME"] = "/usr/lib/jvm/jdk-11.0.2"
from test_model import searchDatabase, pysearch, KEYWORDS, model

app = Flask(__name__,static_folder='frontend') 

@app.route('/api/search') 
def hello_world():
  text = request.args.get('text')
  data = searchDatabase(question='Why so serious?')
  print(data)
  if len(data) == 0:
    return jsonify([
        {"Source":"SomeSource","Text":"Faketext","Confidence":155}, 
        {"Source":"SomeSource2", "Text": "Faketext2", "Confidence":323}
    ])
  else:
    return jsonify(data)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
  if path != "" and os.path.exists(app.static_folder + '/' + path):
      return send_from_directory(app.static_folder, path)
  else:
      return send_from_directory(app.static_folder, 'index.html')

if __name__ == "__main__": 
    app.run(host='0.0.0.0',debug=True) 