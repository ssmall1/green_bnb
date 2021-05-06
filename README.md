### Welcome to **[GreenBnB](https://green-bnb.herokuapp.com/welcome)**

![GreenBnB Homepage]

**GreenBnB** is a clone of [Airbnb](https://airbnb.com/) with a focus on environmentally friendly, sustainable, and off the grid adventures.

# Technologies

## Front-End
- React
- Redux
- CSS

## Back-End
- Node.js
- Express.js
- PostgreSQL

# Features
- Browse spots
- Search for spots by name or location
- Book spots
- Write and delete reviews on spots

## Instructions

#To run this application:
1. Clone the repository
2. Run `npm install` in the root directory, as well as frontend and backend directories, to add the node dependencies
3. Create a .env file in the `backend` directory according to the example file
4. Create a user in `psql` with your specified credentials in the .env file
5. Run `npm run db:create`, `npm run db:migrate`, `npm run db:seed:all` in the `backend` directory to set up the database
6. Run `npm start` in both the `backend` and `frontend` directories then navigate to `localhost:3000`


## Future Developments
- [ ] Add host and user profiles
  - [ ] To view, edit, and delete bookings
  - [ ] To view, edit, and delete hosted spots
- [ ] Add edit and delete functionality to bookings
- [ ] Add more serendipity to rendering of spots
- [ ] Add edit functionality to reviews
- [ ] Add eco-features to spot descriptions
- [ ] Google maps integration
