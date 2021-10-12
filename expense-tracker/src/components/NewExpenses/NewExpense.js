import React, { useState } from 'react';
//components
import NewExpenseForm from './NewExpenseForm';
//styles
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const showAddNewExpensesHandler = () => {
    setIsEditing(true);
  };
  const exitAddNewExpensesHandler = () => {
    setIsEditing(false);
  };

  // lifting state up from NewExpenseForm
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseFormData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddNewExpense(expenseFormData);
    setIsEditing(false);
  };

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={showAddNewExpensesHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <NewExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={exitAddNewExpensesHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
