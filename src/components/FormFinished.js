import React from "react";
import PineconeLogo from "@/icons/PineconeLogo";

const FormFinished = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
            <div className="w-[480px] h-[193px] rounded-lg p-8 bg-white flex flex-col justify-between">
                <div className= "w-[416px] h-[385px]">
                    <div className="w-[416px] h-[129px] flex flex-col justify-between">
                        <PineconeLogo/>
                        <p className="w-[416px] h-[31px] font-inter text-[26px] font-semibold leading-[31.47px] tracking[-0.03em] decoration-skip-[ink]">You're All Set 🔥</p>
                        <p className="w-[416px] h-[22px] text-gray-500 font-inter text-[18px] font-normal leading-[21.78px]">We have received your submission. Thank you!</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FormFinished;