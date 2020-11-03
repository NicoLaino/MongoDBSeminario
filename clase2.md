Volver a **[Readme](https://github.com/NicoLaino/MongoDBSeminario/blob/main/readme.md)**

# Clase 2

1. Crear una nueva base de datos de un sistema de streaming de video (ej. Netflix, Flow, Amazon Prime) que permita almacenar movies.

```
use netflix
db.createCollection("movies")
```

2. Para cada movie, se debería guardar información como título (String), year (Number), rating (Number, entre 1.0 y 5.0), genre (String), description (String), actors (Array<String>), country (String), income (Number), duration (Number).

3. Agregar películas usando insert(), insertOne() & insertMany().

```
db.movies.insert([
    {
        "title": "The Mask",
        "year": 1994,
        "rating": 4.9,
        "genre": "Comedy",
        "description": "Stanley Ipkiss (Jim Carrey), an insecure bank clerk...",
        "actors": ["Jim Carrey", "Cameron Diaz"],
        "country": "United States", 
        "income": 343900000,
        "duration": 101
    },
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
    }
])

db.movies.insertOne({
        "title": "Joker",
        "year": 2019,
        "rating": 4.4,
        "genre": "Psychological Thriller",
        "description": "In 1981, party clown and aspiring stand-up comedian Arthur Fleck...",
        "actors": ["Joaquin Phoenix", "Robert De Niro"],
        "country": "United States", 
        "income": 1074000000,
        "duration": 122
})

db.movies.insertMany([
    {
        "title": "The Longest Yard",
        "year": 2005,
        "rating": 3.9,
        "genre": "Comedy",
        "description": "Paul Crewe is a former NFL quarterback who was accused of...",
        "actors": ["Adam Sandler", "Chris Rock", "Burt Reynolds", "Terry Crews"],
        "country": "United States", 
        "income": 190300000,
        "duration": 113
    },
    {
        "title": "Split",
        "year": 2016,
        "rating": 4.4,
        "genre": "Psychological Thriller",
        "description": "Casey Cooker is a withdrawn teenager. After being invited...",
        "actors": ["James McAvoy", "Bruce Willis"],
        "country": "United States", 
        "income": 278500000,
        "duration": 117
    }
])
```

4. Actualizar películas agregando el field highlighted=true a aquellas con rating > 4.5.

```
db.movies.updateMany(
    {rating: {$gt: 4.5}},
    {$set: {highlighted: true}}
)
```

5. 	Actualizar películas cambiando el genre “drama” por “bored”.

```
db.movies.updateMany(
    {genre: "Drama"},
    {$set: {genre: "Bored"}}
)
```

6. 	Borrar todas las películas que tengan más de 30 años.

```
db.movies.deleteMany(
    {year: {$lt: 1990}}
)
```

7. 	Buscar todas las películas argentinas.

```
db.movies.find(
    {country: "Argentina"}
)
```

8.	Buscar todas las películas de acción con un buen rating (ej. > 4.0) que hayan salido los últimos 2 años.

```
db.movies.find(
    {genre: "Action", 
    rating: {$gt: 4.0}, 
    year: {$gt : 2018}
    }
)
```