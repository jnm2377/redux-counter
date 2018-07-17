function reducer(state, action) {
  if(action.type === 'INCREMENT') {
    return state + action.amount;
  } else if(action.type === 'DECREMENT') {
    return state - action.amount;
  } else {
    return state;
  }
}

function createStore(reducer) {
  //takes in reducer function as a parameter

  let state = 0;
  //sets state inside of createStore function (local)

  const getState = () => (state);
  //returns state to be able to access it outside of createStore

  const dispatch = (action) => {
    state = reducer(state, action);
    //takes action and state and sets new state using reducer function
  };

  return {
    getState,
    dispatch
    //returns 2 functions, 1) to access state, 2) to update state after action via reducer
  };
}
//=========================================================
// store.dispatch({type: 'INCREMENT', amount: 7});
//1. DISPATCH takes in an action as a parameter
//2. REDUCER is called within dispatch, and state is updated

const store = createStore(reducer);

const incrementAction = {
  type: 'INCREMENT',
  amount: 3
};

store.dispatch(incrementAction);
console.log(store.getState());
store.dispatch(incrementAction);
console.log(store.getState());

const decrementAction = {
  type: 'DECREMENT',
  amount: 4
};

store.dispatch(decrementAction);
console.log(store.getState());

//============================================================================
// const incrementAction = {
//   type: 'INCREMENT',
//   amount: 7
// };
//
// console.log(reducer(0, incrementAction));
// console.log(reducer(1, incrementAction));
// console.log(reducer(5, incrementAction));
//
// const unknownAction = {
//   type: 'UNKNOWN'
// };
//
// console.log(reducer(5, unknownAction));
// console.log(reducer(8, unknownAction));
//
// const decrementAction = {
//   type: 'DECREMENT',
//   amount: 11
// };
//
// console.log(reducer(10, decrementAction));
// console.log(reducer(9, decrementAction));
// console.log(reducer(5, decrementAction));
