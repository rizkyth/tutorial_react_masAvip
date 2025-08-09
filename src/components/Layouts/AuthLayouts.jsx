export const AuthLayout = (props) => {
  const { children, title } = props;
  return (
    <div className=" flex justify-center items-center min-h-screen">
      <div className="w-full max-w-xs">
        <div className="text-xl font-bold mb-2">
          <h1 className="text-2xl font-bold mb-2 text-blue-600">{title}</h1>
          <p className="font-medium text-slate-500 mb-8">Welcome, please enter your details</p>
          {children}
        </div>
      </div>
    </div>
  );
};
