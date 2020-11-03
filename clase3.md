Volver a **[Readme](https://github.com/NicoLaino/MongoDBSeminario/blob/main/readme.md)**

(___)

# Clase 3

1. Utilizar la misma base de datos de películas e insertar varias películas con distinto contenido.

```
db.movies.insert([
    {
        "title": "Naked Gun",
        "year": 1988,
        "rating": 5.0,
        "genre": "Comedy",
        "description": "Police Squad Lieutenant Frank Drebin, taking a vacation...",
        "actors": ["Leslie Nielse", "Priscilla Presley"],
        "country": "United States", 
        "income": 140000000,
        "duration": 85
    },
    {
        "title": "Nueve Reinas",
        "year": 2000,
        "rating": 3.5,
        "genre": "Crime",
        "description": "At a convenience store early in the morning, Juan...",
        "actors": ["Ricardo Darín", "Gastón Pauls"],
        "country": "Argentina", 
        "income": 12413888,
        "duration": 114
    },
    {
        "title": "The Truman Show",
        "year": 1998,
        "rating": 4.1,
        "genre": "Drama",
        "description": "Truman Burbank is the unsuspecting star of The Truman Show...",
        "actors": ["Jim Carrey", "Laura Linney", "Noah Emmerich", "Natascha McElhone", "Ed Harris"],
        "country": "United States", 
        "income": 264100000,
        "duration": 103
    },
    {
        "title": "The Cable Guy",
        "year": 1996,
        "rating": 3.9,
        "genre": "Black Comedy",
        "description": "Architect Steven Kovacs moves into an apartment after a failed marriage...",
        "actors": ["Jim Carrey", "Matthew Broderick"],
        "country": "United States", 
        "income": 102800000,
        "duration": 96
    },
    {
        "title": "Saving Private Ryan",
        "year": 1998,
        "rating": 4.0,
        "genre": "War",
        "description": "In the present day, an elderly man visits the Normandy Cemetery with his...",
        "actors": ["Tom Hanks", "Edward Burns", "Matt Damon", "Tom Sizemore"],
        "country": "United States", 
        "income": 482300000,
        "duration": 169
    },
    {
        "title": "Deadpool 2",
        "year": 2018,
        "rating": 3.0,
        "genre": "Superhero",
        "description": "After fighting organized crime as the wisecracking mercenary ...",
        "actors": ["Ryan Reynolds"],
        "country": "United States", 
        "income": 758800000,
        "duration": 119
    },
])
```

2. Listar todas las películas del año 2018.

```
db.movies.find(
    {year: 2018}
)
```

3. Listar las 10 primeras películas de Hollywood.

```
db.movies.find(
    {country: "United States"}
).limit(10)
```

4. Listar las 5 películas más taquilleras.

```
db.movies.find().limit(5).sort({income:-1})
```

5. Listar el 2do conjunto de 5 películas más taquilleras.

```
db.movies.find().skip(5).limit(5).sort({income:-1})
```

6. Repetir query 3 y 4 pero retornando sólo el título y genre.

```
db.movies.find(
    {country: "United States"},
    {title: 1, genre: 1, _id:0}
).limit(10)

db.movies.find(
    {},
    {title: 1, genre: 1, _id:0}
).limit(5).sort({income:-1})
```

7. Mostrar los distintos países que existen en la base de datos.

```
db.movies.distinct("country")
```