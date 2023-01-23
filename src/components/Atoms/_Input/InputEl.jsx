import { forwardRef } from "react";

export const InputEl = forwardRef(
  ({ className, id, type, placeholder, min, maxLength, onChange }, ref) => {
    return (
      <input
        className={className}
        id={id}
        type={type}
        ref={ref}
        min={min}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChange}
      />
    );
  }
);
