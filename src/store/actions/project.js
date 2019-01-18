import firestore from '../../config/firebase';

export const createProject = project => {
  return (dispatch, getState) => {
    firestore.collection('projects').add({
      ...project,
      authorFirstName: 'Sava',
      authorLastName: 'Vuckovic',
      authorId: 12345,
      createdAt: new Date()
    })
    .then(() => {
      dispatch({ type: 'CREATE_PROJECT', project })
    })
    .catch(err => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err })
    })
  }
}