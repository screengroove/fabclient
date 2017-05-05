import axios from 'axios';
import firebase from 'firebase';
import {AsyncStorage} from 'react-native';

export const authUser = () => async dispatch => {
  let token = await AsyncStorage.getItem('token');
  if (token !== null) {
    await firebase.auth().signInWithCustomToken(token)
    .then(resp => dispatch({type: 'IS_AUTHED', payload: resp.uid}))
    //.then(resp => console.log("FIREBASE AUTH", resp))
  } else {
    console.error("authUser Failed")
  }

}

export const setProfile = (uid, profile) => async dispatch => {
  console.log("SET PROFILE", uid ,profile);
  firebase.database().ref('users/' + uid + '/profile').set({
   first_name: profile.first_name,
   last_name: profile.last_name,
   street: profile.street,
   city: profile.city,
   zip: profile.zip,
 })
 .then(() => dispatch({type: 'SET_PROFILE', payload: profile}))
}
