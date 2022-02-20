import React from "react";
import ExpenseComponent from "../ExpenseComponent/ExpenseComponent.tsx";

import './ExpensesList.css'

const ExpensesList: React.FC = (): JSX.Element => {
    return (
    <div className="component">
        <div className="list-header">
            <h1>Expenses</h1>
            <button className="btn-add" type="button">Add</button>
        </div>
        <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
            <li>d</li>
        </ul>
    </div>);
}

export default ExpensesList