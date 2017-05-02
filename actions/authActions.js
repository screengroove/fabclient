import axios from 'axios';
import firebase from 'firebase';
import {
  AsyncStorage
} from 'react-native';

export const authUser = () => async dispatch => {
  let token = await AsyncStorage.getItem('token');
  if (token !== null){
    await firebase.auth().signInWithCustomToken(token);
    dispatch({ type: 'IS_AUTHED', payload: token });
  } else {
    return false
  }

}
