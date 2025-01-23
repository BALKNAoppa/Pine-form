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
        <div className="w-full">
          <div className="w-full flex flex-col justify-between mb-7">
            <PineconeLogo className="mb-2" />
            <p className="w-full  font-inter text-[26px] font-semibold leading-[31.47px] tracking[-0.03em] decoration-skip-[ink] mb-2">
              Join Us! 😎
            </p>
            <p className="w-full text-gray-500 font-inter text-[18px] font-normal leading-[21.78px]">
              Please provide all current information accurately.
            </p>
          </div>

          <div className="w-full flex flex-col justify-between my-2">
            <div className="w-full gap-2 flex flex-col mb-3">
              <label className="font-inter text-sm font-semibold leading-4 tracking-tight text-lef text-gray-700">
                Firstname <span className="text-red-500">*</span>
              </label>
              <input
                placeholder="Your firstname"
                name={"firstName"}
                className={`${
                  errors.firstName.length > 0 ? "" : ""
                }, border border-gray-300 rounded-lg w-full p-2 focus:border-blue-500 focus:outline-none focus:border`}
                onChange={handleChange}
              />
              {errors.firstName.length > 0 && (
                <p className="text-red-500">{errors.firstName}</p>
              )}
            </div>

            <div className=" w-full gap-2 flex flex-col mb-3">
              <label className="font-inter text-sm font-semibold leading-4 tracking-tight text-lef text-gray-700">
                Lastname <span className="text-red-500">*</span>
              </label>
              <input
                placeholder="Your lastname"
                name={"lastName"}
                className={`${
                  errors.lastName.length > 0 ? "" : ""
                }, border border-gray-300 rounded-lg w-full p-2 focus:border-blue-500 focus:outline-none focus:border`}
                onChange={handleChange}
              />
              {errors.lastName.length > 0 && (
                <p className="text-red-500">{errors.lastName}</p>
              )}
            </div>

            <div className="w-full gap-2 flex flex-col mb-3">
              <label className="font-inter text-sm font-semibold leading-4 tracking-tight text-lef text-gray-700">
                Username <span className="text-red-500">*</span>
              </label>
              <input
                placeholder="Your username"
                name={"userName"}
                className={`${
                  errors.userName.length > 0 ? "" : ""
                }, border border-gray-300 rounded-lg w-full p-2 focus:border-blue-500 focus:outline-none focus:border`}
                onChange={handleChange}
              />
              {errors.userName.length > 0 && (
                <p className="text-red-500">{errors.userName}</p>
              )}
            </div>
          </div>
        </div>
        <button
          className="w-full bg-black font-medium text-white p-[10px_12px] rounded-md gap-1 "
          onClick={handleFormNextStep}
        >
          {" "}
          Continue 1/3 &nbsp; {" "}
          <span className="text-[16px] font-medium leading-[24px] tracking-[-0.01em] text-left">
            &gt;
          </span>{" "}
        </button>
      </div>
    </div>
  );
};
export default StepOne;
