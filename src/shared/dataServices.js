import * as axios from 'axios';
import { API } from './config';

// Check status, data type
const parseList = (response) => {
  if (response.status !== 200) throw Error(response.message);
  if (!response.data) return [];
  let list = response.data;
  if (typeof list !== 'object') {
    list = [];
  }
  return list;
};
// Call games api
const getGames = async () => {
  try {
    const response = await axios.get(API);
    const data = parseList(response);
    return data;
  } catch (error) {
    console.log(error);
  }
};
// Call jackpot api, in our example is a json file
const getJackpots = async () => {
  try {
    const response = await axios.get('jackpots.json');
    const data = parseList(response);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const dataService = {
  getGames,
  getJackpots
};

export default dataService;
