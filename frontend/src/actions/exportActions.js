import { EXPORT_CONTACTS_REQUEST, EXPORT_CONTACTS_SUCCESS, EXPORT_CONTACTS_FAILURE } from "../constants/exportConstants";
import axios from "axios";

export const exportContacts = () => {
    return (dispatch) => {
      dispatch({ type: EXPORT_CONTACTS_REQUEST });
      axios
        .get('https://us21.api.mailchimp.com/3.0/lists/', {
          auth: {
            username: 'Long Nguyen',
            password: '315c127d034437283813fd95ef030e53-us21'
          }
        })
        .then((response) => {
          dispatch({
            type: EXPORT_CONTACTS_SUCCESS,
            payload: response.data.members
          });
        })
        
        .catch((error) => {
          dispatch({
            type: EXPORT_CONTACTS_FAILURE,
            error: error?.response?.data?.title
          });
        });
    };
  };
  