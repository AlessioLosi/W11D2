import { GET_JOBS } from "../actions/actions"

const initialState = {
  favourite: {
    list: [],
  },
}

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        available: action.payload,
      }

    default:
      return state
  }
}

export default jobsReducer