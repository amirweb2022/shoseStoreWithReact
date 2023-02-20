import React from "react";
const CheckBoxInput = ({ formik, name, label }) => {
  return (
    <div className="mt-2 flex justify-start items-center w-full">
      <input
        type="checkbox"
        name={name}
        id={name}
        value={true}
        onChange={formik.handleChange}
        checked={formik.values[name]}
      />
      <label htmlFor={name} className="text-slate-600 text-sm mr-2">{label}</label>
      {formik.errors[name] && formik.touched[name] ? (
        <div className="text-red-400 text-sm">{formik.errors[name]}</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CheckBoxInput;