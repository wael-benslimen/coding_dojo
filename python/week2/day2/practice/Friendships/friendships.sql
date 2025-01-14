insert into users(first_name, last_name) values ('amy', 'giver'), ('eli', 'byers'),('big', 'bird'),('kirmit', 'frog'),('marky', 'mark'),('edward', 'elrick');
insert into friendships(user_id, friend_id) values (1, 2),(1, 4),(1, 6),(2, 1),(2, 3),(2, 5),(3, 2),(3, 5),(4, 3),(5, 1),(5, 6),(6, 2),(6, 3);
select users.first_name, users.last_name, user2.first_name, user2.last_name from users
join friendships on friendships.user_id = users.id
left join users as user2 on friendships.user_id = users.id;