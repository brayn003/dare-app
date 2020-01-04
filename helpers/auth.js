import {AsyncStorage} from 'react-native';

export const getToken = () => {
  try {
    return AsyncStorage.getItem('TOKEN');
  } catch (err) {
    return null;
  }
};

export const setToken = async token => {
  try {
    await AsyncStorage.setItem('TOKEN', token);
    return token;
  } catch (err) {
    return null;
  }
};
