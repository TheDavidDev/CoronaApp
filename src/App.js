import React from 'react';
//(we import them much easier in one lane) import { render } from '@testing-library/react';
import { Kards, Graph, CountrySelector } from './components';
import styles from './App.module.css';


class App extends React.Component {
  render() {
    return (
      <div>
        <Kards />
        <CountrySelector />
        <Graph />  
    </div>
        )
    }
}
export default App;
