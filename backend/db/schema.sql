DROP DATABASE IF EXISTS afro_link;
CREATE DATABASE afro_link;

\c afro_link;

DROP TABLE IF EXISTS businesses;
DROP TABLE IF EXISTS owners;
DROP TABLE IF EXISTS types;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS contacts;
DROP TABLE IF EXISTS addresses;
DROP TABLE IF EXISTS reviews;


CREATE TABLE businesses  
(
  id serial PRIMARY KEY,
  biz_name varchar,
  hours varchar
);

CREATE TABLE owners 
(
  id VARCHAR PRIMARY KEY,
  owner_id int REFERENCES businesses(id) ON DELETE CASCADE,
  owner_name VARCHAR DEFAULT 'UNKNOWN',
  owner_email VARCHAR DEFAULT NULL
);

CREATE TABLE types (
    id SERIAL PRIMARY KEY,
    type_name VARCHAR(100)
);

CREATE TABLE categories (
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
  review_id int REFERENCES businesses(id) ON DELETE CASCADE,
  text varchar,
  name varchar,
  ratings int
 );

