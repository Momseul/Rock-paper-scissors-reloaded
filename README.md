# Rock Paper Scissors Project 🤠

A backend project implementing a Rock Paper Scissors game using Express and Mongoose.

## Features

-   Player vs CPU/AI gameplay
-   Multiple matches per game
-   Configurable number of matches to win (e.g., best of 3)
-   Scoreboard tracking

## Project Structure

src/
├── modules/
│ ├── game/
│ │ ├── controllers/
│ │ │ └── gameController.js
│ │ ├── services/
│ │ │ └── gameService.js
│ │ ├── repositories/
│ │ │ └── gameRepository.js
│ │ ├── domain/
│ │ │ ├── game.js
│ │ │ └── gameErrors.js
│ │ └── routes/
│ │ └── gameRoutes.js
│ ├── player/
│ │ ├── controllers/
│ │ │ └── playerController.js
│ │ ├── services/
│ │ │ └── playerService.js
│ │ ├── repositories/
│ │ │ └── playerRepository.js
│ │ ├── domain/
│ │ │ ├── player.js
│ │ │ └── playerErrors.js
│ │ └── routes/
│ │ └── playerRoutes.js
│ └── scoreboard/
│ ├── controllers/
│ │ └── scoreboardController.js
│ ├── services/
│ │ └── scoreboardService.js
│ ├── repositories/
│ │ └── scoreboardRepository.js
│ ├── domain/
│ │ ├── scoreboard.js
│ │ └── scoreboardErrors.js
│ └── routes/
│ └── scoreboardRoutes.js
├── shared/
│ ├── database/
│ │ ├── mongoose/
│ │ │ └── schema.js
│ │ └── database.js
│ ├── errors/
│ │ └── appError.js
│ └── logger/
│ └── logger.js
├── infrastructure/
│ ├── httpServer.js
│ └── dependencyInjection.js
├── tests/
│ ├── unit/
│ ├── integration/
│ └── ...
└── app.js

## Setup and Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up MongoDB and update the connection string in `src/shared/database/database.js`
4. Run the server: `npm start`

## API Endpoints

-   `POST /api/game/start`: Start a new game
-   `POST /api/game/play`: Make a move in the current game
-   `GET /api/game/:id`: Get game details
-   `GET /api/scoreboard`: Get the current scoreboard

## Technologies Used

-   Node.js
-   Express.js
-   MongoDB
-   Mongoose

## Testing

Run tests using: `npm test`
