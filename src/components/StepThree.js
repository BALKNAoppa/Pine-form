import React from "react";
import PineconeLogo from "@/icons/PineconeLogo";
import FormInput from "./FormInput";
import { isStepThreeValid } from "@/utils/StepThreeValidation";

const StepThree = (props) => {
  const {
    handleNextStep,
    handleBackStep,
    errors,
    handleError,
    clearError,
    setFormValue,
    formValue,
  } = props;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    clearError(name);
  };

  const handleFormNextStep = () => {
    const { isValid, errors } = isStepThreeValid(formValue);
    console.log(errors);
    if (isValid) {
      const localData = {
        ...formValue,
        currentStep: 2,
      };
      localStorage.setItem("formData", JSON.stringify(localData));

      handleNextStep();
    }
    handleError(errors);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[480px] h-[655px] rounded-lg p-8 bg-white flex flex-col justify-between">
        <div className="w-[416px] h-[385px]">
          <div className="w-[416px] h-[129px] flex flex-col justify-between">
            <PineconeLogo />
            <p className="w-[416px] h-[31px] font-inter text-[26px] font-semibold leading-[31.47px] tracking[-0.03em] decoration-skip-[ink]">
              Join Us 😎
            </p>
            <p className="w-[416px] h-[22px] text-gray-500 font-inter text-[18px] font-normal leading-[21.78px]">
              Please provide all current information accurately.
            </p>
          </div>
          <div className="mt-[18px]">
            <FormInput
              title={"Date and Birth"}
              type="date"
              name={"dateBirth"}
              handleChange={handleChange}
              errors={errors}
            />
            <FormInput
              title={"Email"}
              name={"email"}
              type="file"
              accept="image/*"
              handleChange={handleChange}
              errors={errors}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <button
            className="w-[128px] h-[44px] bg-white  text-black rounded-lg border border-[rgba(203,213,225,1)] "
            onClick={handleBackStep}
          >
            {" "}
            <span>&lt;</span> Back
          </button>
          <button
            className="w-[280px] h-[44px] bg-black  text-white rounded-lg "
            onClick={handleFormNextStep}
          >
            {" "}
            Continue 3/3 <span>&gt;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepThree;