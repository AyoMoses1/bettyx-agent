import axios from 'axios';

export let publicAxios // eslint-disable-line
export let authAxios // eslint-disable-line

export const setupPublicAxios = (baseUrl) => {
  if(!baseUrl){
    throw new Error('Base Url is not found')
  }
  publicAxios = axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
    }
  });
};

export const setupAuthAxios = (baseUrl, authToken) => {
  if(!baseUrl){
    throw new Error('Base Url is not found')
  }
  
  authAxios = axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
  });
};

export default authAxios;
