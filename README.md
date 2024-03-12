Film Diary

Practice project. Browser-side React app. Server-side ExpressJS app at https://github.com/adisposko/Film-Diary-Backend

Functionality: A diary of films watched, including watch date.
Can sort and filter the diary, and can mark favorite films.

Server-side links to limited database (hosted on MongoDB cloud) of 50 films to add from,
including films directed by Akira Kurosawa, Werner Herzog, Martin Scorsese...
Example: Search for films by director "kurosawa" or from the year of release "1962".
Leave search parameters empty to choose from all films in the database.

Initialized with existing diary entries to showcase functionality
without having to load the server-side app.

Initialize with terminal commands:

npm install

npm run build

serve -s build