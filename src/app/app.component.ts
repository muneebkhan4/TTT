import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  board: string[][];
  currentPlayer: string;
  player1: string;
  player2: string;
  gameOver: boolean;
  winner: string;

  constructor() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    this.currentPlayer = 'X';
    this.player1 = 'X';
    this.player2 = 'O';
    this.gameOver = false;
    this.winner = '';
  }

  makeMove(row: number, col: number) {
    if (!this.gameOver && this.board[row][col] === '') {
      this.board[row][col] = this.currentPlayer;
      this.checkWinner(row, col);
      this.currentPlayer =
        this.currentPlayer === this.player1 ? this.player2 : this.player1;
    }
  }

  checkWinner(row: number, col: number) {
    const symbol = this.board[row][col];
    let won = true;

    // Check row
    for (let c = 0; c < 3; c++) {
      if (this.board[row][c] !== symbol) {
        won = false;
        break;
      }
    }

    if (won) {
      this.gameOver = true;
      this.winner = symbol;
      return;
    }

    won = true;

    // Check column
    for (let r = 0; r < 3; r++) {
      if (this.board[r][col] !== symbol) {
        won = false;
        break;
      }
    }

    if (won) {
      this.gameOver = true;
      this.winner = symbol;
      return;
    }

    // Check diagonal
    if (row === col) {
      won = true;
      for (let i = 0; i < 3; i++) {
        if (this.board[i][i] !== symbol) {
          won = false;
          break;
        }
      }
      if (won) {
        this.gameOver = true;
        this.winner = symbol;
        return;
      }
    }

    // Check reverse diagonal
    if (row + col === 2) {
      won = true;
      for (let i = 0; i < 3; i++) {
        if (this.board[i][2 - i] !== symbol) {
          won = false;
          break;
        }
      }
      if (won) {
        this.gameOver = true;
        this.winner = symbol;
        return;
      }
    }

    // Check tie
    let tie = true;
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (this.board[r][c] === '') {
          tie = false;
          break;
        }
      }
    }
    if (tie) {
      this.gameOver = true;
    }
  }

  resetGame() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    this.currentPlayer = this.player1;
    this.gameOver = false;
    this.winner = '';
  }
}
