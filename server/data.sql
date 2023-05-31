CREATE DATABASE todoapp;

CREATE TABLE todos(
   id VARCHAR(255) PRIMARY KEY,
   user_email VARCHAR(255),
   title VARCHAR(30),
   progress INT,
   date VARCHAR(30)
);

CREATE TABLE users(
   email VARCHAR(255) PRIMARY KEY,
   hashed_password VARCHAR(255)
);

INSERT INTO todos (id, user_email, titel, progress, date) VALUES
('3', 'tharindu@gmail.com', 'Create backend part', 30, '2023-10-29');