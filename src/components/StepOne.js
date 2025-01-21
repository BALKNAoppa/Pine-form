import React from "react";
import PineconeLogo from "@/icons/PineconeLogo";
const StepOne = (props) => {
    const { handleNextStep, handleBackStep } = props;

    return (
        <div class="w-screen h-screen flex items-center justify-center bg-gray-100">
            <div class="w-[480px] h-[655px] rounded-lg p-8 bg-white flex flex-col justify-between">
                <div class= "w-[416px] h-[385px]">
                    <div class="w-[416px] h-[129px] flex flex-col justify-between">
                        <PineconeLogo/>
                        <p class="w-[416px] h-[31px] font-inter text-[26px] font-semibold leading-[31.47px] tracking[-0.03em] decoration-skip-[ink]">Join Us! 😎</p>
                        <p class="w-[416px] h-[22px] text-gray-500 font-inter text-[18px] font-normal leading-[21.78px]">Please provide all current information accurately.</p>
                    </div>
                </div>
                <button class="w-[416px] h-[44px] bg-black  text-white rounded-lg " onClick={handleNextStep} >Next</button>
            </div>
        </div>
    )
};
export default StepOne;