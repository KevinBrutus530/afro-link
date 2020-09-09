DROP DATABASE IF EXISTS afro_link;
CREATE DATABASE afro_link;
\c afro_link;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS contacts;
DROP TABLE IF EXISTS addresses;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS types;
DROP TABLE IF EXISTS owners;
DROP TABLE IF EXISTS businesses;
CREATE TABLE businesses
(
  id serial PRIMARY KEY,
  biz_name varchar,
  hours varchar
);
CREATE TABLE owners
(
  id serial PRIMARY KEY,
  user_id VARCHAR,
  email VARCHAR,
  owner_id int REFERENCES businesses(id) ON DELETE CASCADE,
  owner_name varchar DEFAULT 'UNKNOWN',
  pictures varchar DEFAULT 'https://trello-attachments.s3.amazonaws.com/5ef8bcf3775f24613fe56eb7/5ef8bfd9edb57a1eb08bbe57/9306e0b1aa785ac7b6df7e1b16eff0f1/circleLogoYellow.png'
);
CREATE TABLE types
(
  id SERIAL PRIMARY KEY,
  type_name VARCHAR(100)
);
CREATE TABLE categories
(
  id SERIAL PRIMARY KEY,
  biz_id INT REFERENCES businesses(id) ON DELETE CASCADE,
  type_id INT REFERENCES types(id),
  CONSTRAINT UC_Categor UNIQUE (biz_id, type_id)
);
CREATE TABLE contacts
(
  id serial PRIMARY KEY,
  contact_id int REFERENCES businesses(id) ON DELETE CASCADE,
  phone varchar,
  email varchar,
  social_media varchar
);
CREATE TABLE addresses
(
  id serial PRIMARY KEY,
  address_id int REFERENCES businesses(id) ON DELETE CASCADE,
  street varchar,
  city varchar,
  state varchar,
  zip int,
  website varchar
);
CREATE TABLE reviews
(
  id serial PRIMARY KEY,
  dt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  review_id int REFERENCES businesses(id) ON DELETE CASCADE,
  name varchar(20),
  text varchar(500),
  ratings varchar(5),
  reply int DEFAULT NULL,
  reply_id int REFERENCES reviews(id),
  reply_text VARCHAR
);

