# Pet Weather App - Owl Labs Technical Assessment

A React application that leverages react, graphql to access an associated Postgres database and the ForecastIO API. `@apollo/react-hooks` provider the experience for communicating with the API. 8 hours alotted.

## See It Live

[Pet Weather](https://js-pet-weather.herokuapp.com/) on Heroku
[Pet Shelter API - Graphiql](http://js-petshelterapi.herokuapp.com/) on Heroku

## Primary Client Side Technologies Used

- React
- React Router
- Apollo
- React Hook Form
- Node Sass

## API and Server

- Node
- Express
- Knex
- GraphQL

## Next Steps

### Additional enhancements could include:

- More robust styling
- Additional validation for new pets i.e(latitude, longitude, and location validation)
- The ability to edit a pet
- Animation using [lottie](https://airbnb.io/lottie/#/) from AirBnb
- Metrics through Google Analytics - checking visit, bounce rates, and clicks

## Set Up

### Client

Clone the repo

Run `npm install` from the root directory

Run `npm start` and visit [localhost:3000](https://www.localhost:3000) in your browser

## API and Server

Clone the associated [back-end repo](https://github.com/jeremiahjstanley/pet-shelter-api)

Run `npm install` from the root directory
Provision Postgres database `$ psql CREATE DATABASE pet_shelter`
Run Migration `knex migrate:latest`
Seed Database`knex seed:run`
Run `npm start` from the root directory

## Issues

For issues on the production version of this app [Pet Weather](https://js-pet-weather.herokuapp.com/), please create an [issue](https://github.com/jeremiahjstanley/pet-shelter-api/issues)
