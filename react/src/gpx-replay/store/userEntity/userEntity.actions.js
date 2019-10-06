import Fingerprint2 from 'fingerprintjs2';
// userEntity

export function newFingerprint() {
  Fingerprint2.get(function (components) {
    console.log(components);
  })
  console.log('newFingerprint');
  return (dispatch) => {
    dispatch(_reduce.newFingerprint());
  }
}


const _reduce = {
  newFingerprint: (fingerprint) => {
    return {
      type: 'USERENTITY/NEW/FINGERPRINT',
      fingerprint
    };
  },

}
