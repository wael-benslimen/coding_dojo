insert into users(first_name, last_name) values ('jane', 'amsden'),('emily', 'dixion'),('theodore', 'dostoevsky'),('william', 'shapiro'),('lao', 'Xiu');
insert into books(title, num_of_pages) values ('C sharp', 40),('Java', 20), ('Python', 50), ('PHP', 30), ('Ruby', 60);
update books set title = 'C#' where ID = 1; 
update users set first_name = 'Bill' where ID = 4;
insert into favorites(user_ID, book_ID) values(1, 1),(1, 2),(2, 1),(2, 2),(2, 3),(3, 1),(3, 2),(3, 3),(3, 4),(4, 1),(4, 2),(4, 3),(4, 4),(4, 5);
select * from users
join favorites on users.ID = favorites.user_ID
where book_ID = 3;
delete from favorites where user_ID = 2;
delete from users where ID = 2;
insert into favorites(user_ID, book_ID) values (5, 2);
select * from users
join favorites on users.ID = favorites.user_ID
where user_ID = 3;
select * from users
join favorites on users.ID = favorites.user_ID
where book_ID = 5;