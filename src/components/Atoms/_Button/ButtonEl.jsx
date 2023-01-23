export const ButtonEl = ({ className, type, children }) => {
  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
};
