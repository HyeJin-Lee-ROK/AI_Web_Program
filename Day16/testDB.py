from flask import Flask, render_template
import pymysql

app = Flask(__name__)

@app.route('/')
def index():
    db_conn = pymysql.connect(host='localhost', user='root',
            password='adminMySql@', database='myweb',
            autocommit=True, cursorclass=pymysql.cursors.DictCursor)

    db_cursor = db_conn.cursor()
    db_cursor.execute("SELECT * FROM Test;")
    data_list = db_cursor.fetchall()
    db_conn.close()

    return render_template('index.html', data_list=data_list)

if __name__ == "__main__":
    app.run(debug=True)