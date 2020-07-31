import axios from 'axios';
//axios its service to make api request fetch datathe api's
const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
  try {
    const { data: { confirmed, recovered, deaths ,lastUpdate } } = await axios.get(url);
    // much easier way: data.confirmed,
    // not need it -> const newData = { confirmed, recovered, deaths, lastUpdate }
    
    return { confirmed, recovered, deaths, lastUpdate };
    //is not gonna be need it we gonna export 2 (app.js) so we just ask for reponse console.log(response);
  } catch (error)  {

  }
}

export const fetchDailyDate = async () => {
   try {
     const { data } = await axios.get('${url}/daily');

     console.log(data);
     
    } catch (error) {
      
   }
}