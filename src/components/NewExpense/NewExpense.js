import React from "react";

import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (submittedExpenseData) => {
        const expenseData = {
            ...submittedExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
        </div>
    );
};

export default NewExpense;