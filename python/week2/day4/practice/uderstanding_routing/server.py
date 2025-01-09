from flask import Flask  
app = Flask(__name__)    



@app.route('/')          
def hello_world():
    return 'Hello World!'  


@app.route('/dojo')
def name():
    return "Dojo"

@app.route('/say/<name>')
def hi(name):
    return f"hi {str(name)}"

@app.route('/<word>/<int:times>')
def repete_word(word, times):
    return f"{word*times}"


if __name__=="__main__":   
    app.run(debug=True)    

