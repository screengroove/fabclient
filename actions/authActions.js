import axios from 'axios';
import firebase from 'firebase';
import {AsyncStorage} from 'react-native';

export const authUser = () => async dispatch => {
  let token = await AsyncStorage.getItem('token');
  if (token !== null) {
    await firebase.auth().signInWithCustomToken(token)
    .then(resp => console.log("RESP", resp))
    dispatch({type: 'IS_AUTHED', payload: token});
  } else {
    return false
  }

}

export const setProfile = (profile) => async dispatch => {
  console.log("SET PROFILE", profile);
}
