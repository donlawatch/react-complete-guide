import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { v4 as uuidv4 } from 'uuid';

function NewExpense({onAddExpense}) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: uuidv4()
    }
    onAddExpense(expenseData);
    console.log(expenseData)
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
