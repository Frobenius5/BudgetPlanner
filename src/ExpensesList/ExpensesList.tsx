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
            <li><ExpenseComponent title={"Schokolade"} category={"Essen"} cost={1.99} /></li>
            <li><ExpenseComponent title={"Bothe"} category={"Freizeit"} description={"Beitrag für den Monat Januar"} cost={49.99}/></li>
        </ul>
    </div>);
}

export default ExpensesList