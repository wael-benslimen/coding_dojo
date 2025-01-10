from flask import Flask, render_template, redirect, request, session
app = Flask(__name__) 
app.secret_key = "keep_it_secret" 


@app.route('/')          
def index():
    return render_template('index.html')

@app.route('/count', methods = ["POST"])
def counter_plus():
    if "c" in session:
        x = session["c"]
    else:
        session["c"] = request.form['plus']
        x = session["c"]

    x = int(x) + int(request.form['plus'])
    session["c"] = x
    return redirect('/')



@app.route('/clear')
def clear_session():
    session.clear()
    return redirect("/")


if __name__=="__main__":   
    app.run(debug=True)    

