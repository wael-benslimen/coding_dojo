from flask import Flask, render_template,redirect, request, session
app = Flask(__name__)
app.secret_key = "keep_secret"  



@app.route('/')          
def index():
    return render_template('index.html')


@app.route('/treat_info', methods = ['POST'])
def form():
    session['name'] = request.form['name']
    session['location'] = request.form['location']
    session['lung'] = request.form['lung']
    session['comment'] = request.form['comment']
    return redirect('/resault')

@app.route('/resault')
def resault():
    return render_template('resault.html')



if __name__=="__main__":   
    app.run(debug=True)    

