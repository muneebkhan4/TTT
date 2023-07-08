import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents()
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have 'X' as the initial current player`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.currentPlayer).toEqual('X');
  });

  it(`should display 'Current Player: X' on the board`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const titleElement = compiled.querySelector('h2');
    expect(titleElement).not.toBeNull();
    expect(titleElement?.textContent).toContain('Current Player: X');
  });

  it(`should switch current player to 'O' after making a move`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.makeMove(0, 0); // X makes a move
    expect(app.currentPlayer).toEqual('O');
  });

  it(`should display 'Current Player: O' after making a move`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.makeMove(0, 0); // X makes a move
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const titleElement = compiled.querySelector('h2');
    expect(titleElement).not.toBeNull();
    expect(titleElement?.textContent).toContain('Current Player: O');
  });

  it(`should display 'Player  X  Wins!' when X wins the game`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // Simulate winning moves for X
    app.makeMove(0, 0); // X
    app.makeMove(1, 0); // O
    app.makeMove(0, 1); // X
    app.makeMove(1, 1); // O
    app.makeMove(0, 2); // X
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const titleElement = compiled.querySelector('h2');
    expect(titleElement).not.toBeNull();
    expect(titleElement?.textContent).toContain('Player  X  Wins!');
  });

  it(`should display "It's a Tie!" when the game ends in a tie`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // Simulate moves to end in a tie
    app.makeMove(0, 0); // X
    app.makeMove(0, 1); // O
    app.makeMove(0, 2); // X
    app.makeMove(1, 0); // O
    app.makeMove(1, 2); // X
    app.makeMove(1, 1); // O
    app.makeMove(2, 0); // X
    app.makeMove(2, 2); // O
    app.makeMove(2, 1); // X
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const titleElement = compiled.querySelector('h2');
    expect(titleElement).not.toBeNull();
    expect(titleElement?.textContent).toContain("It's a Tie!");
  });
});
