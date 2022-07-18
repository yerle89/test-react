import './App.css';
import { NavLink, Outlet } from 'react-router-dom';

const App = () => {
  return (
      <div className="App">
        <header className="header">
          <h1>Random List of Cats Facts</h1>
        </header>
        <div className="body">
          <nav className="nav">
            <button title={"home"}> <NavLink to="">Home</NavLink> </button>
            <button title={"about"}> <NavLink to="about">About Us</NavLink> </button>
          </nav>
          <main className="content">
            <Outlet />
          </main>
        </div>
      </div>
  );
};

export default App;
