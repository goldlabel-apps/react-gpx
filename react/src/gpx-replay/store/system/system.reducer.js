
import {systemState} from './systemState';
export {systemState};
const system = (state = { }, action) => {  
  
  switch(action.type) {

    case 'SYSTEM/OPEN/MESSAGE':
        return {
          ...state,
          systemState: {
            ...state.systemState,
            updated: Date.now(),
            systemMessage: {
              open: true,
              params: action.params
            }
          }
        };

      case 'SYSTEM/CANCEL/MESSAGE':
        return {
          ...state,
          systemState: {
            ...state.systemState,
            updated: Date.now(),
            confirm: {
              open: false,
              params: null
            }
          }
        };

    case 'SYSTEM/OPEN/CONFIRM':
        // console.log ('SYSTEM/OPEN/CONFIRM', action.params);
        return {
          ...state,
          systemState: {
            ...state.systemState,
            updated: Date.now(),
            confirm: {
              open: true,
              params: action.params
            }
          }
        };
    
    case 'SYSTEM/CANCEL/CONFIRM':
        // console.log ('SYSTEM/CANCEL/CONFIRM');
        return {
          ...state,
          systemState: {
            ...state.systemState,
            updated: Date.now(),
            confirm: {
              open: false,
              params: null
            }
          }
        };

    case 'SYSTEM/TOGGLE/DRAWER':
      return {
        ...state,
        systemState: {
          ...state.systemState,
          updated: Date.now(),
          drawer: {
            ...state.systemState.drawer,
            open: action.bool,
          }
        }
      };

    case 'SYSTEM/RESET':
      return {
        systemState
    };

    default: {
      return state;
    }
  }
};

export default system;
