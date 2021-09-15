import React from 'react';
//components
import NewExpenseForm from './NewExpenseForm';
//styles
import './NewExpense.css';

const NewExpense = (props) => {
  // lifting state up from NewExpenseForm
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseFormData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddNewExpense(expenseFormData);
  };

  return (
    <div className='new-expense'>
      <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
