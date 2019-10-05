
import { userEntityState } from './userEntityState';
export { userEntityState };

const userEntity = (state = {}, action) => {

  switch (action.type) {

    case 'USERENTITY/OPEN/MESSAGE':
      return {
        ...state,
        userEntityState: {
          ...state.userEntityState,
          updated: Date.now(),
          auth: {
            authed: true,
            params: action.params
          }
        }
      };

    case 'USERENTITY/RESET':
      return {
        userEntityState
      };

    default: {
      return state;
    }
  }
};

export default userEntity;
