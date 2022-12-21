import { EXPORT_CONTACTS_REQUEST, EXPORT_CONTACTS_SUCCESS, EXPORT_CONTACTS_FAILURE } from "../constants/exportConstants";

const initialState = {
    loading: false,
    contacts: [],
    error: null
  };
  
  const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case EXPORT_CONTACTS_REQUEST:
        return {
          ...state,
          loading: true
        };
      case EXPORT_CONTACTS_SUCCESS:
        return {
          ...state,
          loading: false,
          contacts: action.payload
        };
      case EXPORT_CONTACTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error
        };
      default:
        return state;
    }
  };
  
  export default contactReducer;
  