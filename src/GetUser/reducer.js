import {
  GET_USER_REQUEST,
  GET_USER,
  GET_USER_ERROR
} from './constants'

export const initState = {
  loading: false,
  data: [],
  error: null
}

//create Reduce
const reducer = (state, action) => {
  console.log('action', action)
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        // tham so thu 1 la state hien tai
        ...state,
        loading: true
      }
    case GET_USER:
      return {
        ...state,
        loading: false,
        data: action.data
      }
    case GET_USER_ERROR:
      return {
        ...state,
        error: `Error ${action}`
      }

    default:
      throw Error(`Invalid ${action}`)
  }
}
export default reducer
