import axios from 'axios';
import firebase from 'firebase';
import {AsyncStorage} from 'react-native';

export const savePhoneNum = (phoneNum) => {
  return {
    type: 'PHONE_NUM',
    payload: phoneNum
  }
}

export const authUser = () => async dispatch => {
  try {
    let token = await AsyncStorage.getItem('token');
    let resp = await firebase.auth().signInWithCustomToken(token)
    dispatch({type: 'IS_AUTHED', payload: resp.uid})
  } catch(error) {
    console.error("authUser fail")
  }
}

export const authAndSetUid = (uid) =>  {
  return {
    type: 'SET_UID',
    payload: uid
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
