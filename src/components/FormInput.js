import React from "react";

const FormInput = (props) => {
    const {title, name, handleChange, errors, type} = props;
    return (
        <div className="w-full gap-2 flex flex-col mb-3">
        <label className="font-inter text-sm font-semibold leading-4 tracking-tight text-lef text-gray-700">
          {title} <span className="text-red-500">*</span>
        </label>
        <input
          placeholder={title}
          name={name}
          type={type}
          className={`${
            errors[`${name}`].length > 0 ? "" : ""
          }, border border-gray-300 rounded-lg w-full p-2 focus:border-blue-500 focus:outline-none focus:border`}
          onChange={handleChange}
        />
        {errors[`${name}`].length > 0 && (
          <p className="text-red-500 m-[-5px]">{errors[`${name}`]}</p>
        )}
      </div>
    )
};
export default FormInput ;