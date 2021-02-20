drop database if exists beer_db;
CREATE DATABASE beer_db;
USE beer_db;

CREATE TABLE beers
(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name varchar(250) NOT NULL,
    brewery varchar(250) not null,
    flavor varchar(250) not null,
	abv decimal (3, 1) null,
    class varchar (250) not null
);

select * from beers;