from flask_app import app

from flask_app.controllers import user_controller, books_controller, favorite_controller


if __name__=="__main__":   
    app.run(debug=True)    