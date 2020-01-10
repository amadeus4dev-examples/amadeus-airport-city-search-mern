# Airport & City Search Autocomplete example using the MERN stack

## What is this?

This demo application has been written for the blog post [Airport & City Search using the MERN Stack](https://developers.amadeus.com/blog/airport-autocomplete-app-with-the-mern-stack). The application implements airport and city name autocomplete box powered by the Amadeus [Airport & City Search API](https://developers.amadeus.com/self-service/category/air/api-doc/airport-and-city-search).

The solution itself will be comprised of a simple Node.js and Express backend that connects to the Amadeus API, and a small React app that talks to a Node/Express backend and uses it to obtain the airport name data from Amadeus.

## Running the code

1. Create a new `server/.env` file and add your `client_id` and `client_secret` credentials as follows:

```
CLIENT_ID=foo
CLIENT_SECRET=bar
```

2. Start the server:

```
cd server && npm start
```

3. Start the client:

```
cd client && npm start
```


