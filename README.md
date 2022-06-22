# Songbird ♫

Multiplayer guessing game with a musical twist built with an Express/SocketIO back-end and React front-end.

## Final Product

![User Form](doc/screenshots/light-userform.png?raw=true "User Form")
![Host Lobby](doc/screenshots/dark-host-lobby.png?raw=true "Host Lobby (Dark Mode)")
![Guest Lobby](doc/screenshots/dark-guest-lobby.png?raw=true "Guest Lobby (Dark Mode)")
![Play Game](doc/screenshots/light-play-game.png?raw=true "Play Game")
![End of Round](doc/screenshots/light-end-round.png?raw=true "End of Round")
![Game Over](doc/screenshots/dark-game-over.png?raw=true "Game Over (Dark Mode)")

## Getting Started (not done editing)

The main important bit is that the React project has `proxy` set to `localhost:8080` in the `package.json` file, and that the Express app listens to port 8080 in `server.js`. Take a look!

You can (and perhaps should) rename the directories `express-back-end` and `react-front-end` if you want-- The name doesn't matter.

You need **TWO** terminal windows/tabs for this (or some other plan for running two Node processes).

In one terminal, `cd` into `react-front-end`. Run `npm install` or `yarn` to install the dependencies. Then run `npm start` or `yarn start`, and go to `localhost:3000` in your browser.

In the other terminal, `cd` into `express-back-end`. Run `npm install` or `yarn` to install the dependencies, then `npm start` or `yarn start` to launch the server.

## Dependencies

Back-end:

- Axios ^0.27.2
- Body-parser ^1.18.3
- Cors ^2.8.5
- Dotenv ^16.0.1
- Express ^4.16.4
- Nodemon ^1.19.4
- Node ^14.x
- qs ^6.10.5
- Socket.io 2.3.0

Front-end:

- React ^17.0.0
- Typescript ^4.7.3
- Socket.io-client ^2.3.0
- Material UI ^5.8.3
- Emotion ^11.9.3

## Development Roadmap

- Optimize the game flow
- User tracking
- Statistics
- Global leaderboard
- Random player pairings
