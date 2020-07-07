DROP DATABASE IF EXISTS afro_link;
CREATE DATABASE afro_link;

\c afro_link;

DROP TABLE IF EXISTS businesses;
DROP TABLE IF EXISTS owners;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS contacts;
DROP TABLE IF EXISTS addresses;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS types;


CREATE TABLE businesses  
(
  id serial PRIMARY KEY,
  biz_name varchar,
  hours varchar
);

CREATE TABLE owners 
(
  id serial PRIMARY KEY,
  owner_id int REFERENCES businesses(id),
  photo varchar,
  content varchar
);

CREATE TABLE types (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    bus_id INT REFERENCES businesses(id),
    type_id INT REFERENCES types(id),
    CONSTRAINT UC_Categor UNIQUE (bus_id, type_id)
);

CREATE TABLE contacts 
(
  id serial PRIMARY KEY,
  contact_id int REFERENCES businesses(id),
  phone varchar,
  email varchar,
  social_media varchar
);

CREATE TABLE addresses 
(
  id serial PRIMARY KEY,
  address_id int REFERENCES businesses(id),
  street varchar,
  city varchar,
  state varchar,
  zip int,
  website varchar
 );

CREATE TABLE reviews 
(
  id serial PRIMARY KEY,
  review_id int REFERENCES businesses(id),
  text varchar,
  name varchar,
  ratings int,
  zip int
 );

 INSERT INTO businesses(biz_name, hours)
VALUES('Brutus Biz','9am-5pm')
