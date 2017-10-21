const updateUser = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return [
        ...state,
        {
          mail: '',
          position: '',
          city: '',
          relocate: '',
          salary: '',
          experience: {
              total: '',
              last: ''
          },
          work: {
              type: {
                  employment: false,
                  contractWork: false,
                  contractComission: false,
                  b2b: false,
              },
              place: {
                  stacionary: false,
                  remote: false
              },
          },
          paths: [],
          skills: [],
        }
      ]
    default:
      return state
  }
}

export default updateUser
