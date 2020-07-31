import React from 'react';
//(we import them much easier in one lane) import { render } from '@testing-library/react';
import { Kards, Graph, CountrySelector } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
//Use class when about to use async for multiples functions is easier
class App extends React.Component {

    async componentDidMount() {
      const data = await fetchData();
      
      console.log(data);
    }    
    
    render() {
    return (
      <div className={styles.container}>
        <Kards />
        <CountrySelector />
        <Graph />  
     </div>
        )
    }
}
export default App;
