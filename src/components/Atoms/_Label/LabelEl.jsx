export const LabelEl = ({ className, htmlFor, text }) => {
  return (
    <label className={className} htmlFor={htmlFor}>
      {text}
    </label>
  );
};
