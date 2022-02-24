README
Just pull down the repo, change dir to client and run npm install, then change dir to sevrer and run npm install, and then go back to project directory and run at the command line with:

1. npm start

2. It should start a server on port 3010 and a react UI on port 3000.

A few comments on the Gist Fetching Repo:

I worked on the requirements in the following order:

1. GraphQL Server
2. API Client Library
3. React UI

From my own testing, the GQL server and API Client Library are fully functional.

The React UI works as follows:

1. Github user search functions and returns a list (in table format) of the user's public gists as returned by Github
2. The Favorites is not yet working fully, it will show what I saved in the database. You can change the favorite yes/no in the table but it won't be reflected in the database yet. There is a small bug in the GQL Typeing but I ran out of time to fully fix it. You can see the code structure that is there in the SingleGist.js file. Also, there are API methods to mark and unmark a gist in the database.
3. The CSS is basically non-existent, it looks horrible. I added some to the navbar but that's it. Just want to apologize for that because it said in the requirements not to worry about it and since I am defintely over time, I didn't.

Architecture Notes:

1. I used a GrapQL API server using express-graphql.
2. I also used graphql-request on the front end in the API CLient library (found in the gistsLibrary folder) as it is very simple. Apollo Client might be my choice for a larger project with more requirements and production as it provides a lot more useful features.
3. The database is a simple Firebase Firestore document database. I chose this for its simplicity for this particular project and the fact that this would not be particularly relational data.
4. I chose React for the UI due to the simple nature of the project and few page requirements. It allowed me to easily get and refresh data as needed.
