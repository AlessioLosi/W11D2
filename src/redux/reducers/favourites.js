import { ADD_TO_FAVOURITE } from "../actions/actions";
import { REMOVE_TO_FAVOURITE } from "../actions/actions";
const initialState ={
    favourite: {
      list: [],
    },
  }

const favouriteReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_FAVOURITE:
          return [...state, action.payload];
  
      case REMOVE_TO_FAVOURITE:
        return state.filter(item => item.company_name !== action.payload.company_name);
  
      default:
        return state;
    }
  };
  
  export default favouriteReducer;
