import axios from 'axios';

const API_URI = 'https://file-sharing-api.vercel.app/';


export const uploadFile = async (data) => {
    try { 
        axios.defaults.withCredentials=true;
        const response = await axios.post(`${API_URI}/upload`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling the API ', error.message);
   
      }
      
}