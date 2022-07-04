import { FC } from 'react';
import logo from './logo.svg';
import './App.css';

// eslint-disable-next-line react/function-component-definition
const App: FC = () => (
  <div className="app">
    <header className="app-header">
      <img src={logo} className="app-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
        <br />
        Hello World!
      </p>
      <a
        className="app-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default App;
