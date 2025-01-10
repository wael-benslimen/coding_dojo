from flask import Flask, render_template, request, redirect
app = Flask(__name__)  



@app.route('/')          
def index():
    return render_template('index.html')

@app.route('/checkout' methods = ['POST'])
def treat_info():
    return render_template("/resault")



if __name__=="__main__":   
    app.run(debug=True)    

