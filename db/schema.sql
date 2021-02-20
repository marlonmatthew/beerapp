CREATE DATABASE beer_db;
USE beer_db;

CREATE TABLE beers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(250) NOT NULL,
    brewery varchar(250) not null,
	abv decimal (1, 2),
    flavor_notes varchar(250) not null,
    mood varchar (250) not null
	PRIMARY KEY (id)
);

