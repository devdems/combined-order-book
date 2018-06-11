# Combined Order Book
Displays bid and ask order volumes from multiple exchanges at each price point, as well as combined volume and if bids or asks match up across exchanges.

#### [Deployed on Heroku](https://combined-order-book-cc.herokuapp.com/)

## Developing Locally
Development Node Version: v9.7.1
1) Clone repository and `cd` into it
```
../$ git clone https://github.com/elliothimmelfarb/combined-order-book.git
../$ cd combined-order-book
```
2) Start the server running with Nodemon
```
../combined-order-book$ npm run dev
```
3) `cd` into the client folder and start the Webpack development server
```
../combined-order-book$ cd client
../combined-order-book/client$ npm start
```

The client app will be accessible at `localhost:3000`.

Use `npm run test` in either directory to run tests at that level.

## Libraries Used
Server:
- Node
- Express
- [Axios](https://github.com/axios/axios)
- Mocha / Chai.expect
- [Supertest](https://github.com/visionmedia/supertest)
- Nodemon

Client:
- Create React App
- Redux / Thunk
- [Styled Components](https://www.styled-components.com/)
- [React Table](https://github.com/react-tools/react-table)
- [React Spinner Material](https://github.com/icarus-sullivan/react-spinner-material)
- Axios
- Jest / Chai.expect / redux-mock-store / axios-mock-adapter

## Structure
Back-End code lives at the root of the project:
- `index.js` is the project root and contains code for starting the Express server.
- `server.js` is where the Express server code lives.
- `routes/` contains Express server route files.
- `routes/api/` contains the files for hitting the external exchange APIs. One for each exchange.
- `routes/util/` contains utiliy functions for dealing with multiple exchanges in a modular fashion.

Front-End code (non-create-react-app) lives in the `client/src` directory:
- `client/src/` contains all the React and Redux root components and functions
- `client/src/store` contains Redux store initializers for dev and prod builds
- `client/src/_combinedOrderBook/` contains the component/container pairs at the top level
- `client/src/_combinedOrderBook/Components.styled.js` has a couple of reusable styled-components components
- `client/src/_combinedOrderBook/ducks/` contains all the Redux pieces for the combined order book application

I decided to structure my front-end code according to [this blog post](https://levelup.gitconnected.com/structure-your-react-redux-project-for-scalability-and-maintainability-618ad82e32b7). The Component/Container and keeping React and Redux code separated was a concept I was seeing in several projects I had looked at recently, including the [Drizzle and React-Auth boxes from the Truffle Framework](http://truffleframework.com/boxes/). It was fun trying out a new style and I have to say that I enjoyed this structure very much and will most likely use it in the future for my own projects.

## Adding New Exchanges
This application is set up so that adding new supported exchanges is easy. The client doesn't have any initial awareness of which exchanges are supported or not. The first thing that the client does when it loads is contact the server for a list of supported exchanges. The list of supported exchanges is retrieved from the keys of the API object exported from `routes/api/index.js`. Adding new exchanges only requires creating 1 new file and touching 3 others.

To add a new exchange:
1. Add a new API file in `routes/api/` that exports an object with a method called `getOrderBook` that takes the market as a parameter and requests the order book of that market from the new exchange.
2. Ensure that the new object is required and attached to the object exported from `routes/api/index.js`
3. Look at the format that is required for the market query param on the new exchange's API. The server will receive the market in this format: `BASE-TARGET` from the client. Whether the new exchange requires and different format or not, add a method to the object exported from `routes/util/translateMarketSyntax.js` that takes in the above format and exports the one required by the new exchange.
4. Look at what gets returned from the new exchange's API. We will need to standardize the shape of the order book so that we can combine it with the others later. Add a method to the object exported from `routes/util/standardizeResponseBooks.js` that transforms the book response to a single object that looks like this:
```
{asks: [{Quantity: x, Rate: y},...], bids: [{Quantity: x, Rate: y},...]}
```

If you followed the above steps correctly, next time you run the client, the new exchange will appear in the top toggle bar and it will be able to include that exchange's order book in the table. If we add too many more exchanges, though, we will definitely need to rethink how we are displaying the table as we may run out of room quickly.

## Roadmap for Improvement
- Better feedback for when nothing is returned due to chosing a market that doesn't work
- Spinner that provides reminder that table is live-updating
- Colors on table to make comparing exchanges easier
- Color in "Match" column instead of just "true" if there is a match
- More tests
