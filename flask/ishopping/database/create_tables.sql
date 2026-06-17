create database shopping;


use shopping;

-- create databases
create table products(
	product_id int primary key auto_increment,
    product_name varchar(500) not null,
    quantity int not null,
    price decimal(10,2) not null,
    category varchar(255)
);

create table customers(
	customer_id int primary key auto_increment,
    first_name varchar(100) not null,
    last_name varchar(100) not null,
    date_of_birth date not null,
    register_number varchar(20) not null unique,
    email varchar(255) not null unique
);



create table orders(
	order_id int primary key auto_increment,
    customer_id int not null,
    product_id int not null,
    quantity int not null,
    order_date timestamp default current_timestamp,
    
    foreign key(customer_id)
		references customers(customer_id),
        
	foreign key(product_id)
		references products(product_id)
);

create table payments(
	payment_id int primary key auto_increment,
    order_id int not null unique,
    payment_receipt varchar(255) not null,
    amount decimal(10,2) not null,
    payment_method varchar(255) not null,
    payment_date timestamp default current_timestamp,
    
    foreign key(order_id)
		references orders(order_id)
);

create table login_credential(
	id int primary key auto_increment,
    customer_id int unique not null,
    password varchar(255) not null,
    
    foreign key(customer_id)
		references customers(customer_id)
);