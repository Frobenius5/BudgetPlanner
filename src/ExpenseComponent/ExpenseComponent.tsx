import React from "react";
import './ExpenseComponent.css';

interface Props {
    title: string;
    category: string;
    description?: string;
    cost: number;
}

const ExpenseComponent: React.FC<Props> = (props: Props): JSX.Element => {
    return <div className="component">
        <div className="title-row">
            {props.title}
            <button className="btn-remove" type="button">remove</button>
            <button className="btn-edit" type="button">edit</button>
        </div>
        <div>{props.category}</div>
        <div>{props.description}</div>
        <div>{props.cost}</div>
    </div>;
}

export default ExpenseComponent;