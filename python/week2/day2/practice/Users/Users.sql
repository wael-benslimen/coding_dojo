SELECT * FROM users;
insert into users(first_name, last_name, email) values ('wael', 'ben slimen', 'wbs@gmail.com'), ('bob', 'doe','bob@gmail.com'),('jane', 'doe', 'jane@gmail.com');
select * from users where email = 'wbs@gmail.com';
select * from users where ID = 3;
update users set last_name = 'pancakes' where id = 3;
delete from users where id = 3;
SELECT * FROM users order by first_name;
SELECT * FROM users order by first_name desc;
