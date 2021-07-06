### Welcome to **[GreenBnB](https://green-bnb.herokuapp.com/welcome)**

![GreenBnB Welcome Page](./readme/welcome.gif)

**GreenBnB** is a clone of [Airbnb](https://airbnb.com/) with a focus on environmentally friendly, sustainable, and off the grid adventures.

# Technologies

## Front-End
- React
- Redux
- CSS

The site uses a Redux store to manage the front-end state along with React components. The top level reducers are Users and Spots, which contains reviews, bookings, and search. The site is styled in vanilla CSS with an emphasis on grid construction.

## Back-End
- Node.js
- Express.js
- PostgreSQL

The backend was built using a PostgreSQL database and an Express server. Its API routes follow RESTful convention and uses validation in both the database and server to maintain session-based security along with bcrypt to store and verify user credentials.

# Features
- Browse spots
- Search for spots by name or location
- Book spots
- Write and delete reviews on spots

The site attempts to clone the features and approach of Airbnb while calling attention to the plethora of environmentally-conscious options.

![GreenBnB Search](/readme/search.gif)

# Code Snippet and Functionality
```js
function Search({ searchTerm, setSearchTerm }) {
  const spots = useSelector(state => state.spots);

  const [newSpotsArr, setNewSpotsArr] = useState([]);

  useEffect(()=> {
    if (searchTerm !== ''){
        let temp = [];
        for(let key in spots) {
            if (isNaN(key)) break;
            let spot = spots[key];
            if (spot.title.includes(searchTerm) || spot.city.includes(searchTerm) || spot.state.includes(searchTerm)) {
                temp.push(spot);
            }
            setNewSpotsArr(temp);
        }
    } else {
        setNewSpotsArr([]);
    }
},[searchTerm, spots]);
```

# Setup Instructions

## To run this application:
1. Clone the repository
2. Run `npm install` in the root directory, as well as frontend and backend directories, to add the node dependencies
3. Create a .env file in the `backend` directory according to the example file
4. Create a user in `psql` with your specified credentials in the .env file
5. Run `npm run db:create`, `npm run db:migrate`, `npm run db:seed:all` in the `backend` directory to set up the database
6. Run `npm start` in both the `backend` and `frontend` directories then navigate to `localhost:5000`

# Future Developments
- [ ] Add host and user profiles
  - [ ] To view, edit, and delete bookings
  - [ ] To view, edit, and delete hosted spots
- [ ] Add edit and delete functionality to bookings
- [ ] Add more serendipity to rendering of spots
- [X] Add edit functionality to reviews
- [X] Add eco-features to spot descriptions
- [X] Google maps integration
