import axios from 'axios';
//axios its service to make api request fetch datathe api's
const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
  try {
    const response = await axios.get(url);
    
     return response;
    //is not gonna be need it we gonna export 2 (app.js) so we just ask for reponse console.log(response);
  } catch (error)  {

  }
}