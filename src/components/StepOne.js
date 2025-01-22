import React from "react";
import PineconeLogo from "@/icons/PineconeLogo";
import { isStepOneValid } from "@/utils/stepOneValidation";
const StepOne = (props) => {
    const { handleNextStep, errors, formValue, handleError, setFormValue, clearError } = props;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValue((prev) => ({
            ...prev,
            [name]: value,
        }));
        clearError(name);
    };

    const handleFormNextStep = () => {
        const { isValid, errors } = isStepOneValid(formValue)

        if (isValid) {
            handleNextStep();
        }
        handleError(errors);
    };
    
    return (
        <div class="w-screen h-screen flex items-center justify-center bg-gray-100">
            <div class="w-[480px] h-[655px] rounded-lg p-8 bg-white flex flex-col justify-between">
                <div class="w-[416px] h-[385px]">
                    <div class="w-[416px] h-[129px] flex flex-col justify-between">
                        <PineconeLogo />
                        <p class="w-[416px] h-[31px] font-manrope text-[26px] font-semibold leading-[31.47px] tracking[-0.03em] decoration-skip-[ink]">Join Us! 😎</p>
                        <p class="w-[416px] h-[22px] text-gray-500 font-manrope text-[18px] font-normal leading-[21.78px]">Please provide all current information accurately.</p>
                    </div>
                    <div class="w-[416px] h-fit gap-3">
                        <div class="w-[426px] h-[68px] gap-2 flex flex-col">
                            <label class="font-manrope text-sm font-semibold leading-4 tracking-tight text-lef" >
                                Firstname <span class="text-red-500">*</span>
                            </label>
                            <input placeholder="Placeholder" name={"firstName"} class={`${errors.firstName.length > 0 ? "" : ""}, border rounded w-[416px] h-[44px] p-1 focus:border-blue-500`}
                                onChange={handleChange}
                            />
                            {errors.firstName.length > 0 && <p class="text-red-500" >{errors.firstName}</p>}
                        </div>
                        <div class=" w-[426px] h-[68px] gap-2 flex flex-col">
                            <label class="font-manrope text-sm font-semibold leading-4 tracking-tight text-lef">
                                Lastname <span class="text-red-500">*</span>
                            </label>
                            <input placeholder="Placeholder" name={"firstName"} class={`${errors.firstName.length > 0 ? "" : ""}, border rounded w-[416px] h-[44px] p-1 focus:border-blue-500`}
                                onChange={handleChange}
                            />
                            {errors.firstName.length > 0 && <p class="text-red-500" >{errors.firstName}</p>}
                        </div>
                        <div class="w-[416px] h-[68px] gap-2">
                            <label class="font-manrope text-sm font-semibold leading-4 tracking-tight text-lef" >
                                Username <span class="text-red-500">*</span>
                            </label>
                            <input placeholder="Placeholder" name={"firstName"} class={`${errors.firstName.length > 0 ? "" : ""}, border rounded w-[416px] h-[44px] p-1 focus:border-blue-500`}
                                onChange={handleChange}
                            />
                            {errors.firstName.length > 0 && <p class="text-red-500" >{errors.firstName}</p>}
                        </div>
                    </div>
                </div>
                <button class="w-[416px] h-[44px] bg-black  text-white rounded-lg " onClick={handleFormNextStep} > Continue 1/3 </button>
            </div>
        </div>
    )
};
export default StepOne;