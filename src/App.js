import React from 'react';
import { Customizer } from 'office-ui-fabric-react';
import './App.css';
import { Container } from './containers'
import { FluentCustomizations } from '@uifabric/fluent-theme';
import { initializeIcons } from '@uifabric/icons';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  initializeIcons()
  return (
    <Router>
      <Customizer {...FluentCustomizations}>
        <div className="App">
          <Container />
        </div>
      </Customizer >
    </Router>
  );
}

export default App;
