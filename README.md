README
Just pull down the repo and run at the command line with:

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
2. The Favorites is not yet working fully, it will show what I saved in the database. You can remove but not yet add. There is a small bug in teh GQL Typeing but I ran out of time to fully fix it. You can see the code structure that is there in the SingleGist.js file.
3. The CSS is non-existent, it looks horrible. Just want to apologize for that bt it said in the requirements not to worry about it and since I am out of time, I didn't.

Architecture Notes:

1. I used a GrapQL API server using express-graphql.
2. I also used request-graphql on the front end in the API CLient library (found in the gistsLibrary folder).
3. The database is a simple Firebase Firestore document database. I chose this for its simplicity for this particular project and the fact that this would not be particularly relational data.
4. I chose React for the UI due to the simple nature of the project and few page requirements. It allowed me to easily get and refresh data as needed.
