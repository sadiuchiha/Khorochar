import { ADDED_EXPENSE, REMOVE_EXPENSE } from "../action-types/expenses";

const initialState = {
  expenseList: [],
};

export const expenseReducer = (state = initialState, action) => {
  if (action) {
    switch (action.type) {
      case ADDED_EXPENSE:
        return { ...state, expenseList: [...state.expenseList, action.data] };
      case REMOVE_EXPENSE:
        return {};

      default:
        return state;
    }
  }

  //return null;
};
