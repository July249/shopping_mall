export const InputEl = ({ className, id, type, placeholder, onChange }) => {
  return (
    <input
      className={className}
      id={id}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
