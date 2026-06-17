from flask import Flask, render_template, request, url_for, redirect, session
import mysql.connector
from datetime import datetime


# connect to db
db = mysql.connector.connect(
    host = 'localhost',
    user = 'root',
    password = 'cocfever',
    database = 'shopping'
)

cursor = db.cursor()

# create app
app = Flask(__name__)

# for session
app.secret_key = 'cocfever'


# create routes for users

@app.route('/register', methods = ['GET','POST'])
def register():
    if request.method == 'POST':
        # get user details
        first_name = request.form['first_name']
        last_name = request.form['last_name']
        date_of_birth = request.form['date_of_birth']
        register_number = request.form['register_number']
        email = request.form['email']
        password = request.form['password']

        # register the user
        cursor.execute('insert into customers(first_name, last_name, date_of_birth, register_number, email, password) values(%s,%s,%s,%s,%s, %s)', (first_name,last_name, date_of_birth,register_number,email, password))
        db.commit()
        
        # if successfull then redirect to home
        return redirect(url_for('login'))

    return render_template('register.html')


@app.route('/login', methods = ['GET','POST'])
def login():
    if request.method == 'POST':
        register_number = int(request.form['register_number'])
        password = request.form['password']

        # fetch customer id
        cursor.execute('select customer_id from customers where password = %s and register_number = %s', (password,register_number))
        result = cursor.fetchone()

        if result:
            customer_id = result[0]
            session['customer_id'] = customer_id

            # if admin is logged in
            if session.get('customer_id') == 5:
                return redirect(url_for('add_items'))

            # redirect to home
            return redirect(url_for('home'))
        
        else:
            return 'invalid credential'

    
    return render_template('login.html')

@app.route('/home')
def home():
    return render_template('home.html')


@app.route('/products', methods = ['GET','POST'])
def products():

    # if not login
    if not session.get('customer_id'):
        return redirect(url_for('register'))

    if request.method == 'POST':
        # get user input
        user_input = request.form['user_input']

        if user_input == '' or user_input == 'all':
            # get all products data
            cursor.execute('select * from products')
        
        else:
            # filter data
            cursor.execute('SELECT * FROM products WHERE category = %s OR product_name = %s',(user_input,user_input))


    else:
        # get all products data
        cursor.execute('select * from products')

    data = cursor.fetchall()


    return render_template('products.html', data = data)



@app.route('/cart')
def cart():
    customer_id = session.get('customer_id')

    if not customer_id:
        return redirect(url_for('register'))

    # get customer details 
    cursor.execute('select * from customers where customer_id = %s', (customer_id,))
    customer_data = cursor.fetchone()

    # product purchased by customer
    cursor.execute('''
        select 
            p.product_name,
            p.price,
	        o.quantity,
            (o.quantity * p.price) as total_price,
            o.order_id
        from products p
        join orders o
	        on p.product_id = o.product_id
        where o.customer_id = %s''',
    (customer_id,))

    order_data = cursor.fetchall()
    
    return render_template('cart.html', customer_data = customer_data, order_data = order_data)

@app.route('/add_to_cart', methods = ['GET', 'POST'])
def add_to_cart():
    if request.method == 'POST':

        # get customer, product id and quantity
        customer_id = session.get('customer_id')
        product_id = request.form['product_id']
        quantity = request.form['quantity']

        # get current time
        date = datetime.now() 

        # save to the db
        cursor.execute('insert into orders(customer_id, product_id, quantity, order_date) values(%s,%s,%s,%s)', (customer_id, product_id, quantity, date))
        db.commit()

        return redirect(url_for('success_to_cart'))
    
    return render_template('error.html')

@app.route('/remove_order/<int:order_id>')
def remove_order(order_id):

    print(order_id)
    customer_id = session.get('customer_id')

    # check user login or not 
    if not customer_id:
        return redirect(url_for('register'))
    
    # remove the order
    cursor.execute('delete from orders where order_id = %s', (order_id,))
    db.commit()

    return redirect(url_for('cart'))

@app.route('/success')
def success_to_cart():
    return render_template('success_to_cart.html')


@app.route('/buy')
def buy():
    customer_id = session.get('customer_id')

    # if not log in
    if not customer_id:
        return redirect(url_for('register'))
    
    cursor.execute('''
        select 
            sum(o.quantity * p.price) as total_sum
        from products p
        join orders o
            on p.product_id = o.product_id
        where o.customer_id = %s
    ''', (customer_id,))

    total_price = cursor.fetchone()
    

    return render_template('/buy.html', total_price = total_price)

@app.route('/log_out')
def log_out():

    # log out from the session
    session.clear()

    return redirect(url_for('home'))



# create route for admin
@app.route('/add_items', methods = ['GET', 'POST'])
def add_items():
    customer_id = session.get('customer_id')

    if not customer_id:
        return redirect(url_for('register'))

    # get the admin details
    if request.method == 'POST':
        product_name = request.form['product_name']
        quantity = request.form['quantity']
        price = request.form['price']
        category = request.form['category']

        cursor.execute('insert into products(product_name, quantity, price, category) values(%s, %s, %s, %s)', (product_name,quantity,price,category))
        db.commit()

        return redirect(url_for('products'))
    
    return render_template('add_items.html')

@app.route('/edit_product/<int:product_id>', methods = ['GET','POST'])
def edit_product(product_id):
    if session.get('customer_id') == 5:
        cursor.execute('select * from products where product_id = %s', (product_id,))
        product_data = cursor.fetchone()

        if request.method == 'POST':
            product_name = request.form['product_name']
            quantity = request.form['quantity']
            price = request.form['price']
            category = request.form['category']

            cursor.execute('''
                update products
                set
                    product_name = %s,
                    quantity = %s,
                    price = %s,
                    category = %s
                where product_id = %s
            ''', (product_name,quantity,price,category,product_id))

            db.commit()

            return redirect(url_for('products'))
        
        return render_template('edit_product.html', product_data = product_data)
    
    else:
        return '<h2>the link you entered is invalid</h2>'


# run the app
if __name__ == '__main__':
    app.run(debug=True)
