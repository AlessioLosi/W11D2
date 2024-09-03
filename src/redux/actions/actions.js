export const ADD_TO_FAVOURITE='ADD_TO_FAVOURITE'
export const REMOVE_TO_FAVOURITE='REMOVE_TO_FAVOURITE'
export const GET_JOBS='GET_JOBS'

export const addToFavouriteAction = (data) => {
    return {
      type: ADD_TO_FAVOURITE,
      payload: data.company_name,
    }
  }

  export const removeToFavouriteAction = (i) => {
    return {
      type: REMOVE_TO_FAVOURITE,
      payload: i, 
    }
  }

  export const getJobsAction= () => {
    return (dispatch, getState) => {
      fetch('https://strive-benchmark.herokuapp.com/api/jobs?company=')
        .then((response) => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error('errore nel recupero dei lavori')
          }
        })
        .then((arrayOfJobs) => {
          dispatch({
            type: GET_JOBS,
            payload: arrayOfJobs,
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }