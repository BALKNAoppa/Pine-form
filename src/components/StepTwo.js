import React from "react";
import PineconeLogo from "@/icons/PineconeLogo";
import { isStepTwoValid } from "@/utils/StepTwoValidation";
import FormInput from "./FormInput";

const StepTwo = (props) => {
  const {
    handleNextStep,
    handleBackStep,
    errors,
    formValue,
    handleError,
    setFormValue,
    clearError,
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
    const { isValid, errors } = isStepTwoValid(formValue);
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
              {" "}
              Join us 😎
            </p>
            <p className="w-[416px] h-[22px] text-gray-500 font-inter text-[18px] font-normal leading-[21.78px]">
              Please provide all current information accurately.
            </p>
          </div>
          <div className="mt-[18px]">
            <FormInput
              title={"Email"}
              name={"email"}
              handleChange={handleChange}
              errors={errors}
            />
            <FormInput
              title={"Phone number"}
              name={"phoneNumber"}
              type="number"
              handleChange={handleChange}
              errors={errors}
            />
            <FormInput
              title={"Password"}
              name={"password"}
              handleChange={handleChange}
              errors={errors}
              type="password"
            />
            <FormInput
              title={"Confirm Password"}
              name={"confirmPassword"}
              handleChange={handleChange}
              type="password"
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
            Continue 2/3 <span>&gt;</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default StepTwo;
