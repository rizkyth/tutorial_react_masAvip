export const Button = (props) => {
  const { type, children, variant } = props;
  return (
    <button type={type} className={`w-full h-10 px-6 font-semibold rounded-md ${variant} text-white`}>
      {children}
    </button>
  );
};
