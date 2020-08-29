create database user;
use user;


create table user_demo
( 	id varchar(10) primary key,
	username varchar(10),
	email varchar(10)
);
show tables;
insert into user_demo values("1","anjali","anjali@");
insert into user_demo values("2","anjali","anjalis@");

select * from user_demo;