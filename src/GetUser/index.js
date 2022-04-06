import { Button } from '@mui/material'
import { useReducer } from 'react'
import {
  GET_USER_REQUEST,
  GET_USER,
  GET_USER_ERROR
} from './constants'
import reducer, { initState } from './reducer'
// console.log(reducer)

// const GET_USER_REQUEST = 'GET_USER_REQUEST'
// const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
// const GET_USER_ERROR = 'GET_USER_ERROR'

// const reducer = (state, action) => {
//   switch (action.type) {
//     case GET_USER_REQUEST:
//       return {
//         // tham so thu 1 la state hien tai
//         ...state,
//         loading: true
//       }
//     case GET_USER_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         data: action.data
//       }
//     case GET_USER_ERROR:
//       return {
//         ...state,
//         error: `Error ${action}`
//       }

//     default:
//       throw Error(`Invalid ${action}`)
//   }
// }

function ChildComponent() {
  //----------------------------------------------------------------//
  //Code JS

  const [state, dispatchUserAction] = useReducer(reducer, initState)
  const getUser = () => {
    // Chay doan code Loading truoc khi request
    dispatchUserAction({
      type: GET_USER_REQUEST
    })
    // fetch API request
    // set Timeout 3000ms for regconize code

    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(res => {
        dispatchUserAction({
          type: GET_USER,
          data: res.data
        })
        console.log(res.data)
      })
      .catch(err => {
        dispatchUserAction({
          type: GET_USER_ERROR
        })
      })
  }
  console.log('state', state)

  //----------------------------------------------------------------//
  // Render UI
  //----------------------------------------------------------------//
  return (
    <div className="container">
      {/* {state.loading ? (
        <p>Loading...</p>
      ) : (
        <p> {JSON.stringify(state.data)}</p>
      )} */}

      <p> {JSON.stringify(state.data)}</p>
      <Button onClick={getUser} variant="contained">
        GET USER
      </Button>
    </div>
  )
  //----------------------------------------------------------------//
}

export default ChildComponent
