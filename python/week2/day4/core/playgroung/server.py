from flask import Flask, render_template
app = Flask(__name__)   



 
@app.route('/play')          
def boxes_3():
    return render_template('index.html')
      
@app.route('/play/<int:x>')
def repete(x):
    return render_template('repete.html', x = int(x))


@app.route('/play/<int:x>/<color>')
def color(x, color):
    return render_template("color.html", x = x, color = color )

if __name__=="__main__":   
    app.run(debug=True)    

