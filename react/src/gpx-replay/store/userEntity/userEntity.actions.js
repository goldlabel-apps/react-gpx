// userEntity

export function userEntityOpenMessage(params) {
  return (dispatch) => {
    dispatch(_reduce.systemOpenMessage(params));
  }
}

const _reduce = {

  userEntityOpenMessage: (params) => {
    return {
      type: 'USERENTITY/OPEN/MESSAGE',
      params
    };
  },

}
