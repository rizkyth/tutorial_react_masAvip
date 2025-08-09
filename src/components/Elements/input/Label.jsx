export const Label = (props) => {
  const { children, htmlFor } = props;
  return (
    <label
      htmlFor={htmlFor}
      className="block text-xl
     text-slate-700 font-bold mb-2"
    >
      {children}
    </label>
  );
};
