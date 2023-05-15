import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import PokemonList from './components/PokemonList';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/type/1">Normal</Link>
            </li>
            <li>
              <Link to="/type/2">Fighting</Link>
            </li>
            <li>
              <Link to="/type/3">Flying</Link>
            </li>
            <li>
              <Link to="/type/4">Poison</Link>
            </li>
            <li>
              <Link to="/type/5">Ground</Link>
            </li>
            <li>
              <Link to="/type/6">rock</Link>
            </li>
            <li>
              <Link to="/type/7">bug</Link>
            </li>
            <li>
              <Link to="/type/8">ghost</Link>
            </li>
            <li>
              <Link to="/type/9">steel</Link>
            </li>
            <li>
              <Link to="/type/10">fire</Link>
            </li>
            <li>
              <Link to="/type/11">water</Link>
            </li>
            <li>
              <Link to="/type/12">grass</Link>
            </li>
            <li>
              <Link to="/type/13">electric</Link>
            </li>
            <li>
              <Link to="/type/14">psychic</Link>
            </li>
            <li>
              <Link to="/type/15">ice</Link>
            </li>
            <li>
              <Link to="/type/16">dragon</Link>
            </li>
            <li>
              <Link to="/type/17">dark</Link>
            </li>
            <li>
              <Link to="/type/18">fairy</Link>
            </li>
            <li>
              <Link to="/type/10001">unknown</Link>
            </li>
            <li>
              <Link to="/type/10002">shadow</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/type/:typeId" element={<PokemonList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
