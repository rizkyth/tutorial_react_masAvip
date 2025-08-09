import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-3.5">
      <h1 className="text-3xl font-bold text-slate-900">OOPS!</h1>
      <p className="text-2xl">sorry, an unexpected error has accured</p>
      <p className="text-lg font-semibold">{error.statusText || error.message}</p>
    </div>
  );
};
