import React from "react";


const StepTwo = (props) => {
    const { handleNextStep, handleBackStep } = props;

    return(
        <div>
            <div>
                <p></p>
                <p></p>
                <button onClick={handleNextStep} >Next</button>
                <button onClick={handleBackStep} >Back</button>
            </div>
        </div>
    )
};

export default StepTwo;