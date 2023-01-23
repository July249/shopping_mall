import { forwardRef } from "react";

export const InputEl = forwardRef(
  ({ className, id, type, placeholder, maxLength, onChange }, ref) => {
    return (
      <input
        className={className}
        id={id}
        type={type}
        ref={ref}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChange}
      />
    );
  }
);
