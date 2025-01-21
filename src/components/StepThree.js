import React from "react";


const StepThree = (props) => {
    const { handleNextStep, handleBackStep } = props;

    return(
        <div>
            <div>
                <p></p>
                <p></p>
                <button onClick={handleNextStep} >Next</button>
                <button onClick={handleBackStep} ></button>
            </div>
        </div>
    )
};

export default StepThree;