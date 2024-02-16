## To use redux in your project install the following packages:
 * "react-redux": "^9.1.0",
    "redux": "^5.0.1",
    "redux-saga": "^1.3.0"
"@reduxjs/toolkit": "^2.0.1",
* Inside your project's "src" folder create a folder "redux" 
create files action.js, reducer.js, rootReducer.js  and store.js
1: go to the root of your project eg app.js and import Provider from react-redux. Wrap your app with provider. 
2: got to store.js file, this will collect data from reducers and send it to react js application, inside this file do something like 
this : import {createStore} from 'redux'
const dummyReducer = ()=>{
    return 100;
}
const store = createStore(dummyReducer);
export default store;
3:  go back to root of project and define store inside the provider strore prop,
4: now action.js: it gets data from react and sends it to reducer. create plain action functions like : export const addToCart=(data) =>{
console.log("add item to cart ", data)
return {
    type: "ADD_TO_CART",
    data
}
}
and then import these fucntions wherever your button is in the app.
* in the same file  import useDispatch and do  const dispatch = useDispatch();
 onPress={()=>dispatch(addToCart(data))};
 * now we go to reducer file, it handles data from store, update data in store
 






 
 