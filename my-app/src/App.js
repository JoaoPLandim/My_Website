import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TicTacToe from "./Games/TicTacToe/TicTacToe";

const games = [
  { name: "Game 1", link: "#" },
  { name: "Game 2", link: "#" },
  { name: "Game 3", link: "#" },
  { name: "Game 4", link: "#" },
  { name: "Tic Tac Toe", link: "/tic-tac-toe" },
];


function Home() {
  return (
    <div className="App">
      <h1> My Games </h1>
      <div className="gameGrid">
        {games.map((game, idx) =>
          game.link.startsWith("/") ? (
            <Link className="gameBox" to={game.link} key={idx}>
              {game.name}
            </Link>
          ) : (
            <a className="gameBox" href={game.link} key={idx}>
              {game.name}
            </a>
          )
        )}
      </div>
    </div>
  );
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
      </Routes>
    </Router>
  );
}

export default App;
