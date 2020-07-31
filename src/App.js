import React from 'react';
//(we import them much easier in one lane) import { render } from '@testing-library/react';
import { Kards, Graph, CountrySelector } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
//Use class when about to use async for multiples functions is easier
class App extends React.Component {
  state = {
   data: {},   
  }

    async componentDidMount() {
      const fetchData = await fetchData();
      
      this.setState({ data: fetchData});
    }    

    render() {
        const { data } = this.state;

    return (
      <div className={styles.container}>
        <Kards data={ data } />
        <CountrySelector data={ data } />
        <Graph data={ data } />  
     </div>
        )
    }
}
export default App;
