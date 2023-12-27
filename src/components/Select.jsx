import React, { useId } from "react";

const Select = ({ options, label, className, ...props }, ref) => {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="inline-block mb-1 pl-1 ">
          {label}
        </label>
      )}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`
      px-3 py-2 rounded-lg bg-white text-slate-700 outline-none focus:bg-gray-100 duration-200 border border-gray-300 w-full ${className}
      `}
      >
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default React.forwardRef(Select);
