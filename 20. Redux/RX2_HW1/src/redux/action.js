export const ADD_INCOME = "add/income";
export const ADD_EXPENSE = "add/expense";

export const addIncome = (amount) => ({
  type: ADD_INCOME,
  payload: amount,
});
export const addExpense = (amount) => ({
  type: ADD_EXPENSE,
  payload: amount,
});
