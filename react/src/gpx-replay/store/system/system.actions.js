
export function systemOpenMessage (params) {
  return (dispatch) => {
    dispatch(_reduce.systemOpenMessage(params));
  }
}

export function systemCancelMessage () {
  return (dispatch) => {
    dispatch(_reduce.systemOpenMessage());
  }
}

export function systemOpenConfirm (params) {
  return (dispatch) => {
    dispatch(_reduce.systemOpenConfirm(params));
  }
}

export function systemCancelConfirm () {
  return (dispatch) => {
    dispatch(_reduce.systemCancelConfirm());
  }
}

export function systemToggleDrawer (bool) {
  return (dispatch) => {
    dispatch(_reduce.systemToggleDrawer(bool));
  }
}

export function systemReset () {
  window.localStorage.clear();
  return (dispatch) => {
    dispatch(_reduce.systemReset());
  }
}

const _reduce = {

  systemOpenMessage: (params) => {
    return {
      type: 'SYSTEM/OPEN/MESSAGE',
      params
    };
  },

  systemCancelMessage: () => {
    return {
      type: 'SYSTEM/CANCEL/MESSAGE'
    };
  },

  systemOpenConfirm: (params) => {
    return {
      type: 'SYSTEM/OPEN/CONFIRM',
      params
    };
  },

  systemCancelConfirm: () => {
    return {
      type: 'SYSTEM/CANCEL/CONFIRM'
    };
  },

  systemToggleDrawer: (bool) => {
    return {
      type: 'SYSTEM/TOGGLE/DRAWER',
      bool
    };
  },

  systemReset: () => {
    return {
      type: 'SYSTEM/RESET'
    };
  },
}
