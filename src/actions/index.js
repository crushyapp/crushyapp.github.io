import axios from 'axios';
import { toast } from 'react-toastify';

// export const ROOT_URL = 'https://second-chance-matches.herokuapp.com/api';
export const ROOT_URL = 'http://localhost:9090/api';

export const ActionTypes = {
  AUTHENTICATE: 'AUTHENTICATE',
  SET_USER_DATA: 'SET_USER_DATA',
};

export const NotifTypes = {
  TEXT_MESSAGE: 'TEXT_MESSAGE',
  EMAIL: 'EMAIL',
};

export function signin(code, history, callback) {
  console.log('Signing in user...');
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin`, { code }).then((response) => {
      console.log('sign in res', response);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('id', response.data.id);

      dispatch({ type: ActionTypes.AUTHENTICATE, payload: response.data.id });

      history.push('/profile');

      if (callback) {
        callback();
      }
    }).catch((error) => {
      console.log(error, 'sign in failed');
      // dispatch(authError(`Sign In Failed: ${error}`));
    });
  };
}

export function fetchUserData(id, callback) {
  console.log('Fetching user data...');
  const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } };
  return (dispatch) => {
    axios.get(`${ROOT_URL}/user/${id}`, config).then((response) => {
      console.log('fetch user data res', response.data);

      dispatch({ type: ActionTypes.SET_USER_DATA, payload: response.data });

      // history.push('/profile');

      if (callback) {
        callback();
      }
    }).catch((error) => {
      console.log(error, 'fetchUserData failed');
      // dispatch(authError(`Sign In Failed: ${error}`));
    });
  };
}

export function addCrush(id, crush, callback) {
  console.log('Fetching user data...');
  const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } };
  return (dispatch) => {
    axios.put(`${ROOT_URL}/user/${id}`, { crush }, config).then((response) => {
      console.log('addCrush res', response.data);

      // TODO after rob sends back user data with response, dispatch SET_USER_DATA
      dispatch({ type: ActionTypes.SET_USER_DATA, payload: response.data });

      // history.push('/profile');

      // show option to send crush notif if crush doesn't have account yet
      if (callback) {
        callback(response.data.user_has_account);
      }
    }).catch((error) => {
      console.log(error, 'fetchUserData failed');
      // dispatch(authError(`Sign In Failed: ${error}`));
    });
  };
}

export function sendNotificationToCrush(/* email or phone number */ sendTo, notificationType, callback) {
  console.log('Sending notification...');
  const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } };
  switch (notificationType) {
    case NotifTypes.TEXT_MESSAGE: {
      return (dispatch) => {
        axios.post(`${ROOT_URL}/textcrush`, { number: sendTo }, config).then((response) => {
          console.log('sendNotificationToCrush res', response.data);


          // TODO wait for Rob to finish Twilio
          // maybe display success toast or something
          toast.success('Notification sent to ', sendTo);

          if (callback) {
            callback();
          }
        }).catch((error) => {
          console.log(error, 'fetchUserData failed');
          // dispatch(authError(`Sign In Failed: ${error}`));
        });
      };
    }
    case NotifTypes.EMAIL: {
      return (dispatch) => {
        axios.post(`${ROOT_URL}/emailcrush`, { email: sendTo }, config).then((response) => {
          console.log('sendNotificationToCrush res', response.data);

          if (response.data.message === 'Successfully emailed crush.') {
            console.log('here');
            // TODO figure out why toasts don't show up :(
            toast.success('Notification sent to ', sendTo);
          } else {
            toast.warning(`Could not send notification to ${sendTo} at this time`);
          }
          if (callback) {
            callback();
          }
        }).catch((error) => {
          console.log(error, 'fetchUserData failed');
          // dispatch(authError(`Sign In Failed: ${error}`));
        });
      };
    }
    default: {
      console.error('Invalid notification type: ', notificationType);
      return null;
    }
  }
}
