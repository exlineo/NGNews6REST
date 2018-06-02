# NGNews6REST
Application REST Node/MongoDB pour le dépôt NGNews6  
## Procédure de mise en place  
1 - Installer Node, NPM, MongoDB et Mongoose  
2 - Créer une base de données Mongo : ngnewsrest  
3 - Gérer les idéntifiants si nécessaire (fichier server.js : mongoose.connect())  
## Méthodes CRUD disponibles  
Sur localhost:3000/news => post (créer), get  
Sur localhost:3000/news/id => get, put (update), delete
