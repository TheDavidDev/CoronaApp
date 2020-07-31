import React, { useState, useEffect} from 'react';
import { NativeSelector, FormControl, NativeSelect } from '@material-ui/core';

import styles from './CountrySelector.module.css';

import { countries } from '../../api';

const CountrySelector = () => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
      const fetchCountries = async () => {
        setFetchedCountries(await fetchcountries());
      }

    FetchApiDaily();  
    }, [setFetchedCountries]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect>
                <option value="Worldwide">Worldwide</option>
                {fetchedCountries.map((country, i) => <option key={i}value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountrySelector;