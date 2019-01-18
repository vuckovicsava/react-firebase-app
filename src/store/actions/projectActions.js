import { firestore } from '../../config/firebase';

export const createProject = project => {
  return dispatch => {
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

export const getProjects = () => {
  return dispatch => {
    firestore.collection('projects').get()
    .then(querySnapshot => {
      const results = [];
      querySnapshot.forEach(doc => {
        results.push({
          id: doc.id,
          ...doc.data()
        })
      });
      dispatch({ type: 'GET_PROJECTS', projects: results });
    })
    .catch(err => {
      dispatch({ type: 'GET_PROJECTS_ERR', err })
    })
  }
}

export const getSingleProject = id => {
  return dispatch => {
    firestore.collection('projects').doc(id).get()
    .then(doc => {
      if (doc.exists) {
      dispatch({ type: 'GET_SINGLE_PROJECT', project: {
        id: doc.id,
        ...doc.data()
      }})
      } else {
        dispatch({ type: 'GET_SINGLE_PROJECT_ERR', err: 'No such document' })
      }
    })
    .catch(err => {
      dispatch({ type: 'GET_SINGLE_PROJECT_ERR', err })
    })
  }
}