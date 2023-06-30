// If the actions are too much the better approach is
// to separate the files basically like this:

// since they are not components,
// the file can be js and not jsx.

// - create new file - actions.js

//   - copy/paste all actions
//   - export/import actions

// - create new file - reducer.js

//   - copy/paste reducer
//   - import actions
//   - import data
//   - export/import reducer

// Must import the hook 'useReducer' from react.

import { useReducer } from "react"
import { data } from "../../../data"

// The best its set a variable with the action names:

const CLEAR_LIST = "CLEAR_LIST"
const RESET_LIST = "RESET_LIST"
const REMOVE_ITEM = "REMOVE_ITEM"

// state is gonna be the state BEFORE the update
// action basically is the action passed in the object parameter of dispatch.

const reducer = (state, action) => {
  /* return "banana" */ // Whatever its returned, its going to be equal to the state (the word in the parameters here).

  // So an actual approach would be:

  if (action.type === CLEAR_LIST) {
    // syntax:
    // return {initial value, end value}
    return { ...state, people: [] } // here is VERY IMPORTANT to destructure
    // the state object due it is usually containing
    // various values ("states") like its seen in
    // the variable "defaultState"

    // If there's some kind of error the value returned will be undefined.
  }

  // IMPORTANT: If there's a dispatch "making an action",
  // and the action it is not handled here, its gonna happen
  // a big fat error.

  /* return state */ // If any of the conditions apply, you can return a default state.
  //   But the most recommended is to throw error.

  throw new Error(`No matching "${action.type}" - action type.`)
}

// This will be the initial state BUT,
// here you can put multiple values i.e:

// const defaultState = {
//   users: {},
//   passwords: {},
//   isOpen: false,
//   isLoading: true,
//   page: 1,
// }

const defaultState = {
  people: data,
}

function reducerNotes() {
  const [state, dispatch] = useReducer(reducer, defaultState)

  function clearList() {
    // Dispatch MUST HAVE, an object
    // on its parameter, MUST SAY:
    // type: 'string'
    // usually the string is in UPPERCASE.

    dispatch({ type: CLEAR_LIST })
  }

  function removeItem(id) {
    // When you need to pass a parameter in the function,
    // you can do it like below, "payload" is a convention name
    // the value in payload MUST BE an object

    dispatch({ type: REMOVE_ITEM, payload: { id } })
  }

  return <div>reducerNotes</div>
}

export default reducerNotes
