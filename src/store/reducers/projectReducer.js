const initState = {
  projects: [
    {id: '1', title: 'Dummy Title 1', content: 'some dummy content'},
    {id: '2', title: 'Dummy Title 2', content: 'some dummy content'},
    {id: '3', title: 'Dummy Title 3', content: 'some dummy content'}
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_PROJECTS':
      return { projects: action.projects };
    case 'GET_PROJECTS_ERR':
      console.log('ERROR: ', action.err)
      return state;
    case 'CREATE_PROJECT':
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('ERROR: ', action.err)
      return state;
    default:
      return state;
  }
}

export default projectReducer;