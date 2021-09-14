import React from 'react';
//components
import NewExpenseForm from './NewExpenseForm';
//styles
import './NewExpense.css';

const NewExpense = () => {
  return (
    <div className='new-expense'>
      <NewExpenseForm />
    </div>
  );
};

export default NewExpense;
