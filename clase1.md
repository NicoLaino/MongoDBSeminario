Volver a **[Readme](https://github.com/NicoLaino/MongoDBSeminario/blob/main/readme.md)**

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