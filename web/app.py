from flask import Flask, render_template

app = Flask(__name__)

from static_files import get_static_files
from controller.user import user
from controller.oauth import oauth

app.register_blueprint(user, url_prefix="/user")
app.register_blueprint(oauth, url_prefix="/oauth")

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def hello(path):
    return render_template("index.html", resource = get_static_files())

if __name__ == '__main__':
    app.run()
