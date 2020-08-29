create database user1;
use user1;


create table userdemo
( 	id varchar(10) primary key,
	username varchar(10),
	email varchar(10)
);
show tables;
insert into userdemo values("1","anjali","anjali@");
insert into userdemo values("2","anjali","anjalis@");

select * from userdemo;