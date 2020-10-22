# Clase 1 

1. Instalar MongoDB en ambiente local.

2. Conectarse a MongoDB vía CLI.

    `mongod`

3. Crear una nueva base de datos llamada futbolfifa.
    
    `use nba`

4. Crear una nueva collection llamada players.
    
    `db.createCollection("players")`

5. Insertar 5 documentos en la collection players con datos básicos (nombre, apellido, posición, fecha de nacimiento, etc).
```
db.players.insert(
   [
   {firstname: "James", lastname: "Lebron", position: "Small Forward", allstars: "16"},
   {firstname: "Luka", lastname: "Doncic", position: "Guard", allstars: "1"},
   {firstname: "James", lastname: "Harden", position: "Off Guard", allstars: "8"},
   {firstname: "Giannis", lastname: "Antetokounmpo", position: "Power forward", allstars: "4"},
   {firstname: "Anthony", lastname: "Davis", position: "Power Forward", allstars: "7"}
   ]
)
```

6. Listar todos los documentos de la collection players.

    `db.players.find()`

7. Crear otras collections con documentos (ej. teams, games, etc).

```
db.createCollection("teams")

db.teams.insert(
   [
   {name: "Lakers", city: "Los Angeles"},
   {name: "Bucks", city: "Milwaukee"},
   {name: "Raptors", city: "Toronto"},
   {name: "Bulls", city: "Chicago"},
   {name: "Pistons", city: "Detroit"},
   ]
)
```

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