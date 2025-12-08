- toko_laptop_db=# create table laptop(
id serial primary key,name varchar(100) not null,
category varchar(100) not null,
price integer not null,
is_active boolean default true,
toko_laptop_db(# created_at timestamp default current_timestamp)
toko_laptop_db-# ;
CREATE TABLE
toko_laptop_db=# select * from laptop
toko_laptop_db-# ;
 id | name | category | price | is_active | created_at 
----+------+----------+-------+-----------+------------
(0 rows)

- toko_laptop_db=# INSERT INTO laptop (name, category, price) VALUES
('ASUS ROG Strix G15', 'laptop', 19500000),
('Acer Nitro 5', 'laptop', 8500000),
('Lenovo ThinkPad X1 Carbon', 'laptop', 23000000),
('HP Pavilion 14', 'laptop', 6500000),
('Dell XPS 13', 'laptop', 21000000),
('ASUS VivoBook 15', 'laptop', 5500000),
('Lenovo Legion 5', 'laptop', 18000000),
('MacBook Air M1', 'laptop', 20000000),
('HP Victus 15', 'laptop', 9000000),
('Logitech MX Master 3S Mouse', 'accessoris', 1200000),
('Rexus Legionare Headset HX20', 'accessoris', 450000),
('Keychron K2 Mechanical Keyboard', 'accessoris', 1200000),
('Cooler Master Laptop Cooling Pad', 'accessoris', 350000),
('WD My Passport External HDD 1TB', 'accessoris', 900000),
('Sandisk Ultra 128GB Flashdisk 128GB', 'accessoris', 150000),
('Logitech C920 HD Webcam', 'accessoris', 1100000),
('Anker USB-C Hub 7-in-1', 'accessoris', 650000),
('TP-Link AC1300 WiFi Adapter', 'accessoris', 300000),
('Ugreen Adjustable Laptop Stand', 'accessoris', 250000);
INSERT 0 19

- toko_laptop_db=# select * from laptop where price > 5000000;
 id |           name            | category |  price   | is_active |         created_at         
----+---------------------------+----------+----------+-----------+----------------------------
  1 | ASUS ROG Strix G15        | laptop   | 19500000 | t         | 2025-12-08 16:54:11.775284
  2 | Acer Nitro 5              | laptop   |  8500000 | t         | 2025-12-08 16:54:11.775284
  3 | Lenovo ThinkPad X1 Carbon | laptop   | 23000000 | t         | 2025-12-08 16:54:11.775284
  4 | HP Pavilion 14            | laptop   |  6500000 | t         | 2025-12-08 16:54:11.775284
  5 | Dell XPS 13               | laptop   | 21000000 | t         | 2025-12-08 16:54:11.775284
  6 | ASUS VivoBook 15          | laptop   |  5500000 | t         | 2025-12-08 16:54:11.775284
  7 | Lenovo Legion 5           | laptop   | 18000000 | t         | 2025-12-08 16:54:11.775284
  8 | MacBook Air M1            | laptop   | 20000000 | t         | 2025-12-08 16:54:11.775284
  9 | HP Victus 15              | laptop   |  9000000 | t         | 2025-12-08 16:54:11.775284
(9 rows)


- toko_laptop_db=# select * from laptop where category = 'Laptop';
 id |           name            | category |  price   | is_active |         created_at         
----+---------------------------+----------+----------+-----------+----------------------------
  1 | ASUS ROG Strix G15        | Laptop   | 19500000 | t         | 2025-12-08 14:34:27.099655
  2 | Acer Nitro 5              | Laptop   |  8500000 | t         | 2025-12-08 14:34:27.099655
  3 | Lenovo ThinkPad X1 Carbon | Laptop   | 23000000 | t         | 2025-12-08 14:34:27.099655
  4 | HP Pavilion 14            | Laptop   |  6500000 | t         | 2025-12-08 14:34:27.099655
  5 | Dell XPS 13               | Laptop   | 21000000 | t         | 2025-12-08 14:34:27.099655
  6 | ASUS VivoBook 15          | Laptop   |  5500000 | t         | 2025-12-08 14:34:27.099655
  7 | Lenovo Legion 5           | Laptop   | 18000000 | t         | 2025-12-08 14:34:27.099655
 10 | HP Victus 15              | Laptop   |  9000000 | t         | 2025-12-08 14:34:27.099655
  9 | MacBook Air M1            | Laptop   | 20000000 | t         | 2025-12-08 14:34:27.099655
(9 rows)

- toko_laptop_db=# select * from laptop where category = 'laptop';
 id |           name            | category |  price   | is_active |         created_at         
----+---------------------------+----------+----------+-----------+----------------------------
  1 | ASUS ROG Strix G15        | laptop   | 19500000 | t         | 2025-12-08 16:54:11.775284
  2 | Acer Nitro 5              | laptop   |  8500000 | t         | 2025-12-08 16:54:11.775284
  3 | Lenovo ThinkPad X1 Carbon | laptop   | 23000000 | t         | 2025-12-08 16:54:11.775284
  4 | HP Pavilion 14            | laptop   |  6500000 | t         | 2025-12-08 16:54:11.775284
  5 | Dell XPS 13               | laptop   | 21000000 | t         | 2025-12-08 16:54:11.775284
  6 | ASUS VivoBook 15          | laptop   |  5500000 | t         | 2025-12-08 16:54:11.775284
  7 | Lenovo Legion 5           | laptop   | 18000000 | t         | 2025-12-08 16:54:11.775284
  8 | MacBook Air M1            | laptop   | 20000000 | t         | 2025-12-08 16:54:11.775284
  9 | HP Victus 15              | laptop   |  9000000 | t         | 2025-12-08 16:54:11.775284
(9 rows)

- toko_laptop_db=# update laptop set price = 9999999 where id =9;
UPDATE 1
toko_laptop_db=# select * from lapto;
ERROR:  relation "lapto" does not exist
LINE 1: select * from lapto;
                      ^
toko_laptop_db=# select * from laptop;
 id |                name                 |  category  |  price   | is_active |         created_at         
----+-------------------------------------+------------+----------+-----------+----------------------------
  1 | ASUS ROG Strix G15                  | laptop     | 19500000 | t         | 2025-12-08 16:54:11.775284
  2 | Acer Nitro 5                        | laptop     |  8500000 | t         | 2025-12-08 16:54:11.775284
  3 | Lenovo ThinkPad X1 Carbon           | laptop     | 23000000 | t         | 2025-12-08 16:54:11.775284
  4 | HP Pavilion 14                      | laptop     |  6500000 | t         | 2025-12-08 16:54:11.775284
  5 | Dell XPS 13                         | laptop     | 21000000 | t         | 2025-12-08 16:54:11.775284
  6 | ASUS VivoBook 15                    | laptop     |  5500000 | t         | 2025-12-08 16:54:11.775284
  7 | Lenovo Legion 5                     | laptop     | 18000000 | t         | 2025-12-08 16:54:11.775284
  8 | MacBook Air M1                      | laptop     | 20000000 | t         | 2025-12-08 16:54:11.775284
 10 | Logitech MX Master 3S Mouse         | accessoris |  1200000 | t         | 2025-12-08 16:54:11.775284
 11 | Rexus Legionare Headset HX20        | accessoris |   450000 | t         | 2025-12-08 16:54:11.775284
 12 | Keychron K2 Mechanical Keyboard     | accessoris |  1200000 | t         | 2025-12-08 16:54:11.775284
 13 | Cooler Master Laptop Cooling Pad    | accessoris |   350000 | t         | 2025-12-08 16:54:11.775284
 14 | WD My Passport External HDD 1TB     | accessoris |   900000 | t         | 2025-12-08 16:54:11.775284
 15 | Sandisk Ultra 128GB Flashdisk 128GB | accessoris |   150000 | t         | 2025-12-08 16:54:11.775284
 16 | Logitech C920 HD Webcam             | accessoris |  1100000 | t         | 2025-12-08 16:54:11.775284
 17 | Anker USB-C Hub 7-in-1              | accessoris |   650000 | t         | 2025-12-08 16:54:11.775284
 18 | TP-Link AC1300 WiFi Adapter         | accessoris |   300000 | t         | 2025-12-08 16:54:11.775284
 19 | Ugreen Adjustable Laptop Stand      | accessoris |   250000 | t         | 2025-12-08 16:54:11.775284
  9 | HP Victus 15                        | laptop     |  9999999 | t         | 2025-12-08 16:54:11.775284
(19 rows)

- toko_laptop_db=# delete from laptop where id = 15;
DELETE 1
toko_laptop_db=# select * from laptop;
 id |               name               |  category  |  price   | is_active |         created_at         
----+----------------------------------+------------+----------+-----------+----------------------------
  1 | ASUS ROG Strix G15               | laptop     | 19500000 | t         | 2025-12-08 16:54:11.775284
  2 | Acer Nitro 5                     | laptop     |  8500000 | t         | 2025-12-08 16:54:11.775284
  3 | Lenovo ThinkPad X1 Carbon        | laptop     | 23000000 | t         | 2025-12-08 16:54:11.775284
  4 | HP Pavilion 14                   | laptop     |  6500000 | t         | 2025-12-08 16:54:11.775284
  5 | Dell XPS 13                      | laptop     | 21000000 | t         | 2025-12-08 16:54:11.775284
  6 | ASUS VivoBook 15                 | laptop     |  5500000 | t         | 2025-12-08 16:54:11.775284
  7 | Lenovo Legion 5                  | laptop     | 18000000 | t         | 2025-12-08 16:54:11.775284
  8 | MacBook Air M1                   | laptop     | 20000000 | t         | 2025-12-08 16:54:11.775284
 10 | Logitech MX Master 3S Mouse      | accessoris |  1200000 | t         | 2025-12-08 16:54:11.775284
 11 | Rexus Legionare Headset HX20     | accessoris |   450000 | t         | 2025-12-08 16:54:11.775284
 12 | Keychron K2 Mechanical Keyboard  | accessoris |  1200000 | t         | 2025-12-08 16:54:11.775284
 13 | Cooler Master Laptop Cooling Pad | accessoris |   350000 | t         | 2025-12-08 16:54:11.775284
 14 | WD My Passport External HDD 1TB  | accessoris |   900000 | t         | 2025-12-08 16:54:11.775284
 16 | Logitech C920 HD Webcam          | accessoris |  1100000 | t         | 2025-12-08 16:54:11.775284
 17 | Anker USB-C Hub 7-in-1           | accessoris |   650000 | t         | 2025-12-08 16:54:11.775284
 18 | TP-Link AC1300 WiFi Adapter      | accessoris |   300000 | t         | 2025-12-08 16:54:11.775284
 19 | Ugreen Adjustable Laptop Stand   | accessoris |   250000 | t         | 2025-12-08 16:54:11.775284
  9 | HP Victus 15                     | laptop     |  9999999 | t         | 2025-12-08 16:54:11.775284
(18 rows)

# PG
1.a 2.c 3.c 4.c 5.b 6.a 7.b 8.c 9.c 10.b