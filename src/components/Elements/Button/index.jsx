export const Button = (props) => {
  const { type = "button", children, variant, onClick = () => {} } = props;
  return (
    <button type={type} className={`w-full h-10 px-6 font-semibold rounded-md ${variant} text-white`} onClick={() => onClick()}>
      {children}
    </button>
  );
};
