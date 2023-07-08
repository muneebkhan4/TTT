# Tic Tac Toe Game Documentation

## Table of Contents
1. [Introduction](#1-introduction)
2. [Features](#2-features)
3. [Installation](#3-installation)
4. [Usage](#4-usage)
5. [Components](#5-components)
    1. [Game Board Component](#51-game-board-component)
    2. [Cell Component](#52-cell-component)
6. [Services](#6-services)
    1. [Game Service](#61-game-service)
7. [Testing](#7-testing)
8. [Contributing](#8-contributing)
9. [License](#9-license)


## 1. Introduction
The Tic Tac Toe Game is a web-based application developed in Angular. It allows two players to play the classic game of Tic Tac Toe. The game features a responsive game board, player turn indication, win detection, and tie detection.

## 2. Features
- Two-player gameplay: Supports two players playing the game on the same device.
- Responsive game board: Displays a 3x3 grid where players can make their moves.
- Player turn indication: Shows the name of the current player on the screen.
- Win detection: Automatically detects when a player wins the game and displays the winner's name.
- Tie detection: Recognizes when the game ends in a tie and displays a tie message.

## 3. Installation
To run the Tic Tac Toe Game on your local machine, follow these steps:

1. Clone the project repository from GitHub:

   ```shell
   git clone https://github.com/your-username/tic-tac-toe.git
   ```

2. Navigate to the project directory:

   ```shell
   cd tic-tac-toe
   ```

3. Install the project dependencies:

   ```shell
   npm install
   ```

4. Start the development server:

   ```shell
   npm start
   ```

5. Open a web browser and visit `http://localhost:4200` to access the Tic Tac Toe Game.

## 4. Usage
1. The game will start with Player X as the first player. Each player can take turns by clicking on an empty cell in the game board.

2. The game will automatically detect a win or a tie and display the corresponding message on the screen.

3. To start a new game, refresh the page or click on a "Play Again" button after the game finish.

## 5. Components

### 5.1 Game Board Component
The Game Board Component (`game-board.component.ts`) is responsible for rendering the game board and handling user interactions. It contains an array of `Cell` components.

### 5.2 Cell Component
The Cell Component (`cell.component.ts`) represents a single cell in the game board. It receives input to determine its current state (empty, X, or O) and emits an event when a player makes a move.

## 6. Services

### 6.1 Game Service
The Game Service (`game.service.ts`) manages the game logic, including checking for wins and ties, updating the current player, and tracking the state of the game board. It communicates with the Game Board Component to handle user interactions.

## 7. Testing
The Tic Tac Toe Game includes unit tests to ensure the correctness of its components and services. The tests are written using the Jasmine testing framework and can be found in the `spec.ts` files associated with each component and service.

To run the tests, use the following command:

```shell
ng test
```

## 8. Contributing
Contributions to the Tic Tac Toe Game project are welcome. To contribute, follow these steps:

1. Fork the repository from GitHub.
2. Clone your forked repository to your local machine.
3. Create a new branch for your feature or bug fix.
4. Make the necessary changes and commit your work.
5. Push your changes to your forked repository.
6. Submit a pull request to the main repository.

## 9. License
The Tic Tac Toe Game project is licensed under the [MIT License](https://opensource.org/licenses/MIT). See the [LICENSE](./LICENSE) file for more details.

---

This documentation provides a comprehensive overview of the Tic Tac Toe Game project, including its features, installation instructions, usage guidelines, component and service descriptions, testing instructions, contribution guidelines, and license information. It aims to facilitate understanding, usage, and collaboration on the project.
