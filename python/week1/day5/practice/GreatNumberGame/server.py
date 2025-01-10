from flask import Flask, render_template, redirect, request, session
from random import randint
app = Flask(__name__)  
app.secret_key = "shshshshhshs"

x = randint(1, 100)
@app.route('/')          
def index():
    session["random"] = x
    print (session["random"])
    return render_template('index.html')


@app.route('/guess', methods = ['POST'])
def guess_game():
    session["guess"] = request.form["guess"]
    if str(session["random"]) > session["guess"]:
        session["test"] = "low"
    elif session["random"] < int(session["guess"]):
        session["test"] = "high"
    elif session["random"] == int(session["guess"]):
       session["test"] = "eaqual"    
    print (session["random"])
    return redirect("/clear")
    
@app.route('/clear')
def clear_session():
    session.clear()
    return redirect('/')


if __name__=="__main__":   
    app.run(debug=True)    

