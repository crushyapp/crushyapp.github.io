import axios from 'axios';

export const ROOT_URL = 'https://second-chance-matches.herokuapp.com/api';

export const ActionTypes = {
  AUTHENTICATE: 'AUTHENTICATE',
};

export function signin(code, callback) {
  console.log('Signing in user...');
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin`, { code }).then((response) => {
      console.log('sign in res', response);
      // localStorage.setItem('token', response.data.token);
      dispatch({ type: ActionTypes.AUTHENTICATE });

      if (callback) {
        callback();
      }
    }).catch((error) => {
      console.log(error, 'sign in failed');
      // dispatch(authError(`Sign In Failed: ${error}`));
    });
  };
}
