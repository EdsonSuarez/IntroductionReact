import React from 'react';
import './IngredientList.css'
function StepsList(props) {
    const stepsListItems = props.steps.map((step, index) => {
        return (
            // Return the desired HTML for each ingredient
            <li key={index} >
                {(index+1) +'. '+ step }
            </li>
        );
    });

    // return the HTML for the component
    // stepsListItems will be rendered as li elements
    return (
        <ul>
            { stepsListItems }
        </ul>
    );
}

export default StepsList;