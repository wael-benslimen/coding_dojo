select countries.name, languages.language, languages.percentage from languages
join countries on countries.id = languages.country_id
where language = "Slovene";

select countries.name, count(cities.id) from countries 
left join cities on countries.id = cities.country_id 
group by countries.id; 

select cities.name, cities.population, country_id from cities where country_id = 136;

select countries.name, languages.language, languages.percentage from countries
join languages on countries.id = languages.country_id
where languages.percentage > 89.0 order by languages.percentage desc;

select name, surface_area, population from countries where surface_area < 501 and population > 100000;


select name, government_form, capital, life_expectancy from countries where government_form = 'Constitutional Monarchy' and capital > 200 and life_expectancy > 75.0;

select countries.name, cities.name, cities.district, cities.population from cities
join countries on countries.id = cities.country_id
where cities.district = 'Buenos Aires' and cities.population > 500000;

select countries.region, count(countries.id) as countries from countries group by region order by count(countries.id) desc;
