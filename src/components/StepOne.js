import React from "react";


const StepOne = (props) => {
    const { handleNextStep, handleBackStep } = props;

    return (
        <div class="w-screen h-screen flex items-center justify-center bg-gray-100">
            <div class="w-[480px] h-[655px] rounded-lg p-8 bg-white">
                <div class= "w-[416px] h-[129px]">
                    <div>
                        <img src="./img/Main 1.png" class="w-[60px] h-[60px]"/>
                        <p>Join Us!</p>
                        <img></img>
                    </div>
                    <p></p>
                </div>
                <button onClick={handleNextStep} >Next</button>
            </div>
        </div>
    )
};

export default StepOne;