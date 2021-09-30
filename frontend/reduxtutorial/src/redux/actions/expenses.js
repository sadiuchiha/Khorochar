import { ADDED_EXPENSE, REMOVE_EXPENSE } from "../action-types/expenses";

export const addExpense = (data) => async (dispatch) => {
//   dispatch({
//     type: ADD_EXPENSE_REQUEST,
//     payload: { data },
//   });

  //Add Expense to the server

  //After completion Show
  dispatch({
    type: ADDED_EXPENSE,
    payload: { data },
  });
  //If Fail show error message

};

export const deleteExpense = (data) => async (dispatch) => {
    dispatch({
      type: REMOVE_EXPENSE,
      payload: { data },
    });
  };
