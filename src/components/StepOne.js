import React from "react";
import PineconeLogo from "@/icons/PineconeLogo";
import { isStepOneValid } from "@/utils/stepOneValidation";
const StepOne = (props) => {
  const {
    handleNextStep,
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
    const { isValid, errors } = isStepOneValid(formValue);

    if (isValid) {
      handleNextStep();
    }
    handleError(errors);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[480px] h-[655px] rounded-lg p-8 bg-white flex flex-col justify-between">
        <div className="w-full mx-1">
          <div className="w-full flex flex-col justify-between mb-7">
            <PineconeLogo />
            <p className="w-full  font-manrope text-[26px] font-semibold leading-[31.47px] tracking[-0.03em] decoration-skip-[ink]">
              Join Us! 😎
            </p>
            <p className="w-full  text-gray-500 font-manrope text-[18px] font-normal leading-[21.78px]">
              Please provide all current information accurately.
            </p>
          </div>


          <div className="w-full flex flex-col justify-between my-2">

            <div className="w-full gap-2 flex flex-col mb-3">
              <label className="font-manrope text-sm font-semibold leading-4 tracking-tight text-lef">
                Firstname <span className="text-red-500">*</span>
              </label>
              <input
                placeholder="Placeholder"
                name={"firstName"}
                className={`${
                  errors.firstName.length > 0 ? "" : ""
                }, border rounded-lg w-full p-2 focus:border-blue-500`}
                onChange={handleChange}
              />
              {errors.firstName.length > 0 && (
                <p className="text-red-500">{errors.firstName}</p>
              )}
            </div>


            <div className=" w-full gap-2 flex flex-col mb-3">
              <label className="font-manrope text-sm font-semibold leading-4 tracking-tight text-lef">
                Lastname <span className="text-red-500">*</span>
              </label>
              <input
                placeholder="Placeholder"
                name={"firstName"}
                className={`${
                  errors.firstName.length > 0 ? "" : ""
                }, border rounded-lg w-full p-2 focus:border-blue-500`}
                onChange={handleChange}
              />
              {errors.firstName.length > 0 && (
                <p className="text-red-500">{errors.firstName}</p>
              )}
            </div>

            <div className="w-full gap-2 flex flex-col mb-3">
              <label className="font-manrope text-sm font-semibold leading-4 tracking-tight text-lef">
                Username <span className="text-red-500">*</span>
              </label>
              <input
                placeholder="Placeholder"
                name={"firstName"}
                className={`${
                  errors.firstName.length > 0 ? "" : ""
                }, border rounded-lg w-full p-2 focus:border-blue-500`}
                onChange={handleChange}
              />
              {errors.firstName.length > 0 && (
                <p className="text-red-500">{errors.firstName}</p>
              )}
            </div>
          </div>
        </div>
        <button
          className="w-full bg-black  text-white rounded-lg py-3 "
          onClick={handleFormNextStep}
        >
          {" "}
          Continue 1/3{" "}
        </button>
      </div>
    </div>
  );
};
export default StepOne;
