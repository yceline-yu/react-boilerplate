// /*
//  * HomeReducer
//  *
//  * The reducer takes care of our data. Using actions, we can
//  * update our application state. To add a new action,
//  * add it to the switch statement in the reducer function
//  *
//  */

// import produce from 'immer';
// import {
//   LOAD_STRINGS_SUCCESS,
//   LOAD_STRINGS,
//   LOAD_STRINGS_ERROR,
// } from './constants';

// // The initial state of the App
// export const initialState = {
//   loading: false,
//   error: false,
//   strings: false,
// };

// /* eslint-disable default-case, no-param-reassign */
// const homeReducer = (state = initialState, action) =>
//   produce(state, draft => {
//     switch (action.type) {
//       case LOAD_STRINGS:
//         draft.loading = true;
//         draft.error = false;
//         draft.strings = false;
//         break;

//       case LOAD_STRINGS_SUCCESS:
//         draft.strings = action.strings;
//         draft.loading = false;
//         break;

//       case LOAD_STRINGS_ERROR:
//         draft.error = action.error;
//         draft.loading = false;
//         break;
//     }
//   });

// export default homeReducer;
