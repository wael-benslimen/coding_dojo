SELECT * FROM dojos_and_ninjas.ninjas;

insert into ninjas(first_name, last_name, age, dojos_ID) 
values('jane', 'doe', 20, 4), ('joe', 'doe', 21, 4), ('bob', 'doe', 19, 4);

insert into ninjas(first_name, last_name, age, dojos_ID) 
values('jack', 'doe', 20, 5), ('jasmin', 'doe', 21, 5), ('jake', 'doe', 19, 5);

insert into ninjas(first_name, last_name, age, dojos_ID) 
values('obama', 'doe', 20, 6), ('yassine', 'doe', 21, 6), ('kaka', 'doe', 19, 6);

SELECT * FROM ninjas where dojos_ID = 4;

SELECT * FROM ninjas where dojos_ID = 6;

SELECT * FROM dojos where ID = 6;

select * from dojos
join ninjas on dojos.ID = ninjas.dojos_ID
where ninjas.ID = 6;

select * from dojos
join ninjas on dojos.ID = ninjas.dojos_ID;