import React from 'react';
import logo from './logo.svg';
import './App.css';

const vinyls = [
  { id: 1, title: 'Linger-The Cranberries', theme: 'Indie', isAvailable: true },
  { id: 2, title: 'If I cant Have You-Yvonne Ellimen', theme: 'Disco', isAvailable: true },
  { id: 3, title: 'Slime Belief-Nba Young Boy', theme: 'Rap', isAvailable: false }
];

function ZineRack() {
  const listZines = vinyls.map(zine =>
    <li
      key={zine.id}
      style={{
        color: zine.isAvailable ? 'green' : 'red'
      }}
    >
      {zine.title}
    </li>
    );
    return(
      <ul>{listZines}</ul>
    )
}



const movie = {
  title: 'Lord of the Rings The Fellowship of the Ring',
  Director: 'Peter Jackson',
  published: '2001',
  image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ-hQp-geKRR9PGKRbf-QjY_HA6ha5ZnpQ8dVNbiSMqZi5Z6rue',
  width:'4',
  height: '78'
}; 
function Favmovie({ movie }) {
  return (
    <>
      <h2>{movie.title} ({movie.published})</h2>
      <p>{movie.author}</p>
      <img
        className="movieCover"
        src={movie.image}
        alt={movie.title + ' cover'}
        style={{
          width: movie.width,
          height: movie.height
        }}
      />
    </>
  );
}
function SlimeBelief() {
  const handleButtonClick = () => {
    window.location.href = 'https://soundcloud.com/nba-youngboy/slime-belief';
  };
  return (
    <div>
      <h3>Listen to Slime Belief Rap Song</h3>
      <button onClick={handleButtonClick}>Push Me For Slime Belief</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test in Text For Professor Siarto -- TRY THE LINK C:
        </p>
        <a
          className="App-link"
          href="https://siarto.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          FOR MI449
        </a>
        <p>======Component1 Slime Belief======</p>
        <SlimeBelief />
        <p>========Data & Component2========</p>
        <Favmovie movie={movie} />
        <p>========Conditional/Component3 & Data========</p>
        <ZineRack />

      </header>
    </div>
  );
}

export default App;
