import { firebase } from '../../config/firebase';

export const signIn = ({ email, password }) => {
  return dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' })
    })
    .catch(err => {
      dispatch({ type: 'LOGIN_ERROR', err })
    });
  }
}