toko_laptop_db=# CREATE TABLE categories (
toko_laptop_db(#     id SERIAL PRIMARY KEY,
toko_laptop_db(#     name VARCHAR(100) NOT NULL
toko_laptop_db(# );
CREATE TABLE

toko_laptop_db=# CREATE TABLE items (
toko_laptop_db(#     id SERIAL PRIMARY KEY,
toko_laptop_db(#     name VARCHAR(100) NOT NULL,
toko_laptop_db(#     price INTEGER NOT NULL,
toko_laptop_db(#     is_active BOOLEAN DEFAULT true,
toko_laptop_db(#     created_at TIMESTAMP DEFAULT current_timestamp,
toko_laptop_db(#     category_id INT
toko_laptop_db(# );
CREATE TABLE

toko_laptop_db=# ALTER TABLE items
toko_laptop_db-# ADD CONSTRAINT fk_category
toko_laptop_db-# FOREIGN KEY (category_id)
toko_laptop_db-# REFERENCES categories(id)
toko_laptop_db-# ON UPDATE CASCADE
toko_laptop_db-# ON DELETE SET NULL;
ALTER TABLE

toko_laptop_db=# INSERT INTO categories (name) VALUES
toko_laptop_db-# ('Laptop'),
toko_laptop_db-# ('Aksesoris'),
toko_laptop_db-# ('Komponen');
INSERT 0 3

toko_laptop_db=# INSERT INTO items (name, price, category_id) VALUES
toko_laptop_db-# ('Acer Nitro 5', 14500000, 1),
toko_laptop_db-# ('Asus Vivobook 15', 10500000, 1),
toko_laptop_db-# ('Lenovo Legion 7', 25500000, 1),
toko_laptop_db-# ('Cooling Pad FrostWind', 250000, 2),
toko_laptop_db-# ('RGB Laptop Stand Aurora', 350000, 2),
toko_laptop_db-# ('Wireless Mouse SilentClick', 180000, 2),
toko_laptop_db-# ('SSD NVMe 1TB ThunderFlash', 1200000, 3),
toko_laptop_db-# ('RAM 16GB VelocityX', 800000, 3),
toko_laptop_db-# ('Thermal Paste IceFusion', 120000, 3),
toko_laptop_db-# ('Keyboard Mechanical BlueSwitch', 650000, 3);
INSERT 0 10

toko_laptop_db=# SELECT 
toko_laptop_db-#     items.id,
toko_laptop_db-#     items.name AS item_name,
toko_laptop_db-#     items.price,
toko_laptop_db-#     categories.name AS category_name
toko_laptop_db-# FROM items
toko_laptop_db-# JOIN categories
toko_laptop_db-# ON items.category_id = categories.id;
 id |           item_name            |  price   | category_name 
----+--------------------------------+----------+---------------
  1 | Acer Nitro 5                   | 14500000 | Laptop
  2 | Asus Vivobook 15               | 10500000 | Laptop
  3 | Lenovo Legion 7                | 25500000 | Laptop
  4 | Cooling Pad FrostWind          |   250000 | Aksesoris
  5 | RGB Laptop Stand Aurora        |   350000 | Aksesoris
  6 | Wireless Mouse SilentClick     |   180000 | Aksesoris
  7 | SSD NVMe 1TB ThunderFlash      |  1200000 | Komponen
  8 | RAM 16GB VelocityX             |   800000 | Komponen
  9 | Thermal Paste IceFusion        |   120000 | Komponen
 10 | Keyboard Mechanical BlueSwitch |   650000 | Komponen
(10 rows)

toko_laptop_db=# SELECT 
toko_laptop_db-#     categories.name AS category,
toko_laptop_db-#     COUNT(items.id) AS total_items
toko_laptop_db-# FROM categories
toko_laptop_db-# LEFT JOIN items
toko_laptop_db-# ON items.category_id = categories.id
toko_laptop_db-# GROUP BY categories.name;
 category  | total_items 
-----------+-------------
 Komponen  |           4
 Aksesoris |           3
 Laptop    |           3
(3 rows)

toko_laptop_db=# SELECT 
toko_laptop_db-#     categories.name AS category,
toko_laptop_db-#     MAX(items.price) AS highest_price
toko_laptop_db-# FROM categories
toko_laptop_db-# JOIN items
toko_laptop_db-# ON items.category_id = categories.id
toko_laptop_db-# GROUP BY categories.name
toko_laptop_db-# ORDER BY highest_price DESC
toko_laptop_db-# LIMIT 1;
 category | highest_price 
----------+---------------
 Laptop   |      25500000
(1 row)

1.b
2.b
3.c
4.c
5.a
6.c
7.c
8.b
9.c
10.c

