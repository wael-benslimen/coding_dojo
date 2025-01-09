from flask import Flask,render_template
app = Flask(__name__)  



@app.route('/')          
def chessboard():
    return render_template('8by8.html', x = 4, y = 4)

@app.route('/<int:x>')
def chess_with_dimantions(x):
    return render_template('8by8.html', x = x, y = x)


@app.route('/<int:x>/<int:y>')
def chess_XY(x, y):
    return render_template('8by8.html', x = x, y = y)

@app.route('/<int:x>/<int:y>/<color1>/<color2>')
def chessXY_with_colors(x, y, color1, color2):
    return render_template('8by8.html', x = x, y = y, color1 = color1, color2 = color2)


if __name__=="__main__":   
    app.run(debug=True)    

